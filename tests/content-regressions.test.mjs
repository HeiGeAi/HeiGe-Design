import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { parseColor, contrast, lum } from '../scripts/colors.mjs';
const root = path.resolve(import.meta.dirname || path.dirname(new URL(import.meta.url).pathname), '..');
test('batch validator rejects process/protocol failures and accepts valid findings', () => {
  for (const [script, exit, errors] of [
    [null, 1, 2],
    ['process.exit(7)', 1, 2],
    ['console.log("invalid")', 1, 1],
    ['console.log("{}")', 1, 1],
    ['console.log(JSON.stringify({findings: []}))', 0, 0],
    ['console.log(JSON.stringify({findings: [{severity:"warning",message:"check"}]}))', 0, 0],
    ['console.log(JSON.stringify({findings: []}));process.exit(3)', 1, 1],
  ]) {
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(),'design-lint-'));
    try {
      fs.mkdirSync(path.join(tmp,'systems','test'),{recursive:true});
      fs.writeFileSync(path.join(tmp,'systems','test','DESIGN.md'),'invalid');
      if(script !== null) {
        fs.mkdirSync(path.join(tmp,'node_modules','.bin'),{recursive:true});
        fs.writeFileSync(path.join(tmp,'node_modules','.bin','design.md'),'#!/usr/bin/env node\n'+script,{mode:0o755});
      }
      const result=spawnSync(process.execPath,[path.join(root,'scripts/validate.mjs'),tmp],{encoding:'utf8'});
      assert.equal(result.status,exit,result.stderr);
      const report=JSON.parse(fs.readFileSync(path.join(tmp,'report.json')));
      assert.equal(report.test.errors,errors);
    } finally { fs.rmSync(tmp,{recursive:true,force:true}); }
  }
});
test('hex RGB survives accent selection and selects contrasting text',()=>{
  const white=parseColor('#fff'), black=parseColor('#111111');
  for(const [css, expected] of [['rgb(0,0,180)','white'],['rgb(255,240,0)','black']]) {
    const c=parseColor(parseColor(css).hex);
    assert.ok(Number.isFinite(lum(c)));
    assert.equal(contrast(white,c)>=contrast(black,c)?'white':'black',expected);
  }
  assert.throws(()=>lum({hex:'#000000'}),/finite/);
  assert.equal(parseColor('rgb(x,0,0)'),null);
});
test('lint explicit paths target ingested file even with builtin slug collision',()=>{
  const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'design-path-'));
  try {
    fs.mkdirSync(path.join(tmp,'bin'),{recursive:true});
    fs.copyFileSync(path.join(root,'bin/heige-design'),path.join(tmp,'bin/heige-design'));
    fs.mkdirSync(path.join(tmp,'node_modules','.bin'),{recursive:true});
    fs.writeFileSync(path.join(tmp,'node_modules','.bin','design.md'),'#!/usr/bin/env node\nconsole.log(process.argv[3]);',{mode:0o755});
    for(const slug of ['fresh','forge-anvil']) {
      const f=path.join(tmp,'ingested',slug,'DESIGN.md');
      fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,'draft');
      fs.mkdirSync(path.join(tmp,'systems',slug),{recursive:true});
      fs.writeFileSync(path.join(tmp,'systems',slug,'DESIGN.md'),'builtin');
      const result=spawnSync(process.execPath,[path.join(tmp,'bin/heige-design'),'lint',f],{cwd:os.tmpdir(),encoding:'utf8'});
      assert.equal(result.status,0,result.stderr);assert.equal(result.stdout.trim(),f);
    }
    assert.match(fs.readFileSync(path.join(root,'scripts/ingest.mjs'),'utf8'),/heige-design lint \$\{JSON.stringify\(outFile\)\}/);
  }finally{fs.rmSync(tmp,{recursive:true,force:true});}
});

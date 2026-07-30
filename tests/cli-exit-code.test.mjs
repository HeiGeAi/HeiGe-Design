import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function fixture() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'heige-design-cli-'));
  fs.mkdirSync(path.join(root, 'bin'), { recursive: true });
  fs.mkdirSync(path.join(root, 'scripts'), { recursive: true });
  fs.mkdirSync(path.join(root, 'systems', 'one'), { recursive: true });
  fs.mkdirSync(path.join(root, 'systems', 'two'), { recursive: true });
  fs.copyFileSync(path.join(ROOT, 'bin', 'heige-design'), path.join(root, 'bin', 'heige-design'));
  fs.writeFileSync(path.join(root, 'manifest.json'), '[]\n');
  fs.writeFileSync(path.join(root, 'systems', 'one', 'DESIGN.md'), '# one\n');
  fs.writeFileSync(path.join(root, 'systems', 'two', 'DESIGN.md'), '# two\n');
  return root;
}

function run(root, ...args) {
  return spawnSync(process.execPath, ['bin/heige-design', ...args], {
    cwd: root,
    encoding: 'utf8',
  });
}

test('lint reports a missing design.md binary as a failure', () => {
  const root = fixture();
  try {
    const result = run(root, 'lint', 'one');
    assert.notEqual(result.status, 0);
    assert.match(result.stderr, /design\.md|ENOENT|not found/i);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

test('lint all and site propagate a failing Node helper status', () => {
  const root = fixture();
  try {
    fs.writeFileSync(path.join(root, 'scripts', 'validate.mjs'), 'process.exit(17);\n');
    for (const command of [['lint', 'all'], ['site']]) {
      const result = run(root, ...command);
      assert.equal(result.status, 17, `${command.join(' ')} must propagate status 17`);
    }
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

test('diff propagates the design.md child status', () => {
  const root = fixture();
  try {
    const binDir = path.join(root, 'node_modules', '.bin');
    fs.mkdirSync(binDir, { recursive: true });
    const binary = path.join(binDir, 'design.md');
    fs.writeFileSync(binary, '#!/usr/bin/env node\nprocess.exit(23);\n');
    fs.chmodSync(binary, 0o755);
    const result = run(root, 'diff', 'one', 'two');
    assert.equal(result.status, 23);
  } finally {
    fs.rmSync(root, { recursive: true, force: true });
  }
});

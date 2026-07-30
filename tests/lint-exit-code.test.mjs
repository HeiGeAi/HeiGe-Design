import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

test('lint all exits nonzero when any design system has an error', () => {
  const fixtureRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'heige-design-lint-'));

  try {
    fs.mkdirSync(path.join(fixtureRoot, 'bin'), { recursive: true });
    fs.mkdirSync(path.join(fixtureRoot, 'scripts'), { recursive: true });
    fs.mkdirSync(path.join(fixtureRoot, 'systems', 'broken'), { recursive: true });
    fs.copyFileSync(path.join(ROOT, 'bin', 'heige-design'), path.join(fixtureRoot, 'bin', 'heige-design'));
    fs.copyFileSync(path.join(ROOT, 'scripts', 'validate.mjs'), path.join(fixtureRoot, 'scripts', 'validate.mjs'));
    fs.symlinkSync(path.join(ROOT, 'node_modules'), path.join(fixtureRoot, 'node_modules'));
    fs.writeFileSync(
      path.join(fixtureRoot, 'systems', 'broken', 'DESIGN.md'),
      '---\nname: broken\ncolors:\n  primary: nope\n---\n',
    );

    for (const target of ['all', 'broken']) {
      const result = spawnSync(process.execPath, ['bin/heige-design', 'lint', target], {
        cwd: fixtureRoot,
        encoding: 'utf8',
      });

      if (target === 'all') assert.match(result.stdout, /有 error/);
      assert.notEqual(result.status, 0, `lint ${target} must fail when validation reports errors`);
    }
  } finally {
    fs.rmSync(fixtureRoot, { recursive: true, force: true });
  }
});

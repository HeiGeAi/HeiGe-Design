import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

test('all bundled design systems satisfy the schema without warnings', () => {
  const result = spawnSync(process.execPath, ['bin/heige-design', 'lint', 'all'], {
    cwd: ROOT,
    encoding: 'utf8',
  });
  assert.equal(result.status, 0, `${result.stdout}\n${result.stderr}`);

  const report = JSON.parse(fs.readFileSync(path.join(ROOT, 'report.json'), 'utf8'));
  const warned = Object.entries(report)
    .filter(([, value]) => value.warnings > 0)
    .map(([slug, value]) => `${slug}:${value.warnings}`);
  assert.deepEqual(warned, [], `schema warnings remain: ${warned.join(', ')}`);
});

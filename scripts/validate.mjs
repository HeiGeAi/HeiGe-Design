// 能力4 校验：全量跑官方 lint，出 report.json（供详情页徽章 + CLI 复用）。
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const ROOT = path.resolve(process.argv[2] || path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..'));
const SYS = path.join(ROOT, 'systems');
const BIN = path.join(ROOT, 'node_modules', '.bin', 'design.md');

const report = {};
let e0 = 0, w0 = 0;
for (const slug of fs.readdirSync(SYS).sort()) {
  const f = path.join(SYS, slug, 'DESIGN.md');
  if (!fs.existsSync(f)) continue;
  let findings = [];
  try {
    const out = execFileSync(BIN, ['lint', f], { encoding: 'utf8' });
    findings = (JSON.parse(out).findings) || [];
  } catch (err) {
    try { findings = (JSON.parse(err.stdout || '{}').findings) || []; } catch { findings = [{ severity: 'error', message: 'lint 执行失败' }]; }
  }
  const errors = findings.filter(x => x.severity === 'error').length;
  const warnings = findings.filter(x => x.severity === 'warning').length;
  report[slug] = { errors, warnings, findings };
  if (errors === 0) e0++;
  if (errors === 0 && warnings === 0) w0++;
}
fs.writeFileSync(path.join(ROOT, 'report.json'), JSON.stringify(report, null, 2));
const n = Object.keys(report).length;
console.log(`校验完成：${n} 套 | 0 error：${e0}/${n} | 完全干净(0e0w)：${w0}/${n}`);
const bad = Object.entries(report).filter(([, r]) => r.errors > 0).map(([s]) => s);
if (bad.length) console.log('有 error：', bad.join(', ')); else console.log('全部 0 error ✓');

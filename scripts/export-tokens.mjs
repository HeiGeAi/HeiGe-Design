// 能力1 导出引擎：为每套系统产出五层可执行资产 + agent 提示词。
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const yaml = require('js-yaml');

const ROOT = path.resolve(process.argv[2] || path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..'));
const SYS = path.join(ROOT, 'systems');
const BIN = path.join(ROOT, 'node_modules', '.bin', 'design.md');

const META = JSON.parse(fs.readFileSync(path.join(ROOT, 'manifest.json'), 'utf8'))
  .reduce((m, s) => (m[s.slug] = s, m), {});

function run(file, format) {
  return execFileSync(BIN, ['export', file, '--format', format], { encoding: 'utf8', maxBuffer: 8 << 20 });
}
function firstFont(typ, inc) {
  const k = Object.keys(typ || {}).find(k => inc.some(s => k.toLowerCase().includes(s)));
  return k ? (typ[k].fontFamily || '') : (Object.values(typ || {})[0]?.fontFamily || '');
}

let ok = 0, fail = [];
for (const slug of fs.readdirSync(SYS)) {
  const dir = path.join(SYS, slug);
  const dm = path.join(dir, 'DESIGN.md');
  if (!fs.existsSync(dm)) continue;
  const ex = path.join(dir, 'exports');
  fs.mkdirSync(ex, { recursive: true });
  try {
    const tw4 = run(dm, 'css-tailwind');
    const tw3 = run(dm, 'json-tailwind');
    const dtcg = run(dm, 'dtcg');
    fs.writeFileSync(path.join(ex, 'tailwind-v4.css'), tw4);
    fs.writeFileSync(path.join(ex, 'tailwind-v3.json'), tw3);
    fs.writeFileSync(path.join(ex, 'tokens.dtcg.json'), dtcg);
    // CSS Variables = tailwind v4 @theme 转 :root
    fs.writeFileSync(path.join(ex, 'variables.css'), tw4.replace(/@theme\s*\{/, ':root {'));

    // agent 提示词（可直接粘给 coding agent）
    const raw = fs.readFileSync(dm, 'utf8');
    const fm = yaml.load((raw.match(/^---\n([\s\S]*?)\n---/) || [,''])[1]) || {};
    const colors = fm.colors || {}, typ = fm.typography || {};
    const cn = META[slug]?.cn || slug, family = META[slug]?.family || '';
    const primary = colors.primary || META[slug]?.primary || '';
    const dispF = firstFont(typ, ['display', 'hero']).split(',')[0].replace(/["']/g, '').trim();
    const bodyF = firstFont(typ, ['body']).split(',')[0].replace(/["']/g, '').trim();
    const prompt = `# Agent 提示词 · ${cn}（${slug} · ${family}）

你是资深前端设计工程师。请严格基于 HeiGe-Design 的 \`${slug}\` 设定集，为我的【产品/页面】生成一版可运行页面。

开始写代码前先做三件事：
1. 读取本目录同级的 \`DESIGN.md\`（以及 \`exports/tailwind-v4.css\` 或 \`variables.css\`），把 tokens 接入项目主题层。
2. 复述这套的 5 条不可违反的视觉原则（含主色用法、字体、圆角、间距、签名时刻）。
3. 给出页面结构草案，再动手。

必须遵守：
- 主色 \`${primary}\` 只给关键 CTA 与强调，克制使用。
- 标题字体 \`${dispF || '见 DESIGN.md'}\`，正文 \`${bodyF || '见 DESIGN.md'}\`，中文字体栈末尾必带系统兜底，中文不用日文字体。
- 复现 DESIGN.md 里 \`## Signature Moment\` 写死的签名时刻。
- 交付前用 \`## Do's and Don'ts\` 逐条自查；跑 \`npx @google/design.md lint DESIGN.md\` 确认 0 error。
- 若要演示版，用 DESIGN.md 里的 \`slide-*\` 组件产出 16:9 deck（一份设定集同时驱动界面和演示）。

可选一键校验：\`heige-design lint ${slug}\` / 导出其它格式：\`heige-design export ${slug} --format tailwind-v3|dtcg|css-vars\`。
`;
    fs.writeFileSync(path.join(ex, 'agent-prompt.md'), prompt);
    ok++;
  } catch (e) {
    fail.push(`${slug}: ${String(e.message).split('\n')[0]}`);
  }
}
console.log(`导出完成：${ok} 套 × 5 资产（tailwind-v4/v3 + css-vars + dtcg + agent-prompt）`);
if (fail.length) console.log('失败：', fail.join(' | '));

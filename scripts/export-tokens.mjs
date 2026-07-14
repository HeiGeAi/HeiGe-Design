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
function font1(stack) { return String(stack || '').split(',')[0].replace(/["']/g, '').trim(); }
// 同家族姊妹系统（排除自己，取前 3），用于相邻风格速查
function siblings(slug) {
  const fam = META[slug]?.family;
  return Object.values(META)
    .filter(s => s.family === fam && s.slug !== slug)
    .slice(0, 3)
    .map(s => `\`${s.slug}\`（${s.cn}）`);
}
// front matter 里非标准色即为这套的辅助色（accent/glow/seal-red/volt…）
const STD_COLORS = new Set(['primary', 'on-primary', 'ink', 'canvas', 'surface', 'muted', 'hairline']);

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
    const dark = META[slug]?.dark;
    const primary = colors.primary || META[slug]?.primary || '';
    const dispF = font1(firstFont(typ, ['display', 'hero']));
    const bodyF = font1(firstFont(typ, ['body']));
    const monoF = font1(firstFont(typ, ['mono', 'numeral', 'num']));
    const extras = Object.entries(colors).filter(([k]) => !STD_COLORS.has(k));
    const sibs = siblings(slug);
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
- 动效性格按 DESIGN.md 的 \`## Motion\` 章节做（签名曲线 / 时长档 / stagger / 签名动效；没有该章节就用 references/motion-personality.md 的家族预设）；无限动画只动 transform/opacity，一切动画支持 prefers-reduced-motion。
- 交付前用 \`## Do's and Don'ts\` 逐条自查；跑 \`npx @google/design.md lint DESIGN.md\` 确认 0 error。
- 若要演示版，用 DESIGN.md 里的 \`slide-*\` 组件产出 16:9 deck（一份设定集同时驱动界面和演示）。

可选一键校验：\`heige-design lint ${slug}\` / 导出其它格式：\`heige-design export ${slug} --format tailwind-v3|dtcg|css-vars\`。

---

## 速查卡（自动生成，可直接抄）

**色卡**
- 正文 ink：\`${colors.ink || '—'}\`
- 次要 muted：\`${colors.muted || '—'}\`
- 底色 canvas：\`${colors.canvas || '—'}\`
- 卡片面 surface：\`${colors.surface || '—'}\`
- 分隔线 hairline：\`${colors.hairline || '—'}\`
- 主色 primary：\`${primary}\`（只给关键 CTA / 强调，克制使用）${extras.length ? '\n' + extras.map(([k, v]) => `- 辅助 ${k}：\`${v}\``).join('\n') : ''}

**字体**：标题 \`${dispF || '见 DESIGN.md'}\` / 正文 \`${bodyF || '见 DESIGN.md'}\`${monoF ? ` / 数字 \`${monoF}\`` : ''}

**相邻风格（同家族，可换选）**：${sibs.length ? sibs.join(' · ') : '本家族仅此一套'}
`;
    fs.writeFileSync(path.join(ex, 'agent-prompt.md'), prompt);

    // compact.md —— 一屏速览档（对标 refero Compact），从 front matter 确定性派生
    const desc = String(fm.description || '').replace(/\s+/g, ' ').trim();
    const colorRow = (label, key) => colors[key] ? `| ${label} | \`${key}\` | \`${colors[key]}\` |` : '';
    const compact = `# ${cn}（${slug} · ${family}）— Compact

> ${desc || '见 DESIGN.md'}

**Theme：** ${dark ? 'dark' : 'light'}

## 关键色

| 角色 | Token | Hex |
|---|---|---|
${[colorRow('主色', 'primary'), colorRow('正文', 'ink'), colorRow('底色', 'canvas'), colorRow('卡片面', 'surface'), colorRow('次要文字', 'muted'), colorRow('分隔线', 'hairline'), ...extras.map(([k, v]) => `| 辅助 | \`${k}\` | \`${v}\` |`)].filter(Boolean).join('\n')}

## 字体

- 标题：\`${dispF || '见 DESIGN.md'}\`
- 正文：\`${bodyF || '见 DESIGN.md'}\`${monoF ? `\n- 数字 / 等宽：\`${monoF}\`` : ''}

## 形状 & 间距

- 圆角：${Object.entries(fm.rounded || {}).map(([k, v]) => `${k} ${v}`).join(' / ') || '见 DESIGN.md'}
- 间距：${Object.entries(fm.spacing || {}).map(([k, v]) => `${k} ${v}`).join(' / ') || '见 DESIGN.md'}

## 用前先读（5 条铁律）

1. 主色 \`${primary}\` 只给关键 CTA 与强调，克制使用。
2. 复现完整 DESIGN.md 里 \`## Signature Moment\` 写死的签名时刻。
3. 中文字体栈末尾必带系统兜底，中文不用日文字体渲染。
4. ${dark ? '辉光只用 box-shadow / radial-gradient，不用 backdrop-filter，不动画化阴影。' : '不碰紫蓝俗套渐变，不做居中卡片三件套。'}
5. 交付前对照 \`## Do's and Don'ts\` 自查，跑 \`heige-design lint ${slug}\` 确认 0 error。

> 完整设定（组件规格 / 图像语言 / 演示系统 / Agent 配方卡）见同目录 \`DESIGN.md\`。
`;
    fs.writeFileSync(path.join(ex, 'compact.md'), compact);
    ok++;
  } catch (e) {
    fail.push(`${slug}: ${String(e.message).split('\n')[0]}`);
  }
}
console.log(`导出完成：${ok} 套 × 6 资产（tailwind-v4/v3 + css-vars + dtcg + agent-prompt + compact）`);
if (fail.length) console.log('失败：', fail.join(' | '));

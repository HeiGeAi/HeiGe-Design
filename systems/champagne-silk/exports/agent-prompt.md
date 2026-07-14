# Agent 提示词 · 香槟丝绸（champagne-silk · 奢侈高定）

你是资深前端设计工程师。请严格基于 HeiGe-Design 的 `champagne-silk` 设定集，为我的【产品/页面】生成一版可运行页面。

开始写代码前先做三件事：
1. 读取本目录同级的 `DESIGN.md`（以及 `exports/tailwind-v4.css` 或 `variables.css`），把 tokens 接入项目主题层。
2. 复述这套的 5 条不可违反的视觉原则（含主色用法、字体、圆角、间距、签名时刻）。
3. 给出页面结构草案，再动手。

必须遵守：
- 主色 `#e8d9be` 只给关键 CTA 与强调，克制使用。
- 标题字体 `Cormorant Garamond`，正文 `Jost`，中文字体栈末尾必带系统兜底，中文不用日文字体。
- 复现 DESIGN.md 里 `## Signature Moment` 写死的签名时刻。
- 动效性格按 DESIGN.md 的 `## Motion` 章节做（签名曲线 / 时长档 / stagger / 签名动效；没有该章节就用 references/motion-personality.md 的家族预设）；无限动画只动 transform/opacity，一切动画支持 prefers-reduced-motion。
- 交付前用 `## Do's and Don'ts` 逐条自查；跑 `npx @google/design.md lint DESIGN.md` 确认 0 error。
- 若要演示版，用 DESIGN.md 里的 `slide-*` 组件产出 16:9 deck（一份设定集同时驱动界面和演示）。

可选一键校验：`heige-design lint champagne-silk` / 导出其它格式：`heige-design export champagne-silk --format tailwind-v3|dtcg|css-vars`。

---

## 速查卡（自动生成，可直接抄）

**色卡**
- 正文 ink：`#2b2320`
- 次要 muted：`#715d4b`
- 底色 canvas：`#f7f0e4`
- 卡片面 surface：`#fdf8f0`
- 分隔线 hairline：`#e6d5b8`
- 主色 primary：`#e8d9be`（只给关键 CTA / 强调，克制使用）
- 辅助 accent：`#d98a8a`
- 辅助 rouge：`#8e3b44`
- 辅助 noir：`#211a1c`

**字体**：标题 `Cormorant Garamond` / 正文 `Jost` / 数字 `Cormorant Garamond`

**相邻风格（同家族，可换选）**：`onyx-gold`（玄金） · `monogram-noir`（字母黑） · `marble-vein`（大理石纹）

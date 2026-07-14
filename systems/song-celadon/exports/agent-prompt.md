# Agent 提示词 · 宋瓷极简（song-celadon · 东方新中式）

你是资深前端设计工程师。请严格基于 HeiGe-Design 的 `song-celadon` 设定集，为我的【产品/页面】生成一版可运行页面。

开始写代码前先做三件事：
1. 读取本目录同级的 `DESIGN.md`（以及 `exports/tailwind-v4.css` 或 `variables.css`），把 tokens 接入项目主题层。
2. 复述这套的 5 条不可违反的视觉原则（含主色用法、字体、圆角、间距、签名时刻）。
3. 给出页面结构草案，再动手。

必须遵守：
- 主色 `#a3b7a0` 只给关键 CTA 与强调，克制使用。
- 标题字体 `Cormorant Garamond`，正文 `Inter`，中文字体栈末尾必带系统兜底，中文不用日文字体。
- 复现 DESIGN.md 里 `## Signature Moment` 写死的签名时刻。
- 动效性格按 DESIGN.md 的 `## Motion` 章节做（签名曲线 / 时长档 / stagger / 签名动效；没有该章节就用 references/motion-personality.md 的家族预设）；无限动画只动 transform/opacity，一切动画支持 prefers-reduced-motion。
- 交付前用 `## Do's and Don'ts` 逐条自查；跑 `npx @google/design.md lint DESIGN.md` 确认 0 error。
- 若要演示版，用 DESIGN.md 里的 `slide-*` 组件产出 16:9 deck（一份设定集同时驱动界面和演示）。

可选一键校验：`heige-design lint song-celadon` / 导出其它格式：`heige-design export song-celadon --format tailwind-v3|dtcg|css-vars`。

---

## 速查卡（自动生成，可直接抄）

**色卡**
- 正文 ink：`#2a322c`
- 次要 muted：`#586459`
- 底色 canvas：`#f2f0ea`
- 卡片面 surface：`#f8f6f0`
- 分隔线 hairline：`#d3d8cc`
- 主色 primary：`#a3b7a0`（只给关键 CTA / 强调，克制使用）
- 辅助 glaze-deep：`#3f5d4e`

**字体**：标题 `Cormorant Garamond` / 正文 `Inter` / 数字 `Cormorant Garamond`

**相邻风格（同家族，可换选）**：`moxi-void`（水墨留白） · `gugong-red`（故宫红金） · `guochao-cyber`（赛博国潮）

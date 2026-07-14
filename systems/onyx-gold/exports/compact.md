# 玄金（onyx-gold · 奢侈高定）— Compact

> Onyx-Gold is a couture-restraint system for haute horology, high jewellery and private banking. A near-absolute onyx canvas is held in vast negative space, cut only by hairline brushed-gold rules and anchored by a single luminous gold word. Type is a thin high-contrast serif set in wide-tracked uppercase, paired with a quiet geometric sans and tabular gold numerals. No gradients, no glow animation, no filler. The black does the talking and one gold moment carries the whole page.

**Theme：** dark

## 关键色

| 角色 | Token | Hex |
|---|---|---|
| 主色 | `primary` | `#b8912e` |
| 正文 | `ink` | `#ede6d3` |
| 底色 | `canvas` | `#060606` |
| 卡片面 | `surface` | `#100e0a` |
| 次要文字 | `muted` | `#a69b80` |
| 分隔线 | `hairline` | `#4a3d22` |
| 辅助 | `accent` | `#e4c466` |

## 字体

- 标题：`Cormorant Garamond`
- 正文：`Jost`
- 数字 / 等宽：`Fragment Mono`

## 形状 & 间距

- 圆角：none 0px / sm 2px / md 4px / pill 9999px
- 间距：sm 8px / md 16px / lg 32px / xl 64px / section 120px

## 用前先读（5 条铁律）

1. 主色 `#b8912e` 只给关键 CTA 与强调，克制使用。
2. 复现完整 DESIGN.md 里 `## Signature Moment` 写死的签名时刻。
3. 中文字体栈末尾必带系统兜底，中文不用日文字体渲染。
4. 辉光只用 box-shadow / radial-gradient，不用 backdrop-filter，不动画化阴影。
5. 交付前对照 `## Do's and Don'ts` 自查，跑 `heige-design lint onyx-gold` 确认 0 error。

> 完整设定（组件规格 / 图像语言 / 演示系统 / Agent 配方卡）见同目录 `DESIGN.md`。

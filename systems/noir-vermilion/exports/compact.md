# 玄墨绛红（noir-vermilion · 优雅编辑）— Compact

> Noir-Vermilion is a dark editorial system for knowledge brands and long-form media. A single cut of vermilion (#CE1432) burns across a smoke-black canvas (#141210) over warm cream ink (#EDEAE3): the red never fills, it punctuates — as oversized Didone serial numbers, 8px section rules, and one full-bleed quote page that ruptures the black. Noto Serif SC carries manifesto-scale Chinese headlines; Inter keeps the body quiet and legible. Sharp corners, generous line-height, a faint 45° cross-hatch, no glow. Restraint is the luxury; the red is the only thing allowed to shout.

**Theme：** dark

## 关键色

| 角色 | Token | Hex |
|---|---|---|
| 主色 | `primary` | `#CE1432` |
| 正文 | `ink` | `#EDEAE3` |
| 底色 | `canvas` | `#141210` |
| 卡片面 | `surface` | `#1C1916` |
| 次要文字 | `muted` | `#9A9082` |
| 分隔线 | `hairline` | `#34302B` |

## 字体

- 标题：`Playfair Display`
- 正文：`Inter`
- 数字 / 等宽：`Playfair Display`

## 形状 & 间距

- 圆角：none 0px / sm 2px / pill 9999px
- 间距：xs 4px / sm 8px / md 16px / lg 24px / xl 48px / section 96px

## 用前先读（5 条铁律）

1. 主色 `#CE1432` 只给关键 CTA 与强调，克制使用。
2. 复现完整 DESIGN.md 里 `## Signature Moment` 写死的签名时刻。
3. 中文字体栈末尾必带系统兜底，中文不用日文字体渲染。
4. 辉光只用 box-shadow / radial-gradient，不用 backdrop-filter，不动画化阴影。
5. 交付前对照 `## Do's and Don'ts` 自查，跑 `heige-design lint noir-vermilion` 确认 0 error。

> 完整设定（组件规格 / 图像语言 / 演示系统 / Agent 配方卡）见同目录 `DESIGN.md`。

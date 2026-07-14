# 铁账（ironclad-ledger · 凶悍工业）— Compact

> Ironclad Ledger is a brutalist fintech system for hardcore builders. Gun-metal asphalt, oxidized-rust red, and one credit-green. Every figure is set in tabular monospace, so amounts align to the decimal like stamped metal. Hard 2px borders, zero radius, and blur-free offset shadows give each data block the weight of a machined plate. Headlines run in heavy grotesque; the ledger row is the hero.

**Theme：** dark

## 关键色

| 角色 | Token | Hex |
|---|---|---|
| 主色 | `primary` | `#b7410e` |
| 正文 | `ink` | `#f5efe3` |
| 底色 | `canvas` | `#1b1d20` |
| 卡片面 | `surface` | `#26282c` |
| 次要文字 | `muted` | `#9a9ca1` |
| 分隔线 | `hairline` | `#3a3d42` |
| 辅助 | `up` | `#3fb950` |

## 字体

- 标题：`Space Grotesk`
- 正文：`Space Grotesk`
- 数字 / 等宽：`JetBrains Mono`

## 形状 & 间距

- 圆角：none 0px / sm 2px / pill 9999px
- 间距：xs 4px / sm 8px / md 16px / lg 24px / xl 40px / section 96px

## 用前先读（5 条铁律）

1. 主色 `#b7410e` 只给关键 CTA 与强调，克制使用。
2. 复现完整 DESIGN.md 里 `## Signature Moment` 写死的签名时刻。
3. 中文字体栈末尾必带系统兜底，中文不用日文字体渲染。
4. 辉光只用 box-shadow / radial-gradient，不用 backdrop-filter，不动画化阴影。
5. 交付前对照 `## Do's and Don'ts` 自查，跑 `heige-design lint ironclad-ledger` 确认 0 error。

> 完整设定（组件规格 / 图像语言 / 演示系统 / Agent 配方卡）见同目录 `DESIGN.md`。

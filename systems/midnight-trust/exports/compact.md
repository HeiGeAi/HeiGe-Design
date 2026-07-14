# 午夜蓝（midnight-trust · 暗色科技）— Compact

> Sentris is the enterprise-AI dark system engineered for trust, not spectacle. A midnight blue-black canvas holds one restrained ice-blue accent that only glows where verification happens; steel-gray structure carries the weight, Inter runs a strict step scale, and tabular monospace presents every number as a countersigned fact. Signature move: a single continuous ice-blue keel line threads every dashboard, and low-intensity static glow is reserved for the one currently-verified state.

**Theme：** dark

## 关键色

| 角色 | Token | Hex |
|---|---|---|
| 主色 | `primary` | `#5e8fff` |
| 正文 | `ink` | `#dde5f2` |
| 底色 | `canvas` | `#0b1018` |
| 卡片面 | `surface` | `#0f1826` |
| 次要文字 | `muted` | `#8b98ad` |
| 分隔线 | `hairline` | `#1c2740` |
| 辅助 | `steel` | `#38445c` |
| 辅助 | `up` | `#3ecf8e` |
| 辅助 | `down` | `#f26d6d` |

## 字体

- 标题：`Inter`
- 正文：`Inter`
- 数字 / 等宽：`JetBrains Mono`

## 形状 & 间距

- 圆角：none 0px / sm 4px / md 8px / lg 14px / pill 9999px
- 间距：xs 4px / sm 8px / md 16px / lg 24px / xl 40px / section 96px

## 用前先读（5 条铁律）

1. 主色 `#5e8fff` 只给关键 CTA 与强调，克制使用。
2. 复现完整 DESIGN.md 里 `## Signature Moment` 写死的签名时刻。
3. 中文字体栈末尾必带系统兜底，中文不用日文字体渲染。
4. 辉光只用 box-shadow / radial-gradient，不用 backdrop-filter，不动画化阴影。
5. 交付前对照 `## Do's and Don'ts` 自查，跑 `heige-design lint midnight-trust` 确认 0 error。

> 完整设定（组件规格 / 图像语言 / 演示系统 / Agent 配方卡）见同目录 `DESIGN.md`。

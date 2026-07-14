# 虚空仪表（void-hud · 暗色科技）— Compact

> A cold acid-cyan HUD for multi-agent orchestration consoles. Near-black canvas, a single #22d3ee cyan that only ever means "live", and an amber caution accent that only ever means "attention". Titles run in a geometric sans; every status, metric, and timestamp lives in tabular monospace. The signature is the reticle: corner brackets and a breathing dot-matrix instead of boxes and shadows.

**Theme：** dark

## 关键色

| 角色 | Token | Hex |
|---|---|---|
| 主色 | `primary` | `#22d3ee` |
| 正文 | `ink` | `#d7e5ec` |
| 底色 | `canvas` | `#0b0e11` |
| 卡片面 | `surface` | `#12171d` |
| 次要文字 | `muted` | `#8194a0` |
| 分隔线 | `hairline` | `#202a33` |
| 辅助 | `alert` | `#ff8a24` |
| 辅助 | `on-alert` | `#1a0e02` |
| 辅助 | `critical` | `#ff4d5e` |

## 字体

- 标题：`Space Grotesk`
- 正文：`Inter`
- 数字 / 等宽：`JetBrains Mono`

## 形状 & 间距

- 圆角：none 0px / xs 2px / sm 3px / md 6px / pill 9999px
- 间距：xs 4px / sm 8px / md 16px / lg 24px / xl 40px / section 80px

## 用前先读（5 条铁律）

1. 主色 `#22d3ee` 只给关键 CTA 与强调，克制使用。
2. 复现完整 DESIGN.md 里 `## Signature Moment` 写死的签名时刻。
3. 中文字体栈末尾必带系统兜底，中文不用日文字体渲染。
4. 辉光只用 box-shadow / radial-gradient，不用 backdrop-filter，不动画化阴影。
5. 交付前对照 `## Do's and Don'ts` 自查，跑 `heige-design lint void-hud` 确认 0 error。

> 完整设定（组件规格 / 图像语言 / 演示系统 / Agent 配方卡）见同目录 `DESIGN.md`。

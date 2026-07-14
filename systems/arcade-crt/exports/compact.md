# 街机荧光（arcade-crt · 复古未来）— Compact

> A phosphor-green cathode-ray design system for indie games, retro hardware, and pixel art. Everything lives inside a simulated CRT tube — static scanlines, a barrel-vignette curve, and a steady green bloom on

**Theme：** dark

## 关键色

| 角色 | Token | Hex |
|---|---|---|
| 主色 | `primary` | `#33ff66` |
| 正文 | `ink` | `#cfffd8` |
| 底色 | `canvas` | `#060806` |
| 卡片面 | `surface` | `#0e150e` |
| 次要文字 | `muted` | `#6fae83` |
| 分隔线 | `hairline` | `#1c3a26` |
| 辅助 | `accent` | `#ffb000` |
| 辅助 | `on-accent` | `#1a0f00` |

## 字体

- 标题：`Press Start 2P`
- 正文：`JetBrains Mono`
- 数字 / 等宽：`Press Start 2P`

## 形状 & 间距

- 圆角：none 0px / sm 3px / md 10px / pill 9999px
- 间距：xs 4px / sm 8px / md 16px / lg 24px / xl 48px / section 96px

## 用前先读（5 条铁律）

1. 主色 `#33ff66` 只给关键 CTA 与强调，克制使用。
2. 复现完整 DESIGN.md 里 `## Signature Moment` 写死的签名时刻。
3. 中文字体栈末尾必带系统兜底，中文不用日文字体渲染。
4. 辉光只用 box-shadow / radial-gradient，不用 backdrop-filter，不动画化阴影。
5. 交付前对照 `## Do's and Don'ts` 自查，跑 `heige-design lint arcade-crt` 确认 0 error。

> 完整设定（组件规格 / 图像语言 / 演示系统 / Agent 配方卡）见同目录 `DESIGN.md`。

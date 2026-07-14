# 碳黑电绿（carbon-lime · 暗色科技）— Compact

> CarbonLime is a terminal-native dark system for CLI tools, cryptography, and low-level engineering. Pure carbon black (#0a0a0a) holds the void; a single electric lime (#b4ff39) is the only hue on the page while every other value stays grayscale. Monospace runs the show as display type, never decoration. Headlines, kickers, and data are all set in Space Mono. The signature is a live command line, a breathing lime block cursor trailing a mono prompt, framed by sharp zero-radius corners, hairline grids, and a static (never animated) lime glow. Terminal as interface, terminal as slide.

**Theme：** dark

## 关键色

| 角色 | Token | Hex |
|---|---|---|
| 主色 | `primary` | `#b4ff39` |
| 正文 | `ink` | `#e8ece2` |
| 底色 | `canvas` | `#0a0a0a` |
| 卡片面 | `surface` | `#131512` |
| 次要文字 | `muted` | `#868d7d` |
| 分隔线 | `hairline` | `#262a22` |
| 辅助 | `accent` | `#6f8f2a` |

## 字体

- 标题：`Space Mono`
- 正文：`Inter`
- 数字 / 等宽：`JetBrains Mono`

## 形状 & 间距

- 圆角：none 0px / sm 2px / md 4px / lg 8px / pill 9999px
- 间距：xs 4px / sm 8px / md 16px / lg 24px / xl 40px / section 80px

## 用前先读（5 条铁律）

1. 主色 `#b4ff39` 只给关键 CTA 与强调，克制使用。
2. 复现完整 DESIGN.md 里 `## Signature Moment` 写死的签名时刻。
3. 中文字体栈末尾必带系统兜底，中文不用日文字体渲染。
4. 辉光只用 box-shadow / radial-gradient，不用 backdrop-filter，不动画化阴影。
5. 交付前对照 `## Do's and Don'ts` 自查，跑 `heige-design lint carbon-lime` 确认 0 error。

> 完整设定（组件规格 / 图像语言 / 演示系统 / Agent 配方卡）见同目录 `DESIGN.md`。

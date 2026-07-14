# 霓虹夜市（neon-market · 张扬极繁）— Compact

> NEON MARKET is a maximalist night-market signage system. A deep-night canvas gets ignited by four neon accents: signage red, lantern amber, tube cyan and magenta, stacked dense and slightly askew like an alley of glowing signboards. Heavy Archivo Black meets a Monoton neon-tube script and Space Mono price tags. The signature move is a wall of self-glowing stall signs that ignite on load. No purple gradients, no centered card trio.

**Theme：** dark

## 关键色

| 角色 | Token | Hex |
|---|---|---|
| 主色 | `primary` | `#ff2e4d` |
| 正文 | `ink` | `#f7ede9` |
| 底色 | `canvas` | `#0d0b0f` |
| 卡片面 | `surface` | `#181419` |
| 次要文字 | `muted` | `#a89aa2` |
| 分隔线 | `hairline` | `#332b32` |
| 辅助 | `accent-cyan` | `#22e6e6` |
| 辅助 | `accent-lantern` | `#ffc21f` |
| 辅助 | `accent-pink` | `#ff5cc8` |

## 字体

- 标题：`Archivo Black`
- 正文：`Archivo`
- 数字 / 等宽：`Space Mono`

## 形状 & 间距

- 圆角：none 0px / sm 4px / md 8px / lg 14px / pill 9999px
- 间距：xs 4px / sm 8px / md 16px / lg 24px / xl 40px / section 88px

## 用前先读（5 条铁律）

1. 主色 `#ff2e4d` 只给关键 CTA 与强调，克制使用。
2. 复现完整 DESIGN.md 里 `## Signature Moment` 写死的签名时刻。
3. 中文字体栈末尾必带系统兜底，中文不用日文字体渲染。
4. 辉光只用 box-shadow / radial-gradient，不用 backdrop-filter，不动画化阴影。
5. 交付前对照 `## Do's and Don'ts` 自查，跑 `heige-design lint neon-market` 确认 0 error。

> 完整设定（组件规格 / 图像语言 / 演示系统 / Agent 配方卡）见同目录 `DESIGN.md`。

# 极光（aurora-mesh · 暗色科技）— Compact

> Aurora Mesh (极光) is a machine-learning platform identity for the dark-tech era. A midnight-black canvas #0a0b12 is crossed by one drifting aurora ribbon that flows from aurora green #34d399 into sky blue #38bdf8. Type is engineered: Space Grotesk display cut into gradient text, Geist for body, Geist Mono for tabular metrics. The signature is a dark glass card whose 1px edge catches the aurora light drifting behind it. Glow is radial only, never blurred, never animated.

**Theme：** dark

## 关键色

| 角色 | Token | Hex |
|---|---|---|
| 主色 | `primary` | `#34d399` |
| 正文 | `ink` | `#e6edf3` |
| 底色 | `canvas` | `#0a0b12` |
| 卡片面 | `surface` | `#12141d` |
| 次要文字 | `muted` | `#94a3b8` |
| 分隔线 | `hairline` | `#232838` |
| 辅助 | `accent` | `#38bdf8` |
| 辅助 | `glow` | `#7dd3fc` |

## 字体

- 标题：`Space Grotesk`
- 正文：`Geist`
- 数字 / 等宽：`Geist Mono`

## 形状 & 间距

- 圆角：none 0px / sm 6px / md 10px / lg 16px / pill 9999px
- 间距：xs 4px / sm 8px / md 16px / lg 28px / xl 48px / section 96px

## 用前先读（5 条铁律）

1. 主色 `#34d399` 只给关键 CTA 与强调，克制使用。
2. 复现完整 DESIGN.md 里 `## Signature Moment` 写死的签名时刻。
3. 中文字体栈末尾必带系统兜底，中文不用日文字体渲染。
4. 辉光只用 box-shadow / radial-gradient，不用 backdrop-filter，不动画化阴影。
5. 交付前对照 `## Do's and Don'ts` 自查，跑 `heige-design lint aurora-mesh` 确认 0 error。

> 完整设定（组件规格 / 图像语言 / 演示系统 / Agent 配方卡）见同目录 `DESIGN.md`。

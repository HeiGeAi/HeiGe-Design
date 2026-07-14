# 精准等宽（akkurat-mono · 瑞士纪律）— Compact

> AkkuratMono is a documentation-grade design system built on Swiss discipline — a near-white canvas (#F7F7F5), ink black (#18191C), and exactly one chromatic voice, a precise cobalt link (#0E4FE1). Inter carries the sans body and headlines while a monospace face owns code, margin annotations and giant tabular numerals as first-class citizens. Its signature is a relentless hairline grid annotated with monospace dimension labels, so every screen and every slide reads like a calibrated engineering drawing, never a marketing page.

**Theme：** light

## 关键色

| 角色 | Token | Hex |
|---|---|---|
| 主色 | `primary` | `#0E4FE1` |
| 正文 | `ink` | `#18191C` |
| 底色 | `canvas` | `#F7F7F5` |
| 卡片面 | `surface` | `#FFFFFF` |
| 次要文字 | `muted` | `#63656C` |
| 分隔线 | `hairline` | `#E3E3DF` |

## 字体

- 标题：`Inter`
- 正文：`Inter`
- 数字 / 等宽：`JetBrains Mono`

## 形状 & 间距

- 圆角：none 0px / sm 2px / md 4px / lg 6px / pill 9999px
- 间距：xs 4px / sm 8px / md 16px / lg 24px / xl 40px / section 80px

## 用前先读（5 条铁律）

1. 主色 `#0E4FE1` 只给关键 CTA 与强调，克制使用。
2. 复现完整 DESIGN.md 里 `## Signature Moment` 写死的签名时刻。
3. 中文字体栈末尾必带系统兜底，中文不用日文字体渲染。
4. 不碰紫蓝俗套渐变，不做居中卡片三件套。
5. 交付前对照 `## Do's and Don'ts` 自查，跑 `heige-design lint akkurat-mono` 确认 0 error。

> 完整设定（组件规格 / 图像语言 / 演示系统 / Agent 配方卡）见同目录 `DESIGN.md`。

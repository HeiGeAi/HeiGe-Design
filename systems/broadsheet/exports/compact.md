# 大报（broadsheet · 优雅编辑）— Compact

> The masthead grandeur of longform print, rebuilt for the screen. A single high-contrast serif carries every headline; a lone masthead red (#c0392b) cuts one rule across an ink-on-newsprint page. Columns are real columns, the lede opens on a four-line drop cap, and hairline rules do the work that cards and shadows do elsewhere. No pills, no glow, no gradients. It reads like an edition went to press, not like a template rendered. By HeiGe-Design.

**Theme：** light

## 关键色

| 角色 | Token | Hex |
|---|---|---|
| 主色 | `primary` | `#c0392b` |
| 正文 | `ink` | `#1c1a16` |
| 底色 | `canvas` | `#f4f1ea` |
| 卡片面 | `surface` | `#ece6d8` |
| 次要文字 | `muted` | `#5c554a` |
| 分隔线 | `hairline` | `#cdc6b8` |

## 字体

- 标题：`Newsreader`
- 正文：`Newsreader`
- 数字 / 等宽：`IBM Plex Mono`

## 形状 & 间距

- 圆角：none 0px / sm 2px
- 间距：xs 4px / sm 8px / md 16px / lg 24px / xl 48px / section 96px

## 用前先读（5 条铁律）

1. 主色 `#c0392b` 只给关键 CTA 与强调，克制使用。
2. 复现完整 DESIGN.md 里 `## Signature Moment` 写死的签名时刻。
3. 中文字体栈末尾必带系统兜底，中文不用日文字体渲染。
4. 不碰紫蓝俗套渐变，不做居中卡片三件套。
5. 交付前对照 `## Do's and Don'ts` 自查，跑 `heige-design lint broadsheet` 确认 0 error。

> 完整设定（组件规格 / 图像语言 / 演示系统 / Agent 配方卡）见同目录 `DESIGN.md`。

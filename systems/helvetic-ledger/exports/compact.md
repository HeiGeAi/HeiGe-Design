# 账本（helvetic-ledger · 瑞士纪律）— Compact

> Rulewerk is a Swiss ledger system built on one law: value and the grid do the work, colour never fills — it only signals. Near-black ink sits on a warm-neutral paper canvas, everything snapped to a twelve-column baseline grid with exposed hairline rules and tabular figures. The single hue is a calibrated signal red, used the way an accountant uses it — the one number that is in the red. Two signatures anchor it: a data table where the negative figure breaks the grid, and a near-empty divider whose whitespace is the visual hammer.

**Theme：** light

## 关键色

| 角色 | Token | Hex |
|---|---|---|
| 主色 | `primary` | `#d81f1a` |
| 正文 | `ink` | `#141414` |
| 底色 | `canvas` | `#f5f5f3` |
| 卡片面 | `surface` | `#ffffff` |
| 次要文字 | `muted` | `#616160` |
| 分隔线 | `hairline` | `#dcdcd9` |
| 辅助 | `subtle` | `#efeeeb` |

## 字体

- 标题：`Neue Haas Grotesk Display Pro`
- 正文：`Inter`
- 数字 / 等宽：`IBM Plex Mono`

## 形状 & 间距

- 圆角：none 0px / sm 2px / pill 9999px
- 间距：xs 4px / sm 8px / md 16px / lg 24px / xl 48px / section 96px

## 用前先读（5 条铁律）

1. 主色 `#d81f1a` 只给关键 CTA 与强调，克制使用。
2. 复现完整 DESIGN.md 里 `## Signature Moment` 写死的签名时刻。
3. 中文字体栈末尾必带系统兜底，中文不用日文字体渲染。
4. 不碰紫蓝俗套渐变，不做居中卡片三件套。
5. 交付前对照 `## Do's and Don'ts` 自查，跑 `heige-design lint helvetic-ledger` 确认 0 error。

> 完整设定（组件规格 / 图像语言 / 演示系统 / Agent 配方卡）见同目录 `DESIGN.md`。

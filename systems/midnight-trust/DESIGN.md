---
version: alpha
name: Sentris-design-system
description: "Sentris is the enterprise-AI dark system engineered for trust, not spectacle. A midnight blue-black canvas holds one restrained ice-blue accent that only glows where verification happens; steel-gray structure carries the weight, Inter runs a strict step scale, and tabular monospace presents every number as a countersigned fact. Signature move: a single continuous ice-blue keel line threads every dashboard, and low-intensity static glow is reserved for the one currently-verified state."

colors:
  primary: "#5e8fff"
  on-primary: "#08111d"
  ink: "#dde5f2"
  canvas: "#0b1018"
  surface: "#0f1826"
  muted: "#8b98ad"
  hairline: "#1c2740"
  steel: "#38445c"
  up: "#3ecf8e"
  down: "#f26d6d"

typography:
  display-xl:
    fontFamily: 'Inter, "SF Pro Display", "Segoe UI", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 64px
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-1.6px"
  display-lg:
    fontFamily: 'Inter, "SF Pro Display", "Segoe UI", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.8px"
  heading:
    fontFamily: 'Inter, "SF Pro Text", "Segoe UI", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.2px"
  body:
    fontFamily: 'Inter, "SF Pro Text", "Segoe UI", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0em"
  body-mono:
    fontFamily: '"JetBrains Mono", "SF Mono", "Cascadia Mono", ui-monospace, "Noto Sans SC", "PingFang SC", monospace'
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.2px"
    fontFeature: '"tnum" 1, "zero" 1'
  eyebrow:
    fontFamily: '"JetBrains Mono", "SF Mono", "Cascadia Mono", ui-monospace, "Noto Sans SC", "PingFang SC", monospace'
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "2.4px"
  button:
    fontFamily: 'Inter, "SF Pro Text", "Segoe UI", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: "0.2px"
  caption:
    fontFamily: 'Inter, "SF Pro Text", "Segoe UI", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.1px"

rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 14px
  pill: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  section: 96px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm}"
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow}"
    padding: "{spacing.md}"
  card-feature:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  feature-row:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
  stat-block:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body-mono}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  status-pill-operational:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.up}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs}"
  status-pill-alert:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.down}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs}"
  tag-secure:
    backgroundColor: "{colors.steel}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs}"
  keel-divider:
    backgroundColor: "{colors.hairline}"
    rounded: "{rounded.none}"
    width: 1px
    height: 1px
  data-panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body-mono}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    padding: "{spacing.lg}"
  slide-cover:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-section-divider:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-stat-hero:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-quote:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  slide-closing:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.heading}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
---

# Sentris · 午夜蓝 (Midnight Trust)

Enterprise AI that has to be believed before it is used. 这套系统的全部工作，是让一块午夜蓝黑的屏幕看起来像可以签字背书的证据，而不是一张营销海报。

## Overview

Sentris 是「暗色科技」家族里穿西装的那一套。它不靠炫技发光，靠克制建立信任。

- **气质**：午夜值班室的冷静。大面积近黑蓝底，一条冰蓝的强调色只在「已核验」的地方亮起，其余全部压成钢灰结构。安静，因此可信。
- **主色的两个角色**：`#0b1018` 午夜蓝黑是承重的地面，负责把注意力全部让给内容；`#5e8fff` 冰蓝是唯一的信号灯，只用在主行动、已核验状态、和一条贯穿全局的龙骨线上。信任来自这盏灯极少亮。
- **字体签名**：Inter 走一条严格的字号阶梯（64 / 40 / 24 / 16），拉丁与中文都干净；所有数字交给等宽体 JetBrains Mono，开 tabular-nums，让每一列金额、每一个时间戳像审计记录一样对齐成柱。
- **整体节奏**：结构靠钢灰的 1px hairline 和网格切分，不靠色块。留白大、密度低、对齐狠。一屏只让一件事发光。

抹掉品牌名，这套依然一眼是「企业级、被审计过、有人为它签过字」的语气。

## Colors

克制是这套的第一性原理。十个色，主色只在三处出现。

### Brand & Accent
- `primary` **#5e8fff** 冰蓝：唯一强调色。主按钮、龙骨线、已核验节点、数据页的巨型数字。全页出现不超过三处，多一处就贬值。
- `on-primary` **#08111d** 深午夜墨：叠在冰蓝主色之上的文字，对比 6.18:1，稳过 AA。

### Surface
- `canvas` **#0b1018** 午夜蓝黑：页面与演示底色，承重地面。
- `surface` **#0f1826** 钢蓝面：卡片、面板、数据台。比 canvas 只抬一档，靠 hairline 而不是靠亮度分层。
- `hairline` **#1c2740** 钢灰细线：所有 1px 分隔与网格线，包括那条龙骨。

### Text
- `ink` **#dde5f2** 冷白：正文与标题。不用纯白，留一层蓝灰让长时间阅读不刺眼（对比 canvas 15.0:1）。
- `muted` **#8b98ad** 钢灰字：次要说明、单位、页脚、过渡页章节名（对比 canvas 6.5:1，仍过 AA）。
- `steel` **#38445c** 钢：安全标签底、二级结构块。冷、无声、承结构。

### Semantic
- `up` **#3ecf8e** 核验绿：Operational / Verified / 增长 delta（对比 surface 8.9:1）。
- `down` **#f26d6d** 告警红：Degraded / Breach / 下降 delta（对比 surface 6.1:1）。语义色只在数据台和状态胶囊里出现，绝不进标题。

**对比度自检**：所有 `textColor + backgroundColor` 组合最低 6.1:1（down on surface），全部 ≥ 4.5:1 的 WCAG AA 线。

## Typography

### Font Family
- 拉丁与中文正文标题：Inter 打头，系统兜底 `"SF Pro Text/Display" → "Segoe UI" → "Noto Sans SC" → "PingFang SC" → "Microsoft YaHei" → sans-serif`。webfont 加载不到也不塌成 Times，中文不掉成豆腐。
- 数字与工程标注：JetBrains Mono 打头，兜底 `"SF Mono" → "Cascadia Mono" → ui-monospace → "Noto Sans SC" → "PingFang SC" → monospace`。
- **中文铁律**：中文永远走 Noto Sans SC / PingFang SC，绝不用任何日文字体（Mochiy / Zen Maru 等）渲染简体，简体会缺字变异体。

### Hierarchy
| Role | Font | Size | Weight | 用途 |
|---|---|---|---|---|
| display-xl | Inter | 64px | 700 | 封面主句、数据页巨型数字 |
| display-lg | Inter | 40px | 700 | 过渡页章节、金句页 |
| heading | Inter | 24px | 600 | 卡片标题、收尾页行动句 |
| body | Inter | 16px | 400 | 正文、列表行，行高 1.65 |
| body-mono | JetBrains Mono | 15px | 500 | 金额、时间戳、审计行，tabular-nums |
| eyebrow | JetBrains Mono | 12px | 600 | 全大写 kicker，字距 2.4px |
| button | Inter | 15px | 600 | 按钮标签 |
| caption | Inter | 13px | 400 | 页脚、标签、脚注 |

### Principles
- 最大字 64px 对正文 16px 是 4:1，字号阶梯陡，层级靠尺寸不靠颜色。
- eyebrow 用等宽全大写 + 2.4px 字距做「系统标签」感，像终端里打出来的分类标记。
- 所有数字统一 tabular-nums，跳数时不抖动，多行金额右对齐成一根柱子。

## Layout

- **Spacing 系统**：4 / 8 / 16 / 24 / 40 / 96 的 4pt 基数阶梯（xs→section）。段内用 8/16，卡片内用 24，模块间用 40，整屏切换用 96 制造呼吸。
- **Grid & Container**：12 列，gutter 24，最大内容宽 1200px。左对齐优先，标题与数据都咬网格左线，绝不无脑居中。
- **Whitespace 哲学**：留白是给「已核验」这件事让位。信息密度故意压低，一屏一件主事，剩下的全是安静的午夜。密不是信息多，是对齐狠。

## Elevation & Depth

暗色系不用投影堆层，用「结构 + 极克制的光」。

| 层级 | 手法 |
|---|---|
| 地面 | canvas #0b1018，无任何装饰 |
| 面板 | surface #0f1826，靠 1px hairline 描边区分，不靠亮度 |
| 强调 | 冰蓝低强度辉光，仅「已核验」节点：`box-shadow: 0 0 0 1px rgba(94,143,255,.35), 0 0 24px -6px rgba(94,143,255,.45)` |

- **辉光只用静态 box-shadow / radial-gradient**，常亮不闪，绝不动画化阴影（逐帧重绘会掉帧）。
- **绝不用 backdrop-filter**，玻璃感用半透明纯色 `rgba(15,24,38,.72)` 替代，滚动不重绘。
- 背景网格用一层极淡的 hairline 线阵（`linear-gradient` 铺 40px 网格，透明度 4%），静止不动。

## Shapes

| Token | 值 | 用途 |
|---|---|---|
| none | 0px | 龙骨线、数据台单元格、演示满版边——锐利即秩序 |
| sm | 4px | 标签、列表行 |
| md | 8px | 按钮、金句卡 |
| lg | 14px | 卡片、数据面板 |
| pill | 9999px | 状态胶囊（Operational / Alert） |

- 几何语气：直角为主，圆角克制。企业信任感来自「像图纸一样精确」，不是像糖果一样圆。
- 图片与图表一律直角出血或咬网格，不做有机 blob 裁切。

## Components

- **button-primary**：冰蓝底 + 深墨字，md 圆角。全页最多一个，永远落在龙骨线上。
- **button-secondary**：钢蓝面 + 冷白字 + 1px 钢灰描边（描边在 CSS，不进 token）。承接次要动作。
- **nav-bar**：canvas 底，eyebrow 等宽标签做导航项，底部一条 hairline 收口。
- **card-feature**：surface 面板，heading 标题 + body 说明，14px 圆角，1px hairline 描边。
- **feature-row**：能力清单的一行，左端一个冰蓝小节点咬在龙骨线上。
- **stat-block**：等宽巨数 + muted 单位，右上角一个 up/down delta 胶囊。数字右对齐成柱。
- **status-pill-operational / -alert**：胶囊状态灯，绿=Operational 红=Degraded，等宽全大写。
- **tag-secure**：钢底冷白字小标签，标记「SOC-grade / Encrypted / Audited」这类合规属性（属性名虚构示意，不指代任何真实认证）。
- **keel-divider**：1px 钢灰线元件，既做水平分隔，也竖起来当那条贯穿全局的龙骨。
- **data-panel**：审计台，等宽表格 + hairline 行线 + tabular 数字，一次一个签名时刻。
- **footer**：canvas 底、muted 字、顶部一条 hairline。

## Presentation System

16:9 演示版式，对齐 HeiGe-PPT 的「一页一句话 + 黄金三秒 + 视觉锤」。视觉锤固定是：**那条冰蓝龙骨线 + 唯一发光的核验点**。

- **封面 slide-cover**：午夜蓝黑满版，左对齐一句 display-xl 主张（≤12 字），顶端一行 eyebrow 等宽标签（如 `ENTERPRISE AI · TRUST LAYER`），左侧一条冰蓝龙骨从上贯到底。黄金三秒立的是「冷静、被审计过」的气场。
- **过渡 slide-section-divider**：钢蓝面，超大 muted 章节名压在左下，一个冰蓝大序号 `01 / 02` 咬左线，一条 8px 冰蓝短横做分节锤。
- **数据 slide-stat-hero**：满版午夜，居中偏左一个冰蓝 display-xl 巨数（如 `99.98%`），下方一行等宽审计句带时间戳，末位数字下一道**静止不闪**的冰蓝下划光标。数字被呈现成「被签过字的事实」。
- **金句 slide-quote**：钢蓝面卡，一句 display-lg 占屏话，左侧龙骨 + 一个冰蓝引号节点发光。一页只放这一句。
- **收尾 slide-closing**：唯一反转屏——整屏翻成冰蓝主色底、深墨字，一句 heading 行动号召 + 一个深色按钮。全场只有这一次让冰蓝占满，收束干脆。

## Signature Moment

换个模板绝对做不出来的两个签名时刻，写死：

- **UI —— The Keel Line（龙骨线）**：一条连续的 1px 冰蓝 hairline，从仪表盘顶贯到底，当作整个界面的结构脊椎。所有状态节点、能力行、主按钮都「停靠」在这条线上；而**只有当前已核验的那一个节点**带低强度冰蓝辉光（静态 shadow，不动画），其余节点只是线上的暗点。信任的表达不是到处发光，是全局克制、只让一个点亮。
- **Deck —— The Ledger Reveal（审计式揭示）**：数据页把一个巨型冰蓝数字压在午夜满版上，数字正下方是一行等宽、带时间戳、右对齐的审计句，读起来像一条已countersign 的合规记录；末位数字下压一道**静止的**冰蓝下划光标。数字不是被「宣布」的营销口号，是被「记录并签字」的事实。这套的记忆点，就是把一个数呈现得像法务证据。

## Do's and Don'ts

**Do**
- 主色当信号灯用，全屏 ≤ 3 处：主按钮 / 已核验态 / 龙骨线。少亮，才值钱。
- 数字全部走等宽 tabular-nums，右对齐成柱，让金额和时间戳可被逐行核对。
- 分层靠 1px 钢灰 hairline 和网格，不靠加亮度、不靠堆投影。
- 标题与数据一律左对齐咬网格左线，留白留给「一屏一件主事」。
- 辉光只用静态 box-shadow，常亮不闪，`prefers-reduced-motion` 下全部可关。

**Don't**
- **不碰紫蓝烂大街渐变**（`#667eea → #764ba2` 及其全家桶），这是 AI 界面的身份证，本套用冰蓝单色 + 结构替代。
- **不做居中卡片三件套**（一行标题 + 一行灰副标 + 三个等宽圆角卡整页重复），本套用龙骨线串起非对称信息，左对齐。
- **中文绝不用日文字体渲染**，简体走 Noto Sans SC / PingFang SC，缺字变豆腐一律回炉。
- **不动画化阴影 / 不用 backdrop-filter**，滚动重绘会掉帧；玻璃感用半透明纯色。
- 不让语义绿红进标题，不让主色到处发光，不用 emoji 当功能图标。

## Responsive Behavior

移动端是重新编排的另一段叙事，不是桌面端缩一缩。

| 断点 | 布局 |
|---|---|
| ≥ 1200px | 12 列，龙骨线走内容区左侧，数据台多列并置 |
| 768–1199px | 8 列，数据台降为两列，卡片单列堆叠 |
| ≤ 767px | 单列，龙骨线移到屏幕最左 16px 处贯穿，节点横向对齐折成纵向清单，巨数字 clamp 收敛保证最窄屏不溢出 |

- 大标题用 `clamp()` 按最长行收字号，每行 `white-space:nowrap` 锁整行，≤390px 无孤字、无横向溢出。
- 中文限宽用 `em`/`px` 不用 `ch`，避免中文提前折行出孤字。
- 数据台在窄屏改为「一行一条记录」的卡片流，仍保留等宽对齐与 delta 胶囊。

## Anti-Slop Pledge

抹掉 Sentris 这个名字，这套依然一眼看得出是有人认真做过取舍的：它敢让整块屏幕安静下去，只留一条冰蓝龙骨和一个发光的核验点；它把每个数字排成可被逐行签字核对的审计柱；它拒绝紫蓝渐变、拒绝居中三件套、拒绝到处发光。信任不是被说出来的，是被这套克制的结构演出来的。这不是流水线生成的暗色模板，是为「企业级 AI 必须先被相信」这一件事，从头调过一遍的设计语言。

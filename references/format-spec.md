# HeiGe DESIGN.md 格式规范（Format Spec v1.0）

HeiGe DESIGN.md 在 Google `design.md` 格式之上做融合扩展：**一份设定集，同时驱动界面（HeiGe-UI）和演示（HeiGe-PPT）。**

核心约束：**front matter 严格遵守 Google 官方 schema，保证 `npx @google/design.md lint` 全绿。** 融合层和方法论放进 Markdown body 的专属章节，lint 不校验正文，随便扩展。

---

## 一、文件结构

```
---
（YAML front matter：机器可读 tokens，严格 Google schema）
---
（Markdown body：人类可读理由 + HeiGe 融合层）
```

## 二、YAML front matter（严格 lint 合规）

只允许这些顶层键：`version` `name` `description` `colors` `typography` `rounded` `spacing` `components`。**不要加自定义顶层键**（会触发 lint 报错）。

```yaml
version: alpha
name: <PascalCase 品牌名>-design-system
description: <一段话讲清这套的气质、主色逻辑、字体签名、签名手法，60-120 字英文>

colors:
  primary: "#xxxxxx"          # 品牌主色，克制使用
  on-primary: "#xxxxxx"       # 主色上的文字
  ink: "#xxxxxx"              # 正文色（深色不用纯黑，浅色不用纯白）
  canvas: "#xxxxxx"           # 页面底色
  surface: "#xxxxxx"          # 卡片面
  muted: "#xxxxxx"            # 次要文字
  hairline: "#xxxxxx"         # 1px 分隔线
  accent: "#xxxxxx"           # 至多一到两个辅助色，按气质取名
  # 数据类系统补：up/down；东方系统补：seal-red/gold；暗色补：glow

typography:                    # 每个 role 必带 fontFamily/fontSize/fontWeight/lineHeight/letterSpacing
  display-xl:
    fontFamily: "<webfont>, <系统兜底>, <中文兜底>, sans-serif|serif"
    fontSize: 56px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -1.2px
  # …display-lg / heading / body / body-mono(数字) / button / caption / eyebrow

rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  pill: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  section: 80px

components:                    # 关键：同时装 UI 组件 + slide 组件，token 引用用 {colors.x}/{typography.x}/{rounded.x}
  # —— UI 界面组件 ——
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: 12px 24px }
  button-secondary: { ... }
  card-feature: { ... }
  stat-block: { ... }
  nav-bar: { ... }
  footer: { ... }
  # —— slide 演示组件（融合 HeiGe-PPT，16:9 版式）——
  slide-cover: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.display-xl}", padding: 80px }
  slide-section-divider: { ... }   # 过渡页：纯色 + 章节号
  slide-stat-hero: { ... }         # 数据页：巨型数字 + 单位
  slide-quote: { ... }             # 金句页：占屏一句话
  slide-closing: { ... }           # 收尾页：行动号召
```

### lint 合规要点（都是真踩过的）
- 每个 `component` 若有 `textColor` + `backgroundColor`，两者对比度要 ≥ 4.5:1（lint 查 WCAG AA），否则 warning。定义颜色时先自检对比度。
- 定义的每个 `colors` / `typography` token 最好被至少一个 component 引用，否则 lint 报 unused warning。宁可少定义，别囤 token。
- 嵌套 YAML（如需要）保证缩进正确，用最新版 CLI（0.3.0 才修好嵌套解析）。
- 正文新增章节（如 `## Motion`）lint 不校验，安全；但 front matter 禁加 `motion` 顶层键，lint 虽不报错，官方 export 器会静默丢弃该键，等于白写。动效 token 一律写正文。
- 目标：`lint` 输出 0 error（warning 可接受但尽量清零）。

## 三、Markdown body（结构固定 + HeiGe 融合层）

按顺序写这些章节：

1. `## Overview`：这套的气质总述、主色的两个角色、字体签名、整体节奏。
2. `## Colors`：分 Brand & Accent / Surface / Text / Semantic，每个色标 hex + 用途。
3. `## Typography`：Font Family（含中文兜底与不用日文渲染中文的提醒）+ Hierarchy 表 + Principles。
4. `## Layout`：Spacing 系统、Grid & Container、Whitespace 哲学。
5. `## Elevation & Depth`：分层表 + 装饰性深度手法（暗色系用辉光，不用 backdrop-filter）。
6. `## Shapes`：Border Radius 表 + 图形/图片几何。
7. `## Components`：逐个 UI 组件说明。
8. `## Motion`（HeiGe 融合层，可选）：动效性格，同时服务界面和 deck。结构固定：三行定性（签名曲线 / 氛围签名 / hover 语言）+ 一张小表定量（微反馈 / 入场 / stagger）+ 一两个签名动效。曲线和档位从 `references/motion-personality.md` 的共享 token 里取，性能红线守 `references/production-checklist.md` 第三节。老设定集不加此章节完全合法，缺省按家族预设。
9. `## Presentation System`（HeiGe 融合层）：这套做成 16:9 演示时的版式，封面/过渡/数据/金句/收尾各怎么排，视觉锤放哪，对齐 HeiGe-PPT 的"一页一句话 + 黄金三秒 + 视觉锤"。
10. `## Signature Moment`（HeiGe 融合层）：明确写出这套换个模板绝对做不出来的那一个签名时刻（UI 一个 + deck 一个）。
11. `## Do's and Don'ts`：Do 若干 + Don't 若干，Don't 里必含"不碰紫蓝俗套渐变、不居中卡片三件套、中文不用日文字体"。
12. `## Responsive Behavior`：断点表 + 折叠策略（移动端要重新编排版式，禁止整页等比缩放）。
13. `## Anti-Slop Pledge`（HeiGe 融合层）：一句话承诺：抹掉品牌名，这套仍一眼看出是用心做的、非流水线生成。

## 四、字体与中文铁律（继承 HeiGe 生产铁律，写进每套）
- 每个能承载中文的 font-family 栈末尾必带系统兜底：无衬线 `..., "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif`；衬线 `..., "Noto Serif SC", "Songti SC", serif`。
- 中文绝不用日文字体（Mochiy/Zen Maru 等）渲染，简体会缺字变豆腐。
- 拉丁展示字体也补系统兜底，断网不塌成 Times。
- 暗色系辉光只用 box-shadow / radial-gradient，不用 backdrop-filter，不动画化阴影。

## 五、命名与署名
- `name:` 用小写连字符 slug 派生的系统名，品牌展示用图谱里的中文名。
- 全部原创虚构品牌，不逆向任何真实公司。描述里不得出现真实品牌名当"参考对象"。
- 署名 HeiGe-Design，MIT，无致谢。

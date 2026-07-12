---
name: HeiGe-Design
description: 给 AI 一张视觉角色卡。50 套原创品牌设定集（DESIGN.md 格式），一份同时驱动界面和演示。当用户要做界面/落地页/组件/演示 deck 且希望有明确设计风格、摆脱默认 AI 模板味时使用；也用于从任意网站提取设计规范、校验/导出设计 token。触发词：做个页面要 XX 风、给我 DESIGN.md、按某套风格生成、提取这个网站的设计、导出 Tailwind token、这套过 lint 吗。
---

# HeiGe·Design — 视觉设定集工具

一个 AI 做设计时的"视觉角色卡"库。50 套原创虚构品牌设定集，覆盖 11 个气质家族（凶悍工业 / 暗色科技 / 优雅编辑 / 瑞士纪律 / 复古未来 / 有机自然 / 玩味玩具 / 温暖人文 / 张扬极繁 / 奢侈高定 / 东方新中式）。兼容 Google design.md 标准，全过 lint。一份设定集同时驱动网页界面和 16:9 演示。

## 什么时候用

- 要做落地页 / 界面 / 组件 / 演示 deck，且想要一个明确的、非默认模板味的设计风格。
- 想从一个现成网站提取设计规范当起点。
- 想把一套设计 token 导出成 Tailwind v4/v3 / CSS 变量 / W3C DTCG。
- 想校验一份 DESIGN.md 是否结构正确、对比度达标。

## 核心工作流：按某套风格生成一版界面

1. **选风格**：`heige-design list` 或看 `site/index.html` 画廊，挑一套（例如暗色科技就用 `nocturne-teal`）。
2. **取提示词**：`heige-design build <slug>` 打印可直接粘给 coding agent 的生成提示词（已内置该套主色/字体/签名时刻/Do-Don't/自查步骤）。
3. **读设定集**：让 agent 读 `systems/<slug>/DESIGN.md`，把 `exports/variables.css` 或 `exports/tailwind-v4.css` 接进项目主题层。
4. **先复述再动手**：要求 agent 先输出 5 条不可违反的视觉原则 + 页面结构草案，再写代码。
5. **验收**：用该套的 `## Do's and Don'ts` 逐条自查；`heige-design lint <slug>` 确认 0 error。
6. **要演示版**：用同一份 DESIGN.md 的 `slide-*` 组件产出 16:9 deck，一份设定集同时出界面和 PPT。

## 命令速查

```
heige-design list [家族]          列出系统
heige-design show <slug>          看详情与资产路径
heige-design build <slug>         打印生成提示词（最常用）
heige-design export <slug> --format tailwind-v4|tailwind-v3|css-vars|dtcg
heige-design lint <slug|all>      官方 lint（含 WCAG 对比度）
heige-design diff <A> <B>         对比两套差异
heige-design ingest <url> [slug]  从网站提取 DESIGN.md 草稿（自研，无付费API）
heige-design site                 重建校验+导出+画廊+详情页
```

## 铁律（每次生成都要守）

- 主色只给关键 CTA 和强调，克制使用。
- 中文字体栈末尾必带系统兜底（PingFang/YaHei/思源），中文不用日文字体渲染。
- 大标题零孤字；辉光只用 box-shadow / radial-gradient，不用 backdrop-filter；无限动画只动 transform/opacity。
- 复现该套 DESIGN.md 里写死的签名时刻，这是它区别于模板的地方。
- 不碰紫蓝俗套渐变，不做居中卡片三件套。

## 想要一套全新风格

`heige-design ingest <某个你喜欢的网站>` 提取一份草稿设定集，再人工补齐设计理由和签名时刻，跑 lint 收口。或直接参考 `references/aesthetic-atlas.md` 的家族配方自创。

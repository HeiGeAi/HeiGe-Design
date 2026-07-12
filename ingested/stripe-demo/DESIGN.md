---
version: alpha
name: stripe-demo-extracted
description: Draft design system extracted from https://stripe.com by HeiGe-Design ingest (playwright CSSOM). Review and refine before use — extracted tokens are approximate, not ground truth.

colors:
  primary: "#533afd"
  on-primary: "#111111"
  ink: "#000000"
  canvas: "#ffffff"
  surface: "#e5edf5"
  muted: "#533afd"
  hairline: "#e5edf5"

typography:
  display-xl:
    fontFamily: "sohne-var, 'SF Pro Display', sans-serif, system-ui, "Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.02em
  body-md:
    fontFamily: "sohne-var, 'SF Pro Display', sans-serif, system-ui, "Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  button:
    fontFamily: "sohne-var, 'SF Pro Display', sans-serif, system-ui, "Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif"
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0

rounded:
  sm: 6px
  md: 4px
  pill: 9999px

spacing:
  sm: 8px
  md: 16px
  lg: 24px
  section: 80px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 24px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 24px
  body-text:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 0px
---

## Overview

Draft design system extracted from **https://stripe.com** (Stripe | Financial Infrastructure to Grow Your Revenue). Base canvas is light (`#ffffff`), ink `#000000`, with `#533afd` acting as the primary accent. This is an **approximate extraction** from computed CSS, not the site's real design system — treat it as a starting draft, then refine tokens, add the brand's rationale, and run `heige-design lint stripe-demo`.

## Colors
- **Primary** (`#533afd`): main accent / CTA.
- **Ink** (`#000000`): body text.
- **Canvas** (`#ffffff`) / **Surface** (`#e5edf5`): page and card backgrounds.
- **Muted** (`#533afd`): secondary text. **Hairline** (`#e5edf5`): borders.

## Typography
Display stack extracted as `sohne-var, SF Pro Display, sans-serif`; body `sohne-var, SF Pro Display, sans-serif`. 中文字体栈已补系统兜底，中文不用日文字体。

## Do's and Don'ts
### Don't
- 不碰紫蓝俗套渐变(#667eea→#764ba2)。
- 不做居中卡片三件套。
- 中文不用日文字体渲染。
- 不动画化阴影。

## Anti-Slop Pledge
这是自动提取的草稿，需人工补齐设计理由和签名时刻后才算成品。

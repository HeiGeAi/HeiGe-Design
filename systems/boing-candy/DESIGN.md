---
version: alpha
name: boing-candy-design-system
description: >-
  boing-candy is HeiGe-Design's high-bounce candy system for consumer tools and
  lightweight SaaS. A cotton-pink canvas, a bubblegum primary that carries deep
  grape ink instead of timid white, and mint plus lemon accents stacked like a
  gumball dispenser. Fat rounded Baloo 2 display lands with squash-and-stretch
  spring; the gumdrop mascot Bibo peeks between the cards. One token set drives
  both the interface and the 16:9 deck, and nothing floats on the flat blur
  shadows that give AI slop away.

colors:
  primary: "#FF5CA8"
  on-primary: "#2E1A47"
  ink: "#2E1A47"
  canvas: "#FFF6FB"
  surface: "#FFFFFF"
  muted: "#7A5C8E"
  hairline: "#F1D9E8"
  accent: "#33D9B2"
  accent-2: "#FFD836"

typography:
  display-xl:
    fontFamily: '"Baloo 2", "Bagel Fat One", "ZCOOL KuaiLe", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 76px
    fontWeight: 800
    lineHeight: 1.0
    letterSpacing: -1.5px
  display-lg:
    fontFamily: '"Baloo 2", "Bagel Fat One", "ZCOOL KuaiLe", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 52px
    fontWeight: 800
    lineHeight: 1.06
    letterSpacing: -1px
  heading:
    fontFamily: '"Baloo 2", "ZCOOL KuaiLe", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 26px
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: -0.3px
  body:
    fontFamily: '"Nunito", "PingFang SC", "Noto Sans SC", "Microsoft YaHei", sans-serif'
    fontSize: 17px
    fontWeight: 500
    lineHeight: 1.62
    letterSpacing: 0.1px
  numeric:
    fontFamily: '"Baloo 2", "Bagel Fat One", "Nunito", "PingFang SC", "Noto Sans SC", sans-serif'
    fontSize: 88px
    fontWeight: 800
    lineHeight: 0.94
    letterSpacing: -2px
  button:
    fontFamily: '"Baloo 2", "Nunito", "PingFang SC", "Noto Sans SC", "Microsoft YaHei", sans-serif'
    fontSize: 17px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: 0.2px
  caption:
    fontFamily: '"Nunito", "PingFang SC", "Noto Sans SC", "Microsoft YaHei", sans-serif'
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.45
    letterSpacing: 0.2px
  eyebrow:
    fontFamily: '"Nunito", "PingFang SC", "Noto Sans SC", "Microsoft YaHei", sans-serif'
    fontSize: 13px
    fontWeight: 800
    lineHeight: 1.0
    letterSpacing: 1.5px

rounded:
  sm: 10px
  md: 18px
  lg: 28px
  xl: 44px
  pill: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  section: 80px

components:
  # —— UI 界面组件 ——
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "{spacing.md} {spacing.xl}"
  button-secondary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "{spacing.md} {spacing.xl}"
  eyebrow-label:
    backgroundColor: "{colors.accent-2}"
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
  chip-tag:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
  divider-rule:
    backgroundColor: "{colors.hairline}"
    rounded: "{rounded.pill}"
    height: 2px
    width: 100%
  card-feature:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
  card-candy:
    backgroundColor: "{colors.accent-2}"
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
  stat-block:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
    typography: "{typography.numeric}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg} {spacing.xl}"
  caption-note:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
    rounded: "{rounded.pill}"
    padding: "{spacing.sm} {spacing.lg}"
  footer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.caption}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
  # —— slide 演示组件（16:9 融合 HeiGe-PPT）——
  slide-cover:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.xl}"
    padding: "{spacing.section}"
  slide-section-divider:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.xl}"
    padding: "{spacing.section}"
  slide-stat-hero:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
    typography: "{typography.numeric}"
    rounded: "{rounded.xl}"
    padding: "{spacing.section}"
  slide-quote:
    backgroundColor: "{colors.accent-2}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.xl}"
    padding: "{spacing.section}"
  slide-closing:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.xl}"
    padding: "{spacing.section}"
---

# boing-candy · 弹跳糖

> A consumer-tool candy system that behaves like a toy. Everything is round, everything is edible-bright, and everything lands with a bounce.

## Overview

弹跳糖 gives lightweight consumer products a personality most SaaS is too nervous to try: **傻气、可爱、会弹会跳**。The system runs on one deliberately unusual decision — the bright candy fills never carry white text. They carry **deep grape ink (`#2E1A47`)**, a near-black plum that reads as "candy dark" rather than corporate black. That single move keeps the palette loud and legible at the same time, and it is why the whole thing feels like a gumdrop instead of a dashboard.

The primary plays two roles. As **fill**, bubblegum `#FF5CA8` is the boing anchor — the button you press, the section you can't miss. As **energy**, it sets the temperature for the two accents that fan out beside it: mint `#33D9B2` and lemon `#FFD836`, stacked like sweets in a dispenser. Grape ink is the third role, doing all the reading work so the candy colors never have to compromise their brightness to stay accessible.

Type is **fat and round on purpose**. Baloo 2 at weight 800 for display, Nunito for body, ZCOOL KuaiLe as the Chinese playful fallback so 中文标题 stays chunky and never collapses into a thin system serif. Rhythm comes from **hard candy shadows and squash-and-stretch spring**, not from the soft uniform blur that marks a page as machine-made.

## Colors

### Brand & Accent
| Token | Hex | Name | Role |
|---|---|---|---|
| `primary` | `#FF5CA8` | Bubblegum | The boing anchor — CTAs, section fills, the visual hammer. Loud, but always paired with grape ink. |
| `on-primary` | `#2E1A47` | Grape Ink | Text that sits on bubblegum. Contrast 5.42:1 — bright and readable at once. |
| `accent` | `#33D9B2` | Mint | Fresh candy accent — secondary buttons, stat tiles, the mint gumball in the stack. |
| `accent-2` | `#FFD836` | Lemon | Sour-candy pop — quote slides, feature cards, eyebrow tags. The highest-energy fill. |

### Surface
| Token | Hex | Name | Role |
|---|---|---|---|
| `canvas` | `#FFF6FB` | Cotton | Page base — a pale candy-floss white, warm pink so pure white cards lift off it. |
| `surface` | `#FFFFFF` | Sugar | Card face. Clean white gives the candy fills contrast to bounce against. |
| `hairline` | `#F1D9E8` | Floss Line | Pale pink 2px borders and the tinted hard shadow under white cards. |

### Text
| Token | Hex | Name | Role |
|---|---|---|---|
| `ink` | `#2E1A47` | Grape Ink | Every headline and paragraph. Deep plum, never pure black. |
| `muted` | `#7A5C8E` | Grape Mist | Captions and metadata. Muted grape, still clears 4.5:1 on both white and cotton. |

### Semantic
弹跳糖 stays intentionally light on semantic color — a candy tool should not read like a trading terminal. Positive / "yay" states borrow **mint**; attention / "oops" states borrow **bubblegum**. No separate up/down tokens; the mood is carried by shape and bounce, not by red-green alarms.

## Typography

### Font Family
- **Display / Numeric** — `Baloo 2` (weight 800) leads, `Bagel Fat One` as the ultra-fat alternate, then `ZCOOL KuaiLe` for Chinese, then system fallbacks. Fat, rounded, friendly.
- **Body / Button / Caption / Eyebrow** — `Nunito` (a rounded humanist sans) leads, Chinese falls to `PingFang SC` / `Noto Sans SC`.
- **中文铁律**：能承载中文的每条字体栈末尾都带系统兜底 `"PingFang SC", "Noto Sans SC", "Microsoft YaHei"`。中文展示体用 **ZCOOL KuaiLe**（俏皮圆体），**绝不用日文字体**（Mochiy / Zen Maru）渲染简体，否则缺字变豆腐。ZCOOL KuaiLe 只有单一字重，渲染中文标题时给 CJK 关掉合成加粗（`font-synthesis: none`），用它的原生字形，别让 800 的请求把它糊成一坨。断网时 Baloo 2 / Bagel Fat One 也有系统兜底，标题不塌成 Times。

### Hierarchy
| Role | Size | Weight | Line | Tracking | Use |
|---|---|---|---|---|---|
| `display-xl` | 76px | 800 | 1.0 | -1.5px | Cover title, hero headline |
| `display-lg` | 52px | 800 | 1.06 | -1px | Section dividers, quotes, closing |
| `heading` | 26px | 700 | 1.18 | -0.3px | Card titles, nav brand |
| `body` | 17px | 500 | 1.62 | 0.1px | Paragraphs, card copy |
| `numeric` | 88px | 800 | 0.94 | -2px | Stat tiles, stat-hero slide |
| `button` | 17px | 700 | 1.0 | 0.2px | Button labels |
| `caption` | 13px | 600 | 1.45 | 0.2px | Captions, footer, chips |
| `eyebrow` | 13px | 800 | 1.0 | 1.5px | Kickers, tags (uppercase in use) |

### Principles
- **Contrast ratio 1:4.6** between body (17px) and display-xl (76px). The big fat title is allowed to be almost cartoonishly large — that's the point.
- Headlines can wrap, but never orphan a single character. Manual line breaks nowrap each line; `clamp()` on display-xl keeps the longest line inside a 390px screen.
- Numbers are the loudest element on any data screen — 88px fat digits do the shouting so the surrounding copy can stay calm.

## Layout

### Spacing
An 8px-rooted scale — `xs 4 · sm 8 · md 16 · lg 24 · xl 40 · section 80` — but candy layouts spend it generously. Cards get `xl` (40px) padding so the round corners have room to feel round; slides get `section` (80px) so the bounce has air to bounce in.

### Grid & Container
- 12-column grid, 1120px max content width, 24px gutters.
- Cards are **not** forced into equal rows. 弹跳糖 fans them: slight rotations (-3° to +3°), overlapping edges, staggered vertical offsets. Order over symmetry, playground over spreadsheet.
- Deck frame is a fixed 1280×720 (16:9) safe area with 80px margins.

### Whitespace Philosophy
Cotton canvas is the negative space, and it is warm on purpose — a faint pink white so the eye reads "sweet" before it reads a single word. Whitespace clusters the candy, then opens up: a dense fanned card-stack, then a wide-open band of cotton, then one giant number. Breathing room is where the bounce reads.

## Elevation & Depth

弹跳糖 refuses the soft `0 4px 6px rgba(0,0,0,.1)` blur that every AI page ships. Depth here is **hard, tinted, and offset** — the look of a physical toy, not a floating panel.

| Layer | Treatment |
|---|---|
| Flat (canvas) | No shadow. Cotton base. |
| Raised (card) | Hard offset shadow in a darker tint of the card's own color, no blur: white card → `0 12px 0 #F1D9E8`; lemon card → `0 12px 0 #E0B800`. |
| Pressed (button) | `0 6px 0 #C81C68` at rest; on `:active` the button translates down 6px and the shadow collapses to 0 — it physically depresses. |
| Overlay (mascot / sticker) | Bibo and sticker elements sit above with a tiny `0 4px 0` and a soft rotation. |

Rules: shadows are **solid color, zero blur, never animated**. The 3D candy feel comes from the offset and the tint, both cheap to render and rock-steady on scroll.

## Shapes

### Border Radius
| Token | Value | Use |
|---|---|---|
| `sm` | 10px | Eyebrow tags, tiny badges |
| `md` | 18px | Caption notes, inline chips |
| `lg` | 28px | Stat tiles |
| `xl` | 44px | Feature cards, candy cards, every slide frame |
| `pill` | 9999px | Buttons, chips, nav bar |

### Geometry
Everything trends toward the circle. Buttons are pills, the nav bar is a floating pill, cards carry a generous 44px radius, and the recurring motif is the **gumdrop** — a circle with a slightly squashed, flat-ish bottom, as if it just landed. Images are masked into blobs and rounded rectangles, never left as hard photo squares. Decorative circles (gumballs) scatter the background in primary / mint / lemon.

## Components

- **button-primary** — Bubblegum pill, grape-ink label, `0 6px 0` hard shadow. `:hover` lifts 2px and grows to 1.03 scale; `:active` drops 6px into its shadow. This is the boing in its smallest form.
- **button-secondary** — Mint pill, same mechanics, mint-dark shadow. For the calmer of two candy choices.
- **eyebrow-label** — A tiny lemon tag with tracked uppercase eyebrow type. The kicker that announces a section.
- **chip-tag** — White pill with a 2px floss-line border. Filters, categories, tags — the quiet candy.
- **divider-rule** — A 2px floss-line pill that separates dense card clusters from the open cotton bands. The one intentionally calm element.
- **card-feature** — White card, 44px radius, floss-line border, `0 12px 0` pink hard shadow. Fans at a slight rotation in a stack; `:hover` straightens to 0° and lifts.
- **card-candy** — A fully-filled lemon (or mint / bubblegum) card for the loud content. Grape-ink heading, no border needed — the color is the border.
- **stat-block** — Mint tile with an 88px fat number. The number is the hero; the label sits small and muted beneath.
- **caption-note** — White note with grape-mist muted text for the fine print that still needs to clear contrast.
- **nav-bar** — A floating cotton pill with a floss-line border, brand in fat heading type. It hovers slightly off the top edge, never full-bleed.
- **footer** — The one deep-grape block on the page, cotton text, a big 44px radius. Grounds the sugar rush at the bottom.

States are real, not decorative: `:focus-visible` draws a 3px bubblegum ring; loading uses three bouncing gumball dots (transform-only); empty states put Bibo front and center with one friendly line. All of it honors `prefers-reduced-motion`.

## Presentation System

16:9, **一页一句话**. A candy deck earns attention by being the least boring slide in the room, so each slide commits to a single loud idea and lets cotton whitespace carry the rest.

- **Cover (slide-cover)** — Cotton canvas, giant fat display-xl title, a **vertical stack of gumball circles** (primary / mint / lemon) down one side like a candy dispenser, and Bibo peeking from behind the title. 黄金三秒：the fat title plus the gumball stack tells you "this is playful" before you read a word.
- **Section divider (slide-section-divider)** — Full **bubblegum** slide, giant chapter number `01 / 02` in grape ink sitting inside a squashed gumdrop silhouette, mid-bounce. A faint dotted arc trails behind it. This is the **视觉锤** — the drop.
- **Stat hero (slide-stat-hero)** — Mint slide, one 88px fat number owning the center, unit and label small beneath. One number, one message.
- **Quote (slide-quote)** — Lemon slide, one sentence in display-lg grape ink, oversized rounded quotation marks as gumball shapes. The loudest color for the loudest line.
- **Closing (slide-closing)** — The deep-grape finale slide. Cotton text, one call to action rendered as a real bubblegum button. Sugar rush lands, then rests.

Rhythm across the deck is a rainbow: **cotton → bubblegum → mint → lemon → grape**. Bright-open, bright-loud, calm, loud, dark-rest. That contour is the deck's张弛.

## Signature Moment

**UI — The Landing Boing.** Cards drop in from above and **overshoot**, then settle with a spring: `translateY` springs past zero, `scaleY` squashes to 0.9 on impact and stretches back to 1.0, the card ends a few degrees rotated in a fanned stack. Bibo, the two-tone gumdrop mascot, bounces once beside the stack when it lands. Every frame animates only `transform` and `opacity` — no shadow re-render, no blur, no jank — and `prefers-reduced-motion` swaps the whole thing for a clean fade. Change the template and you lose the squash-and-stretch; it's baked into the physics, not the pixels.

**Deck — The Gumdrop Divider.** Every section transition is a full-bubblegum slide where the giant chapter number lives **inside a squashed candy-drop silhouette caught mid-bounce**, with a dotted bounce-trail arcing in from off-slide. It reads as a single gumdrop falling into the deck and flattening on landing. No stock template ships a chapter marker that behaves like a dropped sweet — this is the moment nobody can copy without rebuilding the bounce.

## Do's and Don'ts

### Do
- Do put **grape ink on bright candy fills** — that pairing is the whole identity.
- Do fan cards with slight rotation and stagger; let them overlap and land unevenly.
- Do use **hard, tinted, zero-blur offset shadows** for the toy-like 3D depth.
- Do let the biggest number or title be almost cartoonishly large.
- Do keep bubblegum as the anchor and mint / lemon as the supporting stack — three candies, not ten.
- Do give the mascot Bibo a real job: empty states, loading, cover, celebration.

### Don't
- **不碰紫蓝俗套渐变**（`#667eea → #764ba2` 及其全家桶）。This candy palette is saturated and multi-hue on purpose; it must never devolve into the AI-signature blue-purple wash.
- **不做居中卡片三件套** — no "one title, one grey subtitle, three equal centered cards" repeated down the page. Fan them, tilt them, stagger them.
- **中文绝不用日文字体**（Mochiy / Zen Maru 等）渲染，简体缺字变豆腐；中文展示用 ZCOOL KuaiLe，正文用 PingFang SC / Noto Sans SC。
- **不动画化阴影** — the boing is transform-and-opacity only. Never animate `box-shadow` / `text-shadow`, never use `backdrop-filter`, never animate a blurred layer.
- Don't put white text on the bright candy fills — it fails contrast and mutes the sugar. Grape ink, always.
- Don't let the whole page bounce at once. One or two signature springs; the rest holds still.

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| ≥1120px | Full 12-col grid, fanned card stacks, floating pill nav, gumball background scatter. |
| 768–1119px | Cards de-fan to a 2-up grid but keep rotation and hard shadows; nav pill stays floating. |
| <768px | **Re-choreographed, not shrunk.** Cards go single-column and full-width; the boing gets *bigger* (a phone tap deserves a fatter bounce); the gumball dispenser moves from the side to a horizontal row above the fold; nav collapses into a single bubblegum pill button; Bibo shrinks to a corner peek. |

Mobile keeps the deck's one-idea-per-screen logic: on phones the slides become full-bleed vertical cards and the section-divider gumdrop scales to fill the width. `clamp()` guards every display size so the longest headline line never orphans a character or overflows at 390px.

## Anti-Slop Pledge

抹掉品牌名，这一套依然一眼看得出是有人真的坐下来把它捏圆、捏弹、捏出脾气的。糖果多色不是随手撒的高饱和，是主色定温、双味围拢、深葡萄墨兜住可读性的一套配方；弹跳不是加了个 transition，是 squash-and-stretch 的物理；立体感是硬糖阴影不是那层出卖 AI 的模糊。它会弹、会跳、会认字，不是流水线生成的。署名 HeiGe-Design。

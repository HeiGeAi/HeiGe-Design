---
version: alpha
name: Clayfield-design-system
description: Clayfield is a hand-thrown, sun-baked wellness identity. Fired terracotta is the load-bearing brand color set against oat cream, with sage green as its garden companion. A rounded humanist sans (Nunito) carries the everyday voice while a warm serif (Fraunces) punctuates it at eyebrows, pull-quotes and hero numerals. Every image is masked to a unique thrown-clay blob over a paper-grain field — never a rounded rectangle, never a drop-shadow, never a purple gradient.

colors:
  primary: "#a8482a"      # fired terracotta — kiln-baked, load-bearing brand color (buttons, cover, closing)
  on-primary: "#faf5ec"   # kiln cream — text pressed onto terracotta
  ink: "#3a2e26"          # baked earth — warm near-black body text, never pure #000
  canvas: "#f2e9dc"       # oat cream — the page, the tabletop
  surface: "#fbf5ea"      # clay slab — card face, a shade lighter than canvas
  muted: "#6f5f52"        # kiln smoke — warm taupe secondary text (AA-safe)
  hairline: "#e2d5c2"     # soft clay line — 1px seams and borders
  clay: "#c96f4a"         # raw clay — decorative blob fill only, the seed terracotta, never carries small text
  sage: "#9caf88"         # sage — the garden companion, chips and section fields with ink text

typography:
  eyebrow:
    fontFamily: '"Fraunces", "Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 2.5px
  display-xl:
    fontFamily: '"Nunito", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif'
    fontSize: 72px
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: -1.5px
  display:
    fontFamily: '"Nunito", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif'
    fontSize: 44px
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: -0.6px
  heading:
    fontFamily: '"Nunito", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif'
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -0.2px
  body:
    fontFamily: '"Nunito", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif'
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0px
  quote:
    fontFamily: '"Fraunces", "Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: 30px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: -0.2px
  figure:
    fontFamily: '"Fraunces", "Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: 88px
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: -2px
  button:
    fontFamily: '"Nunito", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif'
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0.3px
  caption:
    fontFamily: '"Nunito", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif'
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0.2px

rounded:
  sm: 8px
  md: 16px
  lg: 28px
  xl: 44px
  pill: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  section: 96px

components:
  # —— UI 界面组件 ——
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "{spacing.lg} {spacing.xl}"
  divider:
    backgroundColor: "{colors.hairline}"
    height: 1px
    padding: "0"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "{spacing.md} {spacing.xl}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "{spacing.md} {spacing.xl}"
  tag-chip:
    backgroundColor: "{colors.sage}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
  eyebrow-label:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.eyebrow}"
    padding: "{spacing.xs} 0"
  card-feature:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xl}"
  body-text:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: "0"
  caption-note:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    padding: "{spacing.sm} 0"
  stat-block:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.figure}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg} {spacing.xl}"
  blob-media:
    backgroundColor: "{colors.clay}"
    rounded: "{rounded.lg}"
    padding: "0"
  input-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  footer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: "{spacing.section} {spacing.xl}"
  # —— slide 演示组件（融合 HeiGe-PPT · 16:9）——
  slide-cover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.xl}"
    padding: "{spacing.section}"
  slide-section-divider:
    backgroundColor: "{colors.sage}"
    textColor: "{colors.ink}"
    typography: "{typography.display}"
    rounded: "{rounded.md}"
    padding: "{spacing.section}"
  slide-stat-hero:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.figure}"
    rounded: "{rounded.md}"
    padding: "{spacing.section}"
  slide-quote:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.quote}"
    rounded: "{rounded.lg}"
    padding: "{spacing.section}"
  slide-closing:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.xl}"
    padding: "{spacing.section}"
---

# Clayfield · 陶土

> A wellness identity thrown on a wheel, not stamped from a template. Kiln-fired terracotta, oat cream, a sprig of sage — every surface remembers the hand that shaped it.

## Overview

Clayfield is what a health-and-food brand looks like when it refuses to hide behind sterile white space. The whole system behaves like a piece of **hand-thrown pottery**: warm, slightly imperfect, sun-baked, and unmistakably made by a person.

主色扮演两个角色。**Fired terracotta `#a8482a`** is the load-bearing voice — it fills covers, presses into buttons, and closes decks. Its lighter sibling **raw clay `#c96f4a`** never carries text; it lives only as the fill of the organic blobs and hand-drawn illustration, the color of wet clay before the kiln. 奶油 `#f2e9dc` 是桌面，是呼吸，是让陶土显得温热的底。**Sage `#9caf88`** 是花园里的那一株，只在标签和过渡页出场，从不喧宾夺主。

字体签名是一场**圆润无衬线 + 温暖衬线的对话**。Nunito 的软圆终端是日常的嗓音，亲切、松弛；Fraunces 只在最有分量的三个位置现身 —— eyebrow 小标、pull-quote 金句、和 hero 数字，像手工品上那一枚落款印。

节奏靠版式不靠堆色：three colors, a lot of oat-cream silence, and one physically-modeled clay blob per screen doing all the heavy lifting.

## Colors

### Brand & Accent
| Token | Hex | Role |
|---|---|---|
| `primary` | `#a8482a` | Fired terracotta. Load-bearing brand color: buttons, cover fields, closing CTA. Passes AA on cream (5.3:1). |
| `clay` | `#c96f4a` | Raw clay. The seed terracotta, kept **decorative only** — fills blobs and illustration, never carries small text (fails AA as a text bg). |
| `sage` | `#9caf88` | Sage green. The garden companion — chips, section-divider fields, botanical line art. Carries ink text at 5.6:1. |

### Surface
| Token | Hex | Role |
|---|---|---|
| `canvas` | `#f2e9dc` | Oat cream. The page, the tabletop. |
| `surface` | `#fbf5ea` | Clay slab. Card faces, one shade up from canvas so cards read as objects resting on the table, not holes cut into it. |
| `hairline` | `#e2d5c2` | Soft clay seam. 1px borders and the hand-inked blob contour tint. |

### Text
| Token | Hex | Role |
|---|---|---|
| `ink` | `#3a2e26` | Baked earth. Body and headings — a warm near-black, **never pure `#000`** (pure black looks industrial against cream). 10.9:1 on canvas. |
| `on-primary` | `#faf5ec` | Kiln cream. Text pressed onto terracotta and onto the dark footer. |
| `muted` | `#6f5f52` | Kiln smoke. Secondary captions and metadata, deliberately darkened to clear AA (5.1:1 on canvas). |

**Color discipline.** Terracotta is a spice, not a wall. Fire it in blocks — a whole cover, a whole button — then step back and let oat-cream do the breathing. Sage appears at most once per view. If a screen needs a fourth color to feel alive, the layout has failed, not the palette.

## Typography

### Font Family
- **Rounded sans (workhorse):** `Nunito` — humanist, soft-terminal, warm. Carries nav, headings, body, buttons, captions.
- **Warm serif (the seasoning):** `Fraunces` — organic, slightly wonky old-style serif. Restricted to eyebrows, pull-quotes, and hero numerals. It is the落款印, not the paragraph.

**中文兜底铁律.** Nunito 不含 CJK，字栈末尾必挂 `"Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif`；Fraunces 衬线栈末尾挂 `"Noto Serif SC", "Songti SC", "STSong", serif`。断网 webfont 加载失败时，中文照样干净落在思源/苹方上，绝不塌成 Times 或豆腐块。**中文一律不用日文字体渲染**（简体缺字变豆腐）。

### Hierarchy
| Role | Font | Size / Weight | Use |
|---|---|---|---|
| `display-xl` | Nunito 800 | 72 / -1.5 tracking | Cover statement, one big warm sentence |
| `display` | Nunito 800 | 44 / -0.6 | Section titles, divider words |
| `heading` | Nunito 700 | 24 | Card titles |
| `body` | Nunito 400 | 17 / 1.7 leading | Paragraphs — generous line height is the wellness tell |
| `quote` | Fraunces 400 | 30 (italic in use) | Pull-quotes — the serif enters here |
| `figure` | Fraunces 600 | 88 / tabular-nums | Hero numerals, stats — warm serif digits |
| `eyebrow` | Fraunces 600 | 13 / +2.5, uppercase | Kicker labels above headings |
| `button` | Nunito 700 | 16 | Actions |
| `caption` | Nunito 500 | 14 | Metadata, footnotes |

### Principles
- **Contrast ≥ 1:4.** The cover `display-xl` (72) against `body` (17) is more than four to one — the big one is allowed to feel almost too big.
- **Serif is punctuation.** Fraunces earns its place three times per page maximum. Over-use it and the handcraft feel curdles into a wedding invitation.
- **`figure` uses `font-variant-numeric: tabular-nums`** so stacked stats stay column-aligned like a ledger of harvest weights.
- **Left-align by default.** Body copy runs ragged-right off a left edge; only the cover slab and the quote center, and only inside their organic shape.

## Layout

### Spacing
An 8-based scale that breathes wide: `xs 4 · sm 8 · md 16 · lg 24 · xl 40 · section 96`. The jump from `xl` to `section` is deliberate and large — sections are separated by a full field of oat-cream, the way objects on a wooden table have room around them.

### Grid & Container
- 12-column grid, **1120px** max content width, 24–40px gutters.
- Content is **not** trapped in a centered column. The signature move is an **asymmetric two-field split**: a clay blob field on one side (40%), text ragged off a left edge on the other (60%), swapping sides down the page so nothing feels stamped.
- Vertical rhythm is loose. When in doubt, add another `section` of silence rather than another divider line.

### Whitespace Philosophy
Whitespace here is oat-cream *tabletop*, not emptiness. It exists so each thrown-clay object has room to cast its own presence. Never fill a gap just because it is there — the breathing room **is** the luxury signal in a handcraft system.

## Elevation & Depth

Clayfield has almost no drop-shadows. Depth comes from **physical stacking of clay slabs**, not from blur.

| Level | Technique |
|---|---|
| Flat | Elements sit directly on canvas, separated by a 1px `hairline` seam. |
| Slab | A `surface` card offset by a **solid `sage` blob 8–12px behind it** — a second slab of clay peeking out, not a soft shadow. |
| Pressed | The cover headline sits inside a cream blob *pressed into* the terracotta field — depth read as an indentation, via a 1px inner `hairline`. |

**Texture over shadow.** Every large field carries a subtle **paper-grain / clay-grain overlay** (a tiling PNG or SVG turbulence at ~6% opacity, `mix-blend-mode: multiply`). This is the single most important depth cue and it is completely static — it must never animate. No `backdrop-filter` anywhere; frosted glass is the opposite of fired clay.

## Shapes

### Border Radius
| Token | Value | Use |
|---|---|---|
| `sm` | 8px | Input fields, nav seams |
| `md` | 16px | Inputs, small media, divider blocks |
| `lg` | 28px | Cards, stat blocks, quote slabs |
| `xl` | 44px | Cover slab, feature cards, closing field |
| `pill` | 9999px | Buttons and chips — soft river pebbles |

### The thrown blob
The defining shape is **not** in the radius scale because a single radius can't describe it. Media and hero shapes use an **asymmetric organic blob** via `border-radius` shorthand, e.g. `62% 38% 55% 45% / 48% 60% 40% 52%`, with a **different value seeded per instance** so no two blobs are twins. Backed by a paper-grain fill and a 2px hand-inked `ink` contour. Buttons and chips stay `pill`; structural cards stay `xl`. **No element is a plain rounded rectangle** — that is the AI-slop tell this whole system is built to avoid.

## Components

- **nav-bar** — oat-cream bar, ink wordmark left, a single terracotta `button-primary` right. Bottom seam is 1px `hairline`, not a shadow.
- **button-primary** — fired terracotta pill, cream label. The one loud element per view.
- **button-secondary** — cream pill, terracotta label, hairline outline. Quiet sibling.
- **tag-chip** — sage pill with ink text for ingredients, categories, "organic / gluten-free" style labels.
- **card-feature** — clay-slab surface, `xl` radius, backed by an offset sage blob for the stacked-slab depth. Eyebrow (Fraunces) + heading (Nunito) + body, all left-aligned, never a centered trio.
- **stat-block** — surface slab holding a giant Fraunces `figure` in terracotta over a muted caption. Harvest-ledger feel.
- **blob-media** — the signature: any photo masked to a per-instance thrown blob, raw-clay fill showing at the edges, 2px hand-inked contour, paper-grain overlay, a pressed thumbprint seal lower-left.
- **input-field** — surface fill, hairline border, `md` radius, generous 16px padding. Focus state warms the border to terracotta (no glow).
- **footer** — baked-earth `ink` field, cream text, sage links, a single botanical line-drawing sprig growing off the top edge.

Interaction states stay **physical, not glowy**: hover lifts a card 2px and deepens its sage backing slab; press settles it back down. `prefers-reduced-motion` removes the lift entirely.

## Presentation System

Clayfield decks are 16:9 fields of fired clay and oat cream — 一页一句话, 黄金三秒立住手作温度, 视觉锤永远是那块 thrown-clay 陶片。

- **slide-cover** — full-bleed **fired terracotta**. A single cream clay-slab blob pressed center-left holds one Fraunces-flavored sentence (`display-xl`). A sage botanical sprig grows off the slab's top edge; one thumbprint seal stamped in the corner. Three seconds, one sentence, one shape.
- **slide-section-divider** — a calm **sage** field, oversized chapter word in `display`, a Fraunces `figure` chapter number (01 / 02) pressed into the corner. The palette shift from terracotta to sage *is* the transition.
- **slide-stat-hero** — oat-cream field, one enormous terracotta Fraunces number filling the left two-thirds, unit and one-line context ragged off it. Never more than one number per slide.
- **slide-quote** — clay-slab surface, a 30px Fraunces italic pull-quote inside a blob, attribution in muted caption below. The serif's one big moment in the deck.
- **slide-closing** — back to full fired terracotta, cream CTA sentence, a single `button-primary`-styled action shape, thumbprint seal signing off. Bookends the cover.

**视觉锤:** the thrown-clay slab. It opens the deck, holds every quote, and signs the close — one recurring physical object the audience remembers after the numbers fade.

## Signature Moment

Two things this system does that a swapped-in template physically cannot reproduce.

**UI signature — the throw-mark media blob.** Every image is masked to a **hand-thrown asymmetric blob** whose `border-radius` is seeded uniquely per instance (no two identical), backed by an **offset sage slab** peeking out like a second slice of clay, wrapped in a **2px hand-inked contour**, dusted with a **paper-grain multiply overlay**, and stamped with a small **terracotta thumbprint seal** in the lower-left corner. It is a photographed piece of pottery, not a `border-radius: 8px` box with a drop-shadow. Change the template and this dies instantly.

**Deck signature — the kiln cover.** A full-bleed **fired-terracotta** slide with a single **cream clay slab pressed into the field** (depth read as an indentation, via a 1px inner seam, not a shadow), the one-sentence headline set inside it in Fraunces, a **sage botanical line drawing growing off the slab's top edge**, and **one pressed thumbprint seal** in the corner. One page, one sentence, one shape — a cover you could recognize with the brand name torn off.

## Do's and Don'ts

**Do**
- Fire terracotta in whole blocks (a cover, a button), then let oat-cream do the breathing.
- Mask every photo to a per-instance thrown blob with a hand-inked contour and paper-grain.
- Keep a static clay-grain texture on large fields at ~6% multiply.
- Let Fraunces speak exactly three places: eyebrow, quote, hero number.
- Stack depth as solid offset clay slabs (sage behind terracotta), left-align text off a live edge.

**Don't**
- **Don't touch the purple-blue slop gradient** `#667eea → #764ba2` or any of its cousins. This system's warmth exists to make that impossible.
- **Don't build the centered card trio** — title, gray subtitle, three equal rounded-rectangle cards. Cards here are asymmetric clay slabs on a two-field split, never a symmetric row.
- **Don't render Chinese in a Japanese font** (Mochiy / Zen Maru). Simplified glyphs drop to tofu. Chinese rides Noto Sans SC / Noto Serif SC / PingFang / Songti only.
- **Don't animate shadows or glows.** Depth is physical stacking and static grain; animating `box-shadow`/`text-shadow` repaints every frame and betrays the handmade calm.
- Don't let raw clay `#c96f4a` carry body text (it fails AA) — it fills shapes, terracotta `#a8482a` carries the words.
- Don't reach for a fourth color. If the layout feels flat, add oat-cream silence, not pigment.

## Responsive Behavior

Mobile is a **re-thrown composition**, not a squeezed desktop.

| Breakpoint | Behavior |
|---|---|
| ≥ 1120px | Full asymmetric two-field split; blob and text side by side, alternating sides down the page. |
| 768–1119px | Fields stack: blob on top at 70% width, text below, still ragged-left. `section` spacing eases to 72px. |
| ≤ 767px | Single column. `display-xl` drops via `clamp()` to fit the longest line at 360px with **no orphan characters**; blob shrinks but keeps its seeded organic radius; grain overlay stays, decorative sprigs thin out. Nav collapses to wordmark + one terracotta action. |

孤字铁律: 手动断行的大标题按最长行收敛字号，每行 `white-space:nowrap` 锁整行，`clamp()` 保证 ≤390px 不折出单字单标点；中文限宽用 `em`/`px`，绝不用 `ch`（会让中文提前折行）。居中的金句用 `text-wrap:balance` 让各行均衡。

## Anti-Slop Pledge

Tear the brand name off Clayfield and you still see a person's hands in it — the fired-clay color fields, the thrown blobs where no two are the same shape, the warm serif entering only where it earns the moment, the thumbprint pressed in the corner. Nothing here fell out of a Hero-Features-Pricing template. It was thrown, glazed, and fired on purpose.

---

*Designed by HeiGe-Design · MIT · 100% original, fictional brand.*

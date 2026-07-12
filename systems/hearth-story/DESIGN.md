---
version: alpha
name: hearth-story-design-system
description: >-
  Hearth-Story is a warm humanist system for nonprofits, community groups and
  social enterprises — the light of a room lit by a low fire. A deep ember
  primary glows against warm oat paper and sand surfaces while charred-walnut
  ink carries long, readable stories. Fraunces serif sets emotional display
  headlines and Source Sans keeps body copy human and calm. The bright ember
  accent never touches text; it survives only as glow, brushed underlines and
  spark marks. The signature is a hand-brushed ember signoff and a
  before-and-after story turn that warms cool grief into firelight. Tactile,
  restrained, never corporate.

colors:
  primary: "#ac4914"
  on-primary: "#fdf6ec"
  ink: "#33251a"
  canvas: "#f4ece0"
  surface: "#eadfcb"
  muted: "#7a6552"
  hairline: "#d8c9b2"
  ember: "#d2601a"

typography:
  display-xl:
    fontFamily: '"Fraunces", "Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: "60px"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-1px"
  display-lg:
    fontFamily: '"Fraunces", "Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: "40px"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.4px"
  heading:
    fontFamily: '"Fraunces", "Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: "25px"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.1px"
  quote:
    fontFamily: '"Fraunces", "Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: "34px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "-0.2px"
  stat:
    fontFamily: '"Fraunces", "Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: "88px"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "-2px"
  subhead:
    fontFamily: '"Source Sans 3", "Source Sans Pro", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: "17px"
    fontWeight: 600
    lineHeight: 1.45
    letterSpacing: "0px"
  body:
    fontFamily: '"Source Sans 3", "Source Sans Pro", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0.1px"
  eyebrow:
    fontFamily: '"Source Sans 3", "Source Sans Pro", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "2.4px"
  button:
    fontFamily: '"Source Sans 3", "Source Sans Pro", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.4px"
  caption:
    fontFamily: '"Source Sans 3", "Source Sans Pro", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.3px"
  signature:
    fontFamily: '"Caveat", "LXGW WenKai", "Noto Serif SC", "Kaiti SC", cursive'
    fontSize: "32px"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "0.5px"

rounded:
  none: "0px"
  sm: "6px"
  md: "12px"
  lg: "20px"
  pill: "9999px"

spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  section: "96px"

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "14px 30px"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.subhead}"
    padding: "{spacing.md} {spacing.xl}"
  eyebrow-kicker:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow}"
    padding: "{spacing.xs} 0px"
  card-feature:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  stat-block:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.stat}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  stat-label:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    padding: "{spacing.xs} 0px"
  footer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
    padding: "{spacing.xl}"
  signature-line:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.signature}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
  divider-rule:
    backgroundColor: "{colors.hairline}"
    rounded: "{rounded.none}"
    height: "1px"
    width: "100%"
  ember-underline:
    backgroundColor: "{colors.ember}"
    rounded: "{rounded.pill}"
    height: "3px"
    width: "64px"
  slide-cover:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-section-divider:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-stat-hero:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.stat}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-quote:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.quote}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-closing:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.signature}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
---

# Hearth-Story · 炉边

A warm humanist design system for nonprofits, NGOs, community groups and social
enterprises. The whole system is one physical idea: **a room lit by a low fire.**
Paper and sand hold the light, charred walnut carries the words, and a single
deep ember does all the glowing. It is built to make a stranger's story feel like
it is being told across a table, not pitched from a stage.

## Overview

Hearth-Story runs on **two colours doing two jobs**. Deep ember (`#ac4914`) is the
live coal — it is the brand, the buttons, the full-bleed divider pages, every
warm accent that has to survive next to text. Bright ember (`#d2601a`) is the
flame — it never touches a word. It exists only as glow, as a brushed underline,
as a spark mark, as the halo behind a portrait. Keeping the flame off text is the
discipline that keeps the system warm instead of loud.

The type signature is a warm **serif display** (Fraunces) that leans into emotion
on headlines and giant numerals, paired with a calm **humanist sans** (Source
Sans) for body copy that stays readable across a 900-word field report. The
rhythm is slow: generous 96px section breathing, one idea per screen, and a
hand-brushed signature that lands at the end of a story like a real person signed
it. Nothing here is centred-card-and-three-columns. The layout is a page you read,
not a dashboard you scan.

## Colors

The palette is three real materials plus their light: warm paper, sand cloth,
charred wood, and the ember that lights them.

### Brand & Accent
- **primary `#ac4914`** — 余烬 / deep ember. The live coal. Brand, buttons,
  divider and closing pages, giant stat numerals, the handwritten signoff. Deep
  enough to carry cream text at 5.3:1 and to sit on paper as text at 4.8:1.
- **ember `#d2601a`** — 火苗 / bright flame. **Decoration only, never text.** Used
  as brushed underlines, the story-turn glow, spark dots, card top-edge, portrait
  halo. On paper it reads at 3.3:1, which is fine for a graphic stroke and wrong
  for a letter, so it never becomes one.

### Surface
- **canvas `#f4ece0`** — warm oat paper. The room's default light. Every page,
  every reading surface.
- **surface `#eadfcb`** — warm sand cloth. Cards, quiet panels, secondary blocks.
  Derived from the seed sand `#e4d5bf`, nudged lighter so ink sits at 11:1.
- **hairline `#d8c9b2`** — soft sand line. 1px dividers and quiet borders only.

### Text
- **ink `#33251a`** — charred walnut. Body and headings. A deep warm brown, never
  pure black — black on paper reads cold and clinical, wrong for a hearth.
- **muted `#7a6552`** — weathered taupe. Captions, stat labels, metadata. **Only
  on canvas** (4.7:1); it drops below AA on sand, so it never labels a card.
- **on-primary `#fdf6ec`** — hearth-cream. The warm off-white for text on ember
  and on the dark footer. Warm, not paper-white, so cream on ember stays cozy.

### Semantic (the story turn)
Hearth-Story has no green-up / red-down. Its only semantic is emotional: the
**before/after story contrast**. "Before" is rendered in `muted` at low warmth
(cool, tired, grey-brown); "after" warms into `ink` on `canvas` with an `ember`
glow rising. No extra tokens — the temperature does the meaning.

## Typography

**Font families**
- **Display / headings / quotes / numerals — Fraunces**, a warm optical serif
  with soft terminals that carries feeling at large sizes. Stack:
  `"Fraunces", "Noto Serif SC", "Songti SC", "STSong", serif`.
- **Body / UI / captions — Source Sans 3**, a humanist sans that stays calm and
  legible in long paragraphs. Stack:
  `"Source Sans 3", "Source Sans Pro", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif`.
- **Handwritten signature — Caveat**, with **LXGW WenKai (霞鹜文楷)** as the Chinese
  hand. Stack: `"Caveat", "LXGW WenKai", "Noto Serif SC", "Kaiti SC", cursive`.

**中文铁律**：每条中文字体栈末尾都带系统兜底（无衬线 `Noto Sans SC / PingFang SC / Microsoft YaHei`，衬线 `Noto Serif SC / Songti SC / STSong`）。手写签名的中文兜底是 **霞鹜文楷 LXGW WenKai**，一款中文楷体，**绝不用任何日文字体渲染中文**（简体会缺字变豆腐）。断网时拉丁展示字塌到系统 serif 而非 Times。

**Hierarchy**

| Role | Font | Size | Weight | Use |
|---|---|---|---|---|
| display-xl | Fraunces | 60 | 600 | Cover headline, one line |
| display-lg | Fraunces | 40 | 600 | Divider chapter title, section head |
| heading | Fraunces | 25 | 600 | Card / block title |
| quote | Fraunces | 34 | 500 | Full-screen pull quote |
| stat | Fraunces | 88 | 600 | Giant warm numeral |
| subhead | Source Sans | 17 | 600 | Nav, card subtitle |
| body | Source Sans | 17 | 400 | Paragraphs, field reports |
| eyebrow | Source Sans | 12 | 700 | Uppercase kicker, +2.4 tracking |
| button | Source Sans | 16 | 600 | Actions |
| caption | Source Sans | 13 | 500 | Labels, metadata |
| signature | Caveat / WenKai | 32 | 500 | Hand-brushed signoff |

**Principles**
- Display-to-body ratio is at least 1:3.5 (60 / 17). On stat pages it goes to
  ~1:5 (88 / 17) — the number is allowed to be almost too big.
- Serif for feeling, sans for facts. Never set a 900-word report in the serif.
- Body line-height 1.7 — stories are read slowly, give the lines air.

## Layout

**Spacing** runs `xs 4 · sm 8 · md 16 · lg 24 · xl 40 · section 96`. The 96px
`section` gap is the load-bearing choice: it is the silence around a story. Cards
breathe on `lg` (24), nav on `md/xl`, footer on `xl`.

**Grid & container** — a 12-column grid at 1200px max, but the reading measure is
narrow: body text is capped at ~34em (never sized with `ch`, which under-widths
Chinese and forces early wraps). Layouts are **asymmetric** — a large emotional
image on one side, a column of text on the other — never a centred stack of equal
cards.

**Whitespace philosophy** — whitespace is grouped, not sprinkled. A dense story
block is followed by a full `section` of quiet before the next. The eye should
feel it move from firelight into shadow and back.

## Elevation & Depth

Depth here is **material and light**, not floating glass.

| Layer | Treatment |
|---|---|
| Page | Flat warm `canvas`, no shadow |
| Card | `surface` on canvas, separated by `1px hairline` + a 3px `ember` top edge |
| Raised | Soft warm shadow `0 8px 24px rgba(51,37,26,0.10)` — brown, never grey/black |
| Firelight | Static radial `ember` glow behind portraits and on cover corners |

The ember glow is a **static** `radial-gradient` (ember → transparent), never a
`box-shadow` animation and never `backdrop-filter`. Shadows are warm brown
(`rgba(51,37,26,…)`) because a grey shadow on warm paper reads like a bug.

## Shapes

| Token | Value | Use |
|---|---|---|
| none | 0 | Full-bleed slides, hairline rules |
| sm | 6 | Tags, the signature underline plate |
| md | 12 | Stat blocks, small panels |
| lg | 20 | Cards, image frames |
| pill | 9999 | Buttons |

Corners are soft but not bubbly (20px on cards, not 40). **Images use organic
framing**: portraits sit in a soft-cornered `lg` frame with one corner carrying
the ember firelight glow, evoking a photo pinned to a warm wall — never a hard
rectangle, never a perfect circle avatar grid.

## Components

- **button-primary** — deep ember fill, cream label, pill. The one loud element on
  the page; used once per view. Cream-on-ember 5.3:1.
- **button-secondary** — sand fill, ink label, pill, with a 1.5px bright-ember
  outline (the flame as edge, not text). Ink-on-sand 11:1.
- **nav-bar** — paper background, ink links, a single hairline underline. Quiet by
  design; the brand mark is a small ember dot, not a logo lockup.
- **card-feature** — sand card, ink title (serif) + body (sans), a 3px ember top
  edge and a warm brown shadow. Labels stay ink, never muted (muted fails on sand).
- **stat-block** — a giant ember numeral on paper (4.8:1) with a muted label below
  (4.7:1). The number is the impact figure — lives served, trees planted, hours given.
- **footer** — charred-walnut (ink) panel with cream text and sand-coloured
  secondary lines. The room after the fire dims: dark, warm, calm.
- **signature-line** — the handwritten signoff on paper, deep-ember script with a
  hand-brushed bright-ember underline. See Signature Moment.

## Presentation System

Hearth-Story as a 16:9 deck follows **one page, one sentence · golden three
seconds · one visual hammer.** The hammer is always **light and a face** — an
ember glow and a human portrait. The deck is a fireside story told in five moves.

- **Cover (`slide-cover`)** — warm paper, a large emotional portrait bleeding off
  one edge with an ember firelight glow in the bottom corner, one serif line of
  headline in ink, a tiny uppercase eyebrow. Three-second read: *warmth + a
  person.* No logo wall.
- **Section divider (`slide-section-divider`)** — full-bleed **deep ember** page,
  a huge cream chapter numeral `01 / 02`, one short title. The screen going warm
  edge-to-edge is the breath between chapters.
- **Stat hero (`slide-stat-hero`)** — paper page, one **88px ember numeral** owning
  the screen, a muted unit label, nothing else. The number is the promise kept.
- **Quote (`slide-quote`)** — the intimate one: charred-walnut dark page, one cream
  serif sentence in a beneficiary's own words, a giant faint ember quotation mark
  behind it. The room dims so the voice carries.
- **Closing (`slide-closing`)** — full ember page, a **handwritten cream signoff**
  and one clear call to action (give / join / volunteer). It ends like a letter,
  signed by hand.

Visual-hammer rule: exactly one glowing ember element per slide. If a slide has
two things glowing, one is wrong.

## Signature Moment

Two moments that a different template cannot reproduce.

**UI signature — the Ember Signoff (余烬签名).** At the end of a story block sits a
line of deep-ember handwriting (`signature` role) — a name, a thank-you, a promise
— underscored by a **single hand-brushed bright-ember stroke** that is thick in the
middle and dry at the ends, like a real brush lifting off. It is not a `border-bottom`
rectangle; it is a drawn mark with an organic taper (SVG path or a masked
`ember`→transparent gradient). It makes the page feel signed by a person, not
generated by a CMS. Nobody reaches this by dropping in a component library.

**Deck signature — the Story Turn (前后对比翻页).** One slide holds a before/after
split. The "before" half is rendered cool and tired — the portrait desaturated,
text in `muted` grey-brown, no glow. On transition, the "after" half **warms**:
the same face gains colour, the copy shifts to `ink` on `canvas`, and an `ember`
firelight glow rises from the bottom of the frame. It is the whole mission — cold
situation warmed by the work — compressed into one temperature change across a
page turn. The meaning lives in the shift from grey to firelight, not in a bullet.

## Do's and Don'ts

**Do**
- Let the deep ember carry all warm text; let the bright ember only glow, underline
  and spark.
- Build every layout around one large emotional image and one column of readable
  story — asymmetric, human-scale.
- Give sections a full 96px of silence; let the reader move between firelight and shadow.
- End stories with the hand-brushed ember signoff.
- Keep body copy in the humanist sans; keep feeling in the serif.

**Don't**
- **Don't touch the purple-blue slop gradient** (`#667eea → #764ba2`) or any of its
  family. This system's warmth dies the instant a cool gradient enters.
- **Don't do the centred-card-three-column stack** — title, grey subtitle, three
  equal rounded cards. That is the shape of every generated SaaS page; Hearth-Story
  is a page you read, not a grid you scan.
- **Don't render Chinese in Japanese fonts** (Mochiy, Zen Maru, etc.) — simplified
  glyphs break into tofu. Chinese hand = LXGW WenKai; Chinese serif = Noto Serif SC.
- **Don't animate shadows or glows.** The ember firelight is a static radial gradient;
  animating `box-shadow` / `text-shadow` repaints every frame and kills scroll.
- Don't set bright ember (`#d2601a`) as text — it never clears 4.5:1. It is flame, not ink.
- Don't use grey/black shadows on the warm paper; shadows are warm brown or they look broken.

## Responsive Behavior

| Breakpoint | Behaviour |
|---|---|
| ≥1200px | Asymmetric two-track: large image + narrow story column |
| 768–1199px | Image moves above story, story keeps its ~34em measure |
| ≤767px | Full re-compose: portrait becomes a top-bleed banner with the ember glow, story flows single-column, nav collapses to an ember dot + menu |

Mobile is a **re-edited story**, not a squeezed desktop. On phones the cover
portrait leads full-width, the headline drops to a `clamp()`-controlled serif that
never orphans a single Chinese character on a 390px screen, and each headline line
is locked with `white-space:nowrap` sized to its longest line. Chinese measures are
capped in `em`/`px`, never `ch`. Every animation respects
`@media (prefers-reduced-motion: reduce)` — the firelight glow simply stays lit.

## Anti-Slop Pledge

Strip the name off any Hearth-Story page and it still reads as made by a person who
cared: the warmth comes from real materials and light, the ember is disciplined
enough to only glow, the story is told across a table with a hand-brushed signature
at the end. No purple gradient, no equal-card grid, no cold shadow, no tofu Chinese.
If it doesn't feel like a room with a low fire in it, it isn't finished.

— HeiGe-Design

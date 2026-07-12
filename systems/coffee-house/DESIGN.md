---
version: alpha
name: coffee-house-design-system
description: "CoffeeHouse is a cozy, serif-forward warmth system for indie blogs, podcasts and small roasters. Its color logic is a single cup: espresso brown carries every heading and action, milk-foam cream holds the page, and a caramel drizzle marks only what matters. Fraunces gives a soft, slightly wonky display serif, Newsreader keeps long reading unhurried, and Caveat scribbles handwritten margin notes. The signature is a faint coffee-ring bleeding from a card corner and a hand-drawn caramel circle around a stat, like napkin math. Restrained, tactile, unmistakably hand-made."

colors:
  primary: "#4a352a"
  on-primary: "#f4ebda"
  ink: "#3a2a20"
  canvas: "#efe3d3"
  surface: "#f7efe1"
  muted: "#6f5b48"
  hairline: "#dcccb6"
  accent: "#c17a35"
  crema: "#d7a869"
  roast: "#2a1d15"

typography:
  display-xl:
    fontFamily: "Fraunces, Georgia, \"Noto Serif SC\", \"Songti SC\", \"STSong\", serif"
    fontSize: 66px
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: -1px
  display:
    fontFamily: "Fraunces, Georgia, \"Noto Serif SC\", \"Songti SC\", \"STSong\", serif"
    fontSize: 42px
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: -0.4px
  heading:
    fontFamily: "Fraunces, Georgia, \"Noto Serif SC\", \"Songti SC\", \"STSong\", serif"
    fontSize: 27px
    fontWeight: 600
    lineHeight: 1.22
    letterSpacing: -0.2px
  lead:
    fontFamily: "Newsreader, Georgia, \"Noto Serif SC\", \"Songti SC\", \"STSong\", serif"
    fontSize: 21px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0px
  body:
    fontFamily: "Newsreader, Georgia, \"Noto Serif SC\", \"Songti SC\", \"STSong\", serif"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: 0.1px
  eyebrow:
    fontFamily: "Fraunces, Georgia, \"Noto Serif SC\", \"Songti SC\", \"STSong\", serif"
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 2.4px
  annotation:
    fontFamily: "Caveat, \"LXGW WenKai\", \"Kaiti SC\", \"STKaiti\", \"Noto Serif SC\", cursive"
    fontSize: 23px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0.3px
  caption:
    fontFamily: "Newsreader, Georgia, \"Noto Serif SC\", \"Songti SC\", \"STSong\", serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.2px
  button:
    fontFamily: "Fraunces, Georgia, \"Noto Serif SC\", \"Songti SC\", \"STSong\", serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0.3px

rounded:
  none: 0px
  sm: 6px
  md: 12px
  lg: 20px
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
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "{spacing.sm} {spacing.lg}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "{spacing.sm} {spacing.lg}"
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.none}"
    padding: "{spacing.md} {spacing.xl}"
  card-note:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  prose-lead:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.lead}"
    rounded: "{rounded.none}"
    padding: "{spacing.md} {spacing.section}"
  article-paragraph:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.section}"
  tag-pill:
    backgroundColor: "{colors.crema}"
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
  stat-block:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.display}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  margin-note:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.annotation}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
  caption-meta:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} {spacing.sm}"
  badge-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.roast}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
  divider-rule:
    backgroundColor: "{colors.hairline}"
    rounded: "{rounded.none}"
    height: 1px
    width: 100%
  footer:
    backgroundColor: "{colors.roast}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "{spacing.section} {spacing.xl}"
  # —— slide 演示组件（16:9 演示版式）——
  slide-cover:
    backgroundColor: "{colors.roast}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-section-divider:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-stat-hero:
    backgroundColor: "{colors.roast}"
    textColor: "{colors.crema}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-quote:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-closing:
    backgroundColor: "{colors.roast}"
    textColor: "{colors.on-primary}"
    typography: "{typography.lead}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
---

# CoffeeHouse · 咖啡馆

A cozy, serif-forward warmth system for people who write like they talk. Built for indie blogs, podcasts, tiny roasters and one-person brands where the page should feel like a corner table, not a dashboard. Signed HeiGe-Design.

## Overview

The whole system is one cup, poured on paper.

**Espresso** (`#4a352a`) does the heavy work — every heading, every button, every dark block is roasted brown, never black. **Milk foam** (`#efe3d3`) is the page it all floats on: a warm oat cream that reads as daylight through a café window. Between them, a **caramel** drizzle (`#c17a35` / `#d7a869`) touches only what earns it — one underline, one circled number, one arrow to a margin note.

The type carries the mood. **Fraunces** is a soft, faintly wonky display serif that looks hand-set; **Newsreader** keeps long paragraphs unhurried and legible; **Caveat** is a real felt-tip hand that scribbles in the margins. Nothing shouts. The rhythm is slow on purpose — generous line height, wide reading columns, big air between sections — so the one loud moment (a coffee-ring, a caramel circle) lands.

Two roles, one soul: the same tokens set an article and drive a 16:9 deck. A CoffeeHouse slide is a café napkin blown up to fill a screen.

## Colors

Restraint is the whole trick. Two structural tones, one accent used twice, five quiet neutrals. Never let the browns turn to mud — keep the cream bright and the roast deep so the middle stays clean.

### Brand & Accent
- **Espresso `#4a352a`** — `primary`. The brand voice. Buttons, section dividers, the darkest UI blocks. Warm, not black.
- **Caramel `#c17a35`** — `accent`. Drizzle, not fill. Hand-drawn underlines, the arrow to a margin note, the circle around a stat, hairline highlights. Because caramel on cream fails small-text contrast, it is **never** body text or a link label — it is a mark, not a word.
- **Crema `#d7a869`** — `crema`. The lighter foam of the caramel. Fills tag pills against dark ink (contrast 6.33:1) and carries the giant stat number on the roast slides (7.54:1).

### Surface
- **Milk foam `#efe3d3`** — `canvas`. The page. Warm oat daylight.
- **Latte cream `#f7efe1`** — `surface`. Cards lift a half-shade lighter than the page, like foam settling above coffee.
- **Roast `#2a1d15`** — `roast`. The near-black bottom of the cup. Deep slide covers, stat heroes, the footer.
- **Foam line `#dcccb6`** — `hairline`. 1px separators, card edges. Barely there.

### Text
- **Roasted ink `#3a2a20`** — `ink`. Body and headings on light. Softer than black, easier on the eye over a long read.
- **Milk coffee `#6f5b48`** — `muted`. Timestamps, bylines, captions. Passes AA on both canvas (5.08:1) and surface (5.63:1).
- **Foam text `#f4ebda`** — `on-primary`. Reads on espresso and roast alike (9.67:1 / 13.81:1).

### Semantic
This system stays deliberately un-clinical. There is no green-up / red-down here; a cozy blog does not need a trading terminal's palette. When a status is truly needed, borrow **caramel** for "note / new" and **roast** for "closed / archived", and keep it to a dot or a tag, never a banner.

## Typography

Cozy means warm serifs everywhere, plus a real hand in the margins. Three families, one clear job each.

### Font Family
- **Display & UI serif — Fraunces**: `Fraunces, Georgia, "Noto Serif SC", "Songti SC", "STSong", serif`. Titles, headings, buttons, tracked eyebrows. Its soft terminals and slight wonk are the personality.
- **Reading serif — Newsreader**: `Newsreader, Georgia, "Noto Serif SC", "Songti SC", "STSong", serif`. Lead paragraphs, body, captions. Unhurried and quiet under long text.
- **Hand — Caveat**: `Caveat, "LXGW WenKai", "Kaiti SC", "STKaiti", "Noto Serif SC", cursive`. Margin notes, sign-offs, the human aside.

### Chinese & fallback rules (production iron law)
- Every Latin webfont ends in a **system serif** fallback (`Georgia`) and a **Chinese serif** fallback (`"Noto Serif SC", "Songti SC", "STSong"`), so a blocked `fonts.googleapis.com` degrades to a clean warm serif, not Times-collapse.
- The handwriting stack routes Chinese to **LXGW WenKai → Kaiti SC → STKaiti** — all genuine Chinese kai faces. **Never a Japanese font** (Mochiy, Zen Maru, Yuji): simplified glyphs would go tofu or render as Japanese variants.
- Self-check: kill the webfont links and every Chinese string must still render cleanly.

### Hierarchy
| Role | Family | Size | Weight | Line | Tracking | Use |
|---|---|---|---|---|---|---|
| display-xl | Fraunces | 66px | 600 | 1.02 | -1px | Cover title, hero stat |
| display | Fraunces | 42px | 600 | 1.08 | -0.4px | Big quote, section numeral, stat |
| heading | Fraunces | 27px | 600 | 1.22 | -0.2px | Card & article titles |
| lead | Newsreader | 21px | 400 | 1.6 | 0px | Opening paragraph, closing line |
| body | Newsreader | 17px | 400 | 1.75 | 0.1px | Long-form reading |
| eyebrow | Fraunces | 13px | 600 | 1.4 | 2.4px | Tracked uppercase kicker, tags, nav |
| annotation | Caveat | 23px | 500 | 1.3 | 0.3px | Handwritten margin notes, sign-off |
| caption | Newsreader | 14px | 400 | 1.5 | 0.2px | Meta, footer, timestamps |
| button | Fraunces | 16px | 600 | 1 | 0.3px | Buttons |

### Principles
- **Contrast is 1:4 minimum.** display-xl to body is ~1:3.9 — push cover titles bigger with `clamp()` rather than shrinking the ceiling.
- **Eyebrows are uppercase via tracking**, not a second typeface. Apply `text-transform: uppercase` and let the 2.4px letter-spacing do the coffee-menu work.
- **Reading column stays 62–72 characters.** Limit width with `em`/`px`, never `ch` (a `ch` unit is far narrower than a Chinese glyph and forces early wraps / orphans).
- **Zero orphans.** Manually broken titles get `white-space: nowrap` per line and a `clamp()` sized to the longest line so nothing strands a lone `的，` on the narrowest screen.

## Layout

Air is the luxury good here.

### Spacing
A 4px base scale: `xs 4 · sm 8 · md 16 · lg 24 · xl 40 · section 96`. The jump to a **96px** section rhythm is what makes the page feel like a café, not a form.

### Grid & Container
- Article: a single **680px** reading column, left-anchored, with a **~220px right margin gutter** reserved for handwritten `margin-note`s and `caption-meta`. The asymmetry is the layout — content left, human annotations riding the right edge.
- Cards & galleries: a 12-column grid at 1120px max width, but never three identical centered cards in a row (see Don'ts). Vary sizes; let one card be the loud one.
- Slides: fixed 16:9, `section` padding, content pinned to a lower-left or left-center baseline so the top-right corner stays free for the coffee-ring watermark.

### Whitespace philosophy
Whitespace is silence between sentences, not filler in the corners. Stack it up before a quote or a stat so the loud moment has room to ring; keep it tight inside a paragraph so reading flows.

## Elevation & Depth

Warm, soft, physical — paper and porcelain, never glass.

| Layer | Treatment |
|---|---|
| Page | Flat milk-foam canvas, optional faint paper grain (static, ≤3% opacity) |
| Card | `surface`, 1px `hairline` border, soft warm shadow `0 6px 20px rgba(74,53,42,0.10)` |
| Popover / raised | Same warm shadow at `0 12px 32px rgba(74,53,42,0.16)`, still static |
| Ring accent | The coffee-ring: a static `radial-gradient` stain, a depth cue, never a component |

Depth rules: shadows are **warm-tinted** (roast rgba), never neutral grey — grey shadow on a warm page reads as a stock template instantly. Shadows are **never animated** (glowing/pulsing shadow repaints every frame and stutters scroll). No `backdrop-filter` — where a frosted look is wanted, use a semi-opaque cream fill. The coffee-ring is drawn with gradients so it costs nothing to scroll past.

## Shapes

Soft and hand-made, with one deliberately imperfect curve.

- **Radius:** `none 0 · sm 6 · md 12 · lg 20 · pill 9999`. Cards land on `lg` (20px) — generous and friendly; buttons and tags go full `pill`; small marks use `sm`.
- **Images:** cropped to soft `lg` corners, occasionally with a torn-paper mask on one edge for the zine feel.
- **The coffee-ring:** an off-round ellipse, never a perfect circle. Its wobble is the point — a perfect circle reads as clip-art, a slightly ovular hand-drawn one reads as a mug that actually sat there.
- **Underlines:** caramel marks are hand-drawn strokes (a subtly rotated, uneven bar), not crisp CSS `border-bottom`.

## Components

- **button-primary** — espresso fill, foam text, pill. The one confident action per view.
- **button-secondary** — latte surface, ink text, caramel border. Quiet companion action.
- **nav-bar** — cream bar, ink links in tracked eyebrow caps, single hairline底边. Reads like a café menu header.
- **card-note** — latte card, ink heading, hairline edge, 20px radius. The home of a post, an episode, a note.
- **prose-lead** — the oversized opening paragraph in Newsreader lead; sets the unhurried pace.
- **article-paragraph** — body reading block inside the 680px column.
- **tag-pill** — crema fill, dark ink caps. Category / topic chips.
- **badge-accent** — solid caramel fill with roast text (4.75:1), pill. The one "new / featured" flag; the only place caramel is allowed to fill instead of drizzle.
- **stat-block** — latte card, espresso number in display serif. A number that matters, framed softly.
- **margin-note** — Caveat handwriting on a faint latte chip, tethered by a caramel arrow, riding the right gutter. The human voice in the margin.
- **caption-meta** — milk-coffee muted captions: dates, bylines, read-time.
- **divider-rule** — a 1px foam-line bar (`hairline`). The quiet separator between café-table sections.
- **footer** — roast block, foam text, a caramel hairline on top. The bottom of the cup.

## Presentation System

A CoffeeHouse deck is café napkin math, blown up to 16:9. Every principle serves **one page, one sentence · golden three seconds · one visual hammer**. The visual hammer for the whole system is **the coffee-ring** — it appears on every heavy slide so the deck is recognizable from the back of a room.

- **Cover (`slide-cover`)** — roast background, one Fraunces line in foam cream pinned lower-left, a faint caramel coffee-ring bleeding from the top-right corner, a Caveat episode/date scribble beneath. Three-second read: title + who's talking.
- **Section divider (`slide-section-divider`)** — espresso field, a giant Fraunces chapter numeral (`01`, `02`) in foam, one short caramel rule under it. A palate cleanser, one word max.
- **Stat hero (`slide-stat-hero`)** — roast field, the number set huge in **crema** and wrapped in a hand-drawn caramel circle (the napkin circle), unit in small caps, a Caveat "记一下" aside. One number owns the whole screen.
- **Quote (`slide-quote`)** — flip to bright milk-foam canvas for contrast, one Fraunces pull-quote in ink with a caramel hand-underline, attribution in Caveat. The light slide in a dark deck — a deliberate breath.
- **Closing (`slide-closing`)** — back to roast, a lead-size call to action in foam, a caramel-bordered button shape, and a handwritten sign-off (`— 下次见`). Ends warm, not with a logo wall.

Rhythm across the deck: dark cover → dark divider → dark stat → **bright quote breath** → dark close. The single bright quote slide is the张弛 — without it the deck is one flat brown tone.

## Signature Moment

Two moments a generic template physically cannot reproduce.

**UI — 咖啡渍批注 (The Coffee-Ring Margin Note).** An article card with a translucent coffee-ring (layered `radial-gradient`, off-round, warm caramel) bleeding across its top-right corner as if a mug rested there overnight. From that corner a hand-drawn caramel arrow curves out into the right gutter to a **Caveat** handwritten note — "这段是重点" — sitting slightly rotated on a faint latte chip. The stain, the wobble of the arrow, the real felt-tip hand and the reserved margin gutter only exist together in this system. Swap the template and you lose the whole gesture.

**Deck — 餐巾纸圈数 (The Napkin Circle).** On a roast stat slide, the hero number is set giant in crema, then encircled by a single imperfect hand-drawn caramel ellipse — the exact motion of circling a number on a napkin — with a scrawled "记一下" beside it. The circle is deliberately un-closed and un-round. A perfect CSS ring is clip-art; this is a person reaching for a pen.

## Do's and Don'ts

**Do**
- Keep espresso and roast for structure, spend caramel like it's expensive — one mark per view.
- Let the right gutter breathe and fill it with handwriting, not more UI.
- Set the reading column at 62–72 characters and trust the 96px section air.
- Make the coffee-ring wobble; hand-draw underlines and circles so they read human.
- Warm every shadow with roast rgba, keep them static.

**Don't**
- **No purple-blue cliché gradient** (`#667eea → #764ba2`) or any of its cousins — it is the AI-template ID card and the opposite of a café.
- **No centered title + grey subtitle + three equal rounded cards** repeated down the page. Anchor content left, vary card weight, give one card the spotlight.
- **Never render Chinese with a Japanese font** (Mochiy / Zen Maru / Yuji) — simplified glyphs tofu or turn Japanese. Chinese handwriting routes to LXGW WenKai / Kaiti SC / STKaiti.
- **Never animate shadows or glows** — pulsing `box-shadow` repaints every frame and stutters the scroll.
- Don't let the browns collapse into mud — keep foam bright and roast deep so the mid-tones stay clean.
- Don't use caramel as body text or a link label; it fails small-text contrast on cream. Caramel is a mark, ink is a word.
- Don't draw a perfect circle or a crisp border-bottom for the signatures — perfection kills the hand-made read.

## Responsive Behavior

Mobile is a re-pour, not a shrink.

| Breakpoint | Behavior |
|---|---|
| ≥1120px | Full layout: 680px reading column + reserved right gutter for margin notes |
| 768–1119px | Reading column widens toward center; margin notes narrow but stay in gutter |
| <768px | **No gutter exists** — every `margin-note` re-flows inline directly under its paragraph as a caramel-bordered handwritten aside; nav collapses to a menu; stats stack single-column |
| Slides | 16:9 → re-composed to 4:5 for phone reading: cover text drops to two lines with `clamp()`, the coffee-ring moves to bottom-right, the napkin circle re-scales to keep the number legible |

Re-composition rules: on phones the handwriting becomes an **inline aside**, not a floating overlay (no room to float). Titles keep `white-space: nowrap` per manually broken line and `clamp()` so no orphan strands at ≤390px. Verify `scrollWidth == clientWidth` at 390px — the coffee-ring must be cropped by the viewport, never cause horizontal scroll. All motion respects `@media (prefers-reduced-motion: reduce)`.

## Anti-Slop Pledge

Strip the name off any CoffeeHouse page and you still see it: a warm oat cream page, roasted-brown serifs set with air to breathe, one caramel circle around the number that matters, and a real handwritten note in the margin. The coffee-ring bleeding from a card corner is a decision no template ships by default. This was poured by hand, and it shows — signed HeiGe-Design.

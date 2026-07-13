---
version: alpha
name: NoirVermilion-design-system
description: >-
  Noir-Vermilion is a dark editorial system for knowledge brands and long-form
  media. A single cut of vermilion (#CE1432) burns across a smoke-black canvas
  (#141210) over warm cream ink (#EDEAE3): the red never fills, it punctuates —
  as oversized Didone serial numbers, 8px section rules, and one full-bleed
  quote page that ruptures the black. Noto Serif SC carries manifesto-scale
  Chinese headlines; Inter keeps the body quiet and legible. Sharp corners,
  generous line-height, a faint 45° cross-hatch, no glow. Restraint is the
  luxury; the red is the only thing allowed to shout.

colors:
  primary: "#CE1432"
  on-primary: "#F7F4ED"
  ink: "#EDEAE3"
  canvas: "#141210"
  surface: "#1C1916"
  muted: "#9A9082"
  hairline: "#34302B"

typography:
  display-xl:
    fontFamily: '"Playfair Display", "Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: 76px
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: -0.5px
  display-lg:
    fontFamily: '"Playfair Display", "Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: 44px
    fontWeight: 600
    lineHeight: 1.14
    letterSpacing: -0.4px
  heading:
    fontFamily: '"Source Serif 4", "Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.2px
  body:
    fontFamily: '"Inter", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: 0.2px
  numeral:
    fontFamily: '"Playfair Display", "Bodoni 72", "Didot", "GFS Didot", serif'
    fontSize: 120px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: -2px
  eyebrow:
    fontFamily: '"Inter", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 3px
  button:
    fontFamily: '"Inter", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.3px
  caption:
    fontFamily: '"Inter", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.2px

rounded:
  none: 0px
  sm: 2px
  pill: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  section: 96px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.lg}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.lg}"
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.none}"
    padding: "{spacing.md} {spacing.xl}"
  card-feature:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  card-insert:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  stat-block:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.numeral}"
    rounded: "{rounded.none}"
    padding: "{spacing.md}"
  body-text:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "{spacing.md} 0"
  pill-tag:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.sm}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl} {spacing.xl}"
  rule-hairline:
    backgroundColor: "{colors.hairline}"
    rounded: "{rounded.none}"
    height: 1px
    width: 100%
  rule-vermilion:
    backgroundColor: "{colors.primary}"
    rounded: "{rounded.none}"
    height: 8px
    width: 48px
  slide-cover:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-section-divider:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-stat-hero:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.numeral}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl} {spacing.section}"
  slide-quote:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-closing:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
---

# Noir-Vermilion · 玄墨绛红

A dark editorial system built for people who teach in public — course brands, knowledge products, deep-media outlets, and the decks that carry a long argument. It reads like a well-set book printed on smoke-black paper: mostly ink and silence, with one blade of vermilion doing all the pointing.

## Overview

The mood is **暗色文人感** — literary, unhurried, confident enough to leave most of the page empty. The whole system runs on a two-role color logic:

- **玄黑 canvas `#141210` is the room.** Not pure black — a warm near-black with a hair of brown, so cream text sits on it like ink on aged paper instead of chalk on a screen.
- **绛红 vermilion `#CE1432` is the pointer.** It is never a background wash and never a gradient. It appears as an oversized Didone serial number (01 / 02), an 8px short rule that cuts a section open, and exactly one full-bleed red page that ruptures the black at the deck's emotional peak.

Everything else is cream (`#EDEAE3`) ink and a single tone of dark surface. The typographic signature is a **manifesto-scale Noto Serif SC headline** paired with a **Didone latin numeral** (Playfair Display) blown up past the point of politeness. Rhythm comes from line-height and negative space, not from color count. If you find yourself reaching for a second accent, you have already lost the plot.

## Colors

### Brand & Accent
| Token | Hex | Role |
|---|---|---|
| `primary` | `#CE1432` | 绛红 vermilion. Serial numbers, 8px section rules, one red quote page, primary button fill. Punctuation only. |
| `on-primary` | `#F7F4ED` | Paper-white text set on vermilion fills. Contrast on `primary` ≈ 5.07:1. |

### Surface
| Token | Hex | Role |
|---|---|---|
| `canvas` | `#141210` | 玄黑. The page and every default slide. Warm near-black, never `#000`. |
| `surface` | `#1C1916` | Raised card / panel. One step off canvas, felt more than seen. |
| `hairline` | `#34302B` | 1px dividers, card edges, the faint 45° cross-hatch. Decorative, never text. |

### Text
| Token | Hex | Role |
|---|---|---|
| `ink` | `#EDEAE3` | 奶白 cream. Body and headlines on dark. Contrast on `canvas` ≈ 15.6:1. Doubles as the background of the cream **手稿卡** insert. |
| `muted` | `#9A9082` | Captions, footer, meta. Contrast on `canvas` ≈ 5.95:1 — still AA, never mud. |

**Contrast discipline.** Vermilion on canvas measures ≈ 3.36:1, which clears WCAG AA for large text (≥24px) but not for body copy. So vermilion is only ever used at display scale — giant serials, rules, buttons where it is the *fill* — never as small text on black. On the cream insert, vermilion on `#EDEAE3` measures ≈ 4.6:1 and is safe for the serial numerals.

## Typography

### Font Family
- **Serif display (headlines, serials): `"Playfair Display", "Noto Serif SC", "Songti SC", "STSong", serif`.** Latin glyphs pick up Playfair's Didone contrast; Chinese glyphs fall to **Noto Serif SC (思源宋体)** for the manifesto weight. If every webfont fails, the system serif still renders clean 宋体.
- **Subhead serif: `"Source Serif 4", "Noto Serif SC", "Songti SC", serif`.** A quieter text serif for card titles.
- **Numeral Didone: `"Playfair Display", "Bodoni 72", "Didot", "GFS Didot", serif`.** Only latin digits ever live here; the huge 01 / 02 serials.
- **Body / UI sans: `"Inter", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif`.** Crisp, low-drama, keeps long reading legible on dark.

**中文铁律.** Every Chinese-bearing stack ends in a system CJK fallback (`Noto Sans SC / PingFang SC` for sans, `Noto Serif SC / Songti SC` for serif). **Chinese is never rendered with a Japanese font** (no Zen / Mochiy families) — simplified glyphs would drop to tofu or show as Japanese variants. Cut the webfont link and the page must still read as clean 简体中文.

### Hierarchy
| Role | Size | Weight | Line-height | Tracking | Use |
|---|---|---|---|---|---|
| `display-xl` | 76px | 600 | 1.08 | -0.5px | Cover manifesto, one line per screen |
| `display-lg` | 44px | 600 | 1.14 | -0.4px | Section titles, quote page, closing |
| `heading` | 24px | 600 | 1.3 | -0.2px | Card / subsection titles |
| `body` | 17px | 400 | 1.75 | 0.2px | Paragraphs, generous leading |
| `numeral` | 120px | 500 | 1.0 | -2px | Vermilion serials, stat figures |
| `eyebrow` | 13px | 600 | 1.4 | 3px | Kickers, nav, tags (uppercase / 全大写拉丁) |
| `button` | 15px | 600 | 1.2 | 0.3px | Buttons |
| `caption` | 13px | 400 | 1.5 | 0.2px | Meta, footer |

### Principles
- Size contrast is the drama: `display-xl` to `body` is ~4.5:1. When in doubt, make the big thing bigger.
- Body line-height stays at 1.75 — the literary breathing room is non-negotiable.
- Keep negative tracking off Chinese runs at scale; the `letterSpacing` values are tuned so latin tightens while 宋体 stays open.

## Layout

### Spacing
An 8-based scale with a deliberately large `section` step so pages breathe: `xs 4 · sm 8 · md 16 · lg 24 · xl 48 · section 96`. Vertical rhythm between blocks is `section`; inside a card it is `lg`.

### Grid & Container
- Editorial column grid, 12 columns, but content rarely fills them. Long-form text caps at ~30em measure and is **left-aligned**, set off-center toward the left third so the right column stays open for a serial number, a pull-quote, or nothing.
- Max content width ~1200px; the reading column is much narrower. The asymmetry is the point.

### Whitespace philosophy
Whitespace is not padding, it is the pause before the sentence lands. Roughly half of every hero and divider is intentionally empty. Never distribute space evenly to "fill" — pool it, so the eye falls exactly where the vermilion is.

## Elevation & Depth

Editorial, not neon — depth comes from paper logic, not glow.

| Layer | Treatment |
|---|---|
| Canvas | Flat `#141210` with a faint 45° cross-hatch (hairline at ~3% opacity, static `repeating-linear-gradient`). |
| Surface card | `#1C1916` lifted by a 1px `hairline` edge, no shadow. |
| Cream insert (手稿卡) | The only element with a real drop shadow — a soft, static `0 24px 60px rgba(0,0,0,.55)` so the manuscript card floats off the black like torn paper. |
| Red page | No elevation trick; the tonal jump from black to vermilion *is* the depth. |

**No glow, no `backdrop-filter`.** Shadows are static and never animated. The cross-hatch is a fixed gradient, never a moving texture.

## Shapes

| Token | Value | Use |
|---|---|---|
| `none` | 0px | Cards, inserts, every slide. Sharp corners are the editorial default. |
| `sm` | 2px | Buttons only — a barely-there softening. |
| `pill` | 9999px | Eyebrow tags and the vermilion status dot. |

Images run full-bleed or hard-cropped to the column edge, never rounded. The **8px vermilion short rule** is the signature graphic primitive — a thick, stubby horizontal bar that opens sections and underlines the button-secondary label.

## Components

- **button-primary** — vermilion fill, paper-white label, 2px corners. The only place red becomes a surface. Hover deepens the fill slightly; focus adds a 2px cream ring.
- **button-secondary** — canvas ground, cream label, sits under an 8px vermilion short rule instead of a border box. Quiet until you need it.
- **nav-bar** — canvas, cream eyebrow-set links (uppercase latin, tracked wide), a single hairline bottom rule. No logo lockup clutter.
- **card-feature** — dark `surface` panel, hairline edge, `heading` serif title, an 8px vermilion rule top-left. Sharp corners, generous inner `lg` padding.
- **card-insert (手稿卡)** — the inverted move: a **cream `#EDEAE3` panel** dropped onto the black page with a real paper shadow. Text goes canvas-dark; a giant vermilion serial overflows its corner. See Signature Moment.
- **stat-block** — cream `numeral` figure at 120px with a small vermilion unit/label beside it, on canvas. The figure stays cream (AA-safe); the vermilion touch is the unit, not the number body.
- **body-text** — the reading paragraph: cream `body` on canvas, 1.75 leading, narrow measure, left-aligned.
- **pill-tag** — small `surface` pill, cream eyebrow text, for category / chapter labels.
- **rule-vermilion** — the 8px × 48px vermilion short rule, the system's connective primitive: it opens sections, sits under button-secondary, and stitches serial to title.
- **rule-hairline** — the 1px `hairline` divider bar; column lines, card edges, and the faint 45° cross-hatch are built from it.
- **footer** — muted caption on canvas above a hairline rule, wide margins, no link soup.

## Motion

Motion here is editorial pacing: the page settles like paper being laid on a desk. Nothing loops — paper does not move by itself.

- **Signature curve** — `cubic-bezier(0.22, 1, 0.36, 1)`, run at ceremonial length. The long tail is the sound of a page settling.
- **Ambient signature** — none. Stillness is part of the 文人感; the only atmosphere is how long things take.
- **Hover language** — the growing rule: links grow a short vermilion underline from the left (animating `width`, so the line stays sharp); read-only cards take an inset cream keyline (`inset 0 0 0 1px`), zero layout shift.

| Motion token | Value | Use |
|---|---|---|
| micro feedback | 220ms | links, nav, footnotes |
| entrance | 0.8s | manuscript card and headlines rising 24px |
| stagger | 100ms, linear `i * delay` | serials and manifesto lines — the order is the meaning |

Signature moves:
- **The Manuscript Landing.** The cream card rises 24px over 0.8s; the giant vermilion serial fades in 0.4s later, pure `opacity`, already overflowing the card edge. The lead moves, the annotation only appears — motion budget follows editorial rank.
- **The Red Rupture Cut.** The full-bleed vermilion page enters as a hard cut: one frame black, next frame red, zero fade. 红只用硬切进场，切换本身就是仪式。Withholding easing here is the same discipline as withholding the color.

All motion is disabled under `@media (prefers-reduced-motion: reduce)`.

## Presentation System

The same tokens drive a 16:9 deck. This is a **teaching deck** — one breath per slide, built on 一页一句话 / 黄金三秒 / 视觉锤.

- **Cover (`slide-cover`)** — black frame, a tiny tracked eyebrow top-left, then a `display-xl` Noto Serif SC manifesto occupying two-thirds of the height, left-aligned. An 8px vermilion rule sits under the last line. 黄金三秒: the reader knows the tone before reading a word — dark, literary, one red mark.
- **Section divider (`slide-section-divider`)** — the visual hammer. A giant vermilion Didone **01 / 02** serial fills the left half; the section title in cream serif sits on the baseline of the number with an 8px vermilion rule between them. One idea, announced like a chapter.
- **Stat page (`slide-stat-hero`)** — a single 120px cream figure, oversized past comfort, with a small vermilion unit and one line of caption. Everything else is black air. One number, no dashboard.
- **Quote page (`slide-quote`)** — the only full-bleed vermilion slide in the deck, placed at the argument's peak. A single `display-lg` line in paper-white, centered vertically, left-aligned. After a run of black pages this tonal whiplash is the visual锤 — it is felt, not read.
- **Closing (`slide-closing`)** — back to black, one line of `display-lg`, a vermilion `button-primary` call to action, and the 8px rule signing off.余味, then stop.

The one-red-page rule is strict: if the deck has two vermilion backgrounds, neither one hits. Ration it.

## Signature Moment

**UI — 手稿卡 (The Manuscript Insert).** On a black article page, a single **cream `#EDEAE3` card** is punched in with a real paper drop-shadow, as if a page of manuscript were laid on the desk. Its top-left corner carries a **giant vermilion Didone serial (01)** that is deliberately oversized so it *overflows the card edge onto the black canvas* — half the numeral reads vermilion-on-cream, half reads vermilion-on-black, split exactly at the paper's torn edge, stitched by the 8px vermilion rule. That half-on-half-off overflow is impossible to reproduce by dropping content into a generic template; it requires designing the number and the card as one bleeding object.

**Deck — 绛红大序号过渡页 into 红页 (The Serial Divider → Red Rupture).** Every section opens on a black divider where a Didone **01 / 02** stands vermilion and enormous beside a Noto Serif SC title, cut by the 8px rule. Then, once per deck at the peak, the black gives way to a **single full-bleed vermilion page** carrying one paper-white line. The pacing — many quiet black serials building to one red page — is the moment. Change the template and you lose the ration; the power is in how long you withhold the red.

## Do's and Don'ts

**Do**
- Keep vermilion as punctuation — serials, rules, one red page, button fills. Ration it hard.
- Let the giant Noto Serif SC headline and the Didone numeral carry the design; treat empty black as a material, not a gap.
- Left-align long text, pool whitespace toward one focal point, hold body leading at 1.75.
- Use the 8px vermilion short rule as the connective tissue between title and section.

**Don't**
- **Don't touch the purple-blue cliché gradient (`#667eea → #764ba2`)** or any of its family — this system is warm-black and one red, never gradient wash.
- **Don't build the centered card triptych** (title + gray subtitle + three equal rounded cards). This is an asymmetric, left-weighted editorial grid.
- **Don't render Chinese with a Japanese font.** 简体中文 uses Noto Serif SC / Noto Sans SC with system CJK fallback, always.
- **Don't animate shadows or the cross-hatch**, and never add glow / `backdrop-filter`; depth here is paper and tonal jump, not light.
- Don't let vermilion become a background wash, don't add a second accent color, don't round the cards.

## Responsive Behavior

| Breakpoint | Layout |
|---|---|
| ≥1200px | Full asymmetric grid; serial numbers in the open right/left column; `display-xl` at 76px. |
| 768–1199px | Reading column widens toward center; serials shrink but stay oversized; `display-xl` ~56px. |
| ≤767px | Single column re-composition. The cover manifesto restacks line-by-line, the serial moves *above* its title instead of beside it, the manuscript insert goes full-width with the numeral overflowing the top edge instead of the side. |

Mobile is a re-edit, not a shrink. Headlines use `clamp()` sized to the longest line so the manifesto never drops an orphan character on a 390px screen; each manually-broken line is locked with `white-space: nowrap`. Chinese width limits use `em`/`px`, never `ch`. Verify zero orphans and no horizontal overflow on both desktop and ≤390px before shipping.

## Anti-Slop Pledge

Strip the brand name and this page still reads as made by a hand that cared: warm-black paper, one blade of vermilion held back until it counts, a Didone serial bleeding off a cream manuscript card, Noto Serif SC set at manifesto scale over deliberate silence. No purple gradient, no centered card triptych, no glow, no default font naked on the screen. The restraint is the fingerprint — a pipeline reaches for more color; this system reaches for less, and lets the red do the pointing.

---

*HeiGe-Design · noir-vermilion · MIT.*

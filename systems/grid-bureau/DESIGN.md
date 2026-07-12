---
version: alpha
name: GridBureau-design-system
description: >-
  Grid Bureau is Swiss institutional order pushed to its authoritarian extreme:
  a neutral grayscale field governed by exactly one functional certification
  blue (#2757d6), set in Inter with every figure spoken in monospace. Everything
  snaps to an 8px baseline grid that is left exposed, not hidden. The signature
  is a numbered statute gutter (§1.0 / §1.1) and a dark monospace filing stamp
  that registers each block like an official public record. Original system by
  HeiGe-Design.

colors:
  primary: "#2757d6"      # functional certification blue — the only chroma in the whole system
  on-primary: "#ffffff"   # text/marks sitting on primary
  ink: "#1a1d24"          # body + headings, cool near-black (never pure #000)
  canvas: "#f4f5f7"       # cool-gray page ground (never pure #fff)
  surface: "#ffffff"      # the white record sheet / card
  muted: "#5b6270"        # secondary text, captions, gutter ordinals
  hairline: "#d5d8dd"     # 1px structural rules and borders
  grid: "#e4e6ea"         # the exposed baseline-grid lines — the signature substrate
  block: "#14171d"        # inverted dark block: masthead, filing stamp, dividers, footer

typography:
  display-xl:
    fontFamily: '"Inter", "Helvetica Neue", "Helvetica", "Arial", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 72px
    fontWeight: 800
    lineHeight: 1.0
    letterSpacing: "-1.8px"
  display-lg:
    fontFamily: '"Inter", "Helvetica Neue", "Helvetica", "Arial", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.8px"
  heading:
    fontFamily: '"Inter", "Helvetica Neue", "Helvetica", "Arial", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.2px"
  body:
    fontFamily: '"Inter", "Helvetica Neue", "Helvetica", "Arial", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0px"
  mono:
    fontFamily: '"IBM Plex Mono", "SFMono-Regular", "SF Mono", "JetBrains Mono", "Menlo", "Consolas", "Noto Sans SC", "PingFang SC", monospace'
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.85
    letterSpacing: "0.2px"
  numeral:
    fontFamily: '"IBM Plex Mono", "SFMono-Regular", "SF Mono", "JetBrains Mono", "Menlo", "Consolas", "Noto Sans SC", "PingFang SC", monospace'
    fontSize: 128px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: "-4px"
  eyebrow:
    fontFamily: '"IBM Plex Mono", "SFMono-Regular", "SF Mono", "JetBrains Mono", "Menlo", "Consolas", "Noto Sans SC", "PingFang SC", monospace'
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: "2px"
  button:
    fontFamily: '"Inter", "Helvetica Neue", "Helvetica", "Arial", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: "0.4px"
  caption:
    fontFamily: '"Inter", "Helvetica Neue", "Helvetica", "Arial", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: "0.1px"

rounded:
  none: 0px      # default everywhere — the bureau does not round corners
  sm: 2px        # optical only, for input affordances
  pill: 9999px   # reserved strictly for the functional status token

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  section: 96px

components:
  # —— UI interface components ——
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "{spacing.md} {spacing.lg}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "{spacing.md} {spacing.lg}"
  input-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
  nav-bar:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.none}"
    padding: "{spacing.md} {spacing.xl}"
  index-item:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "{spacing.md} {spacing.lg}"
  card-record:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  stat-block:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.numeral}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  divider-rule:
    backgroundColor: "{colors.hairline}"
    rounded: "{rounded.none}"
    height: 1px
  baseline-ruler:
    backgroundColor: "{colors.grid}"
    rounded: "{rounded.none}"
    height: 1px
  filing-stamp:
    backgroundColor: "{colors.block}"
    textColor: "{colors.on-primary}"
    typography: "{typography.mono}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.md}"
  status-pill:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.sm}"
  caption-note:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} {spacing.sm}"
  footer:
    backgroundColor: "{colors.block}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  # —— slide presentation components (16:9, fused HeiGe-PPT) ——
  slide-cover:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-section-divider:
    backgroundColor: "{colors.block}"
    textColor: "{colors.on-primary}"
    typography: "{typography.numeral}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-stat-hero:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.numeral}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-quote:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-closing:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
---

# Grid Bureau · 制表局

An institutional design system by **HeiGe-Design**. Swiss discipline, filed and stamped.

## Overview

Grid Bureau is the aesthetic of a public register that decided its own bureaucracy was beautiful. It is built for the systems nobody chooses but everybody trusts: government portals, enterprise intranets, policy platforms, document and records systems. The brief is neutral authority — so the design refuses to charm you and earns credibility by being visibly, provably orderly.

Two colors do the work. **Ink (`#1a1d24`) on canvas (`#f4f5f7`)** carries every word; **functional blue (`#2757d6`)** is the single chroma in the entire system and it never decorates — it only marks things that are *live*: the action you can take, the record that is active, the closing call. Everything else is grayscale and hairline. Authority here is not a color, it is the absence of unnecessary color.

The rhythm is the grid itself. Where most systems hide their 8px baseline, Grid Bureau **exposes it** as faint horizontal rules and reserves a fixed left gutter for statute-style ordinals — §1.0, §1.1, §1.2 — so every block on the page reads as a numbered, filed clause. Prose is set in Inter; every number, code and label is set in monospace. The bureau counts in monospace. That split — humane Inter for what people read, tabular mono for what the system asserts — is the whole personality in one rule.

## Colors

Discipline is the point. One functional hue, a tight grayscale, nothing warm, nothing gradient.

### Brand & Accent
| Token | Hex | Role |
|---|---|---|
| `primary` | `#2757d6` | Functional certification blue. The only chroma. Used exclusively on interactive and asserted elements — primary buttons, active status, the closing slide. Never a background wash, never a gradient. |
| `on-primary` | `#ffffff` | Text and marks on blue or on the dark block. Contrast on `primary` = 6.14:1, on `block` = 17.95:1. |

### Surface
| Token | Hex | Role |
|---|---|---|
| `canvas` | `#f4f5f7` | Cool-gray page ground. Deliberately not pure white — pure white is a blank sheet, canvas is a *form*. |
| `surface` | `#ffffff` | The white record sheet. Cards, inputs, index rows sit here, lifted off canvas by a single hairline, never a shadow. |
| `block` | `#14171d` | Inverted dark field. Filing stamps, section dividers, footer, masthead. The bureau's black rubber stamp. |
| `hairline` | `#d5d8dd` | 1px structural rules and borders. The system's connective tissue. |
| `grid` | `#e4e6ea` | The exposed baseline-grid lines. One notch lighter than hairline so structure reads as substrate, not as content. |

### Text
| Token | Hex | Role | Contrast |
|---|---|---|---|
| `ink` | `#1a1d24` | Body, headings, everything you read. Cool near-black, never `#000`. | 15.46:1 on canvas · 16.87:1 on surface |
| `muted` | `#5b6270` | Secondary text, captions, gutter ordinals, filing metadata. | 5.62:1 on canvas · 6.13:1 on surface |

### Semantic
There is no green/red delta layer and no "info/warning/success" palette. In this system, **state is expressed by the functional blue turning on or off**, not by adding hues. A record is either active (blue) or inert (gray). One switch, no rainbow. Anything that needs "warning" gravity gets the dark `block`, not a new color.

## Typography

### Font Family
- **Inter** is the workhorse for all human-read text — a neutral grotesque descended from the Swiss International Style, chosen for its institutional calm. Stack: `"Inter", "Helvetica Neue", "Helvetica", "Arial", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif`.
- **IBM Plex Mono** is the voice of the machine: every numeral, filing code, ordinal, label and tabular figure. Stack: `"IBM Plex Mono", "SFMono-Regular", "SF Mono", "JetBrains Mono", "Menlo", "Consolas", "Noto Sans SC", "PingFang SC", monospace`.

**Chinese fallback is mandatory and non-negotiable.** Every stack ends in a system CJK font (`Noto Sans SC` / `PingFang SC` / `Microsoft YaHei`) so that when the webfont fails to load — common on mainland networks — Chinese renders cleanly instead of collapsing into tofu. **Chinese is never rendered with a Japanese font** (Mochiy, Zen Maru, etc.): simplified glyphs go missing or mutate into Japanese variants. Mono roles carry only Latin codes and digits in practice; the CJK fallback is a safety net, not an invitation to set Chinese prose in monospace.

### Hierarchy
Every size lands on the 8px baseline. Line-heights below are the ratios; in implementation they resolve to 8px multiples so text seats exactly on the exposed grid.

| Role | Family | Size / Line | Weight | Tracking | Use |
|---|---|---|---|---|---|
| `display-xl` | Inter | 72 / 72px | 800 | -1.8px | Cover title, one monumental line |
| `display-lg` | Inter | 40 / 44px | 700 | -0.8px | Section title, quote body, closing line |
| `heading` | Inter | 20 / 24px | 600 | -0.2px | Card and clause titles |
| `body` | Inter | 16 / 24px | 400 | 0 | Paragraphs, index rows |
| `numeral` | Plex Mono | 128 / 128px | 700 | -4px | The giant filed number (§02, stat hero) |
| `mono` | Plex Mono | 13 / 24px | 500 | 0.2px | Filing codes, tabular data, stamps |
| `eyebrow` | Plex Mono | 12 / 16px | 600 | 2px | UPPERCASE kickers / register labels |
| `button` | Inter | 14 / 14px | 600 | 0.4px | Control labels |
| `caption` | Inter | 12 / 16px | 400 | 0.1px | Footnotes, fine print |

### Principles
- **Two voices, one rule.** Inter reads; mono asserts. Never blur the two — a heading is never mono, a filing code is never Inter.
- **Contrast by size, not by color.** The jump from `body` 16px to `numeral` 128px is 1:8. Hierarchy is built from that gulf, so color stays out of it.
- **Tabular figures always.** All numerals use `font-variant-numeric: tabular-nums` so columns of numbers align to the pixel — the actual reason a tabulation bureau exists.

## Layout

- **8px baseline grid, exposed.** The unit is 8px. Vertical rhythm is quantized to it, and the grid is rendered as faint `grid`-colored rules so the discipline is visible. Nothing floats between baselines.
- **12-column column grid** on a `max-width: 1200px` container, `xl` (48px) outer gutters on desktop.
- **The reference gutter.** The leftmost column (roughly 64–96px) is reserved and never holds prose. It carries only statute ordinals in mono (§1.0 / §1.1) and hairline tick marks. This empty, numbered rail is what makes a page read as an *official record* rather than a webpage.
- **Whitespace is structural, not decorative.** Space is measured in the spacing scale (`xs` 4 → `section` 96) and always aligned to the module. There is no "sprinkle padding to breathe" — every gap is a deliberate interval on the grid.
- **The one permitted break.** Swiss power comes from a single, surgical violation: exactly one element per view may break the column grid or the baseline (a title that overhangs the gutter, a stat that bleeds a column). One break reads as intent; two reads as accident.

## Elevation & Depth

Grid Bureau is **flat by law**. Depth is not simulated with light.

| Layer | Method |
|---|---|
| Base | `canvas` ground |
| Raised | `surface` sheet separated by a **1px `hairline`**, never a shadow |
| Asserted | inversion to the dark `block` (stamp, divider, footer) |
| Live | `primary` fill on the element that is actionable |

- **No drop shadows. No glow. No `box-shadow` blur.** A sheet is lifted by a hairline border and a change of ground color, the way a physical form sits in a folder.
- **Never animate a shadow or a filter.** There are none to animate. This also makes the whole system cheap to render and buttery to scroll — no per-frame repaint anywhere.
- Because there is no ambient shadow, alignment must be perfect: with nothing soft to hide behind, a 1px misalignment is glaring. That is the intended pressure.

## Shapes

- **Square corners are the default and the signature.** `rounded.none` (0px) on cards, buttons, inputs, slides. The bureau does not round corners. The only radii that exist are `sm` (2px, optical relief on a text input) and `pill` (reserved strictly for the functional `status-pill`).
- **Hairlines, not fills, define regions.** Boxes are drawn with 1px `hairline`/`grid` rules. Rules extend fully to the module edge — no floating dividers hanging in the middle of nowhere.
- **Images are filed, not styled.** Photography sits in a strict rectangular frame with a 1px hairline and a mono caption line beneath it (a registration code + description). No rounded photos, no blobs, no organic crops, no full-bleed drama except the one permitted break.
- **Tick geometry.** Small mono tick marks and rule ends replace icons wherever possible; the visual language is drafting board, not icon set.

## Presentation System

Grid Bureau renders 16:9 as an **official record deck**. The exposed grid and reference gutter carry straight from screen to slide, so a keynote looks like a set of filed pages projected large. HeiGe-PPT law — one line per slide, a three-second read, a single visual hammer — maps cleanly onto bureaucratic restraint.

- **Cover (`slide-cover`).** Canvas ground with the exposed baseline grid faintly visible. A hairline masthead rule runs full width near the top. Above it, a mono filing line: `REF · 2757-D — REGISTER 01`. Below it, one monumental `display-xl` title, left-aligned, hanging its first character into the reference gutter — the one permitted break. Bottom-left, a mono date/classification stamp. Golden three seconds: the numbered masthead + oversized title says "this is an authoritative document" before a word is read. Visual hammer: the title, alone, huge.
- **Section divider (`slide-section-divider`).** Full-bleed dark `block`. A single giant `numeral` (§02) hangs in the left gutter in mono, `on-primary` white, with the section name set small beside it and a hairline underline. Pure transition, pure number — the deck's chapter stamp.
- **Data (`slide-stat-hero`).** White `surface`. One `numeral` figure at 128px dominates, its unit and label in mono beneath, everything seated on the visible baseline. If one number must be *asserted*, its digits — and only its digits — turn `primary` blue. One blue number per data slide, maximum.
- **Quote (`slide-quote`).** Canvas ground. One `display-lg` statement, left-aligned, occupying the optical center of the grid, with a short `primary` hairline rule and a mono attribution line below. One thought, filed and dated.
- **Closing (`slide-closing`).** The only slide that goes full `primary` blue. `on-primary` white `display-lg` call to action, a mono reference code in the corner. The single moment the system lets its one color take the whole frame — earned because it never did so before.

## Signature Moment

Two things this system does that a generic template cannot fake.

**UI signature — The Baseline Ledger.** The 8px baseline grid is rendered visibly as faint horizontal `grid` rules across the content column, and a fixed left rail numbers every block as a statute clause (§1.0, §1.1, §1.2) in tabular mono. Each record sheet is anchored by a dark `filing-stamp` block — `REF 2757-D · FILED 2026-07-11 · CLASS A` in monospace white-on-`block`. Text seats *exactly* on the visible baselines, so the page reads as a certified, registered document rather than a UI. Remove the numbered rail and the exposed grid and it becomes an ordinary admin panel; with them, it is unmistakably the Bureau.

**Deck signature — The Record Divider.** Section dividers render as a full-bleed dark `block` with a single monumental mono `numeral` (§02) hanging into the left gutter, a hairline underscore, and a mono register line (`SECTION 02 / 06 — REGISTER`). No illustration, no gradient, no icon — just a filed number the size of the frame. It turns a chapter break into an official stamp, and it is impossible to reproduce without the mono-numeral-plus-gutter discipline that defines this system.

## Do's and Don'ts

**Do**
- Do expose the baseline grid and reserve the numbered left gutter — the structure *is* the brand.
- Do keep `primary` blue strictly functional: it marks what is live or actionable, nothing else.
- Do set every number, code and label in monospace with tabular figures; keep prose in Inter.
- Do separate layers with hairlines and inversion, and align everything to the pixel.
- Do allow exactly one deliberate grid break per view as the accent.

**Don't**
- **Don't touch the cliché purple-blue gradient** (`#667eea → #764ba2`) or any gradient wash. This system has one flat functional blue and no gradients at all.
- **Don't build the centered card triptych** — a centered title, a gray subtitle, and three equal rounded cards. Grid Bureau is left-aligned, statute-numbered, and asymmetric by grid.
- **Don't render Chinese with a Japanese font** (Mochiy, Zen Maru, etc.); always fall back to Noto Sans SC / PingFang SC. Simplified glyphs must never tofu.
- **Don't animate shadows or glows** — there are none, depth is hairlines and inversion, and the system must scroll without a single repaint.
- Don't round the corners, don't add drop shadows, and don't let a second color creep in "for variety."

## Responsive Behavior

Mobile is **re-choreographed, not shrunk**. The document logic survives; the layout is rebuilt.

| Breakpoint | Behavior |
|---|---|
| ≥1200px | Full 12-column grid, reserved left reference gutter, exposed baseline rules, `xl` outer margins. |
| 768–1199px | 8-column grid, gutter narrows, outer margins drop to `lg`. Stat heroes go one-up. |
| ≤767px | Grid folds to a single column. The reference gutter can't sit beside content, so **the ordinal (§1.1) moves above its block** as a mono eyebrow line — the numbering survives, its position is re-choreographed. Baseline rules stay visible but lighten; `numeral` clamps down so no giant figure overflows or breaks a line. |

- Manually broken titles lock each line with `white-space: nowrap` and size on the longest line via `clamp()`, so no single character or punctuation mark is ever orphaned onto its own row at any width down to 390px.
- Chinese width is limited in `em`/`px`, never `ch` (which is measured on the Latin `0` and forces Chinese to wrap early into orphans).
- All motion — the little there is — respects `prefers-reduced-motion: reduce`.

## Anti-Slop Pledge

Strip the name off Grid Bureau and it still reads as a system someone *engineered*: an exposed baseline grid, a statute-numbered gutter, one functional blue that never decorates, and a monospace stamp that dates and files every block. No template ships that on purpose — this is order made visible, not slop dressed up as minimalism.

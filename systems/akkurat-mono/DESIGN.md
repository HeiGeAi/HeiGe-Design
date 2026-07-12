---
version: alpha
name: AkkuratMono-design-system
description: AkkuratMono is a documentation-grade design system built on Swiss discipline — a near-white canvas (#F7F7F5), ink black (#18191C), and exactly one chromatic voice, a precise cobalt link (#0E4FE1). Inter carries the sans body and headlines while a monospace face owns code, margin annotations and giant tabular numerals as first-class citizens. Its signature is a relentless hairline grid annotated with monospace dimension labels, so every screen and every slide reads like a calibrated engineering drawing, never a marketing page.

colors:
  primary: "#0E4FE1"
  on-primary: "#FFFFFF"
  ink: "#18191C"
  canvas: "#F7F7F5"
  surface: "#FFFFFF"
  muted: "#63656C"
  hairline: "#E3E3DF"

typography:
  display-xl:
    fontFamily: "\"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif"
    fontSize: 64px
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: -1.8px
  display-lg:
    fontFamily: "\"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif"
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: -0.8px
  heading:
    fontFamily: "\"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif"
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.2px
  body:
    fontFamily: "\"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: 0px
  body-mono:
    fontFamily: "\"JetBrains Mono\", ui-monospace, \"SF Mono\", \"SFMono-Regular\", Menlo, Consolas, \"PingFang SC\", \"Noto Sans SC\", monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0px
  numeral:
    fontFamily: "\"JetBrains Mono\", ui-monospace, \"SF Mono\", \"SFMono-Regular\", Menlo, Consolas, \"PingFang SC\", \"Noto Sans SC\", monospace"
    fontSize: 96px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: -3px
  button:
    fontFamily: "\"JetBrains Mono\", ui-monospace, \"SF Mono\", \"SFMono-Regular\", Menlo, Consolas, \"PingFang SC\", \"Noto Sans SC\", monospace"
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: 0.6px
  caption:
    fontFamily: "\"JetBrains Mono\", ui-monospace, \"SF Mono\", \"SFMono-Regular\", Menlo, Consolas, \"PingFang SC\", \"Noto Sans SC\", monospace"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0.2px
  eyebrow:
    fontFamily: "\"JetBrains Mono\", ui-monospace, \"SF Mono\", \"SFMono-Regular\", Menlo, Consolas, \"PingFang SC\", \"Noto Sans SC\", monospace"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: 2.4px

rounded:
  none: 0px
  sm: 2px
  md: 4px
  lg: 6px
  pill: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  section: 80px

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: "{spacing.sm} {spacing.lg}" }
  button-secondary: { backgroundColor: "{colors.surface}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: "{spacing.sm} {spacing.lg}" }
  nav-bar: { backgroundColor: "{colors.surface}", textColor: "{colors.ink}", typography: "{typography.heading}", padding: "{spacing.lg}" }
  input-field: { backgroundColor: "{colors.surface}", textColor: "{colors.ink}", typography: "{typography.body-mono}", rounded: "{rounded.md}", padding: "{spacing.sm} {spacing.md}" }
  card-feature: { backgroundColor: "{colors.surface}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.none}", padding: "{spacing.lg}" }
  stat-block: { backgroundColor: "{colors.surface}", textColor: "{colors.primary}", typography: "{typography.numeral}", rounded: "{rounded.none}", padding: "{spacing.lg}" }
  code-block: { backgroundColor: "{colors.surface}", textColor: "{colors.ink}", typography: "{typography.body-mono}", rounded: "{rounded.lg}", padding: "{spacing.md}" }
  hairline-rule: { backgroundColor: "{colors.hairline}", rounded: "{rounded.none}", height: 1px, width: 100% }
  annotation-rule: { backgroundColor: "{colors.canvas}", textColor: "{colors.muted}", typography: "{typography.caption}", padding: 6px 0 }
  status-tag: { backgroundColor: "{colors.surface}", textColor: "{colors.muted}", typography: "{typography.caption}", rounded: "{rounded.pill}", padding: "{spacing.xs} {spacing.md}" }
  link-inline: { backgroundColor: "{colors.canvas}", textColor: "{colors.primary}", typography: "{typography.body}" }
  eyebrow-kicker: { backgroundColor: "{colors.canvas}", textColor: "{colors.muted}", typography: "{typography.eyebrow}", padding: 0 }
  footer: { backgroundColor: "{colors.ink}", textColor: "{colors.surface}", typography: "{typography.body}", padding: "{spacing.xl}" }
  slide-cover: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.display-xl}", padding: "{spacing.section}" }
  slide-section-divider: { backgroundColor: "{colors.ink}", textColor: "{colors.canvas}", typography: "{typography.display-lg}", padding: 72px }
  slide-stat-hero: { backgroundColor: "{colors.canvas}", textColor: "{colors.primary}", typography: "{typography.numeral}", padding: 72px }
  slide-quote: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.display-lg}", padding: 72px }
  slide-closing: { backgroundColor: "{colors.ink}", textColor: "{colors.surface}", typography: "{typography.display-lg}", padding: 72px }
---

# AkkuratMono · 精准等宽

A Swiss-discipline system for API references, technical manuals and developer portals. It behaves like a precision instrument's calibration screen: near-white field, one cobalt link, and a hairline grid that measures itself out loud in monospace.

## Overview

Most documentation design tries to soften the machine. AkkuratMono does the opposite. It treats the page as a measured drawing and lets the ruler show.

The palette runs on **two structural colors and one voice**. Ink `#18191C` sets every letter and every dark punctuation page. Canvas `#F7F7F5` is the paper. Between them sits a single chromatic actor — cobalt `#0E4FE1`, the link color — and it is the only color a reader will ever call by name. Hierarchy is built with **size, weight and space, not with a rainbow of tints**. If you feel the urge to add a second hue, add a hairline instead.

Type is a deliberate split. **Inter** carries reading matter and headlines with quiet Swiss confidence. A **monospace** face carries everything technical — code, inline annotations, status labels, and the giant tabular numerals on stat pages — as first-class content rather than decoration. Kickers and captions are always mono, so the interface constantly signals "this was engineered, and here are its coordinates."

The rhythm is light content interrupted by dark punctuation. Reading screens are white and airy; section dividers, closings and the footer invert to ink. The reader moves through calm documentation and hits a hard black beat at every chapter break.

## Colors

Restraint is the whole point. One chromatic color, everything else neutral.

### Brand & Accent
- `primary` `#0E4FE1` — **the link cobalt.** The single chromatic voice. Reserved for links, the primary action, the giant hero numeral, and one tick mark on the cover. If it appears more than a few times per screen it is being wasted.
- `on-primary` `#FFFFFF` — text on the cobalt button. Contrast 6.5:1.

### Surface
- `canvas` `#F7F7F5` — the paper field. A near-white with a hair of warmth so pure-white panels can float a step brighter above it.
- `surface` `#FFFFFF` — cards, code panels, inputs, tags. The one-step-brighter plane, separated from canvas by a hairline, never by a shadow.

### Text
- `ink` `#18191C` — body and headlines. A cool near-black, never pure `#000`, so long-form reading does not vibrate. Also the fill for every dark page.
- `muted` `#63656C` — secondary text, mono annotations, tag labels. Passes AA on both canvas (5.4:1) and surface (5.8:1).

### Structural
- `hairline` `#E3E3DF` — the 1px system. This is the load-bearing element of the whole aesthetic. Dividers, card borders, code frames, table rules, baseline ticks. Depth here is a line, not a blur.

## Typography

### Font Family

**Sans — Inter (reading & headline):**
`"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif`

**Mono — JetBrains Mono (code, annotation, numerals):**
`"JetBrains Mono", ui-monospace, "SF Mono", "SFMono-Regular", Menlo, Consolas, "PingFang SC", "Noto Sans SC", monospace`

铁律：两条字体栈末尾都挂了系统兜底与中文兜底，webfont 加载失败也不塌成 Times、中文不掉成豆腐。**中文一律走 Noto Sans SC / PingFang SC，绝不用任何日文字体渲染**（简体缺字会变异体或方块）。The mono stack carries a CJK fallback last, so Chinese inside a monospace annotation renders cleanly even though it will not be strictly monospaced.

### Hierarchy

| Role | Face | Size | Weight | Leading | Tracking | Use |
|---|---|---|---|---|---|---|
| display-xl | Inter | 64px | 700 | 1.02 | -1.8px | Cover statement, page hero |
| display-lg | Inter | 40px | 600 | 1.08 | -0.8px | Divider title, pull-quote |
| heading | Inter | 22px | 600 | 1.3 | -0.2px | Section & card titles, nav brand |
| body | Inter | 16px | 400 | 1.65 | 0 | Prose, long-form docs |
| body-mono | Mono | 14px | 400 | 1.7 | 0 | Code, inline annotation, inputs |
| numeral | Mono | 96px | 500 | 1.0 | -3px | Giant tabular stat numbers |
| button | Mono | 13px | 600 | 1.0 | 0.6px | Actions (rendered uppercase) |
| caption | Mono | 12px | 500 | 1.5 | 0.2px | Dimension labels, tags, footnotes |
| eyebrow | Mono | 12px | 600 | 1.0 | 2.4px | `// SECTION` kicker (uppercase) |

### Principles
- **Sans reads, mono measures.** If a string is a coordinate, a count, a path, a key or a command, it is mono. Everything else is Inter.
- **Tabular numerals everywhere numbers matter.** Apply `font-variant-numeric: tabular-nums` on the numeral and body-mono roles so digits align to the pixel in tables and stat blocks.
- **Contrast comes from the 1:6 jump** between body (16px) and display-xl (64px), not from color.
- Uppercase is applied in CSS (`text-transform`) for button and eyebrow; it is never baked into content strings.

## Layout

### Spacing
An 8px-derived scale: `xs 4 · sm 8 · md 16 · lg 24 · xl 40 · section 80`. Vertical rhythm snaps to an **8px baseline grid**, and the grid is not hidden — hairline ticks in the gutter make it visible, which is half the personality.

### Grid & Container
- Documentation uses a **three-zone layout**: left nav rail (mono), center reading column capped at ~72ch of Inter, right gutter reserved for **monospace margin annotations**.
- Content column is left-aligned, ragged right. Nothing important is centered.
- Slides use a 12-column 16:9 field with a persistent baseline hairline running full-bleed.

### Whitespace
Whitespace is measured, not sprinkled. Big air lands between sections (`section` = 80px), tight air inside components (`md`/`lg`). Every large void is implicitly labeled by the hairline+mono annotation system, so emptiness reads as "specified clearance," not as an accident.

## Elevation & Depth

There are no drop shadows. Depth is expressed entirely through the **hairline system** and a single one-step brightness lift.

| Layer | Method |
|---|---|
| Base | `canvas` field |
| Raised (card, code, input) | `surface` (one step brighter) + 1px `hairline` border |
| Active / focus | 1px border swaps to `primary` cobalt; no glow |
| Dark punctuation (divider, closing, footer) | full `ink` fill, hairline seam at the top edge |

Production rule: **shadows are never animated**, because there are no shadows to animate. No `backdrop-filter`. Elevation is a drawn line, which is free to composite and cannot stutter on scroll.

## Shapes

Corners are nearly square. Softness would betray the instrument.

| Token | Value | Use |
|---|---|---|
| none | 0px | Cards, stat blocks — sharp Swiss corners |
| sm | 2px | Buttons |
| md | 4px | Inputs / search |
| lg | 6px | Code panels (the one slightly relaxed surface) |
| pill | 9999px | Status tags only |

Images and diagrams sit in **hairline-framed rectangles** at `none` radius, captioned in mono below. Figures are numbered (`FIG. 01`) like a manual, not floated like a brochure.

## Components

- **button-primary** — cobalt fill, mono uppercase label, 2px corners. Reads like a command: `GET KEY`, `COPY`. The only filled color on a reading screen.
- **button-secondary** — white surface, ink label, hairline border. Cobalt border on focus, never a fill.
- **nav-bar** — white bar, hairline underline, Inter brand left, mono links, a `⌘K` search hint right. No shadow separating it from content, only the seam.
- **input-field** — mono placeholder, hairline border, 4px corners. The doc search box; feels like a terminal prompt.
- **card-feature** — sharp-cornered, hairline-bordered, mono eyebrow + Inter heading + body. Endpoint cards and topic cards. Never centered, never stacked in identical triplets.
- **stat-block** — giant cobalt tabular numeral + mono label beneath. Pixel-aligned digits.
- **code-block** — first-class citizen: white panel, 6px corners, hairline frame, mono content, a hairline line-number gutter, and cobalt reserved for keywords/links inside. Long lines scroll horizontally inside their own `overflow-x:auto` container.
- **hairline-rule** — the 1px primitive itself: a full-width `hairline`-filled line, zero radius, 1px tall. Every border, divider and table rule in the system is this one element. Depth is drawn, never blurred.
- **annotation-rule** — the dimension line: a hairline with a mono caption label riding it (`↤ 1440px ↦`, `type-scale 1.250`). The connective tissue of the aesthetic.
- **status-tag** — pill, mono caption, hairline outline (`● STABLE`, `v2.1`). The only pill in the system.
- **link-inline** — cobalt, underlined on hover, mono variant available for paths. The color the whole palette is named after.
- **eyebrow-kicker** — mono, letter-spaced, muted (`// 02 — AUTHENTICATION`). Sits above every section and every slide.
- **footer** — ink slab, white text, mono legal/version line, hairline top seam.

## Presentation System

The same discipline turns into 16:9. One idea per slide, legible in the golden three seconds, anchored by a single visual hammer: **the hairline coordinate frame + one cobalt tick**. Text is left-aligned to the baseline grid; nothing floats.

- **slide-cover** — canvas field. Corner **registration crosshairs** with mono coordinate labels, a full-bleed baseline hairline, a mono metadata row (`AKKURAT · DEVELOPER MANUAL · 2026-07`), the title in Inter display-xl, and exactly one cobalt tick on the baseline. Golden-three-seconds read: this is a spec, not a pitch.
- **slide-section-divider** — hard cut to ink. Giant mono chapter mark (`§ 02`) in canvas, a mono filepath breadcrumb (`docs/ › authentication.md`), one cobalt hairline. The black beat between chapters.
- **slide-stat-hero** — one giant cobalt tabular numeral (numeral role), a mono unit label, and a mono footnote citing the source. One number owns the frame. 一页一个数字。
- **slide-quote** — a single sentence in Inter display-lg on canvas, opened by a cobalt tick mark instead of quotation glyphs, attributed in mono. One sentence, nothing else.
- **slide-closing** — ink field, white call to action in Inter, one cobalt mono command line (`$ start building →`), registration crosshairs echoing the cover to close the loop.

Visual hammer placement: the cobalt tick and the corner crosshairs are the memory anchor. They appear on the cover, vanish through the body, and return on the closing — a calibration mark that brackets the whole deck.

## Signature Moment

Two moments this system owns that a generic template cannot reproduce:

**UI — The Dimension Line（标注线系统）.** The right gutter and the whitespace between sections are annotated like a CAD or engineering drawing: hairlines tipped with tiny cobalt ticks carry monospace dimension labels — `↤ 72ch ↦`, `baseline: 8px`, `type-scale: 1.250`, `clearance: 80px`. The page does not just use a grid, it **publishes its own measurements** in the margin. The `annotation-rule` component plus a persistent baseline-tick gutter turns any documentation page into a self-describing spec sheet. No template ships margin dimension-annotations by default; this is drawn on purpose.

**Deck — The Registration-Mark Cover（套准十字封面）.** The 16:9 cover is framed by four corner **crosshair registration marks** (the `+` of print alignment and instrument calibration) carrying mono coordinate labels (`x:0 y:0`, `x:1920 y:1080`), bisected by a single full-bleed baseline hairline, with the title pinned exactly to that baseline and one cobalt tick marking the origin. The whole frame reads like the calibration screen of a precision instrument. Those crosshairs return on the closing slide to bracket the deck — a signature no stock cover produces.

## Do's and Don'ts

**Do**
- Let the hairline carry structure. When in doubt, draw a 1px line, not a box shadow.
- Keep cobalt scarce — links, one action, one hero number, one tick. Scarcity is what makes it read as "the link color."
- Set every number in tabular mono and align it to the pixel.
- Annotate whitespace with mono labels; make the clearance intentional.
- Left-align to the baseline grid and let text go ragged-right.

**Don't**
- **Don't touch the purple-blue cliché gradient** (`#667eea → #764ba2`) or any of its cousins. This system's only color is the cobalt link; a gradient background would erase the entire idea.
- **Don't build the centered card triptych** — one title, one gray subtitle, three identical rounded cards repeated down the page. Cards here are sharp, hairline-bordered, and asymmetrically placed against the reading column.
- **Don't render Chinese in Japanese fonts** (Mochiy Pop One, Zen Maru Gothic and the like). Chinese falls back to Noto Sans SC / PingFang SC only; Japanese faces drop simplified glyphs to tofu.
- **Don't animate shadows or glows.** There are no shadows in this system, and animated elevation stutters on scroll. Depth is a static drawn line.
- Don't round everything to 8px with a soft grey shadow — that is the AI-default look this system is built to refute.
- Don't encode hierarchy in color. Size, weight and space do that work; color is reserved for the link.

## Responsive Behavior

Mobile is a re-choreography of the measured drawing, not a shrink.

| Breakpoint | Layout |
|---|---|
| ≥ 1200px | Three zones: nav rail · reading column · annotation gutter (dimension lines live in the right margin) |
| 768–1199px | Two zones: reading column + collapsible nav; margin annotations move **inline** as mono captions directly under their target |
| < 768px | Single column. Nav collapses to a mono top bar; every dimension annotation becomes a full-width mono label above its block; code-blocks scroll horizontally in their own container |

Production guarantees:
- Display and numeral roles use `clamp()` so the 64px hero and 96px numeral shrink gracefully and **never spill a single character or unit onto an orphan line** at ≤390px.
- Chinese width limits use `em`/`px`, never `ch` (which is sized to a Latin digit and would force Chinese to wrap early into orphans).
- The baseline hairline and registration marks reflow to the mobile frame; they are redrawn, not scaled.
- All motion is gated behind `prefers-reduced-motion: reduce`; the resting state is fully static, so reduced-motion loses nothing.

## Anti-Slop Pledge

Strip the name off any AkkuratMono page and it still reads as a precision instrument someone calibrated by hand — one cobalt link, a hairline grid that publishes its own measurements in monospace, and registration marks bracketing the story. It could not have fallen out of a template, because a template does not know its own dimensions.

---

*Designed by HeiGe-Design. MIT. 100% original — no reverse-engineering of any real brand.*

---
version: alpha
name: LinenFold-design-system
description: A sustainable natural-beauty system grounded in oatmeal linen, deep sage green, and a terracotta clay accent. Humanist Fraunces serif carries the craft; a handwritten kicker adds a human hand. The signature is physical, not digital — procedurally torn deckle paper edges, single-stroke botanical line drawings, and a woven linen texture ground. Never straight machine cuts, never gloss, never gradients.

colors:
  primary: "#5c6b45"
  on-primary: "#f6f1e7"
  ink: "#2e2a20"
  canvas: "#e7ddc9"
  surface: "#f3ecdd"
  muted: "#635b48"
  hairline: "#d6c9ae"
  accent: "#8f5333"

typography:
  display-xl:
    fontFamily: "\"Fraunces\", \"Noto Serif SC\", \"Songti SC\", \"STSong\", serif"
    fontSize: 68px
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: -1px
  display-lg:
    fontFamily: "\"Fraunces\", \"Noto Serif SC\", \"Songti SC\", \"STSong\", serif"
    fontSize: 44px
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: -0.4px
  heading:
    fontFamily: "\"Fraunces\", \"Noto Serif SC\", \"Songti SC\", \"STSong\", serif"
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.28
    letterSpacing: -0.2px
  body:
    fontFamily: "\"Mulish\", \"Inter\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0px
  body-mono:
    fontFamily: "\"Spline Sans Mono\", \"IBM Plex Mono\", ui-monospace, \"SFMono-Regular\", monospace"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0px
  button:
    fontFamily: "\"Mulish\", \"Inter\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif"
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0.3px
  caption:
    fontFamily: "\"Mulish\", \"Inter\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.2px
  eyebrow:
    fontFamily: "\"Caveat\", \"Gaegu\", \"LXGW WenKai\", \"KaiTi\", \"STKaiti\", cursive"
    fontSize: 22px
    fontWeight: 500
    lineHeight: 1.2
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
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "{spacing.md} {spacing.lg}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "{spacing.md} {spacing.lg}"
  card-feature:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  stat-block:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body-mono}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
    rounded: "{rounded.none}"
    padding: "{spacing.md} {spacing.xl}"
  footer:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  chip-botanical:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-primary}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.sm}"
  figure-caption:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
  divider-fiber:
    backgroundColor: "{colors.hairline}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs}"
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
    backgroundColor: "{colors.surface}"
    textColor: "{colors.accent}"
    typography: "{typography.display-xl}"
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

# LinenFold · 亚麻褶

A design system for sustainable, natural-beauty brands — skincare, botanical fragrance, refillable rituals. It looks like something you can touch: unbleached oatmeal paper, a leaf pressed between pages, a length of raw linen with the weave still showing. The whole system refuses the two default gestures of AI-generated beauty pages — the glossy gradient and the perfectly straight rounded rectangle. Here nothing is cut by a machine. Edges are torn. Lines are drawn by one continuous hand. The ground is woven.

## Overview

The mood is **quiet, warm, made-by-hand**. Two colours do the emotional work and everything else stays out of their way.

- **Deep linen-sage `#5c6b45`** is the botanical anchor — the colour of a crushed sage leaf, of the brand itself. It carries every primary action, every chapter break, the footer. Used with discipline: it never becomes a full-bleed gradient, only a solid, matte field.
- **Terracotta clay `#8f5333`** is the single warm accent — a thumbprint of fired earth. It exists to mark one thing per screen: the hero number, one tag, one stitched underline. If you see two terracotta elements fighting on a screen, one is wrong.

Everything sits on **oatmeal canvas `#e7ddc9`** with **linen-paper surfaces `#f3ecdd`** floated a half-shade lighter, so cards read as *sheets of pressed paper laid on a table*, not as glowing panels. Text is **bark `#2e2a20`**, a warm near-black that never goes to pure `#000`.

The type signature is a **humanist Fraunces serif** for everything that speaks — it has soft, organic contrast and real ink-trap character, so a headline already looks crafted before a single decoration is added. The human hand comes in through **a handwritten kicker** (Caveat / Gaegu, with `LXGW WenKai` → `KaiTi` for Chinese) used only as eyebrow labels and tags, never as body. Body copy is a calm humanist sans (Mulish) so long paragraphs stay legible where the serif would tire.

The rhythm is **slow**: generous line-height, wide margins, one idea per band. The page should feel like turning pages in a beautifully printed catalogue, not scrolling a SaaS funnel.

## Colors

### Brand & Accent
| Token | Hex | Role |
|---|---|---|
| `primary` | `#5c6b45` | Linen-sage. Primary buttons, chapter dividers, footer, botanical stroke ink. Solid matte only. |
| `accent` | `#8f5333` | Terracotta clay. One-per-screen emphasis: hero stat, one tag, stitched underline. |

Linen green is deliberately deepened from the raw `#6b7a52` seed so cream text clears WCAG AA on it (≈5.1:1). The seed lives on as a decorative botanical-line tint at reduced opacity, never as a text-bearing surface.

### Surface
| Token | Hex | Role |
|---|---|---|
| `canvas` | `#e7ddc9` | Oatmeal page ground. The table the paper lies on. |
| `surface` | `#f3ecdd` | Linen-paper sheet. Cards, stat blocks, stat-hero slides. Half a shade above canvas. |
| `hairline` | `#d6c9ae` | Soft fibre rule — a 1px thread, not a hard grey line. |

### Text
| Token | Hex | Role | Contrast |
|---|---|---|---|
| `ink` | `#2e2a20` | Warm bark. All body and headings. | 10.6:1 on canvas / 12.2:1 on surface |
| `muted` | `#635b48` | Taupe. Captions, metadata, secondary notes. | 5.0:1 on canvas / 5.7:1 on surface |
| `on-primary` | `#f6f1e7` | Cream. Text on linen-sage and on clay. | 5.1:1 on primary / 5.4:1 on accent |

### Semantic
This is a beauty system, not a dashboard — it carries no up/down delta colours. If a status is ever needed, express it in linen-sage (positive/kept) versus terracotta clay (attention), never by adding a red or a green. Restraint is the semantic.

**Contrast ledger (all component text pairs, self-checked WCAG AA ≥ 4.5:1):** cream/sage 5.1 · sage/paper 4.9 · bark/paper 12.2 · bark/oatmeal 10.6 · cream/clay 5.4 · clay/paper 5.2 · taupe/paper 5.7. Every pair clears.

## Typography

### Font Family
- **Display & headings — Fraunces** (humanist, high organic contrast). Fallback stack ends in `"Noto Serif SC", "Songti SC", "STSong", serif` so Chinese headlines stay serif and never tofu.
- **Body — Mulish**, ending `"Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif`.
- **Numerals — Spline Sans Mono / IBM Plex Mono** with `ui-monospace` system fallback for tabular alignment in stat blocks.
- **Handwritten kicker — Caveat / Gaegu**, ending `"LXGW WenKai", "KaiTi", "STKaiti", cursive`. This is the only script role and it carries at most a few words.

> 中文铁律: every Chinese-bearing stack ends in a system font — Serif → `Noto Serif SC / Songti SC / STSong`; Sans → `Noto Sans SC / PingFang SC / Microsoft YaHei`; handwriting → `LXGW WenKai / KaiTi / STKaiti`. 中文绝不用日文字体 (Mochiy / Zen Maru) rendering — 简体 will drop to tofu. Latin display fonts also carry system fallbacks so a headline never collapses to Times offline.

### Hierarchy
| Role | Size / Weight | Line / Tracking | Use |
|---|---|---|---|
| display-xl | 68 / 600 | 1.04 / -1px | Cover title, hero stat number |
| display-lg | 44 / 600 | 1.12 / -0.4px | Section divider, pull-quote, closing CTA |
| heading | 24 / 600 | 1.28 / -0.2px | Card titles, nav brand |
| body | 17 / 400 | 1.7 / 0 | Paragraphs |
| body-mono | 15 / 500 | 1.5 / 0 | Tabular figures, units |
| button | 15 / 600 | 1 / 0.3px | Actions |
| caption | 13 / 400 | 1.5 / 0.2px | Footer, figure notes |
| eyebrow | 22 / 500 | 1.2 / 0.3px | Handwritten kicker, botanical tags |

### Principles
Contrast ratio between the biggest word and body is > 4:1 — the cover word should feel almost *too* large, pressed like a specimen. Fraunces at display size is the ornament; do not add drop shadows or outlines to it. The handwritten eyebrow is a seasoning — one per band, tilted a degree or two, never a full sentence.

## Layout

**Spacing** runs `4 · 8 · 16 · 24 · 40` for component rhythm and `96` for the gap between full bands. The large jump from 40 to 96 is intentional: bands breathe far apart so each idea arrives alone.

**Grid & container.** A 12-column grid, max content width ~1200px, but the system leans **asymmetric**. Copy hangs left on a 7-column measure; a botanical line-drawing or a torn photo occupies the remaining 5, offset and bleeding past the margin. Center-locked symmetry is avoided on purpose — nature isn't centered.

**Whitespace philosophy.** Whitespace here is *unbleached paper*, an active material. Leave the margins wide and empty so the torn edge and the single leaf line have room to be noticed. Density is a mistake in this system; if a band feels full, remove something.

## Elevation & Depth

This system barely lifts off the page — depth is **material, not shadow**.

| Layer | Treatment |
|---|---|
| Ground | Oatmeal canvas with a static woven-linen texture (SVG `feTurbulence` fractalNoise, ~5% opacity, multiply). |
| Sheet | Surface cards raised by a soft, very low **grain shadow** — `0 2px 10px rgba(46,42,32,.08)`, static, warm-tinted, never a hard grey drop. |
| Torn edge | A deckle paper edge separates bands (see Shapes) — the depth cue is the fibre fringe, not a divider line. |
| Accent lift | The one clay element per screen may carry a faint pressed-in look via a `1px` inset lighter line, not a glow. |

No glow, no glass. There is no `backdrop-filter` anywhere. Shadows are static and are **never animated** — a warm brand does not shimmer.

## Shapes

**Border radius** is soft but restrained: `sm 6` for chips and small notes, `md 12` for stat blocks, `lg 20` for cards and framed photos, `pill` for buttons and tags. Slides use `none` — a full-bleed sheet has no rounded corner.

**Geometry & imagery.** The defining shape here is **not** a rounded rectangle — it is the **torn edge**. Photos are masked into soft organic silhouettes or framed by a hand-torn paper mat. Botanical elements are drawn as **single continuous ink strokes** (one path, variable `stroke-width`, round caps) — a sprig, a stem, a leaf outline — never filled clip-art, never emoji. Dividers are a `hairline` fibre-thread, optionally dashed to read as stitching.

## Components

- **button-primary** — solid linen-sage pill, cream label. The one firm action per view. Matte; no gradient, no shadow travel on hover — instead the botanical stroke beside it draws itself in.
- **button-secondary** — linen-paper pill, sage label, a `hairline` fibre border (drawn in prose/CSS). The quiet alternative.
- **card-feature** — a sheet of pressed paper: surface fill, bark body copy, serif `heading` title, `lg` radius, low grain shadow. Its bottom edge may be torn (see Signature).
- **stat-block** — surface tile, `md` radius; the figure set in mono for tabular alignment, its `eyebrow` label handwritten above.
- **chip-botanical** — terracotta clay pill with a cream handwritten label, used as a single ingredient/claim tag ("100% refillable", "cold-pressed"). One or two per band, never a row of five.
- **figure-caption** — a small taupe note on paper, `sm` radius, for photo credits and ingredient notes.
- **divider-fiber** — a `hairline` thread rule; render as a 1–2px fibre line or a stitched dash, never a hard full-width grey bar.
- **nav-bar** — oatmeal, no corner radius, serif brand mark left, quiet links; it sits on the page like a printed masthead, not a floating glass bar.
- **footer** — the one large linen-sage field on the page, cream caption text, closing the composition like the back cover of a catalogue.

## Presentation System

The same tokens drive a **16:9 deck**. Principle: **一页一句话 (one line per slide), 黄金三秒 (the first three seconds must land the mood), 视觉锤 (one visual hammer repeated across the set).** The visual hammer for LinenFold is the **torn deckle edge + the single botanical stroke** — every slide carries at least one, so the deck reads as one pressed herbarium.

- **slide-cover** — oatmeal ground, woven-linen texture behind. The title is a *pressed specimen*: a hand-torn paper label bearing the giant Fraunces word, a botanical line-drawing pressed at ~8% behind it, and a single terracotta cross-stitch pinning one corner. Three seconds in, the viewer knows: natural, crafted, calm.
- **slide-section-divider** — a full linen-sage field, cream chapter word, a large handwritten section number, and one white botanical stroke drawing itself across the field. The colour flip alone signals "new chapter".
- **slide-stat-hero** — linen-paper ground, one enormous **terracotta serif** number (display-xl), unit set small in mono beside it, and a hand-drawn underline that looks like a thread stitched through the paper. One number, nothing else competing.
- **slide-quote** — oatmeal ground, a single Fraunces pull-quote at display-lg, hung left, wrapped balanced, with a torn-paper block behind the first line. One sentence, huge margins.
- **slide-closing** — linen-sage field, cream CTA, the botanical stroke completing its final leaf, and the brand mark torn-labelled at the base. It ends like closing a book.

Deck ground is a **static** linen texture (turbulence SVG), never a moving blur — it must stay smooth under a projector.

## Signature Moment

**UI signature — the Deckle Edge + self-drawing sprig.** Content bands never part on a straight line or a lazy wave. They separate on a **procedurally torn paper edge**: an SVG `feTurbulence` displacement map applied to the band's bottom clip-path, producing a rough, fibrous deckle with a 1px darker "paper core" line and a few loose fibres at the tear. On the primary CTA sheet, a **single unbroken botanical line-drawing** (one continuous SVG path — a leaf sprig) runs the edge and, on scroll-in, *draws itself once* via `stroke-dashoffset`, finishing at a real leaf node, then stops. Torn edge + one-stroke growing leaf on a woven ground — no template ships this.

**Deck signature — the Pressed Specimen cover.** The cover title is mounted like a botanical specimen pressed in a book: a hand-torn paper label (deckle edge, fibre fringe) laid on linen texture, the giant Fraunces word centred *on the label not the slide*, a ghosted botanical stroke pressed behind at 8%, and **one terracotta thread cross-stitch** rendered as two crossed strokes pinning a corner of the label to the page. It reads as a real pressed leaf, not a text box.

## Do's and Don'ts

**Do**
- Tear the edges. Every band separation and photo mat uses the deckle turbulence edge, not a straight cut.
- Keep terracotta clay to **one element per screen** — the hero number, or one tag, or one stitched underline.
- Draw botany as single continuous strokes; let one sprig grow in, then rest.
- Let the oatmeal margins stay wide and empty — whitespace is the material.
- Hang copy asymmetrically to the left; offset imagery past the margin.

**Don't**
- **不碰紫蓝俗套渐变** — no `#667eea → #764ba2` or any glossy purple-blue gradient. This system is matte earth; a gradient background instantly kills it.
- **不做居中卡片三件套** — no centered "title + grey subtitle + three equal rounded cards" row. Break the grid, tear an edge, offset the composition instead.
- **中文绝不用日文字体** — never render 简体中文 with Mochiy / Zen Maru or other Japanese faces; always fall back to `Noto Serif SC / Songti SC` (serif) or `LXGW WenKai / KaiTi` (handwriting).
- **不动画化阴影** — never animate `box-shadow` / `text-shadow`; the grain shadow is static. No glow, no glass, no `backdrop-filter`.
- No emoji as icons, no gloss, no perfectly straight machine-cut rounded rectangle as the hero shape.

## Responsive Behavior

| Breakpoint | Behaviour |
|---|---|
| ≥ 1024px | Asymmetric 7/5 split; copy left, torn photo / botanical stroke bleeding right past the margin. |
| 640–1023px | Single column; the botanical stroke moves above the heading as a drawn-in header ornament; torn edges keep their fibre. |
| ≤ 639px | Full-width paper sheets stacked; cover word set with `clamp()` so the longest line fits ≤ 390px with `white-space:nowrap` per line — zero orphans. Chips wrap to a soft two-row cluster, not a scroll. |

Mobile is **re-composed, not shrunk**: the specimen-label cover restacks as label-over-texture, the 7/5 split becomes a vertical rhythm of paper → stroke → paper. Torn edges regenerate at the new width so a deckle never stretches into a smear. All motion (the self-drawing sprig, any fade) respects `prefers-reduced-motion: reduce` and drops to a static drawn state.

## Anti-Slop Pledge

Strip the brand name off any screen and it still reads as pressed by hand: a torn oatmeal edge, one sage stroke growing a single leaf, a terracotta thread stitched through paper on a woven ground. Nothing here is a straight machine cut, a stock gradient, or a centered three-card row — it could not have fallen off a pipeline. 用心做的，一眼能认出来。

<!-- HeiGe-Design · linen-fold · 亚麻褶 · MIT · original fictional brand, no real-company reference -->

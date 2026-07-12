---
version: alpha
name: gesso-design-system
description: "GESSO (Zhengqi Shigao) is a vaporwave-marble system that fractures classical plaster busts through a rose-to-cyan vapor gradient (#ff9ee5 to #8ad9ff) laid on plaster white. A hot-rose primary (#ff5fb0) drives CTAs while a deep grape ink and a twilight night ground the palette. Display type is an all-caps high-contrast serif carved like an inscription on a plinth, labeled by wide-tracked mono numerals; Chinese always falls back to Noto Serif SC, never Japanese fonts. Signatures: a dislocated column grid slicing a duotone statue, and a twilight vapor-horizon section divider. Sharp marble frames, pill candy buttons, gallery whitespace."

colors:
  primary: "#ff5fb0"
  on-primary: "#241832"
  ink: "#2b1d3f"
  canvas: "#f3ecf7"
  surface: "#fbf7fd"
  muted: "#705c86"
  hairline: "#e4d6ef"
  accent-rose: "#ff9ee5"
  accent-cyan: "#8ad9ff"
  twilight: "#1c1230"

typography:
  display-xl:
    fontFamily: "\"Playfair Display\", Georgia, \"Noto Serif SC\", \"Songti SC\", serif"
    fontSize: 78px
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: 2px
  display-lg:
    fontFamily: "\"Playfair Display\", Georgia, \"Noto Serif SC\", \"Songti SC\", serif"
    fontSize: 50px
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: 1px
  heading:
    fontFamily: "\"Playfair Display\", Georgia, \"Noto Serif SC\", \"Songti SC\", serif"
    fontSize: 27px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0.2px
  body:
    fontFamily: "Inter, \"Helvetica Neue\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.72
    letterSpacing: 0px
  eyebrow:
    fontFamily: "\"Space Mono\", \"SFMono-Regular\", ui-monospace, \"Noto Sans SC\", \"PingFang SC\", monospace"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: 3.5px
  button:
    fontFamily: "\"Space Mono\", \"SFMono-Regular\", ui-monospace, \"Noto Sans SC\", \"PingFang SC\", monospace"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 2px
  numeral:
    fontFamily: "\"Space Mono\", \"SFMono-Regular\", ui-monospace, \"Noto Sans SC\", \"PingFang SC\", monospace"
    fontSize: 66px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: -1px
  caption:
    fontFamily: "Inter, \"Helvetica Neue\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0.3px

rounded:
  none: 0px
  sm: 3px
  md: 6px
  lg: 14px
  pill: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  section: 96px

components:
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: "{spacing.sm} {spacing.lg}" }
  button-secondary: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.button}", rounded: "{rounded.sm}", padding: "{spacing.sm} {spacing.lg}" }
  tag-chip: { backgroundColor: "{colors.accent-rose}", textColor: "{colors.ink}", typography: "{typography.eyebrow}", rounded: "{rounded.pill}", padding: "{spacing.xs} {spacing.sm}" }
  tag-cyan: { backgroundColor: "{colors.accent-cyan}", textColor: "{colors.ink}", typography: "{typography.eyebrow}", rounded: "{rounded.pill}", padding: "{spacing.xs} {spacing.sm}" }
  nav-bar: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.eyebrow}", padding: "{spacing.md} {spacing.xl}" }
  section-title: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.heading}", padding: "{spacing.md}" }
  card-feature: { backgroundColor: "{colors.surface}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: "{spacing.xl}" }
  stat-block: { backgroundColor: "{colors.surface}", textColor: "{colors.ink}", typography: "{typography.numeral}", rounded: "{rounded.md}", padding: "{spacing.lg}" }
  caption-muted: { backgroundColor: "{colors.surface}", textColor: "{colors.muted}", typography: "{typography.caption}", padding: "{spacing.sm}" }
  rule-hairline: { backgroundColor: "{colors.hairline}", height: 1px, width: 100% }
  footer: { backgroundColor: "{colors.twilight}", textColor: "{colors.surface}", typography: "{typography.caption}", padding: "{spacing.section} {spacing.xl}" }
  slide-cover: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.display-xl}", rounded: "{rounded.none}", padding: "{spacing.section}" }
  slide-section-divider: { backgroundColor: "{colors.twilight}", textColor: "{colors.accent-rose}", typography: "{typography.display-lg}", rounded: "{rounded.none}", padding: "{spacing.section}" }
  slide-stat-hero: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.numeral}", rounded: "{rounded.none}", padding: "{spacing.section}" }
  slide-quote: { backgroundColor: "{colors.twilight}", textColor: "{colors.surface}", typography: "{typography.display-lg}", rounded: "{rounded.none}", padding: "{spacing.section}" }
  slide-closing: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.display-lg}", rounded: "{rounded.none}", padding: "{spacing.section}" }
---

# GESSO · 蒸汽石膏

A vaporwave-marble design system by HeiGe-Design. Classical plaster meets a rose-to-cyan vapor gradient. Sculpture in stone, fractured through a sunset.

> Brand: **GESSO / 蒸汽石膏**. Fictional house, 100% original. Industries: art, trend content, music visuals, exhibitions.

---

## Overview

GESSO takes the one image vaporwave is built on — a Greco-Roman plaster bust — and treats it as a design primitive. The bust sits on a sharp plaster plinth (zero radius, gallery-hard), while the whole page bathes in a **rose-to-cyan vapor gradient** that runs `#ff9ee5 → #8ad9ff`. Two temperatures do all the work: a warm pastel rose and a cool pastel cyan, meeting at a plaster-white horizon.

The palette runs two roles. **Hot rose `#ff5fb0`** is the primary — it appears only where you must act (a CTA pill, a closing slide), so the pink never goes soft or decorative. **Deep grape ink `#2b1d3f`** carries every word; vaporwave never uses pure black, so text is a bruised aubergine, and the darkest ground is a **twilight night `#1c1230`** for divider slides and the footer.

Type is the signature carrier. Display is an **all-caps high-contrast serif** set like an inscription chiseled into a plinth — wide-tracked, monumental, restrained. It is labeled and numbered by a **wide-tracked mono** (the retro-computing counterpoint), and read in a clean humanist sans. The rhythm is a gallery: hard marble frames, monumental whitespace, one duotone statue that stops you, then air.

---

## Colors

Node: two pastel temperatures, one hot accent, one bruised ink, one night. Nothing else. Color never explains hierarchy — size and space do.

### Brand & Accent
| Token | Hex | Role |
|---|---|---|
| `primary` | `#ff5fb0` | Hot vapor rose. CTAs and the closing slide only. The one saturated moment. |
| `accent-rose` | `#ff9ee5` | Pastel rose — warm end of the vapor gradient, tags, duotone highlights. |
| `accent-cyan` | `#8ad9ff` | Pastel cyan — cool end of the vapor gradient, stat units, footer links. |

The **vapor gradient** `linear-gradient(115deg, #ff9ee5, #8ad9ff)` is the house motif. It fills the statue duotone, the horizon line, and hairline dividers. It is a rose-to-cyan gradient — explicitly not the banned `#667eea → #764ba2` purple-blue.

### Surface
| Token | Hex | Role |
|---|---|---|
| `canvas` | `#f3ecf7` | Plaster white, faint lilac cast. Page ground and cover slide. |
| `surface` | `#fbf7fd` | Brighter plaster. Cards, stat blocks. |
| `twilight` | `#1c1230` | Vaporwave night. Divider slides, quote slides, footer. |
| `hairline` | `#e4d6ef` | Pale lilac 1px rule. Frames and gutters. |

### Text
| Token | Hex | On | Contrast |
|---|---|---|---|
| `ink` | `#2b1d3f` | canvas / surface | 13.4 – 14.6:1 |
| `on-primary` | `#241832` | primary `#ff5fb0` | 6.0:1 |
| `muted` | `#705c86` | surface | 5.5:1 |
| `surface` (as text) | `#fbf7fd` | twilight | 16.7:1 |
| `accent-rose` (as text) | `#ff9ee5` | twilight | 9.6:1 |

Every text-on-fill pair clears WCAG AA (≥ 4.5:1). Deep grape ink lives on plaster; light plaster and pastel rose live on twilight. Mid-tone-on-mid-tone never happens.

---

## Typography

### Font families
- **Display / heading — Playfair Display** (high-contrast Didone serif), set ALL CAPS with positive tracking so it reads as a carved inscription. Stack: `"Playfair Display", Georgia, "Noto Serif SC", "Songti SC", serif`. Latin falls to Georgia, **Chinese falls to Noto Serif SC / Songti SC — never a Japanese serif** (simplified glyphs would tofu out).
- **Labels & numerals — Space Mono**, wide-tracked. Eyebrows, buttons, and every statistic. Retro-computing counterpoint to the marble. Stack: `"Space Mono", "SFMono-Regular", ui-monospace, "Noto Sans SC", "PingFang SC", monospace`.
- **Body — Inter**, for legible long-form. Stack: `Inter, "Helvetica Neue", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif`.

Webfonts load first to preserve the design; if `fonts.googleapis.com` is blocked or slow, the system CJK fallback keeps Chinese clean and readable. No family in this system renders Chinese with a Japanese font.

### Hierarchy
| Role | Family | Size | Weight | Leading | Tracking |
|---|---|---|---|---|---|
| `display-xl` | Playfair (caps) | 78 | 800 | 1.02 | 2px |
| `display-lg` | Playfair (caps) | 50 | 700 | 1.08 | 1px |
| `heading` | Playfair | 27 | 600 | 1.3 | 0.2px |
| `body` | Inter | 17 | 400 | 1.72 | 0 |
| `eyebrow` | Space Mono (caps) | 12 | 700 | 1.4 | 3.5px |
| `button` | Space Mono (caps) | 14 | 700 | 1 | 2px |
| `numeral` | Space Mono | 66 | 700 | 1 | -1px |
| `caption` | Inter | 13 | 400 | 1.55 | 0.3px |

### Principles
- Display-to-body ratio is 78:17 ≈ **4.6:1** — the marble inscription must dwarf the prose.
- Serif is uppercase Latin; Chinese has no case, so a Chinese display line sets in Noto Serif SC at the same weight and tracking, staying monumental without faux-caps.
- Mono numerals are tabular — statistics align to the pixel like a readout.

---

## Layout

### Spacing
4 · 8 · 16 · 24 · 40 · **96**. The jump to a 96px section gap is deliberate: gallery air between exhibits. Modules are dense inside, then separated by a full breath.

### Grid & Container
A **12-column grid** with a max content width around 1200px, but the signature is a **dislocated grid**: the statue and its plinth break the column baseline — one block is nudged 12–24px off the shared line, one hairline gutter widened. Vaporwave is nostalgia rendered slightly wrong; the misalignment is the point, applied to exactly one element per view, never the whole layout.

### Whitespace
Whitespace is the plinth. A single bust on plaster with 96px of surrounding void reads as sculpture; the same bust crowded reads as a stock photo. Negative space is load-bearing.

---

## Elevation & Depth

Marble does not float. Depth comes from **stone and hairline, not soft drop-shadow.**

| Layer | Treatment |
|---|---|
| Ground | `canvas` / `twilight`, flat |
| Plinth / card | `surface` with a 1px `hairline` frame, sharp corners |
| Statue | duotone image on a hard-edged block, offset from the grid |
| Night section | `twilight` field, the vapor-horizon line as the only light |

Decorative depth is the **vapor gradient and a perspective grid** receding to a vanishing point — a flat, retro pseudo-3D horizon. No `backdrop-filter` (it repaints every scroll frame); frosted panels are faked with a semi-opaque solid over `surface`. Shadows, if any, are static and hard, never animated (glow repaint is a frame killer).

---

## Shapes

| Token | Value | Use |
|---|---|---|
| `none` | 0px | Slides, image frames, plinths — marble is cut, not rounded |
| `sm` | 3px | Secondary buttons, small controls |
| `md` | 6px | Stat panels |
| `lg` | 14px | Feature cards |
| `pill` | 9999px | Primary CTA and tag chips |

The tension is intentional: **hard marble frames (0px) against candy pill buttons (9999px).** The stone is austere; the one thing you click is soft and pink. That contrast is the whole personality — do not homogenize it into uniform 8px corners.

Images are duotoned into the vapor gradient (rose highlights, cyan shadows) and cropped to hard rectangles, then sliced by the dislocated column grid.

---

## Components

- **button-primary** — hot-rose `#ff5fb0` pill, deep-grape label in mono caps. 6.0:1. The only saturated pink surface; use once per view.
- **button-secondary** — plaster ghost with a 1px `hairline` frame, ink mono caps, 3px corners. The quiet, structural sibling.
- **tag-chip** / **tag-cyan** — pastel-rose and pastel-cyan pills, ink eyebrow (8.4:1 and 10:1). The "aesthetic" labels — a genre, a year, a coordinate — warm and cool variants of the same chip.
- **nav-bar** — plaster ground, ink wordmark, mono-caps links, closed by a `rule-hairline` underline. Reads like a museum header band.
- **section-title** — serif `heading` on plaster, the inscription that opens a block.
- **card-feature** — brightest plaster panel, 14px corners, framed by `hairline`; serif heading, sans body, `caption-muted` for the mauve metadata line. One duotone statue thumbnail allowed per card.
- **stat-block** — plaster panel, monumental mono numeral in ink, a rose datum tick drawn with `accent-rose`.
- **rule-hairline** — the pale-lilac 1px divider itself, the system's only line.
- **footer** — twilight night, plaster text, cyan links (drawn from `accent-cyan`), 96px of air above. The page sets like the sun.

Slide components below.

---

## Presentation System

16:9, one idea per slide. The deck obeys **一页一句话（one line per slide）· 黄金三秒（own the first three seconds）· 视觉锤（one visual hammer）**. The hammer is always the same object: the plaster bust, the vapor gradient, or a single monumental serif line.

- **slide-cover** — plaster ground, a duotone bust offset by the dislocated grid on the right two-thirds, an ALL-CAPS serif title carved on the left plinth, one mono eyebrow overhead. Three seconds: statue + gradient + inscription, nothing else. This is the identity.
- **slide-section-divider** — twilight night, filled by a single monumental serif numeral (`01`, `02`) in hot rose, with the **vapor-horizon line** (rose→cyan) and a faint perspective grid receding behind it. The transition breath.
- **slide-stat-hero** — plaster ground, one enormous mono numeral in ink, its unit in cyan, a rose datum tick beneath. The number is the hammer; the room is empty.
- **slide-quote** — twilight night, one serif line set large in plaster white, wrapped in gallery void. A pull-quote on a museum wall.
- **slide-closing** — the payoff: full hot-rose `#ff5fb0` field, a serif call-to-action in deep grape, one mono URL line. The pink you have withheld all deck finally floods the frame.

Rhythm across the deck: plaster (calm) → twilight (drama) → plaster (data) → twilight (voice) → rose (release). Grounds alternate temperature so no two consecutive slides share a mood.

---

## Signature Moment

Two moments that another template cannot reproduce.

**UI — 错位石膏胸像 (The Dislocated Bust).** A classical plaster bust is duotoned into the vapor gradient (rose highlights, cyan shadows), then sliced into a 5-column grid. Alternating columns are nudged vertically by 12–20px against a 1px lilac gutter, and one slice is tinted the full rose→cyan gradient at 100%. The result: a marble statue fractured through a pastel sunset — nostalgia rendered deliberately, beautifully wrong. Static by default; if it animates, only the column `transform: translateY` shifts on scroll (compositor-cheap), never blur or shadow.

**Deck — 蒸汽地平线过渡页 (The Vapor-Horizon Divider).** On a twilight-night section slide, a single monumental serif numeral stands where a monument would; behind it, one horizontal **rose-to-cyan horizon line** marks a sunset, and a faint perspective grid recedes to a vanishing point. One number, one horizon, one gradient, total dark around it. No other divider system looks like this.

---

## Do's and Don'ts

**Do**
- Give one plaster bust 96px of void and let it be sculpture.
- Duotone every image into the rose→cyan vapor gradient; keep photography monochrome-underneath.
- Set display in ALL-CAPS serif with generous tracking, like a plinth inscription.
- Break the grid on exactly one element per view — the deliberate dislocation.
- Reserve hot rose `#ff5fb0` for the single thing you want clicked.

**Don't**
- **Don't touch the purple-blue slop gradient `#667eea → #764ba2`** or any of its family. Our gradient is rose→cyan, and it is not negotiable.
- **Don't build the centered-card trio** (title + grey subtitle + three equal rounded cards repeated down the page). Use the dislocated grid and the gallery plinth instead.
- **Don't render Chinese with a Japanese font** (Mochiy, Zen Maru). Chinese falls to Noto Serif SC / Songti SC or Noto Sans SC — never Japanese, or simplified glyphs tofu out.
- **Don't animate shadows or glow** (per-frame repaint kills scroll). Depth is stone, hairline, and static gradient.
- Don't round the marble frames to a uniform 8px; keep the 0px-vs-pill tension.
- Don't let hot rose spread into decoration; the moment it is everywhere, it means nothing.

---

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| ≥ 1200px | 12-col dislocated grid; bust and plinth side by side; 96px section air |
| 768–1199px | Bust drops above its inscription; grid slice count reduces 5 → 3; section air 64px |
| ≤ 767px | Single column, re-composed as a scroll of plinths; the bust is full-bleed and centered on its own screen; slides restack as vertical cards |

Mobile is a **re-edit, not a shrink.** The dislocated grid narrows from 5 slices to 3 so the offset stays legible rather than turning to noise. Display type uses `clamp()` and each hand-broken line is locked `white-space: nowrap`, converging on the longest line so no single Chinese character or punctuation mark ever strands to its own row (zero orphans, down to a 390px screen). Chinese width limits use `em`/`px`, never `ch`.

---

## Anti-Slop Pledge

Strip the name off this page and it still reads as made by hand: a plaster bust fractured through a rose-to-cyan sunset, carved-serif inscriptions on gallery void, one pink pill you were saving. No purple-blue slop gradient, no centered-card trio, no naked system font, no Japanese glyphs standing in for Chinese, no animated glow. Every text-on-fill pair clears AA, every font stack survives a dead CDN, and no title strands an orphan at any width. If it looks like a template, it isn't this one.

*HeiGe-Design · MIT.*

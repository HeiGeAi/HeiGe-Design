---
version: alpha
name: SongCeladon-design-system
description: >-
  Song-Celadon is an extreme-restraint system for tea ware, slow craft and
  Eastern minimalist brands. One glaze — 青瓷 powder-celadon (#a3b7a0) — is the
  whole identity, laid over a 白瓷 porcelain page (#f2f0ea) and written in
  松烟墨 pine-soot ink. Depth comes from a deeper 梅子青 celadon for bands and
  from an ice-crackle (冰裂纹) lattice of 1px hairlines, never from shadow or
  glow. A thin Cormorant / Noto Serif SC 宋体 sets airy headlines; a quiet
  Inter sans carries the body. No red, no second hue, no gradient wash except
  the one slow glaze-pool fade. Emptiness is the material.

colors:
  primary: "#a3b7a0"       # 青瓷 Powder Celadon — the whole identity, glaze fills & chips
  on-primary: "#20272a"    # 松烟墨 ink set on the celadon glaze
  ink: "#2a322c"           # body & headline ink, a cool green-grey, never pure black
  canvas: "#f2f0ea"        # 白瓷 Porcelain — the page ground
  surface: "#f8f6f0"       # 窑白 Kiln-White — card face, a hair brighter than canvas
  muted: "#586459"         # 灰青 muted celadon-grey, secondary text on both grounds
  hairline: "#d3d8cc"      # 冰裂 crackle line — 1px dividers & the ice-crack lattice
  glaze-deep: "#3f5d4e"    # 梅子青 Deep Celadon — dark bands, dividers, inline links

typography:
  display-xl:
    fontFamily: '"Cormorant Garamond", "Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: 72px
    fontWeight: 300
    lineHeight: 1.12
    letterSpacing: 0.5px
  display-lg:
    fontFamily: '"Cormorant Garamond", "Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: 42px
    fontWeight: 300
    lineHeight: 1.2
    letterSpacing: 0.4px
  heading:
    fontFamily: '"Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: 23px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0px
  body:
    fontFamily: '"Inter", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif'
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.85
    letterSpacing: 0.2px
  numeral:
    fontFamily: '"Cormorant Garamond", "Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: 108px
    fontWeight: 300
    lineHeight: 1.0
    letterSpacing: -1px
  eyebrow:
    fontFamily: '"Inter", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif'
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 4px
  button:
    fontFamily: '"Inter", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif'
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0.4px
  caption:
    fontFamily: '"Inter", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif'
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0.2px

rounded:
  none: 0px
  sm: 3px
  md: 10px
  lg: 20px
  pill: 9999px

spacing:
  xs: 4px
  sm: 10px
  md: 18px
  lg: 32px
  xl: 64px
  section: 128px

components:
  # —— UI 界面组件 ——
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.xl}"
  button-ghost:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md} {spacing.xl}"
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
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  eyebrow-tag:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
  stat-block:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.numeral}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  figure-caption:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    padding: "{spacing.sm}"
  vessel-frame:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  footer:
    backgroundColor: "{colors.glaze-deep}"
    textColor: "{colors.surface}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "{spacing.section} {spacing.xl}"
  # —— 极细装饰基元（单色，无文字）——
  hairline-rule:
    backgroundColor: "{colors.hairline}"
    rounded: "{rounded.none}"
    height: 1px
    width: 100%
  glaze-mark:
    backgroundColor: "{colors.primary}"
    rounded: "{rounded.pill}"
    height: 3px
    width: 40px
  # —— slide 演示组件（HeiGe-PPT 融合，16:9）——
  slide-cover:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-section-divider:
    backgroundColor: "{colors.glaze-deep}"
    textColor: "{colors.surface}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.section} {spacing.xl}"
  slide-stat-hero:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.numeral}"
    rounded: "{rounded.none}"
    padding: "{spacing.section} {spacing.xl}"
  slide-quote:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.section} {spacing.xl}"
  slide-closing:
    backgroundColor: "{colors.glaze-deep}"
    textColor: "{colors.surface}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.section} {spacing.xl}"
---

# Song-Celadon · 宋瓷极简

A system for brands that sell calm — a tea studio, a single-origin ceramicist, an Eastern-minimalist lifestyle house, the kind of slow product that earns trust by refusing to shout. It reads like one celadon bowl set on a bare table in raking morning light: a single glaze color, a lot of porcelain, and a hairline crack running under the glaze that you only notice on the second look.

## Overview

The mood is **宋代美学的极简克制** — Song-dynasty restraint, where luxury is what you leave out. The entire system runs on a two-role color logic, and it deliberately owns only one hue.

- **青瓷 celadon `#a3b7a0` is the glaze.** It is the whole brand identity and it is used *quietly* — as a soft glaze fill behind a headline, as the primary chip carrying ink lettering, as the pooled fade on a divider. It is a pale, grey-green celadon (粉青), so the working text on it is **ink, not white** — a fired-glaze tile brushed with calligraphy, never a saturated web button.
- **松烟墨 ink `#2a322c` is the brush.** Everything reads as ink on porcelain: a cool green-grey black, never `#000`, so it sits on the page like pine-soot on paper rather than pixels on a screen.

Everything else is porcelain (`#f2f0ea` canvas, `#f8f6f0` surface), one **梅子青 deep-celadon** (`#3f5d4e`) for the few dark bands that need porcelain text, and a crackle hairline. There is **no red seal, no gold, no second accent** — that absence is the point, and it is exactly what separates 宋瓷极简 from the redder Eastern systems in this library. Rhythm comes from vast negative space and one thin 宋体 headline, not from color count. If you reach for a second hue, you have already left the Song.

## Colors

### Brand & Accent
| Token | Hex | Role |
|---|---|---|
| `primary` | `#a3b7a0` | 青瓷 powder-celadon. The glaze: soft fills, the ice-crackle panel, the primary chip (carries ink text), the glaze-mark bar. Used at rest, never as a loud CTA slab. |
| `on-primary` | `#20272a` | Deepest 松烟墨 ink set on the celadon chip. Contrast on `primary` ≈ 7.1:1 — ink on glaze, calligraphy on porcelain. |
| `glaze-deep` | `#3f5d4e` | 梅子青 deep celadon. The only dark ground: footer band, section dividers, closing slide, inline links. Depth without leaving the celadon family. |

### Surface
| Token | Hex | Role |
|---|---|---|
| `canvas` | `#f2f0ea` | 白瓷 porcelain — the page and every default slide. A warm off-white, never `#fff`. |
| `surface` | `#f8f6f0` | 窑白 kiln-white — card face, a hair brighter than canvas so a card lifts by tone, not shadow. |
| `hairline` | `#d3d8cc` | 冰裂 crackle line. Every 1px divider and the ice-crackle lattice. Decorative and structural, never text. |

### Text
| Token | Hex | Role |
|---|---|---|
| `ink` | `#2a322c` | 松烟墨. Body and headlines on porcelain. Contrast on `canvas` ≈ 11.6:1. Cool green-grey, tuned to the glaze. |
| `muted` | `#586459` | 灰青 muted celadon-grey. Captions, tags, meta. Contrast on `canvas` ≈ 5.4:1 — still AA, still legible, never mud. |

**Contrast discipline.** Because celadon is a *pale* glaze, it never carries white text — that pairing measures ≈ 2.1:1 and is banned. On the celadon chip the text is always ink (7.1:1). When a design needs a dark panel with porcelain text, it uses `glaze-deep`, where kiln-white sits at ≈ 6.7:1. Deep celadon as an inline link on porcelain measures ≈ 6.4:1. Every pairing in the system clears WCAG AA for body copy, no exceptions.

## Typography

### Font Family
- **Serif display (headlines): `"Cormorant Garamond", "Noto Serif SC", "Songti SC", "STSong", serif`, weight 300.** Latin glyphs pick up Cormorant's thin, high-contrast stroke; Chinese glyphs fall to **Noto Serif SC (思源宋体)** at a light weight — a genuine thin 宋体, the "细宋" the Song demands. Airy, elegant, almost fragile at scale.
- **Subhead serif: `"Noto Serif SC", "Songti SC", "STSong", serif`, weight 500.** A quieter, slightly firmer 宋体 for card and section titles.
- **Numeral serif: same Cormorant / Noto Serif SC stack, weight 300.** Big thin figures for stats — elegant Didone-adjacent numerals, deliberately *not* a techy mono. Restraint reads even in the数字.
- **Body / UI sans: `"Inter", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif`.** Low-drama, wide-leading, keeps long reading calm beneath the serif.

**中文铁律.** Every Chinese-bearing stack ends in a system CJK fallback (`Noto Serif SC / Songti SC / STSong` for serif, `Noto Sans SC / PingFang SC / Microsoft YaHei` for sans). **Chinese is never rendered with a Japanese font** (no Zen / Mochiy / Kosugi families) — simplified glyphs would drop to tofu or show Japanese variants. Cut every webfont link and the page must still render clean 简体 宋体 and 黑体. Never limit a Chinese measure with `ch`.

### Hierarchy
| Role | Size | Weight | Line-height | Tracking | Use |
|---|---|---|---|---|---|
| `display-xl` | 72px | 300 | 1.12 | 0.5px | Cover headline, one thin 宋体 line per screen |
| `display-lg` | 42px | 300 | 1.20 | 0.4px | Section titles, quote page, closing |
| `heading` | 23px | 500 | 1.40 | 0px | Card / subsection titles |
| `body` | 17px | 400 | 1.85 | 0.2px | Paragraphs, very generous leading |
| `numeral` | 108px | 300 | 1.00 | -1px | Stat figures, thin celadon numerals |
| `eyebrow` | 12px | 500 | 1.40 | 4px | Kickers, nav, tags — widely tracked |
| `button` | 15px | 500 | 1.20 | 0.4px | Buttons |
| `caption` | 13px | 400 | 1.60 | 0.2px | Captions, meta, figure notes |

### Principles
- **Thin is the signature.** Display weights stay at 300; the drama is size and air, not boldness. The largest headline to body ratio is ~4:1 — make the big thing bigger before you make anything heavier.
- **Body leading is sacred at 1.85.** The line-height *is* the Song whitespace, applied to text. Do not tighten it to fit more copy; cut copy instead.
- **Tracking is tuned per script.** Positive tracking opens the airy latin headlines and the eyebrow labels; it is kept off long Chinese runs at scale so 宋体 stays 疏朗 (open) without looking spaced-out.

## Layout

### Spacing
An asymmetric scale with a deliberately huge `section` step so pages breathe: `xs 4 · sm 10 · md 18 · lg 32 · xl 64 · section 128`. Vertical rhythm between blocks is `section` (128px is not a typo — it is the point). Inside a card it drops to `lg`. The jump from `xl` to `section` is intentionally violent: dense content, then a long exhale.

### Grid & Container
- A quiet 12-column grid that content **refuses to fill**. Long-form text caps at ~34em and is left-aligned, pulled toward the left third so the right two-thirds stay open porcelain — room for one glaze panel, one numeral, or nothing.
- Max content width ~1180px; the reading column is far narrower. The asymmetry, and the emptiness it protects, is the composition.

### Whitespace philosophy
This is a 留白 system before it is a color system. Whitespace is not the gap between elements — it is the primary material, the way porcelain is the material of a celadon bowl. Roughly two-thirds of every hero is intentionally empty. Never distribute space evenly to "balance" a layout; **pool it**, so the single glaze mark and the single ink line land in a field of silence.

## Elevation & Depth

Depth is ceramic, not luminous. Nothing glows.

| Layer | Treatment |
|---|---|
| Canvas | Flat porcelain `#f2f0ea`. Optionally a barely-there paper tooth (hairline at ~2% as a static, non-repeating noise), never a moving texture. |
| Surface card | Kiln-white `#f8f6f0` lifted by tone plus a 1px `hairline` edge. No drop shadow — a card is a slightly whiter glaze, not a floating object. |
| Glaze panel | The celadon fill reads as a fired skin via the ice-crackle hairline lattice and one slow glaze-pool gradient, not via shadow. |
| Deep band | `glaze-deep` footer / divider — depth is the tonal drop from porcelain to 梅子青, full stop. |

**No glow, no `backdrop-filter`, no animated shadow.** If a surface needs to feel "under glaze," it uses a static gradient and static hairlines. Any celadon gradient is a slow, single-direction pool fade — one gradient in the whole system — never a purple-blue wash and never animated.

## Shapes

| Token | Value | Use |
|---|---|---|
| `none` | 0px | Slides, stat blocks, nav, every hairline. The austere Song-Guan default. |
| `sm` | 3px | Buttons — a barely-there softening, the ground edge of a glazed tile. |
| `md` | 10px | Feature cards — one gentle curve, the shoulder of a bowl. |
| `lg` | 20px | The vessel-frame image mask — the single generous porcelain curve in the system. |
| `pill` | 9999px | Eyebrow tags and the glaze-mark bar — the 水滴 (water-drop) lozenge. |

Images are masked to the **vessel-frame** — a single soft-cornered rectangle recalling a celadon plate — or run full-bleed to a column edge. The **1px hairline** is the system's core graphic primitive: as a straight divider it is 极细分割; assembled into an irregular lattice it becomes 冰裂纹, the crackle glaze (see Signature Moment).

## Components

- **button-primary** — a celadon `#a3b7a0` glaze chip carrying **ink** lettering, 3px corners. The identity color as a tactile tile, not a shouting slab. Hover deepens the glaze a step toward 梅子青; focus draws a 1px ink ring at a 2px offset.
- **button-ghost** — kiln-white ground, ink label, sitting under a short `glaze-mark` bar instead of a box border. Quiet until needed.
- **nav-bar** — porcelain ground, ink links set in tracked `eyebrow`, one 1px hairline bottom rule. No logo-lockup clutter, no fill.
- **card-feature** — kiln-white panel, 1px hairline edge, 10px corners, a 宋体 `heading` title over generous `xl` inner padding. Lifts by tone, never by shadow.
- **eyebrow-tag** — a small kiln-white pill with muted, widely-tracked label text. Chapter / category markers.
- **stat-block** — a thin 108px celadon-serif figure over kiln-white, one 1px hairline above it, a muted unit beside. One number, a lot of air.
- **figure-caption** — muted `caption` on porcelain, set tight under an image; the only text allowed small.
- **vessel-frame** — the 20px soft-cornered image mask, kiln-white matte, holding a plate/photograph like porcelain in a hand; an optional muted caption sits inside.
- **footer** — a 梅子青 `glaze-deep` band with kiln-white `body` text — the one deep tonal drop that closes a page, wide margins, no link soup.
- **hairline-rule** — the 1px `hairline` divider bar; straight dividers and, tiled irregularly, the crackle lattice.
- **glaze-mark** — a 3px × 40px celadon lozenge that underlines a heading or anchors a button-ghost; the system's small connective stroke.

## Presentation System

The same tokens drive a 16:9 deck. This is a **contemplative deck** — one breath per slide, built on 一页一句话 / 黄金三秒 / 视觉锤, tuned toward stillness rather than punch.

- **Cover (`slide-cover`)** — porcelain frame, a tiny tracked `eyebrow` top-left, then a single thin `display-xl` 宋体 line placed low and left, with a soft celadon glaze panel breathing in the upper-right negative space. 黄金三秒: before a word is read, the viewer feels *quiet, Eastern, glaze* — one hue, mostly empty.
- **Section divider (`slide-section-divider`)** — the visual hammer, and the deck's signature (below). A single slow vertical **glaze-pool gradient** from kiln-white at the top to celadon at the bottom, one 宋体 title set on the glaze "waterline," a giant faint numeral submerged in the celadon like a shadow under glaze. On `glaze-deep` variants the title runs kiln-white.
- **Stat page (`slide-stat-hero`)** — one 108px thin celadon-serif figure, oversized past comfort, a 1px hairline underline and a muted unit. Everything else is porcelain air. One number, never a dashboard.
- **Quote page (`slide-quote`)** — a single `display-lg` 宋体 line floating in a full field of porcelain, left-aligned, vertically centered, with one short celadon `glaze-mark` beneath. After a run of denser slides, the sudden emptiness is the 视觉锤 — silence used as impact.
- **Closing (`slide-closing`)** — the one 梅子青 deep-celadon slide, one kiln-white `display-lg` line and a celadon `button-primary`. The tonal drop signs off. 余味, then stop.

The one-gradient rule is strict: the glaze-pool fade appears **only** on the section divider. Use it twice and it stops reading as glaze and starts reading as decoration.

## Signature Moment

**UI — 冰裂釉面 (The Ice-Crackle Glaze Surface).** A hero or feature surface is filled with a soft celadon glaze (a single slow `#a3b7a0` → kiln-white pool fade) and overlaid with an irregular lattice of **real 1px hairlines** — the 冰裂纹 / 开片 of a Song Guan-ware vessel. Each crack is a different length at a slightly off-grid angle, the network denser toward the edges and sparse in the center; the headline sits in the largest crack-free cell, in ink, like glaze pooled clear over a name. The lattice **bleeds a few pixels past the panel edge onto the porcelain canvas**, so the glaze reads as a fired ceramic skin rather than a green rectangle. Drop this into a generic template and you get a flat celadon box; the crackle only exists because the crack network was hand-placed as part of the layout, not painted on as a texture image.

**Deck — 釉色渐层过渡页 (The Glaze-Pool Divider).** Every section opens on a single vertical gradient that fades from kiln-white porcelain at the top to powder-celadon at the bottom — the exact tonal pooling of a dip-glazed bowl where the glaze runs thicker toward the foot. The stop is placed **asymmetrically, at the "waterline"** two-thirds down, not at the middle, and a giant thin numeral sits submerged in the celadon like a shadow read through glaze, with one 宋体 title on the waterline itself. That off-center pooled fade is the moment: a generic linear gradient centers its stop and looks like a UI; the celadon waterline is a ceramic observation no template reaches for.

## Do's and Don'ts

**Do**
- Own exactly one hue. Let celadon rest — as glaze fills, chips, and the crackle skin — and let ink and porcelain do the rest.
- Treat whitespace as the primary material; pool two-thirds of every hero into emptiness so one thin 宋体 line lands.
- Keep display weights at 300 and body leading at 1.85; make things bigger, never heavier.
- Use the 1px hairline as both the divider and, tiled, the 冰裂纹 crackle — the system's one texture.
- Set ink on the pale celadon chip; reach for `glaze-deep` whenever a ground needs porcelain text.

**Don't**
- **Don't touch the purple-blue cliché gradient (`#667eea → #764ba2`)** or any of its family. The only gradient here is the single celadon glaze-pool fade — a warm ceramic observation, never a synthetic wash.
- **Don't build the centered card triptych** (title + grey subtitle + three equal rounded cards, repeated). This is an asymmetric, left-weighted, mostly-empty grid.
- **Don't render Chinese with a Japanese font.** 简体中文 uses Noto Serif SC / Noto Sans SC with system CJK fallback, always — 细宋 is the whole point, tofu ruins it.
- **Don't animate shadows or add glow / `backdrop-filter`.** Depth here is ceramic tone and static crackle, not light. A card is a whiter glaze, not a floating object.
- Don't put white text on the pale celadon (it fails contrast), don't add a red seal or gold or any second accent, and don't tighten the 留白 to fit more content.

## Responsive Behavior

| Breakpoint | Layout |
|---|---|
| ≥1200px | Full asymmetric grid; celadon glaze panel and numeral live in the open right two-thirds; `display-xl` at 72px; crackle lattice at full density. |
| 768–1199px | Reading column widens toward center-left; the glaze panel moves below the headline; `display-xl` ~54px; crackle thins. |
| ≤767px | Single-column re-composition. The cover headline restacks line-by-line low on the screen, the glaze panel becomes a full-width band *above* the text, the crackle lattice simplifies to a few structural cracks so it reads at small size, the vessel-frame goes edge-to-edge. |

Mobile is a re-edit, not a shrink. Headlines use `clamp()` sized to the longest manually-broken line, each locked with `white-space: nowrap` so the thin 宋体 never drops an orphan 字 or a lone 标点 on a 390px screen. Chinese measures are limited in `em` / `px`, never `ch`. Verify zero orphans and `scrollWidth == clientWidth` on both desktop and ≤390px before shipping. All motion — the glaze fade, any fade-in — is gated behind `@media (prefers-reduced-motion: reduce)`.

## Anti-Slop Pledge

Strip the brand name and this page still reads as made by a hand that cared: one celadon glaze held at rest, a porcelain field mostly left empty, a thin 宋体 line placed low and left, and a network of 1px cracks running under the glaze that only surfaces on the second look. No purple gradient, no centered card triptych, no glow, no default font naked on the screen, no red or gold reached for to "add interest." The restraint is the fingerprint — a pipeline adds; 宋瓷极简 removes, until only the glaze, the ink, and the silence are left.

---

*HeiGe-Design · song-celadon · MIT.*

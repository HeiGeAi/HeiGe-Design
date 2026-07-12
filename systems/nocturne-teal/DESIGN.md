---
version: alpha
name: Halonyx-design-system
description: >-
  Halonyx is a minimal-dark system for AI infrastructure and agent-orchestration
  platforms — the calm, premium look of software that runs while you sleep. A
  near-black deep-space canvas (#08090d) holds one electric-mint teal (#2dd4bf)
  that appears only where it earns attention: a single diagonal radial glow
  shaft, one glowing pill CTA, one breathing live-dot. Geist and Inter carry
  tight display type; JetBrains Mono carries every numeral and kicker. The
  signature move is a teal light shaft cast across a hairline grid, lighting
  exactly one thing on screen. Restraint is the brand. HeiGe-Design.

colors:
  primary: "#2dd4bf"       # electric-mint teal — the only saturated color, used sparingly
  on-primary: "#031815"    # deep teal-ink for text sitting on teal fills
  ink: "#e9edf3"           # primary text — soft near-white, never pure #fff
  canvas: "#08090d"        # deep-space black page floor
  surface: "#0f1319"       # lifted card / panel surface
  muted: "#8a94a4"         # secondary text, labels, meta
  hairline: "#20262f"      # 1px separators and the fine background grid
  glow: "#5ff0dc"          # brighter mint for the glow peak, live-dot core, hero numeral
  accent: "#f6a35c"        # restrained warm amber — warnings / alerts only

typography:
  display-xl:
    fontFamily: "'Geist', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', 'Hiragino Sans GB', sans-serif"
    fontSize: 76px
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: -1.8px
  display-lg:
    fontFamily: "'Geist', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', 'Hiragino Sans GB', sans-serif"
    fontSize: 44px
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: -1px
  heading:
    fontFamily: "'Geist', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', 'Hiragino Sans GB', sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.2px
  body:
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', 'Hiragino Sans GB', sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: 0px
  body-mono:
    fontFamily: "'JetBrains Mono', 'SF Mono', ui-monospace, 'Cascadia Code', 'Noto Sans SC', 'PingFang SC', monospace"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0px
  eyebrow:
    fontFamily: "'JetBrains Mono', 'SF Mono', ui-monospace, 'Cascadia Code', 'Noto Sans SC', 'PingFang SC', monospace"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 2px
  button:
    fontFamily: "'Geist', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif"
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0.2px
  caption:
    fontFamily: "'JetBrains Mono', 'SF Mono', ui-monospace, 'Cascadia Code', 'Noto Sans SC', 'PingFang SC', monospace"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.1px

rounded:
  none: 0px
  sm: 6px
  md: 10px
  lg: 16px
  pill: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  section: 96px

components:
  # —— UI interface components ——
  nav-bar:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.none}"
    padding: "{spacing.md} {spacing.xl}"
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
  card-feature:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  stat-block:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.body-mono}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  badge-live:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.sm}"
  badge-alert:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.accent}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.sm}"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "{spacing.section} {spacing.xl}"
  divider:
    backgroundColor: "{colors.hairline}"
    rounded: "{rounded.none}"
  # —— slide presentation components (HeiGe-PPT fusion, 16:9) ——
  slide-cover:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-section-divider:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-stat-hero:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.glow}"
    typography: "{typography.body-mono}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-quote:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-body:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md}"
  slide-closing:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
---

# Halonyx · 深空电青 (nocturne-teal)

> Dark-tech system for AI infrastructure and agent orchestration. The look of software that runs while you sleep — near-black, calm, and lit by exactly one color. By HeiGe-Design.

## Overview

Halonyx is built on a single act of restraint: a near-black **deep-space canvas** and one **electric-mint teal**, and nothing tries to earn attention that hasn't paid for it. The teal has two jobs and only two — it **casts light** (one diagonal radial glow shaft bleeding in from the upper corner, one static halo under the primary CTA) and it **signals state** (one breathing live-dot, one status pill). Everything else is deep space and hairline.

The type is deliberately quiet so the light can be loud. **Geist / Inter** carry tight, low-drama display headings; **JetBrains Mono** carries every numeral, kicker, and status string, because in infra the data *is* the content. The rhythm is slow and confident: large fields of black, one bright anchor per screen, a thin grid you feel more than see.

深空黑负责沉默，电青负责发光。整套系统的气场来自克制，不来自堆叠。一屏只点亮一件事。

## Colors

### Brand & Accent
- **primary `#2dd4bf`** — electric-mint teal. The one saturated color in the system. Used for the CTA fill, the live number, links, and the glow source. If it appears more than three times on a screen, remove some.
- **glow `#5ff0dc`** — a brighter mint reserved for the *peak* of a glow: the core of the breathing dot, the giant hero numeral, the focus ring. Never used as a flat fill.
- **accent `#f6a35c`** — a restrained warm amber. The system's only warm voice, allowed **only** for warnings, alerts, and negative deltas. It exists so that "something is wrong" reads instantly against a cool monochrome. Never decorative.

### Surface
- **canvas `#08090d`** — deep-space black page floor. Not pure `#000`; a hair of blue keeps it feeling like depth, not a hole.
- **surface `#0f1319`** — lifted panel / card. One tiny step up from canvas — elevation here is a whisper, reinforced by hairline and glow, not by a heavy drop shadow.
- **hairline `#20262f`** — 1px separators and the background grid. On the grid it is drawn at low opacity so it reads as texture, not a table.

### Text
- **ink `#e9edf3`** — primary text. Soft near-white; pure `#fff` on black vibrates and looks cheap.
- **muted `#8a94a4`** — secondary text, labels, timestamps, footer.
- **on-primary `#031815`** — deep teal-ink used only on teal fills (button, closing slide). A tinted near-black, not plain black, so the button feels carved from the same teal light.

### Semantic
- **live / positive** → `primary` (teal), paired with the breathing dot.
- **warning / negative** → `accent` (amber).
- Contrast floor: every text-on-fill pair in this system clears WCAG AA by a wide margin (lowest pair `muted` on `surface` at ~6.1:1; `on-primary` on `primary` at ~9.9:1). No low-contrast "ghost gray on dark" anywhere.

## Typography

### Font Family
- **Display / Heading / Button** → `Geist`, `Inter`, then system sans, then **Chinese fallback `Noto Sans SC` / `PingFang SC` / `Microsoft YaHei`**. If the webfont fails to load (common in CN networks), Chinese stays clean instead of collapsing to tofu.
- **Body** → `Inter` first, same Chinese fallback tail.
- **Mono / Data / Kicker** → `JetBrains Mono`, then `SF Mono` / `ui-monospace`, then `Noto Sans SC` / `PingFang SC` so any Chinese in a data label still renders.
- **中文绝不用日文字体渲染** (no Mochiy / Zen Maru / etc.) — Simplified glyphs go missing and turn to tofu. Chinese display uses `Noto Sans SC` / source-han only.

### Hierarchy
| Role | Family | Size | Weight | Line | Tracking | Use |
|---|---|---|---|---|---|---|
| display-xl | Geist/Inter | 76 | 600 | 1.02 | -1.8 | Cover headline, hero |
| display-lg | Geist/Inter | 44 | 600 | 1.08 | -1.0 | Section title, quote, closing |
| heading | Geist/Inter | 20 | 600 | 1.3 | -0.2 | Card / feature title |
| body | Inter | 16 | 400 | 1.65 | 0 | Paragraph text |
| body-mono | JetBrains Mono | 15 | 500 | 1.5 | 0 | Data, metrics, code |
| eyebrow | JetBrains Mono | 12 | 500 | 1.4 | +2.0 | Uppercase kicker, nav, status |
| button | Geist/Inter | 15 | 600 | 1.0 | +0.2 | CTA label |
| caption | JetBrains Mono | 13 | 400 | 1.5 | +0.1 | Footnote, footer, meta |

### Principles
- **Display stays under 620 weight.** Dark-tech authority comes from tight tracking and scale, not from black-weight shouting.
- **The mono is a first-class citizen.** Numerals, latencies, versions, chapter numbers — all mono, tabular where they line up in columns.
- **Contrast ratio ≥ 1:4** between the largest headline and body. On a stat-hero the numeral can go *comically* large; that is the point.

## Layout

### Spacing
An 8-based scale: `xs 4 · sm 8 · md 16 · lg 24 · xl 40 · section 96`. Vertical rhythm between major bands is `section` (96) — the black between blocks is doing as much work as the blocks. Inside a card, `lg` (24) padding, `md` (16) gaps.

### Grid & Container
- Content max-width ~1120px, 12-column, `xl` gutters.
- A **hairline background grid** at ~48px, drawn with `hairline` at 3–4% opacity via a static `linear-gradient` — you feel structure without reading a table. It is decoration, never content.
- Alignment is disciplined and mostly **left / grid-anchored**. Centering is reserved for the deck's hero moments, never the default.

### Whitespace Philosophy
Negative space here is literal negative space — deep-space black. It is not "empty," it is where the glow has room to fall off to nothing. A screen with one bright anchor floating in a large dark field is the target state, not an unfinished one.

## Elevation & Depth

Depth in Halonyx is **light, not shadow**. Elevation reads through the interplay of `canvas → surface`, a 1px `hairline` edge, and a soft teal glow — never a gray drop shadow that would muddy the black.

| Layer | Treatment |
|---|---|
| Page floor | `canvas`, hairline grid at 3–4% |
| Panel / card | `surface`, 1px `hairline` border, no gray shadow |
| Interactive (CTA) | `primary` fill + **static** teal glow `0 0 40px rgba(45,212,191,.35)` |
| Focus | 2px `glow` ring, no blur animation |
| The atmosphere | one diagonal `radial-gradient` glow shaft from the upper corner |

Depth rules (production-grade):
- **Glow is `box-shadow` / `radial-gradient` only** — never `backdrop-filter` (it repaints every scroll frame).
- **Shadows/glows are static, never animated** — animating `box-shadow` repaints per frame and stutters. The glow is always-on, calm, not pulsing.
- The single exception that moves is the breathing dot, and it animates only `opacity` + `transform: scale` (compositor-friendly).

## Shapes

### Border Radius
| Token | Value | Use |
|---|---|---|
| none | 0 | Slides, nav, footer, panels edges — the system leans sharp |
| sm | 6 | Small inline callouts, chips |
| md | 10 | Stat blocks, inputs |
| lg | 16 | Feature cards |
| pill | 9999 | CTA buttons, status badges |

The system is **mostly sharp-cornered** — 16:9 slides and panels sit square, which reads engineered and precise. The only fully round thing is the pill CTA and status badges, so roundness itself becomes a signal for "this is interactive / this is live."

### Geometry
- Images and diagrams sit in `md`/`lg` rounded frames with a 1px `hairline` edge.
- The teal is allowed to become geometry in exactly one place: the diagonal glow shaft. Everywhere else, teal is a stroke, a dot, or a fill on a pill.

## Components

- **nav-bar** — `surface` bar, bottom `hairline`, uppercase mono (`eyebrow`) links in `ink`. Sharp corners. A single `badge-live` may sit at the right edge.
- **button-primary** — `primary` fill, `on-primary` label, `pill`, with a **static** teal glow. The one bright button per screen.
- **button-secondary** — `surface` fill, `hairline` border, `ink` label, `pill`. Recedes; never glows.
- **card-feature** — `surface`, 1px `hairline`, `lg` radius. Title in `heading` (`ink`), supporting copy in `body` (`muted` for meta). No gray drop shadow.
- **stat-block** — `surface`, `md` radius. Metric in mono `primary`; label in `muted`. Numbers are tabular.
- **badge-live** — `pill`, `surface` ground, `primary` uppercase mono label, prefixed by the **breathing dot**. This is the system's heartbeat.
- **badge-alert** — `pill`, `surface` ground, **`accent` amber** label. The only warm element; appears only when something needs attention.
- **footer** — `canvas`, top `hairline`, `muted` mono caption. Signed HeiGe-Design.

Slide components (see Presentation System): `slide-cover` · `slide-section-divider` · `slide-stat-hero` · `slide-quote` · `slide-body` · `slide-closing`.

## Presentation System

Halonyx renders as a **16:9 keynote** with one rule above all: **one line per slide, one anchor per slide.** The deck is the same design language as the UI — same black, same one teal, same hairline grid — so a product screen and a pitch slide are visibly one system.

- **黄金三秒 (golden 3 seconds):** every slide must state its identity in the first frame. On black, the eye finds the single teal-lit object instantly — that object *is* the message.
- **视觉锤 (visual hammer):** the diagonal glow shaft is the hammer. It repeats slide to slide, always lighting the one thing that matters, so the deck has a recurring signature the audience learns to read.

Slide roles:
- **slide-cover** — `canvas`, `display-xl` headline left-anchored, one `badge-live` kicker, the glow shaft entering from the upper-right. One sentence, no bullets.
- **slide-section-divider** — `surface` (one step up so a section change is *felt*), a giant mono chapter number `01 / 06` in `muted`, section title in `display-lg`.
- **slide-stat-hero** — `canvas`, one enormous mono numeral lit in `glow`, unit in small mono below. The glow shaft falls on the numeral and nothing else. One number owns the whole 16:9 frame.
- **slide-quote** — `canvas`, a `display-lg` pull-quote, opening quotation mark set in `primary`. One thought, centered in a sea of black.
- **slide-body** — `canvas`, at most three `body` lines or a single `stat-block` row; used sparingly, never as a bullet dump.
- **slide-closing** — the **reversal**: the whole frame floods to `primary` teal, `on-primary` headline, one dark pill CTA. After a full deck of black, the finale goes fully luminous. That inversion is the applause line.

Rhythm across a deck: cover (black) → dividers + stats (black, one anchor each) → quote (black, breath) → **closing (teal flood)**. The single burst of full color at the end is earned by the restraint before it.

## Signature Moment

Two moments this system can produce that a generic template cannot:

- **UI — "The Beacon."** A near-black hero over a faint hairline grid. One teal **radial glow shaft** cast diagonally from the upper-right, falling onto exactly one object: the glowing pill CTA. Beside it, a single **breathing live-dot** (`glow` core, `primary` ring) softly pulsing `opacity`+`scale`. Nothing else competes. The entire screen is deep space, one light, one heartbeat. Swap the template and you lose the discipline that makes one light read as luxury.

- **Deck — "The Glowing Numeral."** `slide-stat-hero`: pure deep-space black, one **giant mono numeral** lit in `glow`, the diagonal shaft touching only that number, its unit whispered in tiny mono beneath. `99.98` filling a 16:9 frame, glowing, alone. One number, three seconds, unforgettable — and impossible to fake by centering a card and calling it a stat.

## Do's and Don'ts

**Do**
- Keep teal rare. One glow, one CTA, one live-dot per screen.
- Let the black breathe — large dark fields are the design, not empty slots to fill.
- Carry all data in mono; make the hero numeral comically large.
- Use the amber `accent` only for genuine warnings, so it always means something.
- Keep the glow static and always-on; move only the one breathing dot.

**Don't**
- **不碰紫蓝俗套渐变** — no `#667eea → #764ba2` and no member of that AI-slop gradient family. Teal is teal; it never drifts to indigo.
- **不做居中卡片三件套** — no "one title + one gray subtitle + three equal rounded cards" repeated down the page. Halonyx anchors left and gives each screen a single hero.
- **中文绝不用日文字体** — no Mochiy / Zen Maru rendering Simplified Chinese; use `Noto Sans SC` / `PingFang SC` fallback so it never becomes tofu.
- **不动画化阴影 / 辉光** — never animate `box-shadow` or `text-shadow`; no `backdrop-filter`. Glow stays still, scroll stays smooth.
- Don't use pure `#000` / pure `#fff`, don't scatter teal everywhere, don't add a second saturated brand color.

## Responsive Behavior

Mobile is **re-choreographed, not shrunk**. The same story, re-staged for a tall frame.

| Breakpoint | Behavior |
|---|---|
| ≥1200px | Full 12-col grid, glow shaft from upper-right, hairline grid at 48px |
| 768–1199px | 8-col, glow repositions to top-center, grid coarsens to 64px |
| <768px | Single column, glow becomes a top-edge wash, stat-hero numeral scales via `clamp()` |

Reflow rules (production-grade):
- **Zero orphans:** manually broken headlines lock each line with `white-space: nowrap` and size with `clamp()` so the longest line fits a ≤390px screen — no single glyph or punctuation stranded on its own line.
- **Balanced wrapping:** centered multi-line copy uses `text-wrap: balance`; Chinese width is limited in `em`/`px`, **never `ch`** (which is latin-`0` width and forces Chinese to wrap early into orphans).
- **16:9 → mobile:** deck slides stack vertically; the stat-hero keeps its one-numeral-per-screen law, just re-scaled.
- **Motion off:** every animation (the breathing dot included) is disabled under `@media (prefers-reduced-motion: reduce)`.

## Anti-Slop Pledge

Erase the name and this is still, at a glance, something made on purpose. No purple-blue gradient, no three centered cards, no naked system font, no emoji standing in for icons, no "empower / all-in-one" filler. Just deep-space black, one teal light falling on one thing, and a single heartbeat in the corner. If it doesn't look like it runs in production while you sleep, it isn't Halonyx.

— HeiGe-Design · MIT · nocturne-teal

---
version: alpha
name: Redline-design-system
description: >-
  Redline is the home turf of an opinion columnist. A heavy Fraunces serif is
  slammed in warm-black onto warm ivory paper, and a single cinnabar red is
  rationed for one weapon only: the hand-drawn underline that marks the sentence
  you are meant to remember. Running prose is set in a reading serif; datelines,
  folios, and buttons are set in mono, like the machinery of the press. Stark
  rectangles, almost no rounding, one argument per screen. Chinese falls back to
  Noto Serif SC / Songti SC, never a Japanese face.

colors:
  primary: "#15110a"        # ink black — the slam; display text + primary button + inverted slides
  on-primary: "#faf7f1"     # bright ivory reversal, sits on black or on the red
  ink: "#1d1710"            # running body text, a hair warmer/softer than the display black
  canvas: "#f7f4ee"         # warm ivory page
  surface: "#efe8db"        # deeper warm paper — pull-quote block, aside cards
  muted: "#6d6353"          # warm taupe for datelines, credits, secondary meta
  hairline: "#d8cfbe"       # 1px warm rule between columns and rows
  accent: "#c42718"         # cinnabar editorial red — the underline, the folio numeral, the closing

typography:
  display-xl:
    fontFamily: '"Fraunces", "Fraunces 72pt", Georgia, "Times New Roman", "Noto Serif SC", "Songti SC", serif'
    fontSize: 96px
    fontWeight: 900
    lineHeight: 0.98
    letterSpacing: -2px
  display-lg:
    fontFamily: '"Fraunces", "Fraunces 72pt", Georgia, "Times New Roman", "Noto Serif SC", "Songti SC", serif'
    fontSize: 60px
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: -1px
  pull-quote:
    fontFamily: '"Fraunces", "Fraunces 72pt", Georgia, "Times New Roman", "Noto Serif SC", "Songti SC", serif'
    fontSize: 42px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.4px
  heading:
    fontFamily: '"Fraunces", "Fraunces 72pt", Georgia, "Times New Roman", "Noto Serif SC", "Songti SC", serif'
    fontSize: 27px
    fontWeight: 700
    lineHeight: 1.16
    letterSpacing: -0.3px
  body:
    fontFamily: '"Newsreader", Georgia, Cambria, "Noto Serif SC", "Songti SC", serif'
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.72
    letterSpacing: 0px
  body-mono:
    fontFamily: '"IBM Plex Mono", ui-monospace, "SFMono-Regular", Menlo, "Noto Sans SC", "PingFang SC", monospace'
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0px
  eyebrow:
    fontFamily: '"IBM Plex Mono", ui-monospace, "SFMono-Regular", Menlo, "Noto Sans SC", "PingFang SC", monospace'
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 2.5px
  caption:
    fontFamily: '"IBM Plex Mono", ui-monospace, "SFMono-Regular", Menlo, "Noto Sans SC", "PingFang SC", monospace'
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0.4px
  button:
    fontFamily: '"IBM Plex Mono", ui-monospace, "SFMono-Regular", Menlo, "Noto Sans SC", "PingFang SC", monospace'
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 1.6px

rounded:
  none: 0px
  sm: 2px
  pill: 999px

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
    typography: "{typography.eyebrow}"
    rounded: "{rounded.none}"
    padding: "{spacing.md} {spacing.xl}"
  rule-hairline:
    backgroundColor: "{colors.hairline}"
    height: 1px
    width: 100%
  hero-masthead:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  section-heading:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  essay-body:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  pull-quote-block:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.pull-quote}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  mark-red:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.accent}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs}"
  card-essay:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.lg}"
  button-ghost:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.lg}"
  stat-block:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.body-mono}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  folio-chip:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
  caption-credit:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs}"
  footer:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
  # —— slide 演示组件（16:9 融合 HeiGe-PPT）——
  slide-cover:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
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
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-quote:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.pull-quote}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-closing:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
---

# 墨宣言 · Redline

> An opinion review where every conviction earns a red line underneath it.

## Overview

Redline is built for the person who writes to be argued with: the columnist, the essayist, the thinker who publishes an opinion and stakes their name on it. The whole system behaves like a printed op-ed page that has been read hard — margins annotated, one sentence circled, a red pen laid across the claim that matters.

**主色有两个角色。** 墨黑 `#15110a` is the voice: a heavy Fraunces serif slammed flat onto warm ivory, big enough that a single sentence can own an entire screen. 绛红 `#c42718` is the verdict: it never fills an area, it never gradients, it appears as one weapon only — the underline drawn beneath the words you are meant to carry out of the room. If red shows up twice on a screen, one of them is wrong.

**字体签名是"作者的嗓音 + 印刷机器"的对位。** Prose is a reading serif (Newsreader). Every mark the press leaves — the dateline, the folio number, the byline, the button — is set in mono (IBM Plex Mono), tracked wide and upper-cased, so the human argument and the machine that carries it read as two different textures on the same page.

**整体节奏是"一句一段的留白"。** This is not a dense grid. It is a slow column with hard silences between statements. One idea lands, the page breathes, the next idea lands harder. The rhythm is the argument.

## Colors

Restraint is the entire palette strategy: warm ivory + warm black + one red, held apart by whitespace, never by more color.

### Brand & Accent
| Token | Hex | Role |
|---|---|---|
| `primary` | `#15110a` | Ink black — display slam, primary button, inverted slides. The dominant. |
| `accent` | `#c42718` | Cinnabar editorial red — the underline, the folio numeral, the closing slide. Rationed to ≤5% of any screen. |

### Surface
| Token | Hex | Role |
|---|---|---|
| `canvas` | `#f7f4ee` | Warm ivory page. The default ground everywhere. |
| `surface` | `#efe8db` | Deeper warm paper — pull-quote blocks and aside cards sink a half-tone below the page. |
| `hairline` | `#d8cfbe` | 1px warm rule for column dividers and row separators. Never used as text. |

### Text
| Token | Hex | Role | Contrast on ground |
|---|---|---|---|
| `ink` | `#1d1710` | Running body text | 16.2:1 on canvas · 14.6:1 on surface |
| `primary` | `#15110a` | Display headlines, stat numerals | 17.1:1 on canvas |
| `muted` | `#6d6353` | Datelines, photo credits, secondary meta | 5.37:1 on canvas |
| `on-primary` | `#faf7f1` | Reversal text on black and on red | 17.6:1 on primary · 5.38:1 on accent |

### Semantic
Red is the only semantic signal, and it means exactly one thing: **this is the claim.** It is not an error color, not a link color, not a hover color. Keeping red single-purpose is what makes it read as a verdict instead of decoration. All eight tokens are referenced by at least one component; nothing is warehoused unused.

## Typography

### Font Family
- **Display (Fraunces)** — a high-contrast, expressive serif with genuine heavy weights. Carries `display-xl`, `display-lg`, `pull-quote`, `heading`. This is the black slam.
  `"Fraunces", "Fraunces 72pt", Georgia, "Times New Roman", "Noto Serif SC", "Songti SC", serif`
- **Body (Newsreader)** — a serif drawn for long reading. Carries `body`.
  `"Newsreader", Georgia, Cambria, "Noto Serif SC", "Songti SC", serif`
- **Marks (IBM Plex Mono)** — the press machinery: `body-mono`, `eyebrow`, `caption`, `button`.
  `"IBM Plex Mono", ui-monospace, "SFMono-Regular", Menlo, "Noto Sans SC", "PingFang SC", monospace`

**中文铁律。** 每一条能承载中文的字栈末尾都压了系统兜底：衬线走 `Noto Serif SC / Songti SC`，等宽/标记走 `Noto Sans SC / PingFang SC`。全部是简体中文字体，**绝不用日文字体（Mochiy / Zen Maru 之流）渲染中文** —— 简体会缺字变豆腐。断网时 Fraunces 塌到 Georgia 而不是 Times，标题不至于换脸。Web 字体放最前保设计，系统字体兜底保可读。

### Hierarchy
| Role | Family | Size | Weight | Line | Tracking | Use |
|---|---|---|---|---|---|---|
| `display-xl` | Fraunces | 96px | 900 | 0.98 | -2px | Cover slam, hero, giant stat numeral |
| `display-lg` | Fraunces | 60px | 800 | 1.02 | -1px | Section headline, divider, closing |
| `pull-quote` | Fraunces | 42px | 600 | 1.20 | -0.4px | The signature quote (set italic in prose) |
| `heading` | Fraunces | 27px | 700 | 1.16 | -0.3px | Card / aside titles |
| `body` | Newsreader | 20px | 400 | 1.72 | 0 | Running essay text |
| `body-mono` | IBM Plex Mono | 16px | 500 | 1.50 | 0 | Stat numbers, tabular data |
| `eyebrow` | IBM Plex Mono | 13px | 600 | 1.20 | 2.5px | Dateline / kicker (UPPERCASE) |
| `caption` | IBM Plex Mono | 13px | 400 | 1.55 | 0.4px | Credits, footnotes, footer |
| `button` | IBM Plex Mono | 14px | 600 | 1 | 1.6px | `READ THE ARGUMENT →` (UPPERCASE) |

### Principles
- **Contrast is 1:4.8** between `body` (20px) and `display-xl` (96px). The biggest word is deliberately too big — that is the point of an opinion page.
- **Body line-height is generous (1.72)** so a single sentence per paragraph has room to sit alone.
- Mono is for latin/numeric marks. Long-form Chinese never sets in mono — if a Chinese kicker is needed it drops to the serif stack, not the mono one.

## Layout

### Spacing
A 4px base scale: `xs 4 · sm 8 · md 16 · lg 24 · xl 40 · section 96`. The jump from `xl` to `section` is intentionally violent — that gap is the silence between two arguments.

### Grid & Container
- Reading measure caps at **34em** (`~640px` at 20px body) — measured in `em`, never `ch`, because `ch` is a latin-zero width and would fold Chinese too early into orphans.
- The page is a **single left-aligned column**, not a centered card stack. The column hangs off a left rule; folio numbers and datelines live in the left margin like marginalia.
- The pull-quote is allowed to **break the measure** and run full-bleed — the only element permitted to escape the column.

### Whitespace Philosophy
Whitespace here is punctuation, not padding. It is uneven on purpose: tight inside a paragraph, cavernous between statements. A screen that is evenly spaced from top to bottom has failed — there is no rhythm, and rhythm is the whole product.

## Elevation & Depth

This is a paper system; depth is printerly, not glassy.
| Layer | Treatment |
|---|---|
| Page | `canvas` ivory, flat |
| Sunk block (pull-quote, aside) | `surface`, a half-tone below page, framed by a 1px `hairline` and a thick left `accent` rule |
| Inverted band (divider, footer, closing) | full `primary` black or full `accent` red, edge to edge |

No drop shadows, no card float, no `backdrop-filter`. Separation comes from tone (`canvas` vs `surface`), a single hairline, and the red left-rule — never from a blurred halo. If depth is ever animated, only `opacity` moves; **shadows are static and never animated** (逐帧重绘阴影会掉帧).

## Shapes

### Border Radius
| Token | Value | Use |
|---|---|---|
| `none` | 0px | Everything structural — buttons, cards, slides, rules |
| `sm` | 2px | The red mark tag only — the softest possible acknowledgement |
| `pill` | 999px | The folio index chip only — one rounded object amid rectangles, on purpose |

The system is **stark and rectangular by conviction.** Rounding softens; this brand does not soften. The 2px on the red tag and the one pill folio exist as deliberate tension, not as a global style.

### Geometry
- Images are set as **hard rectangles**, full-bleed or column-width, no rounded corners, no border except an optional hairline.
- The red underline is drawn as a **hand-weighted stroke** (2–3px, slightly irregular), not a flat CSS `border-bottom` — it must look pen-made.

## Components

**nav-bar** — ivory ground, ink links in tracked mono `eyebrow`, closed by one `rule-hairline` below. No logo lockup mush; the masthead word sits left, links sit right, dateline in the middle. Left-aligned, never centered.

**rule-hairline** — the 1px warm rule itself, a thin block filled with `hairline`. It is the only divider in the system: under the nav, between essay sections, above each stat. No borders, no boxes — one clean line does the separating.

**hero-masthead** — the opening slam: one Fraunces `display-xl` sentence, one clause underlined in red, a mono byline/dateline set beneath like a printed standfirst.

**section-heading** — `display-lg` black serif, preceded by a mono `eyebrow` kicker and a short red rule.

**essay-body** — Newsreader `body` at 20px/1.72, one sentence per paragraph, capped at 34em, hung on the left rule.

**pull-quote-block** — the UI centerpiece. `surface` paper, thick `accent` left rule, giant Fraunces `pull-quote`, one clause carrying the red underline.

**mark-red** — inline `accent` emphasis: red text + hand-drawn red underline. The one recurring red gesture in running prose.

**card-essay** — an aside on `surface` with a `hairline` frame and Fraunces `heading` title. Rectangular, never floated.

**button-primary** — solid black rectangle, ivory mono label, `READ THE ARGUMENT →`. No radius, no shadow, no gradient.

**button-ghost** — ivory ground, 1px ink border, ink mono label. The quiet secondary.

**stat-block** — `body-mono` numerals on ivory, a `hairline` rule above, an `eyebrow` unit label. Numbers read like a printed table.

**folio-chip** — the one pill: a small black chip with a mono index number (`No. 04`), sitting in the left margin like a page folio.

**caption-credit** — `muted` mono caption for photo credits and footnotes, at 5.37:1 contrast.

**footer** — an inverted black band, ivory mono `caption`, a `hairline` above. The page closes on black, like the last line of a column.

## Presentation System

Redline collapses into a 16:9 deck that reads like an op-ed printed across spreads. It obeys HeiGe-PPT's three laws:

- **一页一句话.** Each slide carries exactly one sentence. If a slide needs two thoughts, it is two slides. The essayist rhythm is non-negotiable on screen.
- **黄金三秒.** The first frame is the black Fraunces slam on ivory — no logo animation, no build, just a sentence too big to ignore. Conviction in three seconds.
- **视觉锤.** The hammer is the red underline and the red folio numeral. Nothing else is red. When red appears, the room knows it is the point.

| Slide | Layout |
|---|---|
| `slide-cover` | Ivory ground, one `display-xl` sentence bottom-left, one clause red-underlined, mono dateline + folio `No. 01` in the corner. |
| `slide-section-divider` | Full black band. Giant ivory `display-lg` section title, a **red `display` numeral** (01 / 02) hanging huge in the corner. The only build allowed: the numeral fades in. |
| `slide-stat-hero` | Ivory. One `display-xl` serif numeral owns the slide; mono `eyebrow` unit beneath; a red underline strikes the number. One statistic, no chart junk. |
| `slide-quote` | The deck signature. `surface` paper, full-bleed Fraunces italic `pull-quote`, one word red-underlined, folio in the corner, hairline baseline. One argument, one page. |
| `slide-closing` | Full **red** band — the single time red fills a surface. Ivory `display-lg` call to action, mono signature line. The red closing is the verdict landing. |

The arc: ivory cover → black dividers with red numerals → ivory stat → paper quote with red underline → **red closing.** Red is spent four times in a whole deck, and every appearance is load-bearing.

## Signature Moment

Two moments this system owns that a generic template cannot reproduce:

**UI — 红线落款 (The Redline Stamp).** In the hero, a single Fraunces sentence sits alone. As the reader scrolls it into view, a **hand-weighted red underline strokes itself on** beneath one clause — a real pen mark, drawn via an SVG stroke that animates `stroke-dashoffset` (compositor-cheap, `transform`/`opacity` only, killed under `prefers-reduced-motion`). Beneath it, a mono dateline sets like a printed standfirst. It is un-copyable because it is the *combination*: essayist one-sentence-per-line silence + the editor's red pen marking the exact clause that matters. Not a highlight box, not an accent bar — a stamp of conviction.

**Deck — 社论对页 (The Op-Ed Spread).** A `slide-quote` that is nothing but one giant serif sentence on warm paper, one word carrying the red underline, a mono folio `No. 07` in the top corner and a hairline baseline holding it. It reads as a printed opinion spread, not a slide. Change the template and you get a centered quote card with a gray attribution — this reads as a page torn from a review.

## Do's and Don'ts

### Do
- Give one sentence an entire screen. Let the biggest word be almost too big.
- Ration red to a single gesture per view — the underline, the numeral, or the closing. Never two reds fighting.
- Left-align to the column rule; hang folios and datelines in the margin.
- Draw the underline by hand-weight (irregular 2–3px stroke), not a flat CSS border.
- Set prose in the reading serif and every machine-mark in mono — keep the two textures distinct.
- Cap the measure in `em`, and manually break big headlines with per-line `white-space: nowrap` + `clamp()` so the longest line survives ≤390px.

### Don't
- **不碰紫蓝俗套渐变** (`#667eea → #764ba2` 及其全家桶) — this system is flat ivory, black, and one red. No gradient exists anywhere.
- **不做居中卡片三件套** — no centered title + gray subtitle + three equal rounded cards. The column is left-hung and asymmetric.
- **中文绝不用日文字体渲染** — Chinese resolves to Noto Serif SC / Songti SC, never Mochiy / Zen Maru.
- **不动画化阴影** — shadows stay static; only `opacity`/`transform` animate. No animated `text-shadow`/`box-shadow`, no `backdrop-filter`.
- Don't round the corners (2px is the ceiling, and only on the red tag). Softness is off-brand.
- Don't let red become a link/hover/error color. Red means "this is the claim," and nothing else.
- Don't set long-form Chinese in mono, and don't limit Chinese width with `ch`.

## Responsive Behavior

Mobile is a re-typeset column, not a shrunk desktop.

| Breakpoint | Behavior |
|---|---|
| ≥1200px | Full column hung off the left rule; folios and datelines in the left margin; pull-quote runs full-bleed. |
| 768–1199px | Margin marginalia move inline above their blocks; `display-xl` scales via `clamp(48px, 9vw, 96px)`; measure holds at 34em. |
| ≤767px | Single column, generous side padding; nav collapses to masthead word + one menu control; pull-quote scales `clamp(30px, 8vw, 42px)`; folio becomes an inline chip above each section. |

**零孤字铁律.** Manually-broken headlines lock each line with `white-space: nowrap` and size with `clamp()` so the longest line fits at ≤390px; centered runs (rare here) use `text-wrap: balance`. Verified at 390px: no orphan character, no horizontal overflow (`scrollWidth == clientWidth`). The red underline scales with its clause and never detaches.

## Anti-Slop Pledge

Strip the name off any Redline page and it still reads as one thing: a written conviction with the sentence that matters marked in red pen, set with the patience of a printed op-ed. No stock gradient could fake the silence between statements, no template could place that single red underline on exactly the right clause. If a screen looks assembled rather than argued, it is not Redline yet.

<sub>HeiGe-Design · manifesto-ink · 墨宣言 · MIT</sub>

---
version: alpha
name: DoodleNote-design-system
description: DoodleNote is a hand-drawn notebook identity for note-taking, learning and lightweight productivity tools. Ballpoint ink-blue does all the writing and structure; a single highlighter yellow marks only what matters; every surface is real graph paper. A handwritten display face scrawls the headline while a clean rounded sans keeps the reading calm. The signature move is a rough highlighter swipe with a pen-drawn arrow curling out of the margin — warm, human, unmistakably made by hand rather than generated.

colors:
  primary: "#1f3f73"      # ballpoint ink blue — the pen. Load-bearing: headings, strokes, buttons, cover ink (9.8:1 on paper)
  on-primary: "#fbf8ef"   # paper white — text pressed onto the ink-blue field
  ink: "#1e2a38"          # graphite navy — warm near-black body text, never pure #000 (13.6:1 on canvas)
  canvas: "#faf7ee"       # warm graph paper — the page, the ruled field
  surface: "#fffdf6"      # index-card paper — card faces, one shade brighter than canvas
  muted: "#5f5a50"        # pencil gray — secondary metadata, AA-safe on paper (6.4:1)
  hairline: "#d5dbe6"     # pale blue grid line — the graph squares, 1px seams and borders
  accent: "#f6e05e"       # highlighter yellow — the one marker, sweeps behind text (ink reads at 10.9:1)

typography:
  eyebrow:
    fontFamily: '"Space Mono", "JetBrains Mono", ui-monospace, "Noto Sans SC", "PingFang SC", monospace'
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 2px
  display-xl:
    fontFamily: '"Shantell Sans", "ZCOOL KuaiLe", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 78px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: -1px
  display-lg:
    fontFamily: '"Shantell Sans", "ZCOOL KuaiLe", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 46px
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: -0.4px
  heading:
    fontFamily: '"Nunito", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif'
    fontSize: 26px
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: -0.2px
  body:
    fontFamily: '"Nunito", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif'
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0px
  body-mono:
    fontFamily: '"Space Mono", "JetBrains Mono", ui-monospace, "Noto Sans SC", "PingFang SC", monospace'
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0px
  button:
    fontFamily: '"Nunito", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif'
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0.2px
  caption:
    fontFamily: '"Nunito", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif'
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0.1px

rounded:
  none: 0px
  sm: 6px
  md: 12px
  lg: 18px
  pill: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  section: 88px

components:
  # —— UI 界面组件 ——
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
    rounded: "{rounded.none}"
    padding: "{spacing.md} {spacing.xl}"
  divider:
    backgroundColor: "{colors.hairline}"
    rounded: "{rounded.none}"
    height: 1px
    padding: "0"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "{spacing.md} {spacing.lg}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: "{spacing.md} {spacing.lg}"
  highlighter-mark:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
  index-tab:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xs} {spacing.md}"
  card-note:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  body-text:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: "0"
  stat-block:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg} {spacing.xl}"
  page-number:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.body-mono}"
    padding: "{spacing.xs} 0"
  input-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  footer:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "{spacing.section} {spacing.xl}"
  # —— slide 演示组件（融合 HeiGe-PPT · 16:9）——
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
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
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
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
---

# DoodleNote · 涂鸦本

> A notebook that admits it was written by a person. Ballpoint ink-blue does the thinking, one tired highlighter marks what mattered, and the whole thing sits on graph paper you could tear a corner off. Nothing here was stamped — it was scribbled on purpose.

## Overview

DoodleNote is what a note-taking or learning tool looks like when it stops pretending to be a sterile SaaS dashboard and remembers where notes actually happen: **on paper, in pen, in a hurry**. The system behaves like a real notebook page. There is a grid under everything. There is one blue pen. There is exactly one highlighter, and it is running low.

主色只有两个角色，泾渭分明。**Ballpoint ink `#1f3f73`** is the pen — it writes every heading, draws every arrow, fills every primary button, and inks every hand-drawn stroke. It is the only "brand" color and it is doing the work of four. **Highlighter yellow `#f6e05e`** is the marker, and a marker means *this line, remember this one* — it never fills a background for decoration, it only ever swipes behind the single most important phrase on screen. Overuse it and it stops meaning anything, exactly like a real highlighter.

纸是安静的底：warm graph paper `#faf7ee` ruled with a faint blue grid, index-card `#fffdf6` for cards that lift off the page. 层级靠**手写与工整的对话**：a scrawled handwriting face (Shantell Sans, ZCOOL KuaiLe 承载中文) shouts the one big sentence, and a clean rounded sans (Nunito) keeps every paragraph calm and readable underneath. The tension between *messy headline* and *tidy body* is the whole personality — a smart person's fast notes, not a child's scribble.

节奏靠版式不靠堆色: blue ink, yellow marker, ruled paper, and a lot of quiet grid where the reader's eye can breathe between the doodles.

## Colors

### Brand & Accent
| Token | Hex | Role |
|---|---|---|
| `primary` | `#1f3f73` | Ballpoint ink blue. The pen — load-bearing: headings, hand-drawn arrows and lassos, primary buttons, cover ink. Passes AA on paper (9.8:1). |
| `accent` | `#f6e05e` | Highlighter yellow. The single marker. Swipes **only** behind the one phrase that matters, never a decorative fill. Ink text rides it at 10.9:1. |

### Surface
| Token | Hex | Role |
|---|---|---|
| `canvas` | `#faf7ee` | Warm graph paper. The page — carries the ruled 1px blue grid as its background texture. |
| `surface` | `#fffdf6` | Index-card paper. Card and input faces, a hair brighter than canvas so cards read as slips resting *on* the page, not holes cut into it. |
| `hairline` | `#d5dbe6` | Pale blue grid line. The graph squares themselves, plus every 1px border and seam. This color literally draws the paper. |

### Text
| Token | Hex | Role |
|---|---|---|
| `ink` | `#1e2a38` | Graphite navy. Body and card headings — a warm near-black that reads as pencil-on-paper, **never pure `#000`** (13.6:1 on canvas). |
| `on-primary` | `#fbf8ef` | Paper white. Text and doodles pressed onto the ink-blue field (dividers, closing). |
| `muted` | `#5f5a50` | Pencil gray. Metadata, page numbers, footnotes — darkened deliberately to clear AA on paper (6.4:1). |

**Color discipline.** Two colors, and they are not interchangeable. Blue is a *tool* (it can be everywhere — that is what a pen is). Yellow is a *verdict* (at most once per view — that is what a highlighter is for). The moment a screen wants a third color to feel alive, the layout has failed, not the palette. Add another blue stroke or another inch of grid, never a new pigment.

## Typography

### Font Family
- **Handwriting display (the scrawl):** `Shantell Sans` — a confident marker-hand variable face, the voice of someone writing fast and meaning it. Carries the one big headline and nothing small.
- **Rounded sans (the fair copy):** `Nunito` — humanist, soft-terminal, extremely legible. Carries nav, card titles, all body, buttons, captions. This is the "written up neatly later" half.
- **Mono (the margin):** `Space Mono` — typewritten, slightly quirky. Lives in the margins as page numbers, date stamps, and index-tab labels, like the pre-printed marks on a real notebook.

**中文兜底铁律.** Shantell Sans 不含 CJK，手写字栈中文交给 **`"ZCOOL KuaiLe"`（俏皮圆手感）**，再兜 `"Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif`；Nunito / Space Mono 栈末尾同样挂思源/苹方系统兜底。webfont 断网加载失败时，中文照样干净落在思源/苹方上，绝不塌成 Times 或豆腐块。**中文一律不用日文字体渲染**（Mochiy / Zen Maru 等，简体缺字变豆腐）——手写感全部由 ZCOOL KuaiLe 承担。

### Hierarchy
| Role | Font | Size / Weight | Use |
|---|---|---|---|
| `display-xl` | Shantell 700 | 78 / -1 tracking | Cover sentence, the one giant hero number — the scrawl |
| `display-lg` | Shantell 700 | 46 / -0.4 | Section divider words, deck pull-quotes |
| `heading` | Nunito 800 | 26 | Card titles, nav wordmark — the tidy half |
| `body` | Nunito 400 | 17 / 1.7 leading | Paragraphs — the fair copy, always legible |
| `body-mono` | Space Mono 400 | 14 | Page numbers, date stamps, units, margin marks |
| `eyebrow` | Space Mono 700 | 12 / +2 uppercase | Index-tab labels, kicker stamps |
| `button` | Nunito 700 | 16 | Actions |
| `caption` | Nunito 500 | 13 | Footnotes, metadata |

### Principles
- **Handwriting is a headline, never a paragraph.** Shantell Sans appears exactly once per view — the single most important line. A wall of handwriting is unreadable and instantly reads as gimmick. Everything you actually read is clean Nunito.
- **Contrast ≥ 1:4.** The `display-xl` cover (78) against `body` (17) clears four-to-one easily — the scrawl is allowed to feel almost too big, the way the title on a real page dwarfs the notes.
- **`body-mono` uses `font-variant-numeric: tabular-nums`** so page numbers and stat units line up like the pre-printed rules in the margin.
- **Left-align, off a live edge.** Notes start at the left margin and run ragged-right. Only the deck cover and quote center, and only inside their doodle frame.

## Layout

### Spacing
An 8-based scale that breathes: `xs 4 · sm 8 · md 16 · lg 24 · xl 40 · section 88`. Crucially, **spacing snaps to the 8px grid** — because the grid is *visible* on this system, sloppy off-grid gaps show up instantly as smudges. Everything lands on a ruled line.

### Grid & Container
- 12-column grid, **1120px** max content width, 24–32px gutters — but the real grid here is the **printed 8px graph paper** under everything, and content aligns to *that*.
- Content is **not** trapped in one centered column. The signature layout is a **margin-and-body split**: a narrow left margin rail (mono page numbers, index tabs, a doodle or two) and a wide ragged-left body — exactly a lined notebook page, alternating which side the doodles crowd into so nothing feels stamped.
- Vertical rhythm is loose and honest. When in doubt, leave a few empty graph rows rather than adding another divider.

### Whitespace Philosophy
Whitespace here is *ruled paper*, not void — the grid is faintly visible in it, so empty space still reads as "page you could write on," never as a hole. The breathing room is where the next thought goes. Never cram a doodle into a gap just because it is empty; a real notebook has margins for a reason.

## Elevation & Depth

DoodleNote has almost no drop-shadows. Depth is **paper physically resting on paper**, and lift is drawn *by hand*, not blurred.

| Level | Technique |
|---|---|
| On-page | Elements sit directly on the graph field, separated only by the 1px `hairline` grid — flat, like ink on the sheet. |
| Slip | A `surface` index card lifts off the page via a **2px hand-inked offset outline** in `primary` (a second stroke drawn 3–4px down-right, slightly jittered) — a sketched shadow, not a soft one. |
| Marked | The highlighter swipe sits *behind* text at `mix-blend-mode: multiply`, so the grid and ink show through the marker — real translucent ink, the top layer of the page. |

**The sketch-shadow is the whole depth language.** Where a template reaches for `box-shadow: 0 4px 6px rgba(0,0,0,.1)`, DoodleNote draws a **doubled hand-jittered ink outline** offset down-right — the way you'd shade a box in a margin. It is completely static. No `backdrop-filter` anywhere (frosted glass is the opposite of paper), and shadows/glows are **never animated** — a repainting shadow betrays the calm of a page that isn't moving.

## Shapes

### Border Radius
| Token | Value | Use |
|---|---|---|
| `none` | 0px | Full-bleed slide fields, the graph sheet itself |
| `sm` | 6px | Highlighter marks, small tags |
| `md` | 12px | Buttons, inputs — a relaxed hand-drawn box |
| `lg` | 18px | Index cards, stat slips — rounded-corner note cards |
| `pill` | 9999px | Index tabs — the rounded sticky tab on a page edge |

### The hand-drawn line
The defining geometry is **not a smooth vector** — it is a drawn one. Borders, arrows, lassos, underlines and the sketch-shadow are all rendered as **inline SVG paths with seeded per-instance jitter** (a `<path>` whose points wobble ±1–2px, redrawn differently each place it appears) and a **round line-cap**, so no two strokes are identical and none is machine-perfect. Corners are relaxed, never sharp except on full-bleed slides. **Nothing critical is a plain `border-radius: 8px` rectangle with a smooth 1px border** — that flat perfection is the AI-slop tell this whole system exists to avoid.

## Components

- **nav-bar** — a graph-paper strip, Nunito wordmark left with a hand-drawn ink underline, one `button-primary` right. Bottom edge is a 1px `hairline` grid line, not a shadow.
- **button-primary** — solid ink-blue box, paper-white label, `md` radius, a 2px jittered sketch-outline offset down-right. The one loud action per view.
- **button-secondary** — paper box, ink-blue label, hand-drawn 2px ink border (the SVG-jitter outline). Quiet sibling.
- **highlighter-mark** — ★ the signature. A rough highlighter block behind a word (see Signature Moment). Ink text on yellow, `multiply` blend so the grid shows through.
- **index-tab** — a yellow rounded `pill` tab clipped to a card or page edge, mono uppercase label — the filed sticky-tab of a real notebook.
- **card-note** — index-card `surface` slip, `lg` radius, 1px hairline border plus the offset sketch-shadow. Heading (Nunito) + body, left-aligned off the card margin, never a centered trio.
- **stat-block** — a surface slip holding one giant ink-blue `display-xl` number with a highlighter swipe under it and a mono unit label. One number per slip.
- **page-number** — mono numeral in the left margin rail, pencil-gray, like the pre-printed corner of a page.
- **input-field** — surface fill, 1px hairline border sitting on the grid; focus draws a 2px ink-blue hand-outline around it (no glow).
- **footer** — a paper "back page": surface field, pencil-gray caption text, a 1px hairline top rule, and a small ballpoint doodle signing off in the corner.

Interaction states stay **drawn, not glowy**: hover deepens and offsets the sketch-outline (the card "lifts" as its hand-drawn shadow slides out 1–2px more); press settles it back onto the page. `prefers-reduced-motion` freezes the outline in place.

## Presentation System

DoodleNote decks are 16:9 notebook pages — 一页一句话，黄金三秒立住"这是手写的"，视觉锤永远是那一道荧光笔 + 手绘箭头。

- **slide-cover** — a full graph-paper page. One handwritten sentence (`display-xl`) sits ragged in the upper-left like the title you wrote at the top of a fresh page. The single load-bearing word is **lassoed by a hand-drawn ink ellipse and swiped with highlighter**; a ballpoint arrow curls out of the corner pointing at a mono date-stamp in the margin. Three seconds, one sentence, one circled word.
- **slide-section-divider** — the palette *flips*: a full **ink-blue** field, as if the pen filled the whole page. The chapter word runs in paper-white `display-lg`, and the chapter number is a big **highlighter-yellow** hand-scrawled `01 / 02` in the corner. The blue-flood *is* the transition.
- **slide-stat-hero** — ink-blue field, one enormous paper-white `display-xl` number filling two-thirds, a highlighter-yellow hand-underline slashed beneath it, mono unit and a one-line context ragged off the number. Never more than one number per page.
- **slide-quote** — back to graph paper, a 46px handwritten pull-quote (`display-lg`) with the highlighter swiping behind the key phrase and a hand-drawn open-quote doodle in the margin. Attribution in mono below the rule.
- **slide-closing** — full ink-blue again, paper-white CTA, one highlighter-yellow action box, and a ballpoint arrow doodle pointing straight at it. Bookends the cover — the page you circle before closing the notebook.

**视觉锤:** the highlighter swipe + margin arrow. It opens the deck (circling the cover word), marks every stat and quote, and points at the closing action — one recurring hand gesture the audience remembers after the numbers blur.

## Signature Moment

Two things this system does that a swapped-in template physically cannot reproduce.

**UI signature — the highlighter swipe with the margin arrow.** The single most important phrase on a screen gets a **rough highlighter block** behind it: an inline SVG rectangle in `accent` yellow, tilted ~-1.5°, its edges frayed and **overshooting the word by ~6px** (because a real marker never stops exactly on the letter), set to `mix-blend-mode: multiply` so the graph grid and the ink both show *through* the yellow. Curling out of the left margin toward it is a **hand-drawn ballpoint arrow** — an SVG path with ±1.5px seeded jitter, a wobbly shaft and a two-stroke arrowhead, round-capped, a different wobble every instance. Highlight + arrow together say *this one, look here* the way you'd mark your own notes. Swap the template and both the overshoot and the jitter die into a flat rounded rectangle.

**Deck signature — the graph-paper cover with the pen-lassoed word.** A full 16:9 **real graph-grid page** (an 8px `hairline` grid, not a decorative motif), the one-sentence title handwritten ragged in the upper-left, and the single load-bearing word **lassoed by a hand-drawn ink ellipse** — an SVG stroke that *overshoots its own starting point at the top of the loop*, exactly like circling a word with a pen — layered over a highlighter swipe, with a **ballpoint arrow doodled from the corner** to a mono date-stamp in the margin. One page, one sentence, one circled word. You could tear the brand name off and still know a person drew this.

## Do's and Don'ts

**Do**
- Treat blue as the pen (use it freely) and yellow as the highlighter (use it once, on the thing that matters).
- Draw borders, arrows, lassos and shadows as **hand-jittered SVG strokes**, seeded differently per instance — never machine-perfect vectors.
- Keep the 8px graph grid faintly visible under everything and snap layout to it.
- Let handwriting shout exactly one line per view; keep every paragraph in clean Nunito.
- Show lift as a **doubled offset ink outline** (sketch-shadow), and let the highlighter `multiply` so ink and grid read through it.

**Don't**
- **Don't touch the purple-blue slop gradient** `#667eea → #764ba2` or any cousin. This system's flat ballpoint-blue-on-paper exists precisely to make that gradient unthinkable.
- **Don't build the centered card trio** — title, gray subtitle, three equal rounded-rectangle cards in a row. Cards here are index slips on a margin-and-body split, ragged-left, never a symmetric centered trio.
- **Don't render Chinese in a Japanese font** (Mochiy Pop One / Zen Maru Gothic). Simplified glyphs drop to tofu. Chinese handwriting rides **ZCOOL KuaiLe → Noto Sans SC / PingFang SC** only.
- **Don't animate shadows or glows.** The sketch-outline and highlighter are static ink on a still page; a repainting shadow shatters the calm and tanks scroll performance.
- Don't let the highlighter become a decorative fill or appear more than once per view — a marker used everywhere marks nothing.
- Don't set handwriting as body copy, and don't make the doodles *messy* — this is a smart person's fast notes, not a child's scribble. Legible first, hand-drawn second.

## Responsive Behavior

Mobile is a **re-scribbled page**, not a shrunken one.

| Breakpoint | Behavior |
|---|---|
| ≥ 1120px | Full margin-and-body split: mono page-number rail + index tabs on the left, ragged-left content on the right, doodles alternating margins down the page. |
| 768–1119px | Margin rail collapses into inline mono stamps above each section; content goes single-column, still ragged-left. `section` spacing eases to 64px; graph grid stays. |
| ≤ 767px | One column, one thumb's width of margin. `display-xl` drops via `clamp()` to fit the longest line at 360px with **zero orphan characters**; the highlighter swipe and margin arrow survive but shrink; index tabs move to inline chips. The grid gets slightly larger squares so it never turns to visual noise on a small screen. |

孤字铁律: 手动断行的手写大标题按最长行收敛字号，每行 `white-space:nowrap` 锁整行，`clamp()` 保证 ≤390px 不折出单字单标点；中文限宽用 `em`/`px`，绝不用 `ch`（会让中文提前折行出孤字）。居中的金句用 `text-wrap:balance` 让各行均衡。出货前桌面 + ≤390px 各查一遍：无孤字、无横向溢出（`scrollWidth == clientWidth`）。

## Anti-Slop Pledge

Tear the brand name off DoodleNote and you still see a hand at work — the ballpoint arrow wobbling out of the margin, the highlighter overshooting its word and letting the grid show through, the sketch-shadow drawn instead of blurred, the one scrawled headline over a page of tidy notes. Every stroke has a seeded jitter so no two are twins, and the highlighter is used like a person uses one: rarely, and only when it counts. Nothing here fell out of a Hero-Features-Pricing template. It was written down on purpose.

---

*Designed by HeiGe-Design · MIT · 100% original, fictional brand.*

---
version: alpha
name: WenkaiWarm-design-system
description: >-
  WenKai-Warm is a humanist storytelling system for education, courses, and
  public-benefit sharing. It sets LXGW WenKai, a warm calligraphic kai typeface,
  at giant scale on oatmeal paper (#efe7d6) so headlines read like a handwritten
  note rather than a slide. Baked terracotta (#b34f30) is the single voice for
  emphasis and full-bleed dividers; a deep ink-green seals each heartfelt line
  like a stamp. Rounded Nunito carries the body. The signature is a hand-drawn
  organic underline plus a small seal on one closing sentence: sincerity you can
  feel, never a template.

colors:
  primary: "#b34f30"      # 陶土红 baked terracotta — emphasis, dividers, one voice only
  on-primary: "#fbf4e6"   # warm cream — text on terracotta and ink surfaces
  ink: "#33291f"          # 墨褐 espresso brown — body text, never pure black
  canvas: "#efe7d6"       # 燕麦纸 oatmeal paper — the page ground
  surface: "#f7f1e3"      # lighter cream — cards, quiet panels
  muted: "#6f5f4b"        # 胡桃褐 walnut taupe — secondary text, captions
  hairline: "#ddd2bc"     # warm tan — 1px separators
  accent: "#315b47"       # 墨绿 ink green — the seal, inline links, restraint accent

typography:
  display-xl:
    fontFamily: '"LXGW WenKai", "LXGW WenKai Screen", "Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: "84px"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "1px"
  display-lg:
    fontFamily: '"LXGW WenKai", "LXGW WenKai Screen", "Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: "56px"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "0.5px"
  heading:
    fontFamily: '"LXGW WenKai", "LXGW WenKai Screen", "Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: "22px"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "0px"
  body:
    fontFamily: '"Nunito", "Quicksand", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif'
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: "0.2px"
  numeral:
    fontFamily: '"Nunito", "Quicksand", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: "72px"
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: "-0.5px"
  button:
    fontFamily: '"Nunito", "Quicksand", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: "16px"
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: "0.5px"
  caption:
    fontFamily: '"Nunito", "Quicksand", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: "0.2px"
  eyebrow:
    fontFamily: '"Nunito", "Quicksand", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "2px"

rounded:
  none: "0px"
  sm: "6px"
  md: "12px"
  lg: "20px"
  pill: "9999px"

spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  section: "96px"

components:
  # —— UI 界面组件 ——
  nav-bar: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.heading}", rounded: "{rounded.none}", padding: "{spacing.md} {spacing.xl}" }
  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: "{spacing.md} {spacing.xl}" }
  button-secondary: { backgroundColor: "{colors.surface}", textColor: "{colors.primary}", typography: "{typography.button}", rounded: "{rounded.pill}", padding: "{spacing.md} {spacing.xl}" }
  kicker-chip: { backgroundColor: "{colors.accent}", textColor: "{colors.on-primary}", typography: "{typography.eyebrow}", rounded: "{rounded.pill}", padding: "{spacing.xs} {spacing.md}" }
  card-feature: { backgroundColor: "{colors.surface}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.lg}", padding: "{spacing.xl}" }
  stat-block: { backgroundColor: "{colors.surface}", textColor: "{colors.primary}", typography: "{typography.numeral}", rounded: "{rounded.md}", padding: "{spacing.lg}" }
  callout-quote: { backgroundColor: "{colors.surface}", textColor: "{colors.ink}", typography: "{typography.body}", rounded: "{rounded.sm}", padding: "{spacing.lg}" }
  divider: { backgroundColor: "{colors.hairline}", height: "1px", width: "100%" }
  link-inline: { backgroundColor: "{colors.canvas}", textColor: "{colors.accent}", typography: "{typography.body}", rounded: "{rounded.none}", padding: "{spacing.xs}" }
  metadata-line: { backgroundColor: "{colors.canvas}", textColor: "{colors.muted}", typography: "{typography.caption}", rounded: "{rounded.none}", padding: "{spacing.xs} {spacing.sm}" }
  footer: { backgroundColor: "{colors.ink}", textColor: "{colors.on-primary}", typography: "{typography.caption}", rounded: "{rounded.none}", padding: "{spacing.section} {spacing.xl}" }
  # —— slide 演示组件（16:9 融合层）——
  slide-cover: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.display-xl}", rounded: "{rounded.none}", padding: "{spacing.section}" }
  slide-section-divider: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.display-lg}", rounded: "{rounded.none}", padding: "{spacing.section}" }
  slide-stat-hero: { backgroundColor: "{colors.surface}", textColor: "{colors.primary}", typography: "{typography.numeral}", rounded: "{rounded.none}", padding: "{spacing.section}" }
  slide-quote: { backgroundColor: "{colors.canvas}", textColor: "{colors.ink}", typography: "{typography.display-xl}", rounded: "{rounded.none}", padding: "{spacing.section}" }
  slide-closing: { backgroundColor: "{colors.ink}", textColor: "{colors.on-primary}", typography: "{typography.display-lg}", rounded: "{rounded.none}", padding: "{spacing.section}" }
---

# WenKai-Warm · 文楷暖

A warm humanist system for people who teach, share, and try to move someone.
Built around one belief: **a page can sound like a person.** So it hands the
biggest words on screen to LXGW WenKai — a calligraphic kai face with visible
brush warmth — and lets terracotta and an ink-green seal do the rest.

---

## Overview

文楷暖 is the voice you use when the goal is not to impress but to be believed.
Its home is course landing pages, teacher decks, non-profit stories, and any
"let me tell you what I learned" moment.

The whole system runs on **two roles for two colors**:

- **陶土红 terracotta `#b34f30` is the single voice.** It never decorates. It
  underlines the one word that matters, fills a divider when the story turns a
  corner, and prints the number you want remembered. If terracotta shows up,
  something is being emphasized on purpose.
- **墨绿 ink-green `#315b47` is the seal.** It appears small and late — a stamp
  after a heartfelt sentence, the color of an inline link, the mark that says
  "signed, sincerely." Restraint is the point.

Everything else is warm paper and warm ink. **燕麦纸 oatmeal `#efe7d6`** is the
ground; **墨褐 espresso `#33291f`** is the reading ink (never pure black, which
would feel cold against paper). The rhythm is slow: big calligraphic lines,
generous line-height, one idea per screen, and real negative space so a single
sentence can land.

Typographic signature: **WenKai at 400 weight, enormous.** The warmth lives in
the strokes, not in bold. Body and interface run on **Nunito**, a rounded
humanist sans, so buttons and captions feel soft-shouldered instead of clinical.

---

## Colors

Discipline: one primary, one accent, warm neutrals. Never let a second bright
color into the room.

### Brand & Accent
| Token | Hex | Role |
|---|---|---|
| `primary` | `#b34f30` | 陶土红 baked terracotta. Emphasis only: underlines, dividers, key numbers, primary buttons. Deepened from the terracotta seed so cream text on it clears WCAG AA (4.7:1). |
| `accent` | `#315b47` | 墨绿 ink-green. The seal, inline links, quiet secondary marks. Small and late — a stamp, not a fill. |

### Surface
| Token | Hex | Role |
|---|---|---|
| `canvas` | `#efe7d6` | 燕麦纸 oatmeal paper. The page ground for everything. |
| `surface` | `#f7f1e3` | Lighter cream. Cards, callouts, quiet panels lifted a half-step off the paper. |
| `hairline` | `#ddd2bc` | Warm tan. 1px separators and card borders — a whisper, not a rule. |

### Text
| Token | Hex | Role |
|---|---|---|
| `ink` | `#33291f` | 墨褐 espresso. Body and headings. Warm dark, never `#000`. Reads 11.6:1 on canvas. |
| `muted` | `#6f5f4b` | 胡桃褐 walnut taupe. Captions, metadata, timestamps. 5.0:1 on canvas — supportive, still legible. |
| `on-primary` | `#fbf4e6` | Warm cream. Text on terracotta and on ink footers/closings. Not stark white; keeps the warmth even in reverse. |

### Semantic
This is a storytelling system, not a dashboard. It carries no green-up / red-down
delta pair by design — terracotta already owns emphasis, and inventing a second
signal color would break the two-color vow. Data pages express change through
size and a single terracotta highlight, described in Presentation System.

**Contrast, hand-checked (AA ≥ 4.5:1 for every text-on-fill pairing):**
ink/canvas 11.6 · ink/surface 12.6 · muted/canvas 5.0 · on-primary/primary 4.7 ·
on-primary/accent 7.1 · on-primary/ink 13.0 · primary/surface 4.6 · accent/canvas 6.3.

---

## Typography

### Font Family

**Display + Heading — LXGW WenKai (霞鹜文楷).** An open-source kai typeface with
the warmth of a brush pen. This is the identity. Stack:

```
"LXGW WenKai", "LXGW WenKai Screen", "Noto Serif SC", "Songti SC", "STSong", serif
```

WenKai loads first (keeps the design); if the webfont fails, the stack falls to
**Chinese serif system faces — Noto Serif SC / Songti SC / STSong** — so the
page degrades to a dignified song face, never to Times, never to tofu.

**Body + Interface — Nunito.** A rounded humanist sans that keeps buttons and
captions friendly. Stack:

```
"Nunito", "Quicksand", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif
```

**中文铁律:** every Chinese-bearing stack ends in a Chinese system fallback
(Noto Sans/Serif SC, PingFang SC, Songti SC). **Chinese is never rendered with a
Japanese face** (no Mochiy, no Zen Maru) — simplified glyphs would drop to tofu
or morph into Japanese variants. The Hiragino Sans GB fallback is the Simplified
Chinese cut, deliberately chosen over any JP face.

### Hierarchy
| Role | Font | Size | Weight | Line | Use |
|---|---|---|---|---|---|
| display-xl | WenKai | 84px | 400 | 1.2 | Cover title, the 金句 page |
| display-lg | WenKai | 56px | 400 | 1.25 | Section dividers, closing line |
| heading | WenKai | 22px | 700 | 1.35 | Card titles, nav brand |
| body | Nunito | 17px | 400 | 1.8 | Paragraphs, list copy |
| numeral | Nunito | 72px | 700 | 1.0 | Stat numbers (tabular-nums) |
| button | Nunito | 16px | 700 | 1.0 | Buttons, CTAs |
| caption | Nunito | 13px | 500 | 1.6 | Metadata, footer |
| eyebrow | Nunito | 12px | 700 | 1.2 | Kicker chips, uppercase labels, `letter-spacing: 2px` |

### Principles
- **Warmth from strokes, not weight.** Display WenKai stays at **400** even at
  84px. Never faux-bold a giant WenKai title — synthesized bold thickens the
  calligraphic strokes into mud. Emphasis comes from *size and terracotta*, not
  heavier weight.
- **Body breathes at 1.8.** Chinese reading wants more leading than Latin;
  captions still hold 1.6. Nothing is cramped.
- **Numbers only in Nunito with `font-variant-numeric: tabular-nums lining-nums`**
  so stat rows align to the pixel. WenKai never sets tabular data.
- **Max-to-body ratio ~5:1** (84 vs 17). The biggest line is allowed to feel a
  little too big — that is where the warmth lives.
- Never limit Chinese line width with `ch` (it is the Latin `0` width and will
  fold Chinese early into orphans). Limit with `em` / `px`.

---

## Layout

### Spacing
A 4px-based scale — `xs 4 · sm 8 · md 16 · lg 24 · xl 40 · section 96`. Cards
breathe at `xl` padding; sections separate at `section` (96px), because a warm
story needs room between beats.

### Grid & Container
- Reading measure caps at **68ch-equivalent set in `em` (~34em)** for long copy,
  so a paragraph never runs library-wide.
- A relaxed **12-column grid** with wide gutters. Content prefers to sit
  **left-aligned or offset**, not dead-center — a handwritten note is written
  from a margin, not centered on the page.
- The 金句 and cover pages ignore the grid entirely: one sentence, freely placed
  in a field of paper.

### Whitespace philosophy
Whitespace here is **silence around a sentence**, not padding. It clusters —
lavish air before a heartfelt line, tighter grouping inside a card — so the eye
knows where to slow down. Even density everywhere would kill the feeling; the
page must have quiet passages and one loud one.

---

## Elevation & Depth

No hard offset shadows, no glow, no glass. This is paper, and paper lifts gently.

| Level | Use | Treatment |
|---|---|---|
| 0 · flush | Page body on canvas | Nothing. It is the paper. |
| 1 · resting | Cards, stat blocks | `surface` fill + 1px `hairline` + a soft **warm-tinted** shadow: `0 2px 10px rgba(80,50,30,.10)`. |
| 2 · lifted | Popovers, active card | `surface` + `0 8px 26px rgba(80,50,30,.14)`. Slightly warmer, slightly deeper. |
| 3 · overlay | Modals, sheets | `surface` + `0 20px 60px rgba(60,40,25,.20)` + canvas scrim at 60%. |

Decorative depth comes from **material, not blur**: a faint paper grain on the
canvas (a low-opacity noise texture, static), a torn-paper edge on image slots,
and the hand-drawn underline sitting *behind* text like ink soaking through.
Shadows are **warm brown**, never neutral gray — a gray shadow on oatmeal reads
as dirt. **No `backdrop-filter`, no animated shadows** (both violate the
performance floor).

---

## Shapes

### Border radius
| Token | Value | Use |
|---|---|---|
| none | 0px | Full-bleed slides, dividers, nav, footer, hairline rules |
| sm | 6px | Callout quotes, small tags |
| md | 12px | Stat blocks, inputs |
| lg | 20px | Feature cards — soft, hand-cut corners |
| pill | 9999px | Buttons, chips |

### Geometry
- **Images live in organic masks**, not rectangles: a torn-paper edge or a soft
  rounded-blob crop. The 情绪图位 (emotional image slot) is deliberately
  imperfect on one edge, as if pasted into a notebook.
- **The underline is a drawn path, not a border.** It is an SVG stroke with a
  slight wobble and a tapered end — clearly a hand, not a rule. This single
  irregular shape is the system's fingerprint.
- The **seal** is a small rounded-square ink-green stamp with a one-character
  or two-character carved mark, sitting off the baseline like a real chop.

---

## Components

- **nav-bar** — Canvas ground, ink WenKai wordmark left, quiet Nunito links,
  a 1px hairline underneath. No shadow; it belongs to the paper.
- **button-primary** — Terracotta pill, cream label. The one loud action per
  view. Hover: darken 6% and lift 1px. Focus: 2px ink-green ring offset 2px.
- **button-secondary** — Cream surface, terracotta label and 1px terracotta
  hairline border. The quieter sibling.
- **kicker-chip** — Ink-green pill with cream uppercase eyebrow. Labels a
  section ("第 03 讲", "PUBLIC BENEFIT") without shouting.
- **card-feature** — Surface panel, `lg` corners, hairline border, soft warm
  shadow. WenKai heading, Nunito body. Left-aligned, never centered.
- **stat-block** — Surface panel with a giant terracotta Nunito numeral over a
  muted caption. Tabular-nums keep columns honest.
- **callout-quote** — Surface panel with a 3px terracotta left rule and a `sm`
  corner. For a pulled sentence inside body copy.
- **divider** — A 1px hairline rule, full width. The only border this system
  draws, and it whispers.
- **link-inline** — Ink-green text with a hand-drawn underline on hover. The
  seal color, used inline.
- **metadata-line** — Muted caption for dates, lengths, authorship ("12 讲 · 更新于四月").
- **footer** — Espresso ink ground, cream text, warm and low-key, closing the
  page like the back cover of a booklet.

All UI components reference tokens only; nothing hardcodes a hex. Borders
(nav-bar's hairline underline, card-feature's hairline frame, button-secondary's
terracotta outline, callout-quote's terracotta rule) are applied at the CSS
layer against `hairline` / `primary` — the design.md schema carries no border
sub-token, so the token stays the single source and the border reads from it.

---

## Presentation System

文楷暖 as a 16:9 deck is a fireside talk, not a pitch. It obeys three laws.

**一页一句话 (one sentence per slide).** Every slide carries a single WenKai
line and, at most, one Nunito support caption. If a slide needs two thoughts,
it is two slides. The 金句 page is the extreme of this rule.

**黄金三秒 (the first three seconds).** The **cover** must radiate warmth
instantly: oatmeal field, one huge WenKai title left-offset, a single
hand-drawn terracotta underline swiping under the key word, and the ink-green
seal in the lower corner. Three seconds in, a stranger should feel "this person
is talking *to me*."

**视觉锤 (the visual hammer).** One motif repeats on every slide and becomes the
deck's memory: **the hand-drawn terracotta underline + the ink-green seal.**
Wherever a word matters, it gets the underline; wherever a thought closes, it
gets the seal. That pairing, plus the full-bleed terracotta divider, is what the
audience remembers.

| Slide | Component | Layout |
|---|---|---|
| Cover | `slide-cover` | Oatmeal. Giant WenKai title, left-offset. One terracotta hand-drawn underline. Seal lower-right. Speaker/course in muted caption. |
| Section divider | `slide-section-divider` | **Full-bleed terracotta.** Cream WenKai chapter label + huge cream number. The color turn signals "new chapter" — the deck's boldest beat. |
| Data | `slide-stat-hero` | Cream surface. One enormous terracotta numeral, ink label beneath, a single terracotta highlight on the word that matters. No chart clutter — the number *is* the slide. |
| 金句 (signature) | `slide-quote` | Oatmeal, mostly empty. One heartfelt WenKai sentence. A torn-paper 情绪图位 photo offset to one side, an organic terracotta brush stroke under the key phrase, ink-green seal in the corner. This is the emotional peak. |
| Closing | `slide-closing` | Espresso ink ground, cream WenKai line, one terracotta pill CTA. A warm dark close, like the room's lights coming down after a good talk. |

Rhythm across the deck: **light → terracotta jolt (divider) → light data → quiet
金句 peak → warm dark close.** Contrast of density and color, never one flat tone.

---

## Signature Moment

Two things this system does that a template cannot.

**UI signature — 手绘有机下划线 + 墨绿印章落款.** A single WenKai keyword in the
hero gets a **hand-drawn terracotta underline**: an SVG path with a real wobble
and a tapered brush end, animated once with `stroke-dashoffset` as if inked in
front of you, then still. Beside the sentence sits a **small ink-green seal** —
a carved-square chop with a one-character mark. The underline is never a
straight CSS `border-bottom`; the seal is never an emoji. Together they turn a
web headline into something signed by a hand.

**Deck signature — 走心金句页 (the heartfelt-line page).** One slide, one WenKai
sentence, a field of oatmeal around it. A **torn-paper 情绪图位** — a single warm
photo or illustration in an irregular paper mask — leans in from one side; an
**organic terracotta brush stroke** pools under the phrase you want remembered;
the **ink-green seal** stamps the corner like a signature at the end of a letter.
Nothing moves, nothing sells. It is the page an audience screenshots. Swap the
words and it is still unmistakably *this* system.

---

## Do's and Don'ts

**Do**
- Give WenKai room to be huge and stay at 400 weight — size is the emphasis.
- Keep terracotta as the *only* voice: one underline, one number, one divider
  per beat. If everything is terracotta, nothing is.
- Let the ink-green seal arrive small and late, as a closing mark.
- Left-align and offset. Write from a margin like a real note.
- Cluster whitespace so one sentence gets silence around it.
- Warm-tint every shadow (`rgba(80,50,30,…)`); keep grain and torn edges static.

**Don't**
- **Don't touch the purple-blue cliché gradient** (`#667eea → #764ba2`) or any
  of its family. This system is paper and clay; that gradient is neither.
- **Don't build the centered card triptych** — one centered title, one gray
  subtitle, three equal rounded cards repeated down the page. Offset, vary
  weight, and let one card be the hero.
- **Don't render Chinese with a Japanese face** (Mochiy, Zen Maru, any JP kana
  font). Simplified glyphs break. Chinese fallbacks are Noto Serif/Sans SC,
  Songti SC, PingFang SC only.
- **Don't animate shadows or glows.** Warmth is static; motion is reserved for
  the one-shot underline draw.
- Don't faux-bold giant WenKai. Don't use pure `#000` or stark `#fff`. Don't
  add a second accent color to "brighten it up." Don't center-limit Chinese with `ch`.

---

## Responsive Behavior

Mobile is a **re-composition**, not a shrink of the desktop.

| Breakpoint | Behavior |
|---|---|
| ≥ 1200px | Full grid. Offset covers, side-by-side 情绪图位 and text. |
| 768–1199px | Grid collapses to a single column; image slot moves above the sentence; section padding eases to 64px. |
| ≤ 767px | The 金句 page restacks vertically: image slot on top (still torn-paper), WenKai line below, seal recentered under it. Nav collapses to wordmark + menu. Section padding 40px. |

**Fluid type + zero orphans (production floor).**
- Display sizes use `clamp()` so the longest hand-broken line fits at ≤390px:
  e.g. `clamp(40px, 8.5vw, 84px)`.
- Each manually broken headline line gets `white-space: nowrap`, and the block
  is sized to the **longest** line so no single character or 标点 is ever flung
  onto its own row.
- Centered multi-line copy uses `text-wrap: balance`.
- Verify on desktop and at ≤390px: `scrollWidth === clientWidth`, every headline
  orphan-free.

**Motion floor.** The underline draw animates `stroke-dashoffset` once and stops;
no `requestAnimationFrame` loops, no animated `filter`/shadow. Everything is
wrapped in `@media (prefers-reduced-motion: reduce)` to render fully drawn and
static.

---

## Anti-Slop Pledge

Cover the brand name and this page still reads as made by a person who cared:
WenKai's brush strokes at 400 weight, a lone terracotta underline drawn by hand,
one ink-green seal stamped like a signature, warm paper with real silence around
the sentence that matters. No purple-blue gradient, no centered card triptych,
no tofu Chinese, no emoji icons, no "赋能一站式" filler. If it looks like it came
off a template, it isn't this system.

*Signed, HeiGe-Design. MIT.*

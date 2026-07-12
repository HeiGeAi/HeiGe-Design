---
version: alpha
name: Broadsheet-design-system
description: >-
  The masthead grandeur of longform print, rebuilt for the screen. A single
  high-contrast serif carries every headline; a lone masthead red (#c0392b)
  cuts one rule across an ink-on-newsprint page. Columns are real columns,
  the lede opens on a four-line drop cap, and hairline rules do the work that
  cards and shadows do elsewhere. No pills, no glow, no gradients. It reads
  like an edition went to press, not like a template rendered. By HeiGe-Design.

colors:
  primary: "#c0392b"      # masthead red — one rule, one kicker, one drop cap. Never a fill for large areas.
  on-primary: "#faf8f3"   # newsprint-white ink used on red and on ink-black plates
  ink: "#1c1a16"          # warm ink black — body type and the black section plate (never pure #000)
  canvas: "#f4f1ea"       # newsprint white — the paper the whole edition prints on
  surface: "#ece6d8"      # shaded box — the pull-out sidebar / boxed feature tint
  muted: "#5c554a"        # datelines, captions, secondary copy
  hairline: "#cdc6b8"     # 1px column rules and section rules — the connective tissue

typography:
  masthead:
    fontFamily: '"Playfair Display", Georgia, "Times New Roman", "Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: 72px
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: 1px
  display-xl:
    fontFamily: '"Newsreader", Georgia, "Times New Roman", "Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: 56px
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: -0.8px
  display-lg:
    fontFamily: '"Newsreader", Georgia, "Times New Roman", "Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.4px
  heading:
    fontFamily: '"Newsreader", Georgia, "Times New Roman", "Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: 22px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -0.2px
  lede:
    fontFamily: '"Newsreader", Georgia, "Times New Roman", "Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0px
  body:
    fontFamily: '"Newsreader", Georgia, "Times New Roman", "Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0.1px
  body-mono:
    fontFamily: '"IBM Plex Mono", "SFMono-Regular", ui-monospace, Menlo, "Noto Sans SC", monospace'
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.2px
  eyebrow:
    fontFamily: '"Archivo", "Helvetica Neue", Arial, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: 2px
  button:
    fontFamily: '"Archivo", "Helvetica Neue", Arial, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: 1px
  caption:
    fontFamily: '"Newsreader", Georgia, "Times New Roman", "Noto Serif SC", "Songti SC", "STSong", serif'
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.1px

rounded:
  none: 0px
  sm: 2px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  section: 96px

components:
  # —— UI: masthead & navigation ——
  nav-masthead:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.masthead}"
    rounded: "{rounded.none}"
    padding: "{spacing.md} {spacing.xl}"
  section-tag:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
  dateline-rail:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} {spacing.md}"
  column-rule:
    backgroundColor: "{colors.hairline}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs}"

  # —— UI: editorial body ——
  lead-headline:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.md}"
  drop-cap:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} {spacing.sm}"
  lede-paragraph:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.lede}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.md}"
  body-column:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.md}"
  pull-quote:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  photo-caption:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs} {spacing.sm}"

  # —— UI: cards, stats, controls ——
  article-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  stat-figure:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.body-mono}"
    rounded: "{rounded.none}"
    padding: "{spacing.md}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.lg}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} {spacing.lg}"
  footer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"

  # —— Presentation: 16:9 slide components ——
  slide-cover:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.masthead}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-section-divider:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-stat-hero:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.body-mono}"
    rounded: "{rounded.none}"
    padding: "{spacing.section}"
  slide-quote:
    backgroundColor: "{colors.surface}"
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

# Broadsheet · 大报

> The masthead grandeur of longform print, ported to the screen with its dignity intact.
> A newspaper front page is one of the most confident objects in graphic design: ink on
> paper, one accent of red, columns that actually align, and a headline serif so
> assured it needs no help. This system keeps that discipline and refuses every screen-era
> shortcut that would soften it. Signed HeiGe-Design.

## Overview

Broadsheet is an **editorial print system**, not a "clean minimal website." Its whole
attitude is that a page should look like it went to press.

**Two roles for two colors.** Ink black (`#1c1a16`) is the voice — every word of body,
every headline, the black section plate. Masthead red (`#c0392b`) is the *editor's pen* —
it appears exactly three ways: as the section kicker, as the drop cap that opens the
lede, and as one baseline rule. Newsprint white (`#f4f1ea`) is the paper everything
prints on. There is no fourth color. The restraint *is* the brand.

**One serif does the heavy lifting.** A high-contrast display serif (Playfair Display for
the nameplate, Newsreader for headlines and body) carries the identity. The only sans in
the building is furniture — datelines, kickers, buttons, page folios — set small,
tracked wide, in a plain grotesque so it never competes with the serif.

**Rhythm comes from the column, not from color.** Multi-column measure, a four-line drop
cap, hairline vertical rules between columns, generous leading, and section rules that
span the full width. Depth is drawn with 1px lines, never with shadow or blur. A boxed
sidebar is a *shaded tint*, the way a real broadsheet shades a pull-out — not a floating
rounded card.

Demonstration masthead throughout: the fictional edition **THE MERIDIAN LEDGER**. No real
publication is referenced or reproduced.

## Colors

**Brand & Accent**
- `primary` `#c0392b` — Masthead red. The editor's pen. Kicker label, drop-cap initial,
  and one baseline rule per section. Red text on newsprint clears 4.8:1, so it is legal
  as type as well as ornament — but it stays rare on purpose. Never a large fill except
  the single closing plate.

**Surface**
- `canvas` `#f4f1ea` — Newsprint white. The page. Warm, slightly toothy, never `#fff`.
- `surface` `#ece6d8` — Shaded box. A tint one step down from the page for pull-out
  sidebars and boxed features, exactly as newspapers shade a related-story box.

**Text**
- `ink` `#1c1a16` — Warm ink black. Body, headlines, and the reversed black section plate.
  Softened off pure black so long-form reading on a lit screen does not vibrate.
- `on-primary` `#faf8f3` — Reversed ink. The white that prints on red and on the black
  plate. 5.1:1 on red, 16:1 on ink.
- `muted` `#5c554a` — Datelines, captions, credits, secondary copy. 6.5:1 on the page.

**Semantic / Structural**
- `hairline` `#cdc6b8` — The 1px rule. Column dividers, section rules, table lines. This
  is the system's true workhorse: it replaces every border, card edge, and box-shadow.

Every token above is referenced by at least one component. No token is defined "for
later." A broadsheet does not carry ink it will not print.

## Typography

**Font families**
- **Nameplate serif** — `"Playfair Display"` at 900. High-stroke-contrast didone for the
  masthead nameplate and slide covers. The thick/thin swell is the whole point; never
  substitute a low-contrast serif here.
- **Text serif** — `"Newsreader"`, a serif drawn for on-screen news, carries headlines,
  ledes, body, quotes, and captions.
- **Furniture sans** — `"Archivo"` for kickers, datelines, buttons, folios. Set small and
  tracked; it is signage, not voice.
- **Tabular mono** — `"IBM Plex Mono"` for figures, stat heroes, edition dates, and page
  numbers. Lining tabular digits so columns of numbers align.

**Chinese fallback is mandatory.** Every serif stack ends `…, "Noto Serif SC", "Songti
SC", "STSong", serif`; every sans stack ends `…, "Noto Sans SC", "PingFang SC",
"Microsoft YaHei", sans-serif`; the mono stack falls back to `…, "Noto Sans SC",
monospace`. **中文一律走思源宋体 / 宋体 / 黑体系统字，绝不用任何日文字体渲染**（日文衬线对简体会缺字变豆腐、或显示异体）。When Chinese runs in the
masthead or a headline, it renders in Noto Serif SC — a Song-style face that sits with
the didone Latin like set metal type, not a mismatch.

**Hierarchy**

| Role | Face | Size | Weight | Leading | Tracking | Use |
|---|---|---|---|---|---|---|
| masthead | Playfair Display | 72 | 900 | 0.95 | +1 | Nameplate, slide cover |
| display-xl | Newsreader | 56 | 800 | 1.02 | −0.8 | Front-page headline, divider |
| display-lg | Newsreader | 36 | 700 | 1.1 | −0.4 | Sub-head, pull-quote, closing |
| heading | Newsreader | 22 | 700 | 1.25 | −0.2 | Card / section heads |
| lede | Newsreader | 20 | 400 | 1.55 | 0 | Standout opening paragraph |
| body | Newsreader | 17 | 400 | 1.7 | +0.1 | Column body copy |
| body-mono | IBM Plex Mono | 15 | 500 | 1.4 | +0.2 | Figures, folios, dates |
| eyebrow | Archivo | 12 | 600 | 1.0 | +2 | Section kicker, dateline |
| button | Archivo | 14 | 600 | 1.0 | +1 | Controls |
| caption | Newsreader | 13 | 400 | 1.4 | +0.1 | Photo credits, footnotes |

**Principles**
- The headline-to-body ratio runs past 3:1 (56 over 17). Let the headline be *almost too
  big*; that is the front-page voice.
- Body copy in italics only for the lede's final clause and for captions. Reserve italic
  as emphasis, not decoration.
- Kickers and folios are always uppercase, tracked +2, small. They read as furniture and
  disappear until needed.
- Digits everywhere are tabular mono so any column of figures aligns to the same grid as
  the type.

## Layout

**Spacing scale** — `xs 4 · sm 8 · md 16 · lg 24 · xl 48 · section 96`. The jump from
`xl` to `section` (48 → 96) is deliberate: within an article, spacing stays tight and
print-like; *between* sections the page breathes at full broadsheet scale.

**Grid & container.** A 12-column grid on a 1200px max measure. Long-form content sets in
**2–3 real columns** with a 24px gutter carrying a 1px vertical `hairline` rule down its
center — the column rule, not the whitespace, separates the text. Reading measure per
column caps near 34em (roughly 62 characters) so lines break where the eye wants them.
限宽用 em/px，绝不用 `ch` 给中文限宽（`ch` 按拉丁数字宽算，中文会提前折行出孤字）。

**Whitespace philosophy.** This is a *dense* system by design — a broadsheet fills the
page. Whitespace is spent at three moments only: the top margin above the masthead, the
`section`-height break between stories, and the deliberate hush around a pull-quote or
stat hero. Everywhere else, copy packs into columns the way ink packs onto newsprint.

## Elevation & Depth

Broadsheet has **no z-axis**. Nothing floats. The entire depth language is 1px rules on a
single plane:

| Layer | Device |
|---|---|
| Page | `canvas` newsprint, flat |
| Section break | full-width `hairline` rule, sometimes doubled thick+thin |
| Column division | vertical `hairline` rule in the gutter |
| Boxed feature | `surface` shaded tint + a `hairline` frame — a tint, not a shadow |
| Reversed plate | `ink` black block with `on-primary` type (section dividers, footer) |
| The one accent | a single `primary` baseline rule under a kicker |

No `box-shadow`, no `backdrop-filter`, no blur, no gradient. A boxed sidebar earns its
separation from a **shaded tint and a hairline frame** — the exact move a print sub-editor
makes to set a related story apart. If you find yourself reaching for a drop shadow, draw
a rule instead.

## Shapes

`rounded` defines exactly two values: `none 0px` and `sm 2px`. **Sharp is the default.**
Every card, button, plate, and image sits at 0px — printed rectangles have corners. The
2px `sm` is spent in one place only: the red `section-tag` chip, where a whisper of a
radius keeps the small red label from reading as a harsh sticker. There is no `pill`
token, on purpose; a broadsheet has never rounded anything to a capsule.

Images are hard-edged rectangles, full-bleed to their column, always with a `photo-caption`
in muted italic tucked beneath and a hairline above. No rounded thumbnails, no circular
avatars — a mugshot in a newspaper is a square.

## Components

- **nav-masthead** — The nameplate bar. Fictional title (`THE MERIDIAN LEDGER`) set in
  Playfair 900, centered, flanked left by the edition date and right by section links in
  tracked Archivo, with a thick+thin `hairline` rule sealing the bottom. This is the
  single grandest object on the page.
- **section-tag** — The red kicker chip. Uppercase Archivo on `primary`, 2px corners, sits
  on the baseline rule above every headline. The only place `sm` radius appears.
- **dateline-rail** — Reversed black strip, white tracked caps: `SECTION · CITY · DATE`.
  The furniture band that labels a section.
- **column-rule** — The 1px vertical `hairline` living in every gutter. A component in its
  own right because it *is* the layout.
- **lead-headline** — Front-page headline, display-xl serif, ink, ragged-right, tight
  leading. Sized by `clamp()` so the longest line survives a 360px screen without an orphan.
- **drop-cap** — The signature initial: the lede's first letter set in Playfair red at
  four lines of cap-height, optically kerned into the column so text wraps its shoulder.
- **lede-paragraph** — The standout opening: 20px serif, slightly loose, its closing
  clause in italic — the visual handoff into body columns.
- **body-column** — Justified-optional serif body at 17/1.7, flowing in 2–3 columns split
  by column-rules.
- **pull-quote** — A quote lifted into a `surface` shaded box, display-lg, with a single
  red rule above. Spans one-and-a-half columns to break the grid on purpose.
- **photo-caption** — Muted italic serif under every image, hairline above.
- **article-card** — In an index/grid, a story teaser on `surface` tint: heading serif +
  dek + dateline. Sharp corners, hairline frame, zero shadow.
- **stat-figure** — A big tabular-mono numeral in red with a small serif label — the
  "by the numbers" box.
- **button-primary / button-secondary** — Sharp rectangles. Primary is red with reversed
  ink; secondary is a shaded tint with a hairline edge. Uppercase Archivo labels. No pills.
- **footer** — Reversed black plate, the colophon: masthead repeated small, edition line
  in mono, links in muted caps.

## Presentation System

Broadsheet deck = **a broadsheet turning its own pages.** 16:9, aligned to HeiGe-PPT's
one-line-per-slide / golden-three-seconds / visual-hammer doctrine.

- **Cover (`slide-cover`)** — Full nameplate treatment. The fictional masthead in Playfair
  900 dead center on newsprint, an edition line in mono beneath (`VOL. IV · NO. 12 ·
  今日头版`), sealed top and bottom by the thick+thin hairline rule. Golden three seconds:
  the reader believes an edition just landed on the desk. **One line, one masthead, one red
  dot** — nothing else.
- **Section divider (`slide-section-divider`)** — The page-turn. Flips to a full `ink`
  black plate: a giant reversed section numeral (`03`) in display-xl, the section name in
  tracked caps beneath, and a single red baseline rule. Maximum contrast against the light
  content slides — you *feel* the page turn.
- **Stat hero (`slide-stat-hero`)** — One colossal figure in masthead red, tabular mono,
  filling the frame, with a serif caption and unit small beneath. The visual hammer: the
  number is the entire slide.
- **Quote (`slide-quote`)** — On the `surface` shaded box, one pull-quote in display-lg
  serif, a red rule above, attribution in muted caps below. A single sentence, room to
  breathe.
- **Closing (`slide-closing`)** — The only full-red plate in the system. Reversed white
  call to action in display-lg, edition sign-off in mono (`— 30 —`, the printer's mark for
  end of story). The red is rationed all deck long precisely so this final plate lands.

Rhythm across the deck: light newsprint covers and content, punctuated by black divider
plates at each section turn, climaxing on one red closing plate. Density high in content,
hush deliberate at stat and quote.

## Signature Moment

Two moves this system can make that a swapped template cannot:

**UI — The Rule & Drop-Cap opening.** Every article opens the same unmistakable way: a
full-width thick+thin `hairline` masthead rule, the red `section-tag` sitting *on* that
rule, then the lede breaking on a **four-line Playfair drop cap in masthead red**,
optically kerned so the body text wraps its shoulder, while thin vertical column-rules run
the full height between columns. Rule, red kicker, red initial, real columns — that stack
is pure letterpress broadsheet and reads as one object the instant it loads.

**Deck — The Folio Fold.** Every slide carries a running **folio bar** across the foot:
left the fictional masthead + edition date in tabular mono, a single red square at dead
center, right the page count as `PP. 03 / 12`. Turn to a new section and the folio bar
does not just increment — the whole slide **flips to the ink-black plate** with a giant
reversed numeral and one red baseline rule, exactly like turning the fold of a broadsheet.
The folio is the through-line; the black fold is the punctuation.

## Do's and Don'ts

**Do**
- Ration the red to three jobs: kicker, drop cap, one rule. Scarcity is what makes it read.
- Draw every separation with a 1px `hairline` — column rules, section rules, box frames.
- Let the headline run *almost too large*; a timid front page is a dead front page.
- Set body in real multi-column measure with a rule in the gutter, not a lonely centered
  680px blob.
- Shade a pull-out with the `surface` tint the way a print sub-editor boxes a sidebar.
- Cap the longest headline line with `clamp()` and `white-space:nowrap` per line so no
  屏宽 drops a single character to its own line (zero orphans).

**Don't**
- **不碰紫蓝俗套渐变** (`#667eea → #764ba2` and its whole family). This system has no
  gradient anywhere — background, text, or button. Ink, newsprint, one red.
- **不做居中卡片三件套** — no "centered title + gray subtitle + three equal rounded cards"
  SaaS block. Broadsheet lays out in columns and rules, never in a row of floating cards.
- **中文绝不用日文字体渲染** — Chinese runs in Noto Serif SC / Songti, never Mochiy / Zen /
  any Japanese face (简体会缺字变豆腐).
- **不动画化阴影 / 不用 backdrop-filter** — there are no shadows to animate here anyway;
  depth is 1px rules, and rules do not glow, blur, or move.
- No rounded pills, no circular avatars, no soft 8px-radius-everything. Corners are sharp;
  a printed rectangle has corners.
- No emoji as icons and no filler copy («赋能»「一站式」). A broadsheet writes real headlines.

## Responsive Behavior

Mobile is a **re-set edition**, not a shrunk page.

| Breakpoint | Columns | Behavior |
|---|---|---|
| ≥ 1200px | 3 columns + gutter rules | Full broadsheet spread, nameplate at 72px |
| 768–1199px | 2 columns | Nameplate steps to ~48px, headline `clamp()` down, rules stay |
| ≤ 767px | 1 column | Single column, column-rules retire; section rules stay full-width |

On the single-column phone edition the masthead nameplate re-sets to a tighter weight and
sits left-aligned rather than centered; the drop cap holds (it scales with the lede); the
deck folio bar collapses to `masthead · PP. 03/12` with the center red dot preserved. Type
never simply scales down — measure, alignment, and the nameplate are recomposed for the
narrow page, and every headline is re-checked for orphans at ≤390px.

Motion is minimal and print-honest: content sets on load, section rules can wipe in once,
nothing loops. All of it obeys `@media (prefers-reduced-motion: reduce)`.

## Anti-Slop Pledge

Strip the nameplate off and this page still announces itself: the red drop cap breaking a
real column, hairline rules doing the work shadows do elsewhere, one high-contrast serif
carrying every headline, and not a single gradient, pill, or glow in sight. It reads like
an edition that was set and sent to press — deliberate, dense, confident — not like a
template that rendered. That is the whole promise. — HeiGe-Design.

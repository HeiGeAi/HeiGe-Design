---
version: alpha
name: sticker-club-design-system
description: "A loud, die-cut community aesthetic built on a three-primary clash of cobalt, cherry red and sunshine yellow slapped onto warm scrapbook cream. Every surface is a peel-and-stick sticker with a thick white die-cut border, a hard black keyline and a blunt offset shadow, tilted a few degrees like it was pressed on by hand. Chunky rounded display type (Fredoka) with enamel-pin badge labels. The signature move is the peel, collage walls where stickers un-rotate and lift on touch. By HeiGe-Design."

colors:
  primary: "#2536e8"
  on-primary: "#ffffff"
  ink: "#17171f"
  canvas: "#f5f1e6"
  surface: "#ffffff"
  muted: "#63625b"
  hairline: "#e4dfd0"
  accent-red: "#ff3b3b"
  accent-yellow: "#ffd21e"

typography:
  display-xl:
    fontFamily: "\"Fredoka\", \"Baloo 2\", \"ZCOOL KuaiLe\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif"
    fontSize: 76px
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-1.5px"
  display-lg:
    fontFamily: "\"Fredoka\", \"Baloo 2\", \"ZCOOL KuaiLe\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif"
    fontSize: 52px
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.8px"
  heading:
    fontFamily: "\"Fredoka\", \"Baloo 2\", \"ZCOOL KuaiLe\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif"
    fontSize: 26px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.2px"
  body:
    fontFamily: "\"Nunito\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", \"Hiragino Sans GB\", sans-serif"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0px"
  body-mono:
    fontFamily: "\"Space Mono\", \"DM Mono\", \"JetBrains Mono\", ui-monospace, SFMono-Regular, \"Noto Sans SC\", monospace"
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: "0.5px"
  button:
    fontFamily: "\"Fredoka\", \"Baloo 2\", \"Nunito\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif"
    fontSize: 17px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: "0.2px"
  caption:
    fontFamily: "\"Nunito\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", \"Hiragino Sans GB\", sans-serif"
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.3px"
  eyebrow:
    fontFamily: "\"Fredoka\", \"Baloo 2\", \"ZCOOL KuaiLe\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif"
    fontSize: 13px
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: "1.5px"

rounded:
  none: 0px
  sm: 10px
  md: 18px
  lg: 28px
  pill: 9999px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  section: 80px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 28px
  button-secondary:
    backgroundColor: "{colors.accent-yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 28px
  sticker:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
  card-feature:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.heading}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  badge-medal:
    backgroundColor: "{colors.accent-red}"
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: 8px 16px
  pill-tag:
    backgroundColor: "{colors.hairline}"
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: "{spacing.sm}"
  stat-block:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body-mono}"
    rounded: "{rounded.sm}"
    padding: 20px 24px
  count-meta:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    padding: "{spacing.xs}"
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow}"
    padding: 16px 32px
  footer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.body}"
    padding: 40px 32px
  slide-cover:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: "{spacing.section}"
  slide-section-divider:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: 80px
  slide-stat-hero:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    padding: "{spacing.xl}"
  slide-quote:
    backgroundColor: "{colors.accent-yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    padding: 80px
  slide-closing:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-primary}"
    typography: "{typography.display-lg}"
    padding: 80px
---

# 贴纸俱乐部 · Sticker Club

A HeiGe-Design system for community, social and check-in products. Loud, tactile, hand-pressed. Every element is a die-cut sticker slapped onto a scrapbook page — and the whole thing lives or dies on one detail: the thick white outline and the tilt.

---

## Overview

贴纸俱乐部 is what a community feels like when it is full. Not a clean grid of avatars, but a **wall covered in peel-and-stick stickers** — overlapping, rotated, each one earned. The visual language is deliberately maximal-but-controlled: three flat primary colors clashing on warm cream, every shape wrapped in a chunky white die-cut border and a hard black keyline, dropped with a blunt offset shadow so it reads as a real object sitting *on* the page.

The palette runs on a **three-primary clash**. Cobalt `#2536e8` is the club — it does buttons, links, active states, the one color you trust. Cherry red `#ff3b3b` and sunshine yellow `#ffd21e` are the accents: they are badges, pins, highlights, the loud bits. Black is not a color here, it is the **keyline** — the 2–3px outline every sticker gets, the same black that die-cutting machines print. Cream `#f5f1e6` is the scrapbook page the stickers stick to; it is warm on purpose so the white die-cut borders actually pop instead of vanishing into a white void.

Type is chunky and round. Fredoka carries every headline — a geometric rounded display that reads like a badge stamp, not a corporate sans. Numbers get a monospace (Space Mono) so member counts and streak counters look like a mechanical odometer clicking up. The rhythm is: **loud sticker → breathe → louder sticker.** Never an even field of same-size cards. There is always one hero sticker, tilted a little more, shadowed a little harder, that your eye lands on first.

Two-color logic in one line: **cobalt is the club, black is the die-cut, everything else is a sticker you collected.**

---

## Colors

### Brand & Accent
- **Cobalt `#2536e8`** — primary. The club color. Primary buttons, active links, the hard shadow behind hero stats, the one solid-color slide. White text on cobalt clears 7.5:1, so it is safe as a fill anywhere.
- **Cherry Red `#ff3b3b`** — accent. Enamel-pin badges, medals, "new" flags, the loud rotated sticker in a collage. Always paired with **black ink text** (5.0:1), never white — white on this red fails AA and looks cheap.
- **Sunshine Yellow `#ffd21e`** — accent. Highlighter energy: secondary buttons, quote slides, streak highlights. Always black ink text (12.3:1). This is the closest thing to a physical highlighter marker; use it to shout, sparingly.

### Surface
- **Cream `#f5f1e6`** — canvas. The scrapbook page. Warm off-white so white die-cut borders read as borders, not gaps.
- **White `#ffffff`** — surface. The face of every sticker and the 6px die-cut ring around it.
- **Hairline `#e4dfd0`** — 1–2px structural line under the nav and in the footer. Never carries text.

### Text
- **Ink `#17171f`** — near-black, the keyline and all body copy. Never pure `#000`; a hair of blue-black keeps it from buzzing.
- **Muted `#63625b`** — captions, member IDs, timestamps. Clears 5.4:1 on cream and 6.1:1 on white. Only ever sits on light surfaces, never on the dark footer.
- **On-primary `#ffffff`** — text on cobalt and on ink.

### Semantic
This system stays deliberately lean: red *is* the alert/new color, yellow *is* the highlight/reward color, cobalt *is* the primary/link color. No extra success-green or warning-orange — that would break the three-primary discipline. If you need "done," give it a yellow star badge, not a new hue.

---

## Typography

### Font Family
- **Display / headings / eyebrow / buttons — Fredoka** (with Baloo 2 as the second choice). Geometric, rounded, chunky. Reads like a badge stamp. Full stack:
  `"Fredoka", "Baloo 2", "ZCOOL KuaiLe", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif`
- **Body / caption — Nunito.** Rounded but calm enough for paragraphs.
  `"Nunito", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif`
- **Numbers — Space Mono.** Odometer feel for counts, streaks, member IDs.
  `"Space Mono", "DM Mono", "JetBrains Mono", ui-monospace, SFMono-Regular, "Noto Sans SC", monospace`

**Chinese rule (hard):** Fredoka / Nunito / Baloo carry no Chinese glyphs, so Chinese falls through to **ZCOOL KuaiLe** (rounded, playful, matches the mood) and then system **Noto Sans SC / PingFang SC / Microsoft YaHei**. Every Chinese-capable stack ends in a system font so nothing turns to tofu when the webfont fails to load. **Never render Chinese with a Japanese rounded font** (Mochiy Pop, Zen Maru) — simplified glyphs drop out or come back as the wrong variant. 俏皮圆体只走 ZCOOL KuaiLe + 思源系兜底。

### Hierarchy
| Role | Size | Weight | Line height | Tracking | Use |
|---|---|---|---|---|---|
| display-xl | 76px | 700 | 0.98 | -1.5px | Cover title, quote slide |
| display-lg | 52px | 700 | 1.02 | -0.8px | Section dividers, closing CTA |
| heading | 26px | 600 | 1.15 | -0.2px | Sticker & card titles |
| body | 17px | 400 | 1.6 | 0 | Paragraphs, footer |
| body-mono | 40px | 700 | 1.0 | 0.5px | Stat numbers, streak counts |
| button | 17px | 700 | 1.0 | 0.2px | All buttons |
| caption | 13px | 600 | 1.4 | 0.3px | Meta, IDs, timestamps |
| eyebrow | 13px | 700 | 1.0 | 1.5px | Badge labels, nav, tags (UPPERCASE) |

### Principles
- **Max-to-body contrast is 76:17 ≈ 4.5:1.** The hero word is allowed to feel almost too big. That is the point.
- Eyebrow labels are the only uppercase, wide-tracked type — they are the sticker's printed caption ("MEMBER · 0042", "DAY 30").
- Numbers are always monospace so a counter clicking from 0341 to 0342 doesn't shift width.

---

## Layout

### Spacing
An 8-based scale: `xs 4 / sm 8 / md 16 / lg 24 / xl 40 / section 80`. Stickers keep generous internal padding (`lg` = 24px) so the white die-cut ring never crowds the text. Section rhythm is `section` (80px) between blocks so a loud collage always gets air after it.

### Grid & Container
- Content max-width ~1120px, but the sticker wall **breaks the grid on purpose** — stickers overlap, hang off the column edge, and rotate. Alignment is felt, not pixel-locked.
- The rest of the page (nav, footer, body copy) is strictly left-aligned on a clean grid. Discipline everywhere *except* the collage, so the collage reads as the deliberate loud moment.

### Whitespace
Cream negative space is the "table" the stickers sit on. Never fill it edge to edge. One dense sticker wall, then a wide calm band of cream with a single left-aligned line. The breathing is what keeps maximalism from becoming noise.

---

## Elevation & Depth

Depth here is **physical, not soft**. No blur. A sticker sits on the page, so it casts a hard blunt shadow with zero blur radius.

| Layer | Treatment |
|---|---|
| Page (cream) | Flat, no shadow |
| Tag / pill | 2px ink keyline, no shadow — printed flat |
| Card | 3px keyline + `5px 5px 0 {ink}` hard offset |
| Sticker (hero) | 6px white die-cut ring + `6px 6px 0 {ink}` |
| Stat block | 3px keyline + `5px 5px 0 {cobalt}` (colored shadow = it's electric) |

**Rules:** shadows are static `Npx Npx 0` offsets, never animated (animating box-shadow repaints every frame — banned by the production checklist). Never `backdrop-filter`. Never a soft `0 4px 6px rgba(0,0,0,.1)` — that is the generic AI shadow and it makes stickers look like flat web cards instead of physical objects. Depth = keyline + white ring + hard offset. That's the whole system.

---

## Shapes

| Token | Value | Use |
|---|---|---|
| none | 0px | Full-bleed color slide (section divider) |
| sm | 10px | Stat blocks, tight chips |
| md | 18px | Feature cards |
| lg | 28px | Stickers (the die-cut rounded corner) |
| pill | 9999px | Buttons, badges, tags |

- Stickers use `lg` (28px) rounded corners — the rounded-rect die-cut shape.
- Badges and buttons are full pills — enamel-pin and gummy-button silhouettes.
- Images are masked into rounded-rect stickers with the same 6px white ring, not bare rectangles. A raw photo with sharp corners breaks the metaphor.
- Rotation is part of the shape language: stickers live at −6° to +6°, never at a perfect 0° until you touch them.

---

## Components

- **button-primary** — cobalt fill, white text, black keyline, hard offset shadow, pill. On press it "presses down": translate to the shadow and shrink the shadow to 0 (transform only). This is the gummy-button feel.
- **button-secondary** — yellow fill, black text, same keyline + shadow. The loud alternative CTA.
- **sticker** — the signature object. White face, 6px white die-cut ring, black keyline implied by the ring edge, hard ink shadow, rotated −3°. Holds a title + collected content.
- **card-feature** — calmer sticker for content grids: 3px keyline, `md` corners, hard shadow, sits at 0° (cards behave; stickers misbehave).
- **badge-medal** — cherry-red enamel pin, black text, rotated −6°, tiny hard shadow. The reward object. Dropped onto covers and profiles.
- **pill-tag** — flat soft-grey (hairline) chip with a 2px ink keyline, uppercase eyebrow text. Topics, interests, "#day30". The one quiet chip so the loud red/yellow badges stay the reward.
- **stat-block** — white block, mono number, **cobalt** hard shadow to signal it's a live count.
- **count-meta** — muted caption on cream for IDs and timestamps ("MEMBER · 0042").
- **nav-bar** — cream, uppercase eyebrow links, 2px hairline underline. The one calm, orderly strip.
- **footer** — ink black band, cream text — the page flips to a dark sticker sheet backing at the very bottom.

---

## Presentation System

16:9 decks follow **one line per slide → hero in the golden 3 seconds → one visual hammer.** The hammer for this system is always the **die-cut sticker with the hard offset shadow.**

- **Cover (`slide-cover`)** — cream page. The title lives *inside* one giant tilted white sticker with the 6px ring and hard shadow, and 3–4 enamel-pin badges are scattered around it at random angles. Reads in 3 seconds as "a wall someone just finished decorating." This is the check-in / 打卡 wall.
- **Section divider (`slide-section-divider`)** — full-bleed cobalt, no rounding, white oversized number + one word. A hard flat color-block to reset the eye after a busy collage. The only slide with zero stickers — the deliberate exhale.
- **Stat hero (`slide-stat-hero`)** — cream, one monster monospace number (member count, streak, day) sitting in a stat-block with a **cobalt hard shadow**, unit label small beside it. One number, nothing else.
- **Quote (`slide-quote`)** — the whole slide *is* a yellow highlighter sticker, tilted −2°, one big black sentence. Screen-filling. The highlighter marker made literal.
- **Closing (`slide-closing`)** — ink-black slide, cream headline, one cobalt primary button "加入俱乐部 / Join the club." Dark backing sheet, one gummy button to peel and press.

Visual hammer placement: cover and quote carry it hardest; the section divider withholds it entirely so its return on the next slide lands.

---

## Signature Moment

**The one thing a swapped template cannot fake.** Written down, one for UI and one for deck:

**UI — The Peel-Wall (撕拉贴纸墙).** A collage where every card is a die-cut sticker: 6px white ring, black keyline, hard ink offset shadow, each rotated a random −6° to +6°, overlapping with real z-index depth. On hover/touch a sticker **peels**: it rotates back to a clean 0°, lifts (translate up-left), its hard shadow grows from `6px` to `12px` offset — as if you're catching a fingernail under the edge and pulling it off the table. Animate `transform` and `box-shadow`-offset via a single spring; nothing blurs, nothing repaints expensively. Un-touched, the wall looks hand-pressed and alive; touched, each sticker snaps to attention. No generic card grid reproduces the tilt-plus-peel — it requires the die-cut ring, the keyline, and the physics together.

**Deck — The Badge-Stamp Cover (集章开场).** The opening slide is a check-in wall: the talk title set inside one oversized tilted white sticker with the hard shadow, and around it 4–6 cherry-red and yellow enamel-pin **badges** land at random angles, each with its own tiny hard shadow, like stamps just pressed into a punch-card. It says "this is a club, and you're about to collect" before a single word is read.

---

## Do's and Don'ts

**Do**
- Give every sticker the full recipe: white die-cut ring + black keyline + hard offset shadow + a few degrees of tilt. Miss one and it stops being a sticker.
- Keep the three primaries flat and clashing. Cobalt leads, red and yellow accent, black keylines everywhere.
- Break the grid only in the collage. Keep nav, copy, and footer left-aligned and orderly so the mess reads as intentional.
- Let one hero sticker win each screen — bigger, tilted more, shadowed harder.
- End Chinese font stacks with Noto Sans SC / PingFang SC; use ZCOOL KuaiLe for the rounded Chinese display.

**Don't**
- **Don't touch the purple-blue cliché gradient (`#667eea → #764ba2`)** or any of its family. This system is flat primaries and hard shadows — zero soft gradients.
- **Don't fall into the centered card trio** — one title, one gray subtitle, three equal rounded cards repeating down the page. The wall must overlap, tilt, and pick a hero.
- **Don't render Chinese with a Japanese font** (Mochiy Pop, Zen Maru). Simplified glyphs break. Rounded Chinese = ZCOOL KuaiLe + 思源系.
- **Don't animate the shadow's blur or use soft `0 4px 6px` shadows.** Depth is a static hard offset. Animate only `transform` and shadow *offset* on the peel, nothing that repaints or blurs per frame.
- Don't put white text on cherry red or yellow — always black ink on those two.
- Don't let stickers sit at a perfect 0° at rest — the resting tilt is the whole personality.

---

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| ≥1024px | Full overlapping sticker wall, real z-index collage, stickers hang off column edges |
| 640–1023px | Wall relaxes to a loose 2-column stagger; stickers keep tilt but reduce overlap; hero sticker stays oversized |
| ≤639px | **Re-composed, not shrunk:** stickers stack into a single vertical peel-stack, alternating tilt left/right down the column; badges collapse into a horizontal scroll strip; cover sticker goes full-width with the title re-flowed |

Mobile is a different arrangement of the same objects, not the desktop wall scaled down. Titles use `clamp()` and each hand-broken line gets `white-space: nowrap` so no single character orphans onto its own line at ≤390px. Chinese width limits use `em`/`px`, never `ch`. All motion (peel, press, tilt) is gated behind `@media (prefers-reduced-motion: reduce)` — reduced-motion users get the same wall, statically tilted, no peel.

---

## Anti-Slop Pledge

Strip the brand name off and this is still, unmistakably, a **hand-pressed sticker wall**: warm cream page, three flat primaries clashing, every object wrapped in a white die-cut ring and a hard black keyline, each one tilted a few degrees and casting a blunt offset shadow — and when you touch it, it peels. No soft gradients, no even card grids, no generic drop shadows, no tofu Chinese. It could only have been made by someone who decided a community should *feel like a wall you earned your spot on* — not generated by a template. Signed, HeiGe-Design.

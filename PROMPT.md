# PROMPT — paste this into Antigravity

Read `@CLAUDE.md` and `@BRIEF.md` first, then the entire existing build:
`index.html`, `css/style.css`, `js/main.js`. Also WebFetch
https://a1supplies.com.au/ so you're judging against the real business, not
your assumptions.

**Do not write any code in this turn.** Audit and plan only.

## What I want

The page works. It doesn't yet feel like it was made *for this business* — it
still reads slightly template-shaped. I want to fix that with design craft:
spacing, typography, colour discipline, image treatment, and restrained motion.

## Deliver, in this order

**1. Audit.**
Work through §6 of `@BRIEF.md` (Craft / Authenticity signals / Motion /
Responsive / Technical). For each finding give me:
- the specific element or selector
- what's wrong, in one line
- why it undermines the "trusted supplier" read

Be blunt. I'd rather hear twelve real problems than three polite ones. Include
anything from §5 that has regressed.

**2. Prioritised plan.**
A table: `# | Change | Section | Impact (H/M/L) | Effort (S/M/L) | Rationale`.
Sort by impact-per-effort. Highest-leverage first.

**3. Design decisions, stated explicitly.**
Before touching CSS, tell me what you're changing at the system level and why —
the spacing scale, the type scale, how many greys survive, the elevation
language, the easing curve and duration you'll standardise on. New values become
new `:root` tokens.

**4. Image plan.**
Which images are wrong (crop, background, resolution, weight, missing
dimensions), what treatment fixes each, and what you'd need from me. Do not
generate or substitute stock imagery.

**5. Motion plan.**
Every animation you propose, with trigger, property (`transform`/`opacity`
only), duration, easing, and its `prefers-reduced-motion` fallback.

Then **stop and wait for my approval.** After I approve, build one section at a
time and pause after each.

## Constraints — non-negotiable
- No new sections, no new pages, no rewritten copy, no invented claims.
- Vanilla HTML/CSS/JS. No framework, no CDN, no build step, no font CDN.
- WCAG AA, visible `:focus-visible`, 44px tap targets, keyboard-operable
  accordion and drawer.
- Nothing from the taste-guardrails list in `@CLAUDE.md`.
- If the brief conflicts with the live site, flag it and ask. Don't silently pick.

## Two questions to answer honestly at the end
1. If a facilities manager landed here cold, what is the single thing most likely
   to make them doubt this is a real 15-year-old supplier?
2. What are you tempted to add that you should not?
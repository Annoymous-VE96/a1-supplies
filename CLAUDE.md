# A1 Wholesale Supplies — Homepage (Phase 2: Authenticity & Polish)

## What this project is now
The homepage already exists and works. `index.html`, `css/style.css`, `js/main.js`
are built. **This phase is refinement, not construction.**

Do NOT rebuild the page. Do NOT restructure the section order. Do NOT rewrite
copy. You are improving craft: visual detail, motion, imagery, spacing, states.

---

## Reference — read before doing anything
- **Live site (source of truth for copy/products/assets):** https://a1supplies.com.au/
- **Original build brief:** `@BRIEF.md` — read it. Every constraint in it still applies.
- Read the existing `index.html`, `css/style.css` and `js/main.js` **in full**
  before proposing anything. Critique what is actually there, not what you assume.

**Redesign, not rewrite.** Never invent statistics, certifications, payment
methods, awards, testimonials, prices, or services that are not on the live site.

---

## Scope — hard boundary
ONE deliverable: the existing homepage.

- No new pages. Nav/footer links point to the live site or `#`.
- No cart state, auth, product filtering, or backend.
- New files only inside `assets/` (images, svg, fonts). Ask before adding any
  new `.html`, `.css` or `.js` file.

---

## Stack — unchanged
Vanilla HTML5, CSS3, JS (ES6+). No frameworks, no Tailwind, no build step,
no npm, no CDN. Must still run by double-clicking `index.html`.
External requests limited to images pulled from the live site.

---

## CSS rules
- Design tokens stay in the `:root` block. **New values become new tokens** —
  no magic numbers anywhere in the stylesheet.
- Desktop-first, `max-width` media queries. Grid and Flexbox only.
- If you add tokens, group them with the existing scale rather than
  inventing a parallel system.

---

## Quality bar — must not regress
- Semantic landmarks: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`.
- WCAG AA contrast. Visible `:focus-visible` on every interactive element.
- 44px minimum tap targets on mobile.
- Descriptive `alt` on every image; `alt=""` on decorative.
- Accordion and mobile drawer keyboard-operable with correct
  `aria-expanded` / `aria-controls`. ESC closes the drawer, focus is trapped.
- **Every animation respects `prefers-reduced-motion`.** No exceptions.
- No layout shift: images get explicit `width`/`height` or `aspect-ratio`.
- Page must stay fast. No animation on `top`/`left`/`width`/`height` —
  `transform` and `opacity` only.

---

## Working rules
1. **Plan mode first.** Audit, then propose. No code until the plan is approved.
2. Present findings as a **prioritised list** — highest visual impact per unit of
   effort first — with a one-line rationale each. Not a wall of prose.
3. Then build **one section at a time**. Stop after each for review.
   Do not one-shot the whole page.
4. Show the before/after reasoning for any change to spacing, colour or motion.
5. If the brief conflicts with the live site, or a proposed change would break a
   rule above, flag it and ask. Do not silently pick one.

## Taste guardrails
The target is *industrial-practical*: a supplier a facilities manager trusts with
a standing order. Restraint reads as competence here.

Do not add: glassmorphism, neon gradients, purple/blue SaaS palettes, floating
blobs, parallax hero, particle backgrounds, typewriter effects, bouncy easing,
emoji as icons, or AI-generated stock imagery. Orange `#F36F21` is the accent —
it stays an accent, not a wash.
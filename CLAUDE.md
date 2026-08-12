# A1 Wholesale Supplies — Homepage Redesign

## Reference — read before doing anything
**Live site:** https://a1supplies.com.au/

WebFetch this URL before planning. It is the source of truth for copy, product
data, category structure, and brand assets. This is a **redesign, not a rewrite** —
preserve real copy and real claims. Never invent statistics, certifications,
payment methods, awards, or services that do not appear on the live site.

Full content and design direction lives in `BRIEF.md`. Read it with `@BRIEF.md`.

---

## Scope — hard boundary
ONE deliverable: `index.html` (homepage only).

- Do NOT create `/shop`, `/product`, `/cart`, `/checkout`, `/about`, `/contact`,
  `/login`, or any other page.
- Nav and footer links point to the live site
  (e.g. `https://a1supplies.com.au/shop/`) or to `#`.
- Do NOT scaffold an e-commerce system, cart state, auth, or product filtering.
  This is a static marketing homepage.
- If a section seems to need another page, link out. Do not build it.

---

## Stack
Vanilla HTML5, CSS3, JavaScript (ES6+) only.

- No frameworks. No Tailwind, Bootstrap, React, jQuery.
- No build step, no npm, no bundler.
- No CDN links. No external requests except images pulled from the live site.
- Must run by double-clicking `index.html`.

---

## File structure
```
index.html
css/style.css
js/main.js
assets/
```
Do not add files outside this structure without asking first.

---

## CSS rules
- `style.css` opens with a `:root` design-token block: colours, spacing scale,
  type scale, radii, shadows, transitions.
- Every value in the stylesheet references a token. No magic numbers.
- Mobile breakpoints via `max-width` media queries (desktop-first — see BRIEF.md).
- Use CSS Grid and Flexbox. No floats, no absolute-positioning layouts.

---

## Quality bar
- Semantic HTML5 landmarks: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`.
- WCAG AA contrast minimum. Visible `:focus-visible` states on all interactive elements.
- 44px minimum tap targets on mobile.
- Real `<title>` and `<meta name="description">`. The live site's title is
  literally "supplies" — fix this.
- Descriptive `alt` on every image. Decorative images get `alt=""`.
- Accordion and mobile drawer must be keyboard-operable with correct
  `aria-expanded` / `aria-controls`.
- Animations respect `prefers-reduced-motion`.

---

## Working rules
- **Enter plan mode first.** Propose the approach before writing any code.
- Build **section by section**. Stop after each for review. Do not one-shot
  the full page.
- Never invent product names, prices, testimonials, or business claims —
  use `BRIEF.md` and the live site only.
- If something in the brief conflicts with the live site, flag it and ask.
  Do not silently pick one.
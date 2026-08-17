# Project Brief — A1 Wholesale Supplies Homepage

> **Status: Phase 2 — Authenticity & Polish.**
> The page is built. Sections §1–§12 below are the locked content spec — they are
> ground truth, not a to-do list. **Do not rebuild them.**
> The work for this phase is defined in **§7 Polish Brief** at the end of this file.

---

## 0. Reference & Ground Truth

**Live site:** https://a1supplies.com.au/
WebFetch this before planning. All copy, prices, categories and claims below are
taken from it. Where this brief and the live site disagree, flag it — don't guess.

**Assets to pull from the live site:**
- Logo: `https://a1supplies.com.au/wp-content/uploads/2023/06/hdorgngelogo.png`
- Industry tiles: `/wp-content/uploads/2026/05/` → `Facilities-1.png`, `Education.png`,
  `Childcare-1.png`, `Aged-Care.png`, `Hospitality.png`, `Cleaners.png`
- Blog images: `/wp-content/uploads/2026/05/` → `5.jpg`, `6.jpg`, `7.jpg`
- Product images: `/wp-content/uploads/2026/03/` and `/2026/04/` (see §6)
- Brand logos: `/wp-content/uploads/2025/06/LOGOIMG*.png`

**Redesign, not rewrite.** Preserve real copy. Do not invent statistics,
certifications, payment methods, or services.

---

## 1. Stack & Scope

- **Tech:** Vanilla HTML5, CSS3 (Custom Properties, Flexbox, Grid), JS (ES6+).
  No frameworks, no build step, no CDN.
- **Responsive:** Desktop-first (1280px+ primary — B2B buyers order from a desk),
  scaling cleanly to 375px.
- **Deliverables:** `index.html`, `css/style.css`, `js/main.js` — nothing else.
- **Out of scope:** checkout engine, authentication, database, wishlist,
  compare, search backend, any second page.

---

## 2. Business Strategy & Conversion Goals

- **Business:** A1 Wholesale Supplies — B2B distributor of cleaning, hygiene,
  janitorial, catering and PPE consumables. Factory 17/13 Gateway Drive,
  Carrum Downs VIC 3201. Trading 15+ years.
- **Contact:** (03) 9708 2893 · sales@a1supplies.com.au · Mon–Fri 8am–4pm
- **Primary conversion:** Trade account applications →
  `https://a1supplies.com.au/enquire-about-trade-pricing/`
- **Secondary conversion:** Catalog browse → `https://a1supplies.com.au/shop/`
- **Audience:** Facilities managers, school and childcare administrators,
  aged-care operations, hospitality venues, commercial cleaning contractors.
  They reorder on a schedule. Their core fear is running out mid-operation.
  They value reliability over retail polish.

---

## 3. UI/UX Design System

### Palette
- **Brand / Accent — Logo Orange `#F36F21`** (darker variant `#E65100` for text
  on light backgrounds where AA contrast requires it). This *is* the brand colour.
- **Dark Neutral Base `#0F172A`** — structural only (footer, dark bands, headings).
  Not a brand colour. Do not treat it as primary identity.
- **Neutrals:** `#FFFFFF` / `#F8FAFC` (section fills) / `#E2E8F0` (borders)
  / `#475569` (body text) / `#94A3B8` (muted).

### Typography
- System stack: `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
  Roboto, sans-serif`.
- Confident display scale for headings, tight letter-spacing on large sizes,
  comfortable line-height (1.6) on body.

### Components & micro-interactions
- **Sticky header** — condenses on scroll, retains logo, search and cart.
- **Cards** (product + industry) — multi-layer box shadow, GPU-accelerated
  `transform: translateY(-4px)` on hover.
- **Brand marquee** — infinite CSS keyframe loop, pauses on hover.
- **FAQ accordion** — vanilla JS, fluid height transition, one open at a time.
- **Mobile drawer** — accessible slide-over below 768px, focus trapped, ESC closes.

### Visual direction
Industrial-practical, not consumer-cute. Generous whitespace, restrained motion,
strong hierarchy. Should read like a supplier a facilities manager trusts with a
standing order — not a discount store.

---

## 4. Section Architecture & Content
*(Locked. This is what is already built — reference only.)*

### 1. Announcement Bar
Copy: *"FREE Melbourne Metro delivery on orders over $250 + GST | Trade accounts
approved in 1 business day"*
CTA: *"Apply for Trade Pricing →"* → `/enquire-about-trade-pricing/`

### 2. Header & Navigation
- **Utility row:** logo, search input with category select, phone
  `(03) 9708 2893`, account link, cart summary (`0 items`).
- **Category nav — 9 top-level items ONLY:**
  Cleaning Chemicals · Paper Products · Bathroom Supplies · Take Away Containers ·
  Gloves & PPE · Janitorial Supplies · Kitchen Supplies · Baby Care · Eco Friendly

### 3. Hero
- **Headline:** *"Your Supplies. Sorted. Every time."*
  with a rotating word — **Cleaning / Hygiene / Catering**.
- **Subhead:** *"Built for businesses that can't afford to run out. Reliable
  supply, competitive pricing and real personal service — so managing essentials
  stops being a problem you have to think about."*
- **Primary CTA:** *"Apply for Trade Pricing"* → `/enquire-about-trade-pricing/`
- **Secondary CTA:** *"Browse Products"* → `/shop/`
- **Trust metrics bar** (verbatim — do not substitute):
  `15+` Years experience · `Leading` Brands only · `Fast` Reliable delivery ·
  `Real` Personal service

### 4. Shop by Industry — 3×2 grid
| Label | URL |
|---|---|
| Facilities Management | `/facilities-management/` |
| Education & Schools | `/educational-institutions/` |
| Childcare | `/childcare/` |
| Aged Care & Health | `/healthcare-medical/` |
| Hospitality & Catering | `/hospitality-catering/` |
| Professional Cleaners | `/professional-cleaners/` |

Strongest section on the live site. Keep its prominence.

### 5. Why Businesses Choose Us — 4 value props
Eyebrow: *"Why Businesses Choose Us"* · Heading: *"A Supplier You Can Actually Rely On"*

1. **Never run out** — Priority supply and reliable delivery so your team always
   has what they need.
2. **Trusted brands** — Only leading, reputable brands — we're selective so you
   don't have to be.
3. **Real advice** — We help you find products that reduce costs and improve
   efficiency for your team.
4. **True partner** — 15+ years experience. Personal service from people who know
   your industry.

(Verbatim. Do not rewrite.)

### 6. Best Sellers — 6 product cards
**Rule: no review stars or rating figures.**

| Product | Category | Price |
|---|---|---|
| Agar Fast Glass Spray / Wipe Window Cleaner | Cleaning Chemicals | From $13.37 |
| SCOTT® 5741 Toilet Tissue, White 2 Ply, 48 Rolls/Case | Bathroom Supplies | $52.97 |
| KLEENEX® 4456 Optimum Hand Towel, 20 Packs/Case | Bathroom Supplies | $83.71 |
| Kleenex® 78922 Foam Skin Cleanser 1L, 6 Cartridges/Case | Bathroom Supplies | $119.08 |
| Sabco 350g UltraClean Microfibre Round Mop | Janitorial Supplies | From $19.60 |
| Sabco Black Nitrile Disposable Gloves 1000PK | Gloves & PPE | From $8.91 |

Variant products ("From $X") → *"Select options"*; fixed-price → *"Add to cart"*.
Visual only, no cart logic.

### 7. Trade Account Band — full-width dark
Eyebrow: *"Business & Trade Accounts"*
Heading: *"Are you a business? You should be paying less."*
Body: *"We offer wholesale pricing, bulk discounts and priority supply to business
customers. Get in touch and we'll set up your account with pricing that works for
your volume."*
CTAs: *"Apply Online for Trade Pricing"* · *"Call (03) 9708 2893"*

### 8. Brand Marquee
Continuous horizontal scroll of supplier logos. Pause on hover.

### 9. Testimonials — these three only
1. **Campbell Sanders** — Facilities Supervisor, Haileybury College
2. **Edward Baxter** — Buildings & Grounds Supervisor, Brighton Haileybury College
3. **Shreya Dhariya** — Inventory Coordinator, Alpha Corporate Property Services

### 10. FAQ Accordion — 6 items
Delivery areas and timeframes (1–3 business days Melbourne metro) · free delivery
threshold ($250 + GST) · trade account application and approval (1 business day) ·
industries supplied · Safety Data Sheets availability · returns policy.

Do not invent payment methods, order minimums or warehouse pickup.

### 11. Industry Insights — 3 blog cards
1. *Why SC Johnson Professional is the Leader in Foaming Hand Soap*
2. *Your One-Stop Supplier for Kimberly-Clark Professional Products in Australia*
3. *How to Reduce Consumable Costs in Your Business*

Plus *"View all articles"* → `/news-articles/`.

### 12. Final CTA + Footer
**Closing CTA:** *"Ready to sort your supplies once and for all?"* — *"Browse our
full range online or get in touch to discuss trade pricing and account setup for
your business."* Two buttons: trade pricing · browse all products.

**Footer columns:**
- **Contact:** (03) 9708 2893 · sales@a1supplies.com.au ·
  Factory 17/13 Gateway Drive, Carrum Downs VIC 3201 · Mon–Fri 8am–4pm
- **Quick Links:** Home · About Us · Our Products · Shop by Industry ·
  Shop by Brand · Contact Us
- **Information:** FAQs · Safety Data Sheets · News & Articles ·
  Shipping & Returns · Terms & Conditions · Privacy Policy · My Account

---

## 5. Live-site issues already fixed — verify, don't redo
1. Page `<title>` was literally "supplies" → real title + meta description.
2. ~200-item mega menu → 9 clean top-level categories.
3. Hero "Browse Products" CTA pointed at `/my-account/` → now `/shop/`.
4. "0 out of 5" stars on every product → removed entirely.
5. Placeholder testimonial recommending an unrelated company → excluded.
6. Theme-vendor (`themepanthers.com`) demo links in mobile menu → removed.
7. Footer Privacy Policy pointed at a product category → now `/privacy-policy/`.
8. Delivery threshold and 1–3 day dispatch buried in FAQ → surfaced in hero.

**Confirm each of these is genuinely true in the current build. Report any that
regressed.**

---

## 6. Audit checklist
Work through the built page against these before proposing anything.

**Craft**
- Vertical rhythm: is section padding consistent, or ad-hoc per section?
- Type scale: is there a real hierarchy, or three sizes doing nine jobs?
- Optical alignment: do card grids share a baseline? Equal-height rows?
- Measure: is body copy capped around 65–75 characters?
- Colour: how many distinct greys are actually in use? Consolidate.
- Borders and shadows: consistent radius and elevation language, or mixed?

**Authenticity signals** (what makes it read as a real trading business rather
than a template)
- Does anything on the page look like a placeholder? Generic icons, lorem
  spacing, evenly-perfect card copy lengths?
- Do product images sit on a consistent background, or is it a ransom note of
  different white balances and crops?
- Is the logo rendered at a sensible size and pixel density?
- Are the testimonials visually credible without inventing photos or logos?
- Does the phone number look like something you'd click at 4:50pm on a Friday?

**Motion**
- Is hover state distinguishable from focus state?
- Does anything animate on load and delay first paint?
- Is easing consistent, or a mix of `ease`, `linear` and default?
- Marquee: does it loop seamlessly, or visibly jump?

**Responsive**
- 1440 / 1280 / 1024 / 768 / 375 — where does it first look wrong?
- Does the industry grid reflow sensibly, or squash to 3 cramped columns?
- Sticky header height on mobile — how much viewport does it eat?

**Technical**
- CLS from unsized images.
- Total image weight; anything served far larger than displayed.
- Any duplicated or dead CSS.
- Console errors, `alt` gaps, heading-level skips (h1→h3).

---

## 7. Polish Brief — this phase's actual work

The goal is a page that reads as **authentically built for this business**, not
assembled from a template. Improvements should be legible as craft, not as effects.

**In scope**
- Refined spacing, type scale and colour consistency via existing tokens.
- Better image treatment: consistent product-shot backgrounds, correct sizing,
  `aspect-ratio` boxes, `loading="lazy"` below the fold.
- Purposeful micro-interaction: hover, focus, active and disabled states on every
  interactive element; a subtle scroll-reveal at most, `prefers-reduced-motion` aware.
- Real texture in place of flatness — considered borders, restrained elevation,
  a subtle background treatment on dark bands.
- Trust detail that costs nothing and is *true*: the ABN-free footer tidied,
  opening hours legible, phone as a `tel:` link, address as a proper `<address>`.
- Accessibility and performance improvements.

**Out of scope**
- New sections, new pages, new copy, new claims.
- Section reordering without asking.
- Any library, font CDN, or build tooling.
- Decorative effects from the taste-guardrails list in `CLAUDE.md`.

**Definition of done**
Every change traces to a specific audit finding, sits behind a design token,
passes AA contrast, works with a keyboard, and degrades under
`prefers-reduced-motion`.
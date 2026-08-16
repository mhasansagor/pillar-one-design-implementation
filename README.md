# Pillar 1 — Design Implementation

Pixel-accurate, responsive Next.js 14 (App Router) + TypeScript + Tailwind
conversion of the "Jenny, Product Designer" Figma landing page.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

```
app/
  layout.tsx        Root layout, fonts, metadata
  page.tsx           Assembles Navbar + Hero + Services
  globals.css        Tailwind entry + base styles
components/
  Navbar.tsx          Dark rounded pill nav bar
  Hero.tsx            Heading, testimonial, portrait, stats
  Services.tsx         Services section + carousel dots
  ServiceCard.tsx      Individual service card
  types.ts             Shared component types
public/assets/images/  Drop Figma-exported assets here (see README in folder)
```

## Design tokens

Colors, radii, and font roles are centralized in `tailwind.config.ts` under
`theme.extend`. Update the hex values there once you've inspected the exact
Figma tokens — every component pulls from these tokens rather than hardcoded
colors, so a token change updates the whole page.

| Token | Value | Used for |
|---|---|---|
| `ink` | `#111111` | Nav bar, services section background |
| `accent` | `#FF7A1A` | "Jenny", stars, active nav pill, CTAs |
| `cream` | `#F7F5F2` | Hero section background |
| `panel` | `#1B1B1B` | Service card background |

## Breakpoints

Implemented with Tailwind's default responsive prefixes only (no custom media
queries), targeting the Figma frames at:
- Mobile: 375px (base, unprefixed classes)
- Desktop: 1440px (`md:` and up)

## Assets

Export icons and images directly from the Figma file into
`public/assets/images/` using the filenames referenced in the components
(see `public/assets/images/README.md`). Placeholder `<img>` tags are wired
up and ready — no code changes needed once the real files are dropped in.

## Design notes / known deviations

- Exact hex values, spacing scale, and font families are placeholders until
  pulled from the real Figma file — update `tailwind.config.ts` and
  `globals.css` (`--font-display` / `--font-body`) accordingly.
- Mobile nav currently shows a "Menu" button placeholder rather than a full
  drawer; wire up a slide-out menu if the Figma mobile frame specifies one.

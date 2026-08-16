# Pillar 1 - Design Implementation

Responsive Next.js 14, React, TypeScript, and Tailwind CSS implementation of the
Jenny Product Designer Figma landing page.

The project focuses on Pillar 1 only: design implementation, responsive layout,
Figma-exported assets, and accessible navigation. It does not include the
separate authentication/dashboard requirements.

## Tech Stack

- Next.js 14 App Router
- React 18
- TypeScript with strict mode
- Tailwind CSS
- ESLint with `next/core-web-vitals`
- `next/font` for the Urbanist Google font

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

Build for production:

```bash
npm run build
```

On Windows PowerShell, use:

```powershell
npm.cmd run build
```

## Project Structure

```text
app/
  globals.css          Tailwind layers, global CSS variables, shared page helpers
  layout.tsx           Root metadata, font loading, document shell
  page.tsx             Page composition

components/
  Hero.tsx             Hero section presentation
  Navbar.tsx           Desktop/mobile navigation and menu interaction
  ServiceCard.tsx      Reusable service card presentation
  Services.tsx         Services section presentation

data/
  navigation.ts        Navigation demo/content data
  services.ts          Service card demo/content data

types/
  content.ts           Shared content data types

public/assets/images/
  Figma-exported images and SVG icons used by the UI

tailwind.config.ts     Design tokens: colors, font roles, radius tokens
```

## Frontend Architecture

The component layer is presentation-first. Static demo data lives in `data/`
instead of being declared inside components, so components stay reusable and
easy to test or connect to a CMS/API later.

Shared TypeScript interfaces live in `types/content.ts`. Components import the
shape they need from there rather than defining local duplicate types.

Design tokens are centralized in `tailwind.config.ts` and global font variables
are defined in `app/globals.css`. Figma-only measurements that need exact
spacing are kept as Tailwind arbitrary values in the component that owns that
layout.

Assets are stored under `public/assets/images`. Components should reference
local assets from that folder only; do not keep temporary remote Figma asset
URLs in production code.

## Scripts

```bash
npm run dev      # Start local development server
npm run lint     # Run Next.js ESLint checks
npm run build    # Create a production build
npm run start    # Start the built production server
```

## Validation

The current implementation has been checked with:

```powershell
npm.cmd run lint
npm.cmd run build
```

Lint passes with no warnings. Figma-exported visual assets are rendered with
`next/image` using explicit dimensions or fixed wrappers so the original sizing,
cropping, and absolute positioning remain intact.

## Notes

- The page targets the supplied Figma desktop and mobile layouts.
- The mobile menu is stateful, keyboard accessible, and closes when a link is
  selected.
- The design uses Urbanist via `next/font/google`; production builds may need
  network access the first time the font is fetched.

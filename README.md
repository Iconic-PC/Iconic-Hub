# Iconic Hub — Sprint 1

Premium, dark-mode-only landing page for **Iconic Hub**, a technology brand
spanning cybersecurity and web development. Built with React, TypeScript,
Tailwind CSS, shadcn/ui-style primitives, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (defaults to `http://localhost:5173`).

## Scripts

| Command           | Description                                |
| ------------------ | ------------------------------------------- |
| `npm run dev`       | Start the local dev server with hot reload   |
| `npm run build`     | Type-check, then build the production bundle |
| `npm run preview`   | Preview the production build locally         |
| `npm run lint`      | Type-check only (`tsc --noEmit`)             |

## What's in Sprint 1

A single, fully responsive landing page:

- Sticky navbar with logo, nav links, mobile menu, and a "Get in Touch" CTA
- Hero section with an animated grid backdrop, ambient particles, cursor
  parallax, and a custom abstract network illustration (no stock photography)
- "Choose Your Experience" — Cybersecurity vs. Web Development cards with
  glowing hover states
- About preview, Mission statement banner
- Featured Projects preview (3 cybersecurity + 3 web development placeholder
  cards)
- Closing CTA section
- Footer with quick links and social icons

Deliberately **not** built yet, by design: the dedicated Cybersecurity page,
Web Development page, Blog, and individual project case-study pages. The
"Blog" nav item is marked "Soon" rather than linking anywhere, and project
"View Project" buttons are visual placeholders until those routes exist.

## Project structure

```
src/
  components/
    layout/       Navbar, Footer
    sections/     Hero, ChooseExperience, AboutPreview, Mission,
                   FeaturedProjects, CTASection
    shared/       Logo, AnimatedGridBackground, ParticleField,
                   NetworkIllustration, SectionHeading, ProjectCard
    ui/           button, card, badge (shadcn/ui-style primitives)
  data/           Placeholder project data
  hooks/          useMousePosition (cursor parallax)
  lib/            cn() class-merging helper
  pages/          LandingPage (composes all sections)
  types/          Shared TypeScript types
```

## Design tokens

| Token            | Value                    |
| ---------------- | ------------------------- |
| Background       | `#050816`                 |
| Surface          | `#0F172A`                 |
| Primary accent   | `#00BFFF` (Electric Blue)  |
| Secondary accent | `#22C55E` (Emerald Green)  |
| Display font     | Space Grotesk              |
| Body font        | Inter                      |
| Utility/mono font| JetBrains Mono              |

All colors and animation keyframes live in `tailwind.config.ts`.

## Accessibility & performance notes

- Semantic landmarks, skip-to-content link, and visible focus rings throughout
- `prefers-reduced-motion` is respected globally (see `src/index.css`)
- Mobile-first responsive layout, tested down to small phone widths
- SEO meta tags (title, description, Open Graph) in `index.html`

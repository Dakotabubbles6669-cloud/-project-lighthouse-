# Project Lighthouse Architecture

Project Lighthouse is a static, progressively enhanced site designed to live on GitHub Pages now and grow without a rewrite later.

## Foundation

- **Static HTML, CSS, and JavaScript:** fast, searchable, inexpensive, and GitHub Pages compatible.
- **Progressive enhancement:** professional content lives in HTML first. JavaScript adds room selection; the site is still usable without it.
- **One room registry:** `content.js` keeps permanent rooms, active work, and archive objects in one reusable data shape.
- **Reusable interaction:** one shared detail panel lets a visitor explore any room. New projects change content, not the site structure.

## Content rules

Every permanent room owns an `active` space, an `archive` space, and one real action. New work goes into its existing room. A new room exists only for a genuinely new discipline.

## Interaction rules

- Links navigate; buttons only update information on the page.
- The selected room is announced to assistive technology.
- Keyboard focus and reduced-motion preferences are respected.
- Resume, projects, skills, and contact stay visible; immersion never hides essentials.

## Asset layout

```
assets/images/    approved visual art
assets/documents/ resume and professional files
assets/audio/     approved music previews
assets/projects/  case-study media and builds
```

Publish web-sized, descriptive, optimized files. Keep source artwork outside the published site where practical.

## Growth path

1. Add approved work to the matching room in `content.js`.
2. Add a case-study page only when a project needs a deeper story.
3. Replace the registry with a content system later without changing the room interface.
4. Add richer room scenes only after the core content and accessibility behavior are proven.

This makes Controlled Chaos structural, not only visual.

# S. Manju Dharshini — Portfolio (v2: Charcoal · Emerald · Copper)

A richer, more animated evolution of the portfolio — same content and
editable architecture, new visual identity: deep charcoal background,
emerald + copper accents, a serif display font (Fraunces) for a premium
feel, an original illustrated avatar, and layered motion (mouse-parallax
hero, scroll progress bar, scrolling skills marquee, staggered reveals).

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Editing content

Just like the previous version — **edit `src/data.js` only.** It contains
your profile info, About text, skills, projects, experience, education,
certifications, and contact links, all with inline comments.

### Adding a real photo

`src/data.js` has a `profile.photo` field, currently `null`. The hero
automatically shows the illustrated avatar while this is `null`. Drop a
real photo into `public/images/` and set:

```js
photo: "/images/your-photo.jpg",
```

...and the hero will use it instead — no component changes needed.

### Adding project screenshots / certificates

Same as before: `public/projects/` and `public/certificates/`, referenced
from the matching arrays in `data.js`. Missing images/links automatically
fall back to clean placeholders — nothing breaks.

## What's different from v1

- **Palette:** charcoal/emerald/copper instead of arctic mint
- **Type:** Fraunces (serif display) + Inter + JetBrains Mono
- **Illustrated avatar:** an original SVG character (not a photo, not any
  real or copyrighted person) shown in the hero, themed to match the site
- **More motion:** mouse-driven parallax in the hero, a scroll progress
  bar, a continuously scrolling skills marquee, floating tech icons, and
  staggered scroll reveals throughout

## Structure

```
src/
  components/     UI components (Navbar, Hero, AvatarIllustration, etc.)
  data.js         ← the file you edit to update content
  App.jsx         Assembles all sections
  styles.css      Design system (charcoal / emerald / copper)
public/
  projects/       Project screenshots
  certificates/   Certificate images/PDFs
  images/         Your real photo, if/when you add one
```


## GitHub Pages deployment

This project is a React + Vite site. Upload the **contents of this `portfolio2` folder**
to the root of your GitHub repository (not the ZIP file itself). The included GitHub
Actions workflow builds the site and deploys the `dist` folder to GitHub Pages.

After pushing to the `main` branch:
1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, select **GitHub Actions**.
4. Open the **Actions** tab and wait for the deployment workflow to finish.
5. Your portfolio will be available from the Pages URL shown by GitHub.

Do not upload `node_modules` or `dist`; the workflow creates `dist` automatically.

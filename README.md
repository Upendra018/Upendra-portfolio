# Upendra Bondala — Portfolio

A single-page portfolio built with React + Vite, with a Three.js node-link
graph animating the hero background.

## Getting started

```bash
npm install
npm run dev       # start the dev server (http://localhost:5173)
npm run build     # production build into dist/
npm run preview   # preview the production build locally
```

## Project structure

```
portfolio-app/
├── index.html                 Vite HTML entry point
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                React root
    ├── App.jsx                 Composes all sections
    ├── data/
    │   └── content.js          All copy & structured content (edit here)
    ├── styles/
    │   └── portfolio.css       Global stylesheet (design tokens as CSS vars)
    ├── hooks/
    │   ├── useReveal.js        Scroll-in fade/slide-up animation
    │   └── useScrollSpy.js     Highlights the active nav link on scroll
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Hero3D.jsx           Three.js background scene
        ├── TiltCard.jsx         Hover-tilt wrapper used by project cards
        ├── Highlights.jsx       "How I Work"
        ├── Skills.jsx
        ├── Research.jsx
        ├── Projects.jsx
        ├── Education.jsx
        ├── Strengths.jsx
        ├── Footer.jsx
        └── BackToTop.jsx
```

## Editing content

Everything you'd normally want to change — name, roles, projects, skills,
education, contact links — lives in `src/data/content.js`. Components read
from there, so you shouldn't need to touch JSX for text edits.

## Design tokens

Colors, fonts, spacing, etc. are defined as CSS custom properties at the top
of `src/styles/portfolio.css` under `.pf{ ... }` — change a value there to
retheme the whole site.

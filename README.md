# Tuan Thanh — Creative Developer Portfolio V3

React + Vite + GSAP + Lenis one-page portfolio, prepared for GitHub Pages.

## Portfolio content

- The uploaded transparent portrait is now installed at `public/assets/photos/profile.png`.
- The portfolio presents the 2024 mobile social network and job-search graduation project and the 2023 Flutter/Lumen technology-store project.
- The phone artwork uses the original 1480 × 2800 transparent mockups from `tailieu`. The whole mockup is shown in both the hero and selected-work section without cropping.
- Graduation, award and conference photos and four real certificates are used in their matching sections.
- Project, journey and certificate content is maintained in `src/data/content.js`.

## Run

```bash
npm install
npm run dev
```

## GitHub Pages

The repository is assumed to be called `portfolio`.

If the repository has another name, change `base` in `vite.config.js`:

```js
base: "/YOUR-REPOSITORY-NAME/"
```

Then push to `main`. The included GitHub Actions workflow builds `dist` and deploys GitHub Pages.

## Customize

- Project data: `src/data/content.js`
- Hero: `src/sections/Hero.jsx`
- Phone component: `src/components/PhoneMockup.jsx`
- All styling: `src/styles/global.css`
- Assets: `public/assets/`


## Deployment note
The portrait uses `import.meta.env.BASE_URL` and explicit intrinsic dimensions. The Vite base path is `/portfolio/`; update it if the GitHub repository uses another name.

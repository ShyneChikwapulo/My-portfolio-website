# Portfolio Website

My personal portfolio: a single-page React site covering my background, experience and selected projects.

**Live site:** <https://shine-chikwapulo.netlify.app>

<!-- Screenshot: add docs/screenshots/home.png and uncomment
![Portfolio home](docs/screenshots/home.png)
-->

## What's in it

- Hero, about, experience, projects and contact sections.
- Data-driven project cards (`src/data/projects.js`) with live demo and GitHub links.
- Downloadable resume (`public/Shine-Chikwapulo-Resume.pdf`).
- Aqua theme driven by CSS variables in `src/App.css`.
- Scroll animations with AOS.
- SEO: meta and Open Graph tags and JSON-LD in `public/index.html`, plus `sitemap.xml` and `robots.txt`.
- Deployed on Netlify.

## Tech stack

React 18 (Create React App), React Router 6, AOS, CSS.

## Getting started

**Prerequisites:** Node.js 18+ and npm.

```bash
git clone https://github.com/ShyneChikwapulo/My-portfolio-website.git
cd My-portfolio-website
npm install
npm start        # http://localhost:3000
npm run build    # production build in /build
```

## Updating content

- **Projects:** edit `src/data/projects.js`. Screenshots go in `public/projects/`.
- **Resume:** replace `public/Shine-Chikwapulo-Resume.pdf`.
- **Colours:** change the variables at the top of `src/App.css`.

## Roadmap

- Add Resume Studio once it's ready to show
- Add screenshots for The Butcher's Mermaid and African Nations League
- Move from Create React App to Vite
- Add basic tests

## Author

Shine Chikwapulo · [LinkedIn](https://www.linkedin.com/in/shine-chikwapulo-741b20265/) · [GitHub](https://github.com/ShyneChikwapulo)
# Portfolio Website

My personal portfolio: a single-page React site covering my background, experience and selected projects.

**Live site:** <https://shine-chikwapulo.netlify.app>

<!-- Screenshot: add docs/screenshots/home.png and uncomment
![Portfolio home](docs/screenshots/home.png)
-->

## What's in it

- Sections for hero, about, experience, work and contact.
- Scroll animations with AOS.
- SEO setup: meta and Open Graph tags (react-helmet-async), JSON-LD structured data, `sitemap.xml` and `robots.txt`.
- Deployed on Netlify.

## Tech stack

React 18 (Create React App), React Router 6, react-helmet-async, AOS, CSS.

## Getting started

**Prerequisites:** Node.js 18+ and npm.

```bash
git clone https://github.com/ShyneChikwapulo/My-portfolio-website.git
cd My-portfolio-website
npm install
npm start        # http://localhost:3000
npm run build    # production build in /build
```

## Project structure

```text
public/        index.html, sitemap.xml, robots.txt, static assets
src/
  components/  Navbar, HeroSection, AboutMe, Experience, Project, Contact, Credit
  App.js
```

## Roadmap

- Add ML Advisor, Inkrepublik and The Butcher's Mermaid to the projects section
- Update the contact section's availability text
- Add a downloadable CV
- Move from Create React App to Vite
- Add basic tests

## Author

Shine Chikwapulo · [LinkedIn](https://www.linkedin.com/in/shine-chikwapulo-741b20265/) · [GitHub](https://github.com/ShyneChikwapulo)

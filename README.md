# Md. Sifatul Islam — Portfolio

My personal developer portfolio built with React, Vite, Tailwind CSS, Framer Motion, and Three.js.

## Live Website

[https://my-portfolios-jade-one.vercel.app/](https://my-portfolios-jade-one.vercel.app/)

## Features

- Responsive portfolio sections
- Dark and light mode
- Training, skills, projects, achievements, education, and gallery
- Interactive 3D hero, globe, and photo gallery
- Contact form integration with EmailJS

## Run Locally

```bash
npm install
npm run dev
```

### Contact form (EmailJS)

Copy `.env.example` to `.env` and fill in the three `VITE_EMAILJS_*` keys
(also add them in Vercel → Project → Settings → Environment Variables).
Without them the form opens the visitor's mail app instead.

Create a production build with:

```bash
npm run build
```

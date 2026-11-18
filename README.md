# Asmima Anwer Akhi - Portfolio

A cinematic personal portfolio showcasing Asmima's background, projects, skills, and experience. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Portfolio Sections

- **Hero** - Full-screen introduction with responsive navigation and a custom banner image.
- **About** - Biography, education, highlights, and an interactive portrait card.
- **Projects** - Scroll-based showcase of CampusCart, Talkora, Maison Bistro, and Agency Website.
- **Skills** - Technical skills grouped by category.
- **Experience** - Animated education and experience timeline.
- **Contact** - Email and social links with a contact form interface.

## Tech Stack

| Area | Technology |
| --- | --- |
| UI | React 19, TypeScript |
| Build | Vite 8 |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion |

## Getting Started

### Requirements

- Node.js 20.19+ or 22.12+
- npm

### Install and run

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

### Build and preview

```bash
npm run build
npm run preview
```

### Lint

```bash
npm run lint
```

## Updating Portfolio Content

- **Hero banner:** Replace the image in `public/videos/` and keep its filename in sync with the image source in `src/components/HeroSection.tsx`.
- **About portrait:** Replace the image imported by `src/components/AboutSection.tsx`. Adjust the image's `object-position` utility if the crop needs repositioning.
- **Projects:** Edit the `projects` array in `src/components/ProjectsSection.tsx`. The repository and demo URLs currently use placeholders; update them before publishing.
- **Skills:** Edit the skill groups in `src/components/SkillsSection.tsx`.
- **Experience:** Edit the timeline entries in `src/components/ExperienceSection.tsx`.
- **Contact details:** Update the email and social URLs in `src/components/ContactSection.tsx` and `src/components/HeroSection.tsx`.

## Contact Form Note

The contact form currently displays a success state in the browser, but it does not send or store submissions. Connect it to an email service or backend before relying on it to receive messages.

## Project Structure

```text
public/
  videos/                 Hero banner image
src/
  assets/                 Portfolio images and other assets
  components/             Page sections and reusable components
  App.tsx                 Main page composition
  main.tsx                Application entry point
index.html                HTML document
package.json              Dependencies and scripts
vite.config.ts            Vite configuration
```

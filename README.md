# Casual Harmony

A modern, cinematic React website for **Casual Harmony** — Rutgers' premier all-male a cappella group.

## Tech Stack

- **React** with **Vite**
- **Tailwind CSS** (dark theme, clean layout)
- **Framer Motion** animations
- **EmailJS** for contact form submissions

## Features

- Smooth cinematic scroll animations
- Sticky navbar that turns solid on scroll
- Responsive layouts (desktop + mobile)
- Members page with board members emphasized
- Booking form powered by EmailJS

## Getting Started

### Install dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

### Production build

```bash
npm run build
```

## Configure EmailJS

Copy `.env.example` to `.env` and fill in your EmailJS credentials:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Deploying

This project is ready to deploy to Vercel or any static hosting that supports Vite builds.

1. Push to your repo.
2. Connect the repo in Vercel.
3. Set the environment variables from `.env` in the Vercel dashboard.
4. Build command: `npm run build` and output directory: `dist`.

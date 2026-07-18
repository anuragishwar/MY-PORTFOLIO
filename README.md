# 🚀 Anurag Kumar Ishwar — Portfolio

An ultra-modern, high-performance personal portfolio website built with the latest **Next.js 16 (Turbopack)** and **Tailwind CSS v4**. It features a futuristic cyberpunk dark theme with glowing neon animations, designed to showcase projects and expertise in Full-Stack Development and Artificial Intelligence.

---

## 🌐 PREMIUM LIVE PRODUCTION DEPLOYMENT

Aap niche diye gaye premium badge par click karke is cyber-portfolio ka live demonstration dekh sakte hain:

[![Live Demo](https://img.shields.io/badge/LIVE_DEMO-anuragishwarportfolio.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white&labelColor=6A0DAD&color=00FFFF&boxShadow=0_0_15px_#00FFFF)](https://anuragishwarportfolio.vercel.app)

> **💡 Quick Link:** [https://anuragishwarportfolio.vercel.app](https://anuragishwarportfolio.vercel.app)

---

## 🛠️ Tech Stack & Architecture

- **Framework:** Next.js 16.2.10 (App Router)
- **Compiler:** Turbopack (Blazing fast hot reloads)
- **Styling:** Tailwind CSS v4 (Using `@tailwindcss/postcss` architecture)
- **Deployment Platform:** Vercel (Edge-optimized infrastructure)
- **Icons:** Lucide React

---

## ✨ Features

- 🌌 **Cyberpunk Dark Aesthetics:** Immersive dark violet layout with custom ambient pulsing neon gradients (`blur-xl` and custom animations).
- 🎨 **Dynamic Interactions:** Clean typography mixed with hover effects like smooth card expansions and clean profile photo transitions.
- 💻 **Modular Structure:** Built with clean React hooks and strictly componentized code for fast scalability.
- 📱 **Fully Responsive:** Tailored layout matrices seamlessly rendering from mobile screens up to 4K displays.

---

## 📁 Project Structure

```text
anurag-portfolio/
├── app/
│   ├── components/
│   │   └── Portfolio.tsx     # Main portfolio sections (Hero, Skills, Projects)
│   ├── globals.css           # Global layout & Tailwind v4 `@import` setup
│   ├── layout.tsx            # Root wrapper
│   └── page.tsx              # Application entryway
├── public/
│   └── profile.png           # Profile headshot rendered inside the neon shield
├── next.config.ts            # Core Next.js configuration
├── postcss.config.mjs        # Tailored PostCSS pipeline for Tailwind v4
└── tailwind.config.ts        # Content tracking matrix

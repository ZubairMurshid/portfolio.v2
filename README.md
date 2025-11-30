# Zubair Murshid - Premium Portfolio

A futuristic, multi-page portfolio built with Next.js 14, Tailwind CSS, and Framer Motion.

## 🚀 Getting Started

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Run Development Server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser.

## 🛠 Project Structure

*   `app/` - Next.js App Router pages and API routes.
*   `components/` - Reusable UI components (Hero, NavBar, RadarChart, etc.).
*   `lib/` - Types and utility functions.
*   `public/` - Static assets (CV, images).

## ✨ Key Features

*   **Particle Canvas:** Interactive background in `components/ParticleCanvas.tsx`.
*   **Radar Chart:** Responsive HTML5 Canvas chart in `components/RadarChart.tsx`.
*   **Theme System:** Dark/Light mode persisting to local storage.
*   **Animations:** Powered by Framer Motion.

## 📝 Customization

1.  **Update Content:** Edit texts in `app/page.tsx`, `app/about/page.tsx`, etc.
2.  **Update CV:** Place your PDF in `public/cv.pdf`.
3.  **Deploy:** Push to GitHub and import project into Vercel.

## ⚠️ Notes

The `Contact` form uses a mock API route (`app/api/contact/route.ts`). To make it functional, integrate with Resend or a similar email service provider.

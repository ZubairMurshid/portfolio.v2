/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Safety fallback
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        // Map to variables defined in app/layout.tsx
        sans: ['var(--font-space)', 'sans-serif'],
        display: ['var(--font-exo)', 'sans-serif'],
      },
      colors: {
        bg: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          tertiary: 'var(--bg-tertiary)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
        accent: {
          blue: 'var(--accent-blue)',
          darkBlue: 'var(--accent-dark-blue)',
          navy: 'var(--accent-navy)',
        },
      },
      boxShadow: {
        neon: 'var(--neon-glow)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        bounce: 'bounce 2s infinite',
        pulse: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
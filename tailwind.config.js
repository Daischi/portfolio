/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background))',
        'text-primary': 'rgb(var(--text-primary))',
        'text-secondary': 'rgb(var(--text-secondary))',
        accent: {
          DEFAULT: 'rgb(var(--accent))',
          hover: 'rgb(var(--accent-hover))',
        },
      },
      backgroundColor: {
        'nav': 'rgb(var(--nav-bg))',
        'card': 'rgb(var(--card-bg))',
      },
      borderColor: {
        'card': 'rgb(var(--card-border))',
      },
    },
  },
  plugins: [],
}
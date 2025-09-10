/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Lato', 'sans-serif'],
      },
      colors: {
        'brand-dark': '#1a1a1a',
        'brand-light': '#f5f5f4',
        'brand-gold': '#d4af37',
        'brand-burgundy': '#800020',
      },
    },
  },
  plugins: [],
}

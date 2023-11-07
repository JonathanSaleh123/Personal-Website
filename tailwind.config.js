/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter', 'serif'],
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "white-pattern": "url('/src/assets/light.jpg')",
      },
    },
  },
  plugins: [],
}


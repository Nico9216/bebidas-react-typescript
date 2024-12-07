/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { //configuro mis clases personalizadas
    extend: {
      backgroundImage:{
        "header" : "url('/bg.jpg')" //La clase quedaria bg-header
      }
    },
  },
  plugins: [],
}


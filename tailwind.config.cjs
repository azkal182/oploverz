/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // false or 'media'
    mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            inter: ["Inter", "sans-serif"],
           },
    },
  },
  plugins: [],
}

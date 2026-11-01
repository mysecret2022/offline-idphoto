/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        idblue: '#438EDB',
        idred: '#D9001B',
        idwhite: '#FFFFFF',
        idgray: '#F3F4F6'
      }
    },
  },
  plugins: [],
}

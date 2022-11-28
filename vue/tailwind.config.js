/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        blackMode: {
          first: '#171717'
        },
        lightNode: {
          first: '#f4f1e9'
        },
        lightGreen: {
          first: "#f4f1d9"
        },
        DarkGreen:{
          first: "#c3c0c0"
        },
        Browen: {
          first: "#c9c4c4"
        }
      }
    },
  },
  plugins: [],
}

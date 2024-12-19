/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, 
  content: [],
  theme: {
    extend: {
      colors :{
        "primary" : "#42B883",
        "light" : "#fefefe",
        "dark" : "#121212",
        "dark-2" : "#212121",
        "dark-3" : "#222",
        "border" : "#3c3c3c"
      }
    },
  },
  plugins: [],
}


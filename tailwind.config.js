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
        "light-2" : "#efefef",
        "dark" : "#111",
        "dark-2" : "#1A1A1A",
        "dark-3" : "#222",
        "border" : "#363636"
      }
    },
  },
  plugins: [],
}


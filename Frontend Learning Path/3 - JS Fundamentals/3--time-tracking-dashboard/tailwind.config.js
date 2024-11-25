/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        fontFamily: {
          Rubik: ["Rubik", 'sans-serif'],
        },
        colors: {
          'black': '#0d1323',
          'blue': '#1e204b',
          'des-blue': '#34397b',
          'burple': '#5746ea',
          'orange': '#fe8b64',
          'babyblue': '#56c2e6',
          'red': '#ff5e7d',
          'green': '#4ad082',
          'purple': '#7335d2',
          'yellow': '#f1c65a',
          'light': '#bdc1ff',
          'dark': '#6f76c8',
        },
    },
   
  },
  plugins: [
    require('tailwindcss-animated'),
    require('@tailwindcss/gradients')
  ],
}


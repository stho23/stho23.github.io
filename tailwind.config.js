/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'phone': '360px',
      },
      colors: {
        'teal': '#9AFFE1',
        'primary': '#495154',
      },
      fontFamily: {
        'metro': ['metrophobic', 'sans-serif'],
        'raleway': ['raleway', 'sans-serif'],
      },
      rotate: {
        '11': '11deg',
      }
    },
  },
  plugins: [],
}


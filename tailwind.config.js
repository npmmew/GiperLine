/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'max': '650px'},
      'md': {'max': '1024px'},
    },
    container: {
      center: true
    },
    extend: {},
  },
  plugins: [],
}


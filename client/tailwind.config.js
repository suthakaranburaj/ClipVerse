/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom600': {'max': '766px'}, // Custom media query
      },
    },
  },
  plugins: [],
}


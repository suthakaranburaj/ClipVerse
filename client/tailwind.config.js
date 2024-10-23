/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom600': {'max': '766px'}, // Custom media query
        'custom500': {'max':'500px'},
        'custom1024':{'max':'1024px'},
        'custom766':{'max':'766px'},
        'custom360':{'max':'360px'},
      },
    },
  },
  plugins: [],
}


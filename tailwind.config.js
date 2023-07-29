/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    fontFamily: {
      'overpass': ['Overpass'],
    },
    extend: {
      colors: {
        'dark-blue': 'hsl(216, 12%, 8%)',
        'dark-blue-low': 'hsla(216, 12%, 8%, 0.1)',
        'dark-grey': 'hsl(213, 19%, 18%)',
        'medium-grey': 'hsla(216, 12%, 54%, 0.1)',
        'light-grey': 'hsl(217, 12%, 63%)',
        'orange-muda': 'hsl(25, 97%, 53%)',
      }
    },
  },
  plugins: [],
}


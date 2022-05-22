module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'main':'hsl(218, 28%, 13%)',
        'dark':'hsl(217, 28%, 13%)',
        'footer':'hsl(216, 53%, 9%)',
        'testimonial':' hsl(219, 30%, 18%)',
        'intro':'hsl(217, 28%, 15%)'
      },
      zIndex: {
        '2': '2',
      },
      spacing: {
        '34px': '34rem',
        'responsive':'20rem',
        '26':'26rem',
        '28':'35rem',
        '47':'43rem',
        'small': '0.1rem',
        'footer':'28rem'
      }

    },
  },
  plugins: [],
}
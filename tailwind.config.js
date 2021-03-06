module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: '1.5rem',
    },
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        serif: ['Bodoni Moda', 'sans-serif'],
      },

      colors: {
        primary: '#131313',
        secondary: '#C79B4D'
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
      translate: ['group-hover'],
      transform: ['group-hover'],
    },
  },
  plugins: [],
}

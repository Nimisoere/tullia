module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: '1.5rem',
    },
    extend: {
      fontFamily: {
        sans: ['Times-LT', 'sans-serif'],
        serif: ['Bodoni Moda', 'sans-serif'],
      },
      colors: {
        primary: '#131313',
        secondary: '#C79B4D'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

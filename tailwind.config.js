module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: '1.5rem',
    },
    extend: {
      fontFamily: {
        serif: ['Great Vibes', 'sans-serif'],
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

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'splash1': "url('./images/splash1.jpg')",
        'splash2': "url('./images/splash2.jpg')",
        'splash3': "url('./images/splash3.jpg')",
        'bgBlue': "url('./images/bg-blue.jpg')",
        'bgGray': "url('./images/bg-gray.png')",
      },
      minHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

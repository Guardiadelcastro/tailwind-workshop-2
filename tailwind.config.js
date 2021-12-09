const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        sky: colors.sky,
      },
      tomato: {
        100: '#fff5f5',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

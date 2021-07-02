module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: {
          light: '#FF8E64',
          dark: '#680000',
          normal: '#B60000',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

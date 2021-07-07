module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          verydark: '#00146c',
          dark: '#002886',
          normal: '#5b63cd',
          light: '#7579e7',
          verylight: '#ded9ff',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

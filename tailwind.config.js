const colors = require("tailwindcss/colors");
const plugin = require('tailwindcss/plugin')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        'xf': '784px'
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      blue: colors.blue,
      orange: colors.orange,
      green: colors.emerald
    },
    screens: {
      'sm': {'max': '783px'},
      'md': {'min': '783px'},
    }
  },
  variants: {
    extend: {},
  },
  plugins: []
}

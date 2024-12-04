const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: '#FF5A5F',
        dark: '#FF385C',
      },
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
      violet: colors.violet,
      green: colors.green,
      pink: colors.pink,
      orange: colors.orange,
      blue: colors.blue,
      cyan: colors.cyan,
      yellow: colors.yellow,
      amber: colors.amber,
      lime: colors.lime,
      emerald: colors.emerald,
      teal: colors.teal,
      sky: colors.sky,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      rose: colors.rose,
    },
    extend: {
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/aspect-ratio'),
  ]
}

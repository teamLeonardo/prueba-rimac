const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        /** light */
        primary: colors.neutral['900'],
        body: colors.white,
        'button-bg': colors.neutral['100'],
        /** dark */
        dark: {
          primary: colors.gray['50'],
          body: colors.neutral['800'],
          'button-bg': colors.neutral['900'],
        },
      },
    },
  },

  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#FF1C44',

          'primary-content': '#ffffff',

          secondary: '#ff00ff',

          'secondary-content': '#160016',

          accent: '#00ff00',

          'accent-content': '#001600',

          neutral: '#ff00ff',

          'neutral-content': '#160016',

          'base-100': '#ffffff',

          'base-200': '#dedede',

          'base-300': '#bebebe',

          'base-content': '#161616',

          info: '#0000ff',

          'info-content': '#c6dbff',

          success: '#00ff00',

          'success-content': '#001600',

          warning: '#00ff00',

          'warning-content': '#001600',

          error: '#ff0000',

          'error-content': '#160000',
        },
      },
    ],
  },
}

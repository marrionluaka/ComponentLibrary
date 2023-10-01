/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        7: '1.75rem'
      },
      transitionProperty: {
        maxHeight: 'max-height',
        height: 'height',
        spacing: 'margin, padding'
      },
      colors: {
        tone: {
          none: '#FEC724',
          white: '#E2C6A7',
          creamWhite: '#C7A786',
          lightBrown: '#A68063',
          brown: '#926241',
          darkBrown: '#654C45'
        }
      }
    }
  },
  variants: {
    extend: {
      opacity: ['disabled']
    }
  },
  plugins: [require('@tailwindcss/forms')]
}

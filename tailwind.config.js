module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      spacing: {
        7: '1.75rem'
      },
      transitionProperty: {
        maxHeight: 'max-height',
        height: 'height',
        spacing: 'margin, padding'
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

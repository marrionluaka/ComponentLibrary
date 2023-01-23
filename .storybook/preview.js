import { configure } from '@storybook/vue3'
import '../src/assets/style.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/)
configure(() => req.keys().forEach((filename) => req(filename)), module)

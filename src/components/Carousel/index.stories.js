import { ref, computed } from 'vue'
import Carousel from './index.vue'

export default {
  title: 'Example/Carousel',
  component: Carousel
}

const Template = args => ({
  template: `
    <Carousel />
  `,

  components: { Carousel },

  setup() {
    return { args }
  }
})

export const Primary = Template.bind({})
Primary.args = {}

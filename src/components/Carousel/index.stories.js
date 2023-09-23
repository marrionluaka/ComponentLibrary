import { ref, computed } from 'vue'
import { faker } from '@faker-js/faker'
import Carousel from './index.vue'

export default {
  title: 'Example/Carousel',
  component: Carousel
}

const Template = args => ({
  template: `
    <Carousel v-bind="args" />
  `,

  components: { Carousel },

  setup() {
    return { args }
  }
})

export const Primary = Template.bind({})
Primary.args = {
  slides: [
    { id: 1, src: faker.image.city(640, 480, true), alt: 'test' },
    { id: 1, src: faker.image.city(640, 480, true), alt: 'test' },
    { id: 1, src: faker.image.city(640, 480, true), alt: 'test' }
  ],
  width: 640,
  height: 480
}

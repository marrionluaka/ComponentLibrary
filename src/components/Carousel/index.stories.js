import { ref, computed } from 'vue'
import { faker } from '@faker-js/faker'
import Carousel from './index.vue'

export default {
  title: 'Example/Carousel',
  component: Carousel,
  argTypes: {
    next: { action: 'next clicked' },
    previous: { action: 'previous clicked' },
    selectPage: { action: 'page selected' }
  }
}

const Template = args => ({
  template: `
    <Carousel
      v-bind="args"
      @next="args.next"
      @previous="args.previous"
      @page-selected="args.selectPage"
    >
      <template #default="{ src, alt }">
        <img :src="src" :alt="alt" />
      </template>
    </Carousel>
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

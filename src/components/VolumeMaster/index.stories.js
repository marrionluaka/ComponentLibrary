import { ref } from 'vue'

import VolumeMaster from './index.vue'

export default {
  title: 'Example/VolumeMaster',
  component: VolumeMaster
}

const Template = args => ({
  template: `
		<VolumeMaster v-bind="args" />
  `,

  components: { VolumeMaster },

  setup() {
    return { args }
  }
})

export const Primary = Template.bind({})
Primary.args = {
  volume: 0.5,
  max: 2
}

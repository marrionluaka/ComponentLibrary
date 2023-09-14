import { ref } from 'vue'

import VolumeMaster from './index.vue'

export default {
  title: 'Example/VolumeMaster',
  component: VolumeMaster
}

const Template = args => ({
  template: `
		<VolumeMaster />
  `,

  components: { VolumeMaster },

  setup() {}
})

export const Primary = Template.bind({})

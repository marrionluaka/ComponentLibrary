import VolumeMaster from './index.vue'

export default {
  title: 'Example/VolumeMaster',
  component: VolumeMaster,
  argTypes: {
    max: {
      control: {
        type: 'number',
        min: 1,
        max: 6
      }
    },
    updateVolume: { action: 'Volume updated' },
    resetVolume: { action: 'Volume reseted' }
  }
}

const Template = args => ({
  template: `
		<VolumeMaster
		  v-bind="args"
		  @update-volume="args.updateVolume"
      	  @reset-volume="args.resetVolume"
		/>
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

import Tooltip from './Tooltip.vue'

export default {
  title: 'Example/Tooltip',
  component: Tooltip
}

const Template = args => ({
  template: `
    <Tooltip v-bind="args">
      <button class="">Hover Me!</button>
    </Tooltip>
  `,

  components: { Tooltip },

  setup() {
    return { args }
  }
})

export const Primary = Template.bind({})
Primary.args = {
  content: 'Close',
  position: 'top'
}

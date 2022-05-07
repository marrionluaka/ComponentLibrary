import Stars from './Stars.vue'

export default {
  title: 'Example/Stars',
  component: Stars,
  argTypes: {
    onClick: {}
  }
}

const Template = args => ({
  template: '<Stars v-bind="args" />',

  components: { Stars },

  setup() {
    return { args }
  }
})

export const Primary = Template.bind({})
Primary.args = {
  color: 'gold'
}

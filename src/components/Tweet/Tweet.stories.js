import Tweet from './Tweet.vue'

export default {
  title: 'Example/Tweet',
  component: Tweet,
  argTypes: {
    onSubmit: {}
  }
}

const Template = args => ({
  template: '<Tweet v-bind="args" @on-tweet="args.onSubmit" />',

  components: { Tweet },

  setup() {
    return { args }
  }
})

export const Primary = Template.bind({})
Primary.args = {
  charLimit: 140
}

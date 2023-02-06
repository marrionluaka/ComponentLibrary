import TweetPost from './TweetPost.vue'

export default {
  title: 'Example/TweetPost',
  component: TweetPost,
  argTypes: {
    onSubmit: {}
  }
}

const Template = args => ({
  template: '<TweetPost v-bind="args" @on-tweet="args.onSubmit" />',

  components: { TweetPost },

  setup() {
    return { args }
  }
})

export const Primary = Template.bind({})
Primary.args = {
  charLimit: 140
}

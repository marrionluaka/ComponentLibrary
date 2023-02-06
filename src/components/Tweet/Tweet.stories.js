import Tweet from './index.vue'
import tweetData from './data'

export default {
  title: 'Example/Tweet',
  component: Tweet
}

const Template = () => ({
  template: `
    <Tweet v-bind="args"></Tweet>
  `,

  components: { Tweet },
})

export const Primary = Template.bind({})
Primary.args = {
  tweet: tweetData
}

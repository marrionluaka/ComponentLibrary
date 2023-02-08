import Tweet from './index.vue'
import tweetData from './data'

export default {
  title: 'Example/Tweet',
  component: Tweet,
  argTypes: {
    onCommentClicked: { action: 'Comment clicked!' },
    onRetweetClicked: { action: 'Retweet clicked!' },
    onLikeClicked: { action: 'Like clicked!' },
    onShareClicked: { action: 'Share clicked!' }
  }
}

const Template = args => ({
  template: `
    <Tweet
      v-bind="args"
      @on-comment-clicked="args.onCommentClicked"
      @on-retweet-clicked="args.onRetweetClicked"
      @on-like-clicked="args.onLikeClicked"
      @on-share-clicked="args.onShareClicked"
    />
  `,

  components: { Tweet },

  setup() {
    return { args }
  }
})

export const Primary = Template.bind({})
Primary.args = {
  tweet: tweetData
}

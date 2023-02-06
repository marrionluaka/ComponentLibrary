import Tweet from './index.vue'
import { DateTime } from 'luxon'

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
  tweet: {
    author: {
      name: 'John Doe',
      username: '@johndoe',
      date: DateTime.now(),
      thumbnail: {
        src: 'https://xsgames.co/randomusers/avatar.php?g=male',
        alt: 'User thumbnail'
      }
    },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum neque sed dui tincidunt, convallis dictum nibh convallis.',
    actions: {
      comments: 1094,
      retweets: 5,
      likes: 8402
    }
  }
}

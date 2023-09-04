import { DateTime } from 'luxon'
import { faker } from '@faker-js/faker'

type Author = {
  name: string
  username: string
  date: string
  thumbnail: {
    src: string
    alt: string
  }
}

type Actions = {
  comments: number
  retweets: number
  likes: number
}

export type Tweet = {
  author: Author
  content: string
  actions: Actions
}

const tweetData: Tweet = {
  author: {
    name: 'John Doe',
    username: '@johndoe',
    date: DateTime.now().toISO(),
    thumbnail: {
      src: faker.image.avatar(),
      alt: 'User thumbnail'
    }
  },
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum neque sed dui tincidunt, convallis dictum nibh convallis.',
  actions: {
    comments: 1094,
    retweets: 5,
    likes: 8402
  }
}

export default tweetData

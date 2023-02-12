import { DateTime } from 'luxon'
import { faker } from '@faker-js/faker'

export default {
  author: {
    name: 'John Doe',
    username: '@johndoe',
    date: DateTime.now(),
    thumbnail: {
      src: faker.image.avatar(),
      alt: 'User thumbnail',
    },
  },
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum neque sed dui tincidunt, convallis dictum nibh convallis.',
  actions: {
    comments: 1094,
    retweets: 5,
    likes: 8402
  }
}
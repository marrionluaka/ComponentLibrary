import { faker } from '@faker-js/faker'
import type { Message } from '../entities/chat'

const user1: Message['user'] = {
  username: faker.internet.userName(),
  thumbnail: {
    src: faker.image.avatar(),
    alt: faker.image.avatar(),
  },
  isOnline: true
}

const user2: Message['user'] = {
  username: faker.internet.userName(),
  thumbnail: {
    src: faker.image.avatar(),
    alt: faker.image.avatar(),
  },
  isOnline: true
}

export default [
  {
    id: 0,
    user: user1,
    messages: [
      { type: 'text', content: 'Hey! Need to talk to you urgent, are you free?', createdAt: new Date(faker.date.recent()).toISOString() },
      { type: 'text', content: 'Hello, are you there?', createdAt: new Date(faker.date.recent()).toISOString() },
    ]
  },
  {
    id: 1,
    user: user2,
    messages: [
      { type: 'text', content: "Hmm, Can't focus...", createdAt: new Date(faker.date.recent()).toISOString() },
    ]
  },
]

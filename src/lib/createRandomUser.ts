import { faker } from '@faker-js/faker'
import { User } from '../entities/user'
import getRandomNumber from './getRandomNumber'

export default function generateRandomUsers(length: number): User[] {
  return Array.from({ length }).map(() => createRandomUser())
}

export function createRandomUser(): User {
  return {
    username: faker.internet.userName(),
    thumbnail: {
      src: faker.image.avatar(),
      alt: faker.image.avatar(),
    },
    isOnline: getRandomNumber() % 2 === 0
  }
}

import { set, lensPath } from 'ramda'
import { faker } from '@faker-js/faker'

import type { User } from '../entities/user'
import getRandomNumber from './getRandomNumber'
import type { Message, MessageType } from '../entities/chat'

export default function createNewTextMessage(messagesData: Message[], message: string) {
  const newMessage: MessageType  = {
    type: 'text',
    content: message,
    createdAt: new Date(faker.date.recent()).toISOString()
  }
  const messageId = getRandomNumber()
  const lastIndex = messagesData.length - 1
  const lastMessage = messagesData[lastIndex]

  if (lastMessage.id === messageId) {
    const messagesLens = lensPath([lastIndex, 'messages', lastMessage.messages.length])
    return set(messagesLens, newMessage, messagesData)
  }

  return messagesData.concat({
    id: messageId,
    user: messagesData.find(x => x.id === messageId)?.user as User,
    messages: [newMessage]
  })
}

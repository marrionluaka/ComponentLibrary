import { User } from "./user"

type TextType = {
  type: 'text'
  content: string
}

type GIFType = {
  type: 'gif'
  src: string
}

type VideoType = {
  type: 'video'
  src: string
}

export type MessageType = (TextType | GIFType | VideoType) & { createdAt: string }

export type Message = {
  id: number
  user: User
  messages: MessageType[]
}

type Thumbnail = {
  src: string
  alt: string
  size?: string
}

export type User = {
  thumbnail: Thumbnail
  username: string
  isOnline: boolean
}

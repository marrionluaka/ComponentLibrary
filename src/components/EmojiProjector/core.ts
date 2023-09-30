import skinTone from 'skin-tone'

export type Tone = 'none' | 'white' | 'creamWhite' | 'lightBrown' | 'brown' | 'darkBrown'
export const emojis = ['💖', '👍', '🎉', '👏', '😂', '😮', '😢', '🤔', '👎'] as const

export function getNewEmojis(existingEmojis: typeof emojis, tone: Tone): typeof emojis {
  return existingEmojis.map(emoji => skinTone(emoji, tone)) as unknown as typeof emojis
}

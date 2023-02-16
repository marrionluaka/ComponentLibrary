import { DateTime } from 'luxon'

export default function formatWithPattern(dateTime: string, pattern: string = 'MMMM') {
  return DateTime.fromISO(dateTime).toFormat(pattern)
}

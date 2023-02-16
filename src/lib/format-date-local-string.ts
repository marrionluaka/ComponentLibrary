import { DateTime } from 'luxon'

export default function formatToLocalString(dateTime: string) {
  return DateTime.fromISO(dateTime).toLocaleString(DateTime.TIME_24_SIMPLE)
}

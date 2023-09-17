export default function validateMaxVolumeBounds(maxVolume: number) {
  const volume = Math.round(maxVolume)
  const inBounds = volume >= 1 && volume <= 6

  if (!inBounds) {
    throw Error('Volume has to be between one and six.')
  }

  return true
}

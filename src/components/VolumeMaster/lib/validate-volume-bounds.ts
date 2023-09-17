export default function validateVolumeBounds(volume: number) {
  const roundedVolume = parseFloat(volume.toString(2))
  const inBounds = roundedVolume > 0 && roundedVolume <= 1

  if (!inBounds) {
    throw Error('Volume needs to be between zero and one')
  }

  return true
}

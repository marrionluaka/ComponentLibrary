import validateMaxVolumeBounds from './validate-max-volume-bounds'

describe('validateMaxVolumeBounds specs', () => {
  it.each`
    volume
    ${1}
    ${2}
    ${5}
    ${6}
  `('validates that the volume is within acceptable bounds', ({ volume }) => {
    expect(validateMaxVolumeBounds(volume)).toBeTruthy()
  })

  it('throws an error for invalid volume', () => {
    expect(() => validateMaxVolumeBounds(0)).toThrow()
    expect(() => validateMaxVolumeBounds(7)).toThrow()
  })
})

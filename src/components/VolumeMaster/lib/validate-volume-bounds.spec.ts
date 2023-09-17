import validateVolumeBounds from './validate-volume-bounds'

describe('validateVolumeBounds specs', () => {
  it.each`
    volume
    ${0.1}
    ${0.5}
    ${0.7}
    ${1}
  `('validates that the volume is within acceptable bounds', ({ volume }) => {
    expect(validateVolumeBounds(volume)).toBeTruthy()
  })

  it('throws an error for invalid volume', () => {
    expect(() => validateVolumeBounds(2)).toThrow()
  })
})

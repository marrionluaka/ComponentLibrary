import { expect, vi } from 'vitest'
import { getValue, toCelsius, toFahrenheit } from './temperature-module'

describe('getValue', () => {
  it('returns an empty string when given an invalid value', () => {
    expect(getValue('', vi.fn())).toBe('')
  })

  it('returns a number', () => {
    expect(getValue('11', v => v)).toBe('11')
  })

  it('returns a rounded number to 4 decimal places', () => {
    expect(getValue('11.1234567', v => v)).toBe('11.1235')
  })
})

describe('toCelsius', () => {
  it('converts a given value to celsius', () => {
    expect(toCelsius(32)).toBe(0)
  })
});

describe('toFahrenheit', () => {
  it('converts a given value to fahrenheit', () => {
    expect(toFahrenheit(0)).toBe(32)
  })
})

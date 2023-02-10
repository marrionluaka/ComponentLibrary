export function toFahrenheit(temperature: number) {
  return (temperature * 9) / 5 + 32
}

export function toCelsius(temperature: number) {
  return ((temperature - 32) * 5) / 9
}

export function getValue(value: string, calc: (value: number) => number) {
  const numericValue = Number(value)
  const isValid = !Number.isNaN(numericValue) && Boolean(value)

  return isValid ? formatValue(calc(numericValue)) : ''
}

function formatValue(num: number | string): string {
  return /\.\d{5}/.test(num as string) ? (num as number).toFixed(4) : String(num)
}

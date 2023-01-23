export default function debounce(func: Function, wait: number) {
  let timeoutId: NodeJS.Timer | null = null

  return function (...args: any) {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      // @ts-ignore
      func.apply(this, args)
    }, wait)
  }
}

import { onMounted, onUnmounted, Ref } from 'vue'

export function useClickOutside({
  ref,
  callback
}: {
  ref: Ref<HTMLElement | null>
  callback: (...args: any) => void
}) {
  onMounted(() => window.addEventListener('click', onClickOutside))
  onUnmounted(() => window.removeEventListener('click', onClickOutside))

  function onClickOutside(e: Event) {
    const el = ref.value

    if (!(el === e.target || el?.contains(e.target as HTMLElement))) {
      callback()
    }
  }
}

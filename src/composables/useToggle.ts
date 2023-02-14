import { readonly, ref } from 'vue'

export function useToggle(callback: () => void) {
  const active = ref(false)

  function toggleActive(defaultState?: boolean) {
    callback()
    active.value = defaultState === undefined ? !active.value : defaultState
  }

  return { active: readonly(active), toggleActive }
}

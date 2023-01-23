import { computed, ComputedRef, ref, UnwrapRef } from 'vue'

type RequestPending = {
  state: 'pending'
}

type RequestError = {
  state: 'error'
  error: any
}

export type RequestSuccess<T> = {
  state: 'ok'
  data: T
}

export type RequestState<TSuccess> = RequestPending | RequestError | RequestSuccess<TSuccess>

type UseFetch<TSuccess> = [ComputedRef<RequestState<UnwrapRef<TSuccess>>>, (uri: string) => Promise<void>]

export default function useFetch<TSuccess>(): UseFetch<TSuccess> {
  const reqState = ref<RequestState<TSuccess>>({ state: 'pending' })

  async function setRequestState(uri: string): Promise<void> {
    try {
      const res = await fetch(uri)
      const data = await res.json()

      reqState.value = { state: 'ok', data }
    } catch (error) {
      reqState.value = { state: 'error', error }
    }
  }

  return [computed(() => reqState.value), setRequestState]
}

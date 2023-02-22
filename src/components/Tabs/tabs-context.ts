import { inject, provide, ref, readonly, InjectionKey, Ref, DeepReadonly } from 'vue'

type TabsContext = {
  activeTabID: DeepReadonly<Ref<string>>
  setActiveTabID(id: number | string): void
}

let TabsContextKey = Symbol('TabsContextKey') as InjectionKey<TabsContext>

export function initTabsContext({ defaultTabID }: { defaultTabID: number | string } = { defaultTabID: 0 }) {
  const activeTabID = ref<number | string>(defaultTabID)

  function setActiveTabID(id: number | string) {
    activeTabID.value = id
  }

  provide(TabsContextKey, {
    activeTabID: readonly(activeTabID),
    setActiveTabID
  })
}

export function useTabsContext(component: string): TabsContext | null {
  const context = inject(TabsContextKey, null)

  if (!context) {
    let error = new Error(`<${component} /> must be used within a <Tabs /> component.`)
    if (Error.captureStackTrace) Error.captureStackTrace(error, useTabsContext)
    throw error
  }

  return context
}

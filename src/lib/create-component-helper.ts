import { defineComponent } from "vue"

export default function createComponent(components: any, setup: () => void) {
  return function(template: string) {
    const component = defineComponent({
      template,
      components,
      setup
    })
  
    return component
  }
}

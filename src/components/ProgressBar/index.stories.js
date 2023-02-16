import { ref, computed } from 'vue'
import ProgressBar from './index.vue'

export default {
  title: 'Example/ProgressBar',
  component: ProgressBar
}

const Template = args => ({
  template: `
    <div class="flex flex-col gap-4 max-w-xl">
      <ProgressBar v-bind="args" class="h-2" />

      <ProgressBar v-bind="args">
        {{ clampedValue }}%
      </ProgressBar>

      <ProgressBar :value="percent" :containerClasses="containerClasses" :min="0" :max="100">
        {{ percent }}%
      </ProgressBar>

      <input
        class="w-56"
        type="range"
        min="0"
        max="100"
        value="50"
        id="slider"
        @change="onChange"
      />
    </div>
  `,

  components: { ProgressBar },

  setup() {
    const percent = ref(50)
    const bgColor = ref('bg-teal-400')
    const clampedValue = computed(() => Math.min(Math.max(args.min, args.value), args.max))
    
    function onChange(e) {
      percent.value = Number(e.target.value)
    }

    return {
      args,
      percent,
      clampedValue,
      containerClasses: bgColor,
      onChange
    }
  }
})

export const Primary = Template.bind({})
Primary.args = {
  value: 50,
  min: 0,
  max: 100,
  containerClasses: 'bg-indigo-500'
}

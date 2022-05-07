import Dropdown from './Dropdown.vue'
import { CheckIcon, SelectorIcon } from '@heroicons/vue/solid'

export default {
  title: 'Example/Dropdown',
  component: Dropdown
}

const options = [
  { display: 'Option 1', value: 1 },
  { display: 'Option 2', value: 2 },
  { display: 'Option 3', value: 3 }
]

const Template = args => ({
  template: `<Dropdown v-bind="args" />`,

  components: { Dropdown },

  setup() {
    return { args }
  }
})

export const Primary = Template.bind({})
Primary.args = {
  options
}

const TemplateScope = args => ({
  template: `
    <Dropdown v-bind="args" @on-selected="val => args.currentOption = val">
      <template #currentOption>
        <span class="block truncate">{{args.currentOption}}</span>
        <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </template>

      <template #default="{ option }">
        <div :class="[option.isActive ? 'text-white bg-indigo-600' : 'text-gray-900', 'select-none relative py-2 pl-3 pr-9']">
          <span :class="[option.isSelected ? 'font-semibold' : 'font-normal', 'block truncate']">
            {{ option.display }}
          </span>

          <span v-if="option.isSelected" :class="[option.isActive ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
            <CheckIcon class="h-5 w-5" aria-hidden="true" />
          </span>
        </div>
      </template>
    </Dropdown>
  `,

  components: { Dropdown, CheckIcon, SelectorIcon },

  setup() {
    return { args }
  }
})

export const WithSlotScope = TemplateScope.bind({})
WithSlotScope.args = {
  currentOption: 'Select a custom option',
  options: [...Array(15)].map((x, i) => ({ value: i, display: `Option ${i + 1}` }))
}

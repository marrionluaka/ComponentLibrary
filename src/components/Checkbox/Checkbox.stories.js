import { ref } from 'vue'
import Checkbox from './Checkbox.vue'

export default {
  title: 'Example/Checkbox',
  component: Checkbox
}

const Template = () => ({
  template: `
    <div>
      <div v-for="country in countries" :key="country.id">
        <div class="flex items-center">
          <Checkbox :id="country.id" :name="country.name" :value="country.value" @update:modelValue="onCountrySelected">
            {{ country.name }}
          </Checkbox>
        </div>
      </div>
      <p>Selected Countries: {{ selectedCountries }}</p>
    </div>
  `,

  components: { Checkbox },

  setup() {
    const selectedCountries = ref([])
    const countries = ref([
      { id: 'fr-id', name: 'France', value: 'FR' },
      { id: 'ca-id', name: 'Canada', value: 'CA' },
      { id: 'jp-id', name: 'Japan', value: 'JP' },
      { id: 'ru-id', name: 'Russia', value: 'RU' },
      { id: 'us-id', name: 'United States', value: 'US' }
    ])

    const onCountrySelected = country =>
      (selectedCountries.value = selectedCountries.value.includes(country)
        ? selectedCountries.value.filter(x => x !== country)
        : selectedCountries.value.concat(country))

    return { countries, selectedCountries, onCountrySelected }
  }
})

export const Primary = Template.bind({})

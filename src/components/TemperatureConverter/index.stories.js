import TemperatureConverter from './index.vue'

export default {
  title: 'Example/TemperatureConverter',
  component: TemperatureConverter
}

const Template = args => ({
  template: `
    <TemperatureConverter />
  `,

  components: { TemperatureConverter },
})

export const Primary = Template.bind({})

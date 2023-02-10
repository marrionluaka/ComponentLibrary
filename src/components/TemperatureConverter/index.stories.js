import TemperatureConverter from './index.vue'

export default {
  title: 'Example/TemperatureConverter',
  component: TemperatureConverter
}

const Template = () => ({
  template: `
    <TemperatureConverter />
  `,

  components: { TemperatureConverter },
})

export const Primary = Template.bind({})

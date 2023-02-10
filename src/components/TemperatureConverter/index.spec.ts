import { expect } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import TemperatureConverter from './index.vue'

describe('TemperatureConverter', () => {
  it('converts from celsius to fahrenheit', async () => {
    const wrapper = mount(TemperatureConverter)

    ;(wrapper.findComponent('[data-testid="celsius"]') as VueWrapper).vm.$emit('input', { target: { value: 11 } })
    await wrapper.vm.$nextTick()

    expect((wrapper.find('[data-testid="fahrenheit"]').element as HTMLInputElement).value).toBe('51.8')
  })

  it('converts from fahrenheit to celsius', async () => {
    const wrapper = mount(TemperatureConverter)

    ;(wrapper.findComponent('[data-testid="fahrenheit"]') as VueWrapper).vm.$emit('input', { target: { value: 32 } })
    await wrapper.vm.$nextTick()

    expect((wrapper.find('[data-testid="celsius"]').element as HTMLInputElement).value).toBe('0')
  })
})

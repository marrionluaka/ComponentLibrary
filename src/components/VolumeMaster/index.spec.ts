import { expect } from 'vitest'
import { mount } from '@vue/test-utils'
import VolumeMaster from './index.vue'

describe('VolumeMaster specs', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = mount(VolumeMaster, {
      props: {
        volume: 0.1,
        max: 2
      }
    })
  })

  it('renders a range', () => {
    expect(wrapper.find('[data-test="volume-range"]').exists()).toBeTruthy()
  })

  it('renders the current volume value', () => {
    expect(wrapper.find('[data-test="volume-value"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-test="volume-value"]').text()).toBe('Volume: 10%')
  })

  it('renders max value', () => {})
  it('renders a button for resetting the volume value', () => {})

  it('emits an event on change', () => {})
  it('emits an event on reset', () => {})
  it('renders the current volume value on change', () => {})

  it('validates that the volume is within acceptable bounds', () => {})
  it('throws an error for invalid volume', () => {})
  it('validates that the max volume is within acceptable bounds', () => {})
  it('throws an error for invalid max volume', () => {})
})

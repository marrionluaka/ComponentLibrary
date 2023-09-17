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

  it('renders max value', () => {
    expect(wrapper.find('[data-test="volume-max"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-test="volume-max"]').text()).toBe('200%')
  })

  it('renders a button for resetting the volume value', () => {
    expect(wrapper.find('[data-test="volume-reset"]').exists()).toBeTruthy()
  })

  it('renders a disabled button for resetting the volume value when the volume is not strictly equal to 100', async () => {
    expect(wrapper.find('[data-test="volume-reset"]').element.disabled).toBeTruthy()
  })

  it('the volume range controls the volume display', async () => {
    const volumeRange =  wrapper.find('[data-test="volume-range"]')
    volumeRange.element.value = 25

    await volumeRange.trigger('change')

    expect(wrapper.find('[data-test="volume-value"]').text()).toBe('Volume: 25%')
  })

  it('emits an event on change', async () => {
    const volumeRange =  wrapper.find('[data-test="volume-range"]')
    volumeRange.element.value = 25

    await volumeRange.trigger('change')

    expect(wrapper.emitted('volume-update')[0][0]).toBe('25')
  })

  it('emits an event on reset', () => {})
  it('renders the current volume value on change', () => {})

  it('validates that the volume is within acceptable bounds', () => {})
  it('throws an error for invalid volume', () => {})
  it('validates that the max volume is within acceptable bounds', () => {})
  it('throws an error for invalid max volume', () => {})
})

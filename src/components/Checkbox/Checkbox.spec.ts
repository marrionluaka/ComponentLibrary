import { mount } from '@vue/test-utils'
import Checkbox from './Checkbox.vue'

describe('Checkbox spec', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = mount(Checkbox, {
      props: {
        id: 'country',
        name: 'canada',
        value: 'CA'
      },
      slots: {
        default: 'Canada'
      }
    })
  })

  afterEach(() => wrapper?.unmount())

  it('renders an Checkbox', () => {
    expect(wrapper.find('input[type="checkbox"]').exists()).toBe(true)
  })

  it('renders children.', () => {
    expect(wrapper.html()).toContain('Canada')
  })

  it('displays attributes passed in.', async () => {
    await wrapper.vm.$forceUpdate()

    expect(wrapper.find('input[type="checkbox"]').attributes('id')).toBe('country')
    expect(wrapper.find('input[type="checkbox"]').attributes('name')).toBe('canada')
    expect(wrapper.find('input[type="checkbox"]').element.value).toBe('CA')
  })

  it('emits an "input" event.', async () => {
    await wrapper.find('input[type="checkbox"]').trigger('change')
    expect(wrapper.emitted('update:modelValue')[0][0]).toBe('CA')
  })

  it('defaults to checked on mount', async () => {
    await wrapper.setProps({ isChecked: true })
    expect(wrapper.find('input[type="checkbox"]').element.checked).toBe(true)
  })
})

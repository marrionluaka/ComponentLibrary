import { mount } from '@vue/test-utils'
import Dropdown from './Dropdown.vue'

describe('Dropdown', () => {
  let wrapper: any

  const createWrapper = (opts: any = {}) => {
    wrapper = mount(Dropdown, {
      props: {
        currentOption: 'Option one',
        options: [
          { value: 1, display: 'Option 1' },
          { value: 2, display: 'Option 2' },
          { value: 3, display: 'Option 3' }
        ]
      },
      ...opts
    })
  }

  beforeEach(() => {
    createWrapper()
  })

  afterEach(() => wrapper?.unmount())

  it('renders a dropdown.', () => {
    expect(wrapper.find('[data-test="dropdown"]').exists()).toBe(true)
  })

  it('renders the current option', () => {
    expect(wrapper.find('[data-test="dropdown-selected"]').text()).toBe('Option one')
  })

  it('renders a list of options', () => {
    const html = wrapper.html()

    expect(html).toContain('Option 1')
    expect(html).toContain('Option 2')
    expect(html).toContain('Option 3')
  })

  it('emits an "on-selected" event containing the current item', async () => {
    await wrapper.find('[data-test="dropdown-item-1"]').trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.emitted('on-selected')).toBeTruthy()
    expect(wrapper.find('[data-test="dropdown"]').classes()).not.toContain('open')
    expect(wrapper.find('[data-test="dropdown-selected"]').text()).toBe('Option 1')
  })

  it('renders users custom current option', () => {
    createWrapper({
      slots: {
        currentOption: `
          <span class="block truncate">Option 0</span>
        `
      }
    })

    expect(wrapper.html()).toContain('Option 0')
  })

  it('gives users the ability to render their own list via slot', () => {
    createWrapper({
      slots: {
        default: `
          <template #default="{ option }">
            <div>{{ option.display }} - template </div>
          </template>
        `
      }
    })

    expect(wrapper.html()).toContain('Option 1 - template')
  })

  it('activates the item that is currently being hovered on', async () => {
    createWrapper({
      slots: {
        default: `
          <template #default="{ option }">
            <div :class="{ active: option.isActive }">
              {{ option.display }} - {{ option.isSelected ? 'selected' : 'template' }}
            </div>
          </template>
        `
      }
    })

    await wrapper.find('[data-test="dropdown-item-1"]').trigger('mouseover')
    await wrapper.find('[data-test="dropdown-item-1"]').trigger('click')

    expect(wrapper.html()).toContain('<div class="active">Option 1 - selected</div>')
  })

  it('toggles the dropdown active state.', async () => {
    expect(wrapper.find('[data-test="dropdown"]').classes()).not.toContain('open')

    await wrapper.find('[data-test="dropdown-selected"]').trigger('click')
    expect(wrapper.find('[data-test="dropdown"]').classes()).toContain('open')

    await wrapper.find('[data-test="dropdown-selected"]').trigger('click')
    expect(wrapper.find('[data-test="dropdown"]').classes()).not.toContain('open')
  })

  it('closes the dropdown when a user clicks outside of its element.', async () => {
    await wrapper.find('[data-test="dropdown-selected"]').trigger('click')

    document.body.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    await wrapper.vm.$nextTick()

    expect(wrapper.find('[data-test="dropdown"]').classes()).not.toContain('open')
  })
})

import { mount } from '@vue/test-utils'
import Tooltip from './Tooltip.vue'

describe('Tooltip', () => {
  let wrapper: any
  beforeEach(() => {
    wrapper = mount(Tooltip, {
      props: {
        content: 'Close',
        position: 'top'
      },
      slots: {
        default: `
          <div>
            <button>Click Me!</button>
          </div>
        `
      }
    })
  })

  afterEach(() => wrapper?.unmount())

  it('renders a tooltip', () => {
    expect(wrapper.find('[data-test="tooltip"]').exists()).toBe(true)
    expect(wrapper.find('[data-test="tooltip"]').html()).toContain('Close')
  })

  it('renders children', () => {
    expect(wrapper.html()).toContain('Click Me!')
  })

  it.skip('toggles the display of the tooltip on hover.', async () => {
    await wrapper.find('[data-test="tooltip"]').trigger('mouseover')
    expect(wrapper.find('[data-test="tooltip-content"]').isVisible()).toBe(true)
    expect(wrapper.find('[data-test="tooltip-content"]').classes()).toContain('top')

    await wrapper.find('[data-test="tooltip"]').trigger('mouseleave')
    expect(wrapper.find('[data-test="tooltip-content"]').isVisible()).toBe(false)
  })
})

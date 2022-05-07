import { mount } from '@vue/test-utils'
import AccordionPanel from './AccordionPanel.vue'

describe('AccordionPanel spec', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = mount(AccordionPanel, {
      props: {
        isOpen: true
      },
      slots: {
        default: `
          <template #default>
            Accordion content goes here!
          </template>
        `
      }
    })
  })

  afterEach(() => wrapper?.unmount())

  it('renders an AccordionPanel', () => {
    expect(wrapper.find('[data-test="accordion-panel"]').exists()).toBe(true)
  })

  it('opens the panel', async () => {
    expect(wrapper.html()).toContain('Accordion content goes here!')
    expect(wrapper.find('[data-test="accordion-panel"]').classes()).toContain('active')
  })

  it('closes the panel', async () => {
    await wrapper.setProps({ isOpen: false })
    expect(wrapper.find('[data-test="accordion-panel"]').classes()).not.toContain('active')
  })
})

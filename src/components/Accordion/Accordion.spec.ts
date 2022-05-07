import { mount } from '@vue/test-utils'
import Accordion from './Accordion.vue'

describe('Accordion spec', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = mount(Accordion, {
      props: {
        isOpen: true
      },
      slots: {
        title: '<h2>Title 1</h2>',
        default: `
          <template #default="{ isOpen }">
            I am {{ isOpen ? 'Open' : 'Closed' }}
          </template>
        `
      }
    })
  })

  afterEach(() => wrapper?.unmount())

  it('renders an Accordion', () => {
    expect(wrapper.find('[data-test="accordion"]').exists()).toBe(true)
  })

  it('renders a title slot', () => {
    expect(wrapper.find('[data-test="accordion-title"]').text()).toContain('Title 1')
  })

  it('renders a default title when no title is passed in', () => {
    wrapper = mount(Accordion)
    expect(wrapper.find('[data-test="accordion-title"]').text()).toContain('Accordion Title')
  })

  it('renders a slot', () => {
    expect(wrapper.html()).toContain('I am Open')
  })

  it('renders a default slot when no slot is passed in', () => {
    wrapper = mount(Accordion)
    expect(wrapper.html()).toContain('Accordion Panel')
  })

  it('toggles its panel when clicked', async () => {
    expect(wrapper.html()).toContain('I am Open')

    await wrapper.find('[data-test="accordion-title"]').trigger('click')
    expect(wrapper.html()).toContain('I am Closed')

    await wrapper.find('[data-test="accordion-title"]').trigger('click')
    expect(wrapper.html()).toContain('I am Open')
  })
})

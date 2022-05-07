import { mount } from '@vue/test-utils'
import SearchAction from './SearchAction.vue'

describe('SearchAction specs', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = mount(SearchAction, {
      slots: {
        default: `
          <p>Go to search page</p>
        `
      }
    })
  })

  it('renders a search action', () => {
    expect(wrapper.find('[data-test="search-action"]').exists()).toBe(true)
  })

  it('renders a slot', () => {
    expect(wrapper.html()).toContain('<p>Go to search page</p>')
  })

  it('emits a "click" event', async () => {
    await wrapper.find('[data-test="search-action"]').trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })
})

import { mount } from '@vue/test-utils'
import SearchItem from './SearchItem.vue'

describe('SearchItem specs', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = mount(SearchItem, {
      props: {
        src: 'http://site.com/'
      },
      slots: {
        default: `
          <p>Search result 1</p>
        `
      }
    })
  })

  it('renders a slot', () => {
    expect(wrapper.html()).toContain('<p>Search result 1</p>')
  })

  it('renders a link', () => {
    expect(wrapper.find('[data-test="search-link"]').attributes('href')).toContain('http://site.com/')
  })
})

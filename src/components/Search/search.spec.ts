import { mount } from '@vue/test-utils'
import Search from './index.vue'

jest.mock('lodash/debounce', () => jest.fn(fn => fn))

describe('Search specs', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = mount(Search, {
      props: {
        suggestedResults: [
          { id: 1, value: 'Result 1' },
          { id: 2, value: 'Result 2' },
          { id: 3, value: 'Result 3' }
        ]
      },
      slots: {
        default: `
          <template #default>
            <li>Result 1</li>
          </template>
        `
      }
    })
  })

  it('performs a search', async () => {
    await wrapper.find('[data-test="search"]').trigger('focus')
    await wrapper.find("[data-test='search']").setValue('google search')
    expect(wrapper.find("[data-test='submit']").text()).toContain('Search "google search" in items')

    await wrapper.find("[data-test='submit']").trigger('click')
    expect(wrapper.emitted('on-search')[0]).toEqual(['google search'])
    expect(wrapper.find('[data-test="search-results-content"]').exists()).toBe(false)
  })

  it('emits a "keydown" event for each key stroke', async () => {
    await wrapper.find('[data-test="search"]').setValue('cat')
    await wrapper.find('[data-test="search"]').trigger('keydown')
    await wrapper.vm.$nextTick()

    expect(wrapper.emitted('keydown')[0][0]).toBe('cat')
  })

  it('does not search when the "enter key" is pressed', async () => {
    await wrapper.find('[data-test="search"]').setValue('cat')
    await wrapper.trigger('keydown.enter')

    expect(wrapper.emitted('keydown')).toBeFalsy()
  })

  it('displays suggested results', async () => {
    await wrapper.find('[data-test="search"]').trigger('focus')
    await wrapper.find('[data-test="search"]').setValue('t')

    expect(wrapper.html()).toContain('Result 1')
    expect(wrapper.find('[data-test="search-results"]').exists()).toBe(true)
  })

  it('adds an overlay on focus', async () => {
    await wrapper.find('[data-test="search"]').trigger('focus')
    expect(wrapper.find('[data-test="search-overlay"]').exists()).toBe(true)
  })

  it('updates the search icon on focus', async () => {
    expect(wrapper.find('[data-test="search-magnifying-glass"]').exists()).toBe(true)
    expect(wrapper.find('[data-test="search-arrow"]').exists()).toBe(false)

    await wrapper.find('[data-test="search"]').trigger('focus')

    expect(wrapper.find('[data-test="search-magnifying-glass"]').exists()).toBe(false)
    expect(wrapper.find('[data-test="search-arrow"]').exists()).toBe(true)
  })

  it('displays an "X" button on keydown', async () => {
    await wrapper.find('[data-test="search"]').setValue('t')
    expect(wrapper.find('[data-test="search-close"]').exists()).toBe(true)
  })

  it('clears the search', async () => {
    await wrapper.find('[data-test="search"]').trigger('focus')
    await wrapper.find('[data-test="search"]').setValue('s')
    await wrapper.find('[data-test="search-close"]').trigger('click')

    expect(wrapper.find('[data-test="search-magnifying-glass"]').exists()).toBe(true)
    expect(wrapper.find('[data-test="search-overlay"]').exists()).toBe(false)
    expect(wrapper.find('[data-test="search-arrow"]').exists()).toBe(false)
    expect(wrapper.find('[data-test="search"]').element.value).toBe('')
  })

  it('removes active state on blur', async () => {
    await wrapper.find('[data-test="search"]').trigger('focus')
    expect(wrapper.find('[data-test="search-magnifying-glass"]').exists()).toBe(false)
    expect(wrapper.find('[data-test="search-overlay"]').exists()).toBe(true)
    expect(wrapper.find('[data-test="search-arrow"]').exists()).toBe(true)

    await wrapper.find('[data-test="search"]').trigger('blur')
    expect(wrapper.find('[data-test="search-magnifying-glass"]').exists()).toBe(true)
    expect(wrapper.find('[data-test="search-overlay"]').exists()).toBe(false)
    expect(wrapper.find('[data-test="search-arrow"]').exists()).toBe(false)
  })

  it('displays a loading indicator', async () => {
    await wrapper.setProps({ suggestedResults: [] })
    await wrapper.find('[data-test="search"]').setValue('s')
    await wrapper.find('[data-test="search"]').trigger('keydown')
    await wrapper.vm.$nextTick()

    expect(wrapper.find('[data-test="search-results"]').classes()).toContain('loading')

    await wrapper.setProps({ suggestedResults: [{ id: 1, value: 'Result 1' }] })
    await wrapper.find('[data-test="search"]').setValue('su')
    await wrapper.find('[data-test="search"]').trigger('keydown')
    await wrapper.vm.$nextTick()

    expect(wrapper.find('[data-test="search-results"]').classes()).not.toContain('loading')
  })

  it.skip('hides search results on blur', async () => {
    await wrapper.find('[data-test="search"]').trigger('focus')
    await wrapper.find('[data-test="search"]').setValue('t')
    await wrapper.find('[data-test="search"]').trigger('blur')

    expect(wrapper.find('[data-test="search-results"]').exists()).toBe(false)
  })
})

import { mount } from '@vue/test-utils'
import Stars from './Stars.vue'

describe('Stars spec', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = mount(Stars, {
      props: {
        color: 'golden',
        ratings: 5
      }
    })
  })

  afterEach(() => wrapper?.unmount())

  it('renders stars', () => {
    expect(wrapper.find('[data-test="stars"]').exists()).toBe(true)
    expect(wrapper.findAll('[data-test^="rating-"]')).toHaveLength(5)
  })

  it('emits a rating out of 5', async () => {
    await wrapper.find('[data-test="rating-4"]').trigger('click')
    expect(wrapper.emitted('click')[0]).toEqual([4])
  })

  it('adds a fill on mouseover', async () => {
    await wrapper.find('[data-test="rating-3"]').trigger('mouseover')

    expect(wrapper.find('[data-test="rating-3"]').attributes().fill).toBe('golden')
    expect(wrapper.findAll('[fill="golden"]')).toHaveLength(3)
  })

  it('removes a fill on mouseleave', async () => {
    await wrapper.find('[data-test="rating-4"]').trigger('mouseleave')
    expect(wrapper.findAll('[fill="golden"]')).toHaveLength(0)
  })

  it('it keeps the fill on rating click', async () => {
    await wrapper.find('[data-test="rating-4"]').trigger('click')
    await wrapper.find('[data-test="rating-4"]').trigger('mouseleave')

    expect(wrapper.find('[data-test="rating-4"]').attributes().fill).toBe('golden')
    expect(wrapper.findAll('[fill="golden"]')).toHaveLength(4)
  })

  it('it keeps the fill on mouseover after a rating was chosen', async () => {
    await wrapper.find('[data-test="rating-3"]').trigger('click')
    await wrapper.find('[data-test="rating-5"]').trigger('mouseover')
    await wrapper.find('[data-test="rating-5"]').trigger('mouseleave')

    expect(wrapper.find('[data-test="rating-3"]').attributes().fill).toBe('golden')
    expect(wrapper.findAll('[fill="golden"]')).toHaveLength(3)
  })
})

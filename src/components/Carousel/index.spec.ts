import { expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Carousel from './index.vue'

describe('Carousel specs', () => {
  let wrapper: any

  const slides = [
    { id: 1, src: 'cat.png', alt: 'cat' },
    { id: 2, src: 'dog.png', alt: 'dog' },
    { id: 3, src: 'bird.png', alt: 'bird' }
  ]

  beforeEach(async () => {
    wrapper = mount(Carousel, {
      propsData: {
        slides
      }
    })
  })

  it('renders a list of items', () => {
    expect(wrapper.find('[data-testid="carousel-image-1"]').exists()).toBeTruthy()
  })

  it('renders a next button', () => {
    expect(wrapper.find('[data-testid="carousel-next"]').exists()).toBeTruthy()
  })

  it('renders a previous button', () => {
    expect(wrapper.find('[data-testid="carousel-previous"]').exists()).toBeTruthy()
  })

  it('renders pagination dots based on the number of slides', async () => {
    expect(wrapper.findAll('[data-testid="carousel-pagination"]')).toHaveLength(3)

    await wrapper.setProps({ slides: slides.concat({ id: 4, src: 'test.png', alt: 'test' }) })

    expect(wrapper.findAll('[data-testid="carousel-pagination"]')).toHaveLength(4)
  })

  it('displays the next item in the queue', async () => {
    expect(wrapper.find('[data-testid="carousel-image-1"]').classes()).toContain('selected')
    expect(wrapper.find('[data-testid="carousel-image-2"]').classes()).not.toContain('selected')

    await wrapper.find('[data-testid="carousel-next"]').trigger('click')

    expect(wrapper.find('[data-testid="carousel-image-1"]').classes()).not.toContain('selected')
    expect(wrapper.find('[data-testid="carousel-image-2"]').classes()).toContain('selected')
  })

  it('displays the previous item in the queue', async () => {
    await wrapper.find('[data-testid="carousel-next"]').trigger('click')
    expect(wrapper.find('[data-testid="carousel-image-2"]').classes()).toContain('selected')

    await wrapper.find('[data-testid="carousel-previous"]').trigger('click')
    expect(wrapper.find('[data-testid="carousel-image-1"]').classes()).toContain('selected')
  })

  it('emits an event when clicking the next button', async () => {
    await wrapper.find('[data-testid="carousel-next"]').trigger('click')
    expect(wrapper.emitted('next')).toBeTruthy()
  })
  it('emits an event when clicking the previous button', async () => {
    await wrapper.find('[data-testid="carousel-previous"]').trigger('click')
    expect(wrapper.emitted('previous')).toBeTruthy()
  })

  it('clicking the next button while the last slide is presented returns to the first', async () => {
    await wrapper.find('[data-testid="carousel-next"]').trigger('click')
    await wrapper.find('[data-testid="carousel-next"]').trigger('click')
    await wrapper.find('[data-testid="carousel-next"]').trigger('click')
    expect(wrapper.find('[data-testid="carousel-image-1"]').classes()).toContain('selected')
  })

  it('clicking the previous button while the first slide is presented shows the last item', async () => {
    await wrapper.find('[data-testid="carousel-previous"]').trigger('click')
    expect(wrapper.find('[data-testid="carousel-image-3"]').classes()).toContain('selected')
  })

  it('skips to a specific item', async () => {
    await wrapper.findAll('[data-testid="carousel-pagination"]').at(1).trigger('click')
    expect(wrapper.find('[data-testid="carousel-image-2"]').classes()).toContain('selected')
    expect(wrapper.emitted('page-selected')).toBeTruthy()
  })
})

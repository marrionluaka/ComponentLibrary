import { expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Carousel from './index.vue'
import { nextTick } from 'vue'

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

  it('renders a list of images', () => {
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

  it('displays the next image in the queue', async () => {
    expect(wrapper.find('[data-testid="carousel-image-1"]').classes()).toContain('selected')
    expect(wrapper.find('[data-testid="carousel-image-2"]').classes()).not.toContain('selected')

    await wrapper.find('[data-testid="carousel-next"]').trigger('click')
    await nextTick()

    expect(wrapper.find('[data-testid="carousel-image-1"]').classes()).not.toContain('selected')
    expect(wrapper.find('[data-testid="carousel-image-2"]').classes()).toContain('selected')
  })
  it.todo('displays the previous image in the queue')
  it.todo('skips to a specific image')
})

import { mount } from '@vue/test-utils'
import EmojiProjector from './index.vue'

describe('EmojiProjector specs', () => {
  let wrapper: any

  beforeEach(async () => {
    wrapper = mount(EmojiProjector, {
      propsData: {}
    })
  })

  // it('renders a tone picker', () => {
  //   expect(wrapper.find('[data-testid="tone-picker"]').exists()).toBeTruthy()
  //   expect(wrapper.find('[data-testid="tone-picker"]').classes()).toContain('none')
  // })
  //
  // it.skip('after clicking the tone picker, it renders a list of different tones', async () => {
  //   expect(wrapper.find('[data-testid="skin-tones"]').isVisible()).toBeFalsy()
  //
  //   await wrapper.find('[data-testid="tone-picker"] button').trigger('click')
  //   await nextTick()
  //
  //   expect(wrapper.find('[data-testid="skin-tones"]').isVisible()).toBeTruthy()
  // })
})

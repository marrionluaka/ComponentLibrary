import { mount, Wrapper } from '@vue/test-utils'
import EmojiProjector from './index.vue'

describe('EmojiProjector specs', () => {
  let wrapper: Wrapper<Vue>

  beforeEach(async () => {
    wrapper = mount(EmojiProjector, {
      propsData: {},
      localVue: setupLocalVue()
    })
  })

  it.todo('renders a button')
})

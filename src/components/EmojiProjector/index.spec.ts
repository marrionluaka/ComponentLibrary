import { mount } from '@vue/test-utils'

import EmojiBar from './EmojiBar.vue'
import Projector from './Projector.vue'
import EmojiProjector from './index.vue'
import EmojiButton from './EmojiButton.vue'
import SkinToneBar from './SkinToneBar.vue'
import SkinTonePicker from './SkinTonePicker.vue'

describe('EmojiProjector specs', () => {
  let wrapper: any

  beforeEach(async () => {
    wrapper = mount(EmojiProjector, {
      propsData: {}
    })
  })

  it('renders an emoji button', () => {
    expect(wrapper.findComponent(EmojiButton).exists()).toBeTruthy()
  })

  it('clicking the emoji button should display the emojibar', async () => {
    expect(wrapper.findComponent(EmojiBar).exists()).toBeFalsy()

    await wrapper.findComponent(EmojiButton).vm.$emit('click')

    expect(wrapper.findComponent(EmojiBar).exists()).toBeTruthy()
    expect(wrapper.findComponent(SkinTonePicker).exists()).toBeTruthy()
  })

  it('after selecting an emoji from the emojibar, the selected emoji is rendered', async () => {
    expect(wrapper.findComponent(Projector).exists()).toBeFalsy()

    await wrapper.findComponent(EmojiButton).vm.$emit('click')
    await wrapper.findComponent(EmojiBar).vm.$emit('select-emoji', '\u{1F44D}\u{1F3FB}')

    expect(wrapper.findComponent(Projector).exists()).toBeTruthy()
  })

  it.only('after clicking the tone picker, it renders a list of different tones', async () => {
    await wrapper.findComponent(EmojiButton).vm.$emit('click')

    expect(wrapper.findComponent(SkinToneBar).exists()).toBeTruthy()
    expect(wrapper.findComponent(SkinToneBar).element.style.display).toBe('none')
    expect(wrapper.findComponent(SkinTonePicker).exists()).toBeTruthy()

    await wrapper.findComponent(SkinTonePicker).vm.$emit('click')
    expect(wrapper.findComponent(SkinToneBar).element.style.display).toBe('')
  })

  it('after picking a tone, it closes the tones bar', async () => {
    await wrapper.findComponent(EmojiButton).vm.$emit('click')
    await wrapper.findComponent(SkinTonePicker).vm.$emit('click')
    await wrapper.findComponent(SkinToneBar).vm.$emit('select-tone', 'white')

    expect(wrapper.findComponent(SkinToneBar).element.style.display).toBe('none')
  })
})

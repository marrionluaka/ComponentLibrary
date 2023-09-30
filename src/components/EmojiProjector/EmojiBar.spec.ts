import { expect } from 'vitest'
import { mount } from '@vue/test-utils'

import { emojis } from './core'
import EmojiBar from './EmojiBar.vue'

describe('EmojiBar specs', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = mount(EmojiBar)
  })

  it('renders a list of emojis', () => {
    emojis.forEach(emoji => {
      expect(wrapper.find(`[data-testid="${emoji}"]`).exists()).toBeTruthy()
    })
  })

  it('after selecting a tone, the concerned emojis should be updated', async () => {
    await wrapper.setProps({ selectedTone: 'white' })
    expect(wrapper.findAll('[data-testid="emoji-list"] li').at(1).find('button').text()).toBe('\u{1F44D}\u{1F3FB}')
  })

  it('clicking on an emoji should emit the selected emoji and its corresponding tone', async () => {
    await wrapper.findAll('[data-testid="emoji-list"] li').at(1).find('button').trigger('click')
    expect(wrapper.emitted('select-emoji')[0][0]).toEqual(emojis.at(1))
  })
})

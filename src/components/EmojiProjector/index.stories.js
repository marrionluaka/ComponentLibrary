import { reactive } from 'vue'

import EmojiBar from './EmojiBar.vue'
import Projector from './Projector.vue'
import EmojiButton from './EmojiButton.vue'
import SkinToneBar from './SkinToneBar.vue'
import SkinTonePicker from './SkinTonePicker.vue'

export default {
  title: 'Example/EmojiProjector',
  argTypes: {}
}

const Template = args => ({
  template: `
	<article class="w-fit flex flex-col relative space-y-2">
	  <template v-if="state.shouldDisplayEmojis">
		<Projector v-if="state.selectedEmoji" :emoji="state.selectedEmoji" />
		<SkinToneBar v-show="state.shouldDisplaySkinTones" class="self-end" data-testid="skin-tones" @select-tone="selectTone" />

		<div class="flex items-center">
		  <EmojiBar @select-emoji="selectEmoji" :selected-tone="state.selectedTone" />
		  <SkinTonePicker class="ml-3" @click="showSkinTones" :selected-tone="state.selectedTone" />
		</div>
	  </template>

	  <EmojiButton @click="showEmojis" />
	</article>
  `,

  components: {
    EmojiBar,
    Projector,
    EmojiButton,
    SkinToneBar,
    SkinTonePicker
  },

  setup() {
    const state = reactive({
      selectedEmoji: null,
      selectedTone: 'none',
      shouldDisplayEmojis: false,
      shouldDisplaySkinTones: false
    })

    function selectTone(tone) {
      Object.assign(state, { selectedTone: tone, shouldDisplaySkinTones: false })
    }

    function selectEmoji(emoji) {
      Object.assign(state, { selectedEmoji: emoji, shouldDisplaySkinTones: false })
    }

    function showEmojis() {
      Object.assign(state, { shouldDisplayEmojis: !state.shouldDisplayEmojis, shouldDisplaySkinTones: false })
    }

    function showSkinTones() {
      Object.assign(state, { shouldDisplaySkinTones: !state.shouldDisplaySkinTones })
    }

    return {
      state,
      args,
      selectTone,
      selectEmoji,
      showEmojis,
      showSkinTones
    }
  }
})

export const Primary = Template.bind({})
Primary.args = {}

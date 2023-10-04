import { reactive } from 'vue'
import { FaceSmileIcon, VideoCameraIcon, MicrophoneIcon, HandRaisedIcon, Cog6ToothIcon } from '@heroicons/vue/24/outline'

import Projector from './Projector.vue'
import EmojiButton from './EmojiButton.vue'
import EmojiPicker from './EmojiPicker.vue'

export default {
  title: 'Example/EmojiProjector',
  argTypes: {}
}

const Template = args => ({
  template: `
	<main class="flex flex-col space-y-3 h-screen justify-center mx-auto max-w-5xl">
	  <div class="bg-red-400 h-96 rounded-xl"></div>

	  <template v-if="state.shouldDisplayEmojis">
	    <Projector v-if="state.selectedEmoji" :emoji="state.selectedEmoji" />
	    <EmojiPicker
	      :selected-tone="state.selectedTone"
	      :should-display-skin-tones="state.shouldDisplaySkinTones"
	      @select-tone="selectTone"
	      @select-emoji="selectEmoji"
	      @show-skin-tones="showSkinTones"
	    />
	  </template>

	  <section class="flex self-center space-x-3">
	    <EmojiButton @click="void 0" v-for="(icon, index) in state.icons" :key="index">
	      <component :is="icon" />
	    </EmojiButton>
	    <EmojiButton @click="showEmojis" :class="{ 'bg-blue-600': state.active }" >
	      <FaceSmileIcon />
	    </EmojiButton>
	  </section>
	</main>
  `,

  components: {
    EmojiPicker,
    EmojiButton,
    Projector,
    FaceSmileIcon,
    VideoCameraIcon,
    MicrophoneIcon,
    HandRaisedIcon,
    Cog6ToothIcon
  },

  setup() {
    const state = reactive({
      selectedEmoji: null,
      selectedTone: 'none',
      shouldDisplayEmojis: false,
      shouldDisplaySkinTones: false,
      active: false,
      icons: [VideoCameraIcon, MicrophoneIcon, HandRaisedIcon, Cog6ToothIcon]
    })

    function selectTone(tone) {
      Object.assign(state, { selectedTone: tone, shouldDisplaySkinTones: false })
    }

    function selectEmoji(emoji) {
      Object.assign(state, { selectedEmoji: emoji, shouldDisplaySkinTones: false })
    }

    function showEmojis() {
      Object.assign(state, { shouldDisplayEmojis: !state.shouldDisplayEmojis, shouldDisplaySkinTones: false, active: !state.active })
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

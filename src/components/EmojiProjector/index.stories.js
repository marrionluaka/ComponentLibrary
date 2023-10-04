import { reactive } from 'vue'
import { FaceSmileIcon, VideoCameraIcon, MicrophoneIcon, HandRaisedIcon, Cog6ToothIcon } from '@heroicons/vue/24/outline'

import EmojiBar from './EmojiBar.vue'
import Projector from './Projector.vue'
import EmojiButton from './EmojiButton.vue'
import SkinToneBar from './SkinToneBar.vue'
import SkinTonePicker from './SkinTonePicker.vue'
import SharedButton from './ShareButton.vue'

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
	    <div class="w-fit flex flex-col relative space-y-2">
	      <SkinToneBar v-show="state.shouldDisplaySkinTones" class="self-end" data-testid="skin-tones" @select-tone="selectTone" />

	      <div class="flex items-center">
		<EmojiBar @select-emoji="selectEmoji" :selected-tone="state.selectedTone" />
		<SkinTonePicker class="ml-3" @click="showSkinTones" :selected-tone="state.selectedTone" />
	      </div>
	    </div>
	  </template>

	  <div class="flex self-center space-x-3">
	    <EmojiButton @click="void 0" v-for="(icon, index) in state.icons" :key="index">
	      <component :is="icon" />
	    </EmojiButton>
	    <EmojiButton @click="showEmojis" :class="{ 'bg-blue-600': state.active }" >
	      <FaceSmileIcon />
	    </EmojiButton>
	  </div>
	</main>
  `,

  components: {
    EmojiBar,
    Projector,
    EmojiButton,
    SkinToneBar,
    SkinTonePicker,
    SharedButton,
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

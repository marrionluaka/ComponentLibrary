import EmojiProjector from './index.vue'

export default {
  title: 'Example/EmojiProjector',
  component: EmojiProjector,
  argTypes: {}
}

const Template = args => ({
  template: `
		<EmojiProjector v-bind="args" />
  `,

  components: { EmojiProjector },

  setup() {
    return { args }
  }
})

export const Primary = Template.bind({})
Primary.args = {}

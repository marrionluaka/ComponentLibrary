import { ref } from 'vue'

import ChatRoom from './index.vue'
import ChatPost from './ChatPost.vue'
import messagesData from '../../lib/chat-data'
import createNewTextMessage from '../../lib/createNewTextMessage'

export default {
  title: 'Example/ChatRoom',
  component: ChatRoom
}

const Template = args => ({
  template: `
    <div class="max-w-xl mx-auto my-8">
      <ChatRoom class="max-h-full h-96" :chatMessages="messages" @submit="onSubmit" />
      <ChatPost @submit="onSubmit" />
    </div>
  `,

  components: { ChatRoom, ChatPost },

  setup() {
    const messages = ref(messagesData)

    function onSubmit(message) {
      messages.value = createNewTextMessage(messages.value, message)
    }

    return { messages, onSubmit }
  }
})

export const Primary = Template.bind({})

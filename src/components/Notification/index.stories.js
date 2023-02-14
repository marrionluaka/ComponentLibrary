import { ref } from 'vue'

import Notification from './index.vue'
import messagesData from '../../lib/chat-data'
import NotificationChat from './NotificationChat.vue'
import generateRandomUsers from '../../lib/createRandomUser'
import createNewTextMessage from '../../lib/createNewTextMessage'

export default {
  title: 'Example/Notification',
  component: Notification
}

const Template = args => ({
  template: `
    <div>
      <Notification :users="users" />
    </div>
  `,

  components: { Notification },

  setup() {
    const users = ref(generateRandomUsers(args.count))
    return { users, args }
  }
})

export const Primary = Template.bind({})
Primary.args = {
  count: 5
}

const Chat = () => ({
  template: `
    <div>
      <NotificationChat :messages="messages" @submit="onSubmit" />
    </div>
  `,

  components: { NotificationChat },

  setup() {
    const messages = ref(messagesData)

    function onSubmit(message) {
      messages.value = createNewTextMessage(messages.value, message)
    }

    return { messages, onSubmit }
  }
})

export const WithChat = Chat.bind({})

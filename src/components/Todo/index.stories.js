import { reactive } from 'vue'
import Todo from './index.vue'

export default {
  title: 'Example/Todo',
  component: Todo
}

const Template = args => ({
  template: `
    <div class="max-w-xl mx-auto mt-8">
      <Todo :username="state.username" :items="state.items" @change="onChange" />
    </div>
  `,

  components: { Todo },

  setup() {
    const state = reactive({
      username: args.username,
      items: args.items.map(createTodoItem)
    })

    function createTodoItem(name, index) {
      const id = index.toString()
      return {
        name,
        id,
        value: id,
        isChecked: false
      }
    }

    function onChange(value) {
      state.items = state.items.map(x => {
        if (x.value === value) {
          return { ...x, isChecked: !x.isChecked }
        }

        return x
      })
    }

    return { state, onChange }
  }
})

export const Primary = Template.bind({})
Primary.args = {
  username: 'Kevin',
  items: ['Create 5-6 sketches', 'Create a Moodboard', 'Get enough sleep']
}

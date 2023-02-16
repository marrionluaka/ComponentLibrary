import { expect } from 'vitest'
import { mount } from '@vue/test-utils'

import TodoItem from './TodoItem.vue'

describe('TodoItem', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = mount(TodoItem, {
      props: {
        item: { id: 0, name: 'Item 1', value: 'item-1', isChecked: true }
      }
    })
  })

  it('renders a todo item', () => {
    expect(wrapper.find('[data-testid="todo-item-0"]').exists()).toBeTruthy()
  })

  it('renders a line through item when checked', () => {
    expect(wrapper.find('[data-testid="todo-item-0-checkbox"]').classes()).toContain('line-through')
  })

  it('emits a change event', () => {
    wrapper.findComponent('[data-testid="todo-item-0-checkbox"]').vm.$emit('update:modelValue')
    expect(wrapper.emitted('change'))
  })
})

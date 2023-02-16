import { expect} from 'vitest'
import { mount } from '@vue/test-utils'

import ProgressBar from './index.vue'

describe('ProgressBar', () => {
  it('renders the progress bar', () => {
    const wrapper = mount(ProgressBar)
    expect(wrapper.find('[data-testid="progress-container"]').exists()).toBeTruthy()
  })

  it('renders the progress bar value', () => {
    const wrapper = mount(ProgressBar, {
      propsData: { value: 10 },
      slots: {
        default: '10%'
      }
    })

    expect(wrapper.find('[data-testid="progress-bar"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="progress-bar"]').text()).toBe('10%')
    expect((wrapper.find('[data-testid="progress-bar"]').element as HTMLElement).style.width).toBe('10%')
  })
})

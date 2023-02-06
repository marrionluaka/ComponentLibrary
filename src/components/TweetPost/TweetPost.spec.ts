import { mount } from '@vue/test-utils'
import TweetPost from './TweetPost.vue'

describe('TweetPost spec', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = mount(TweetPost, {
      props: {
        charLimit: 140
      }
    })
  })

  afterEach(() => wrapper?.unmount())

  it('renders a tweet box', () => {
    expect(wrapper.find('[data-test="tweet"]').exists()).toBe(true)
  })

  it('decreases character limit for each character typed.', async () => {
    await wrapper.find('[data-test="tweet-box"]').setValue('a')
    expect(wrapper.find('[data-test="tweet-limit"]').text()).toBe('139')
  })

  it('disables the submit button when the user has typed past the character limit.', async () => {
    wrapper = mount(TweetPost, {
      props: {
        charLimit: 5
      }
    })

    await wrapper.find('[data-test="tweet-box"]').setValue('1234567')

    expect(wrapper.find('[data-test="tweet-submit"]').element.disabled).toBe(true)
  })

  it('disables the submit button when the user has no tweets.', async () => {
    await wrapper.find('[data-test="tweet-submit"]').trigger('submit')
    expect(wrapper.find('[data-test="tweet-submit"]').element.disabled).toBe(true)
  })

  it('submits a tweet on submit', async () => {
    await wrapper.find('[data-test="tweet-box"]').setValue('Hey there!')
    await wrapper.find('[data-test="tweet-submit"]').trigger('submit')

    expect(wrapper.emitted('on-tweet')[0]).toEqual(['Hey there!'])
  })
})

import Search from './'
import SearchItem from './SearchItem.vue'
import { ChevronIconRight } from '../shared'
import SearchAction from './SearchAction.vue'

export default {
  title: 'Example/Search',
  component: Search,
  argTypes: {
    onSubmit: {}
  }
}

const Template = args => ({
  template: '<Search @on-search="args.onSubmit" />',

  components: { Search },

  setup() {
    return { args }
  }
})

export const Primary = Template.bind({})

const WithSuggestedResultsTemplate = args => ({
  template: `
    <Search v-bind="args" @on-search="args.onSubmit" @keydown="onKeydown">
      <li class="bg-white">
        <div class="flex items-center justify-between p-3 border-b border-gray-200">
          <p class="font-medium capitalize">Title</p>
          <a href="#" class="uppercase text-sm font-bold text-indigo-500">View All</a>
        </div>
        <ul>
          <li v-for="result in args.suggestedResults" :key="result.id">
            <SearchItem class="flex justify-between items-center" :src="result.src">
              <div class="flex items-center">
                <div class="mr-4 my-1 p-2 border rounded-xl border-gray-200">Img</div>
                <div>
                  <p class="text-sm font-medium">{{ result.title }}</p>
                  <p class="text-sm font-light text-gray-500">{{ result.description }}</p>
                </div>
              </div>
              <span class="bg-indigo-500 text-white px-2 py-1 rounded-lg text-sm font-bold">{{ result.rating }}</span>
            </SearchItem>
          </li>
        </ul>
      </li>

      <li class="bg-white">
        <div class="p-3 border-b border-gray-200">
          <p class="font-medium">Genres</p>
        </div>
        <SearchAction @click="() => {}">
          <div class="flex justify-between items-center">
            <p class="text-sm"> Historical</p>
            <ChevronIconRight class="transform scale-75 text-gray-500" />
          </div>
        </SearchAction>
      </li>
    </Search>
  `,

  components: { Search, SearchItem, SearchAction, ChevronIconRight },

  setup() {
    const onKeydown = () => {
      setTimeout(() => {
        args.suggestedResults = [
          {
            id: 1,
            title: 'Result 1',
            description: 'Lorem ipsum dolor sit amet.',
            rating: 9.5,
            src: 'http://google.com'
          },
          {
            id: 2,
            title: 'Result 2',
            description: 'Lorem ipsum dolor sit amet.',
            rating: 8.7,
            src: 'http://google.com'
          },
          {
            id: 3,
            title: 'Result 3',
            description: 'Lorem ipsum dolor sit amet.',
            rating: 9.7,
            src: 'http://google.com'
          }
        ]
      }, 1000)
    }
    return { args, onKeydown }
  }
})

export const WithSuggestedResults = WithSuggestedResultsTemplate.bind({})
WithSuggestedResults.args = {
  suggestedResults: []
}

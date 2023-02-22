import Tab from './Tab.vue'
import Tabs from './index.vue'
import TabPanel from './TabPanel.vue'

export default {
  title: 'Example/Tabs',
  component: Tabs
}

const Template = () => ({
  template: `
    <Tabs class="flex flex-col gap-y-3">
      <div class="flex gap-x-2">
        <Tab :id="0" :selected="true">
          <template #default="{ active, setActiveTabID }">
            <button
              :class="[
                'appearance-none border border-gray-300 rounded-md py-1 px-3 text-sm',
                active ? 'bg-indigo-500 border-indigo-500 text-white' : 'text-gray-900 border-gray-300'
              ]"
              @click="setActiveTabID(0)"
            >HTML</button>
          </template>
        </Tab>

        <Tab :id="1">
          <template #default="{ active, setActiveTabID }">
            <button
              :class="[
                'appearance-none border border-gray-300 rounded-md py-1 px-3 text-sm',
                active ? 'bg-indigo-500 border-indigo-500 text-white' : 'text-gray-900 border-gray-300'
              ]"
              @click="setActiveTabID(1)"
            >CSS</button>
          </template>
        </Tab>

        <Tab :id="2">
          <template #default="{ active, setActiveTabID }">
            <button
              :class="[
                'appearance-none border border-gray-300 rounded-md py-1 px-3 text-sm',
                active ? 'bg-indigo-500 border-indigo-500 text-white' : 'text-gray-900 border-gray-300'
              ]"
              @click="setActiveTabID(2)"
            >JavaScript</button>
          </template>
        </Tab>

        <Tab as="button" class="border border-gray-300 rounded-md py-1 px-3 text-sm bg-gray-100 text-gray-500" :id="3" :disabled="true">
          Haskell
        </Tab>
      </div>

      <div>
        <TabPanel :id="0">
          The HyperText Markup Language or HTML is the standard markup language for
          documents designed to be displayed in a web browser.
        </TabPanel>

        <TabPanel :id="1">
          Cascading Style Sheets is a style sheet language used for describing the
          presentation of a document written in a markup language such as HTML or XML.
        </TabPanel>

        <TabPanel :id="2">
          JavaScript, often abbreviated as JS, is a programming language that is one
          of the core technologies of the World Wide Web, alongside HTML and CSS.
        </TabPanel>
      </div>
    </Tabs>
  `,

  components: { Tabs, Tab, TabPanel },
})

export const Primary = Template.bind({})

import { ref } from 'vue'
import Accordion from './Accordion.vue'
import { ChevronIcon } from '../shared'
import AccordionTitle from './AccordionTitle.vue'
import AccordionPanel from './AccordionPanel.vue'

export default {
  title: 'Example/Accordion',
  component: Accordion
}

const Template = args => ({
  template: `
    <div>
      <Accordion v-bind="args">
        <template #title="{ isOpen }">
          <AccordionTitle>
            <div class="flex justify-between py-2">
              <p>Title One</p>
              <ChevronIcon class="transition-transform ease-in-out transform scale-75" :class="[isOpen ? 'rotate-0' : 'rotate-90']"/>
            </div>
          </AccordionTitle>
        </template>
        <template #default="{ isOpen }">
          <AccordionPanel :isOpen="isOpen">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </AccordionPanel>
        </template>
      </Accordion>
      <Accordion v-bind="args">
        <template #title="{ isOpen }">
          <AccordionTitle>
            <div class="flex justify-between py-2">
              <p>Title Two</p>
              <ChevronIcon class="transition-transform ease-in-out transform scale-75" :class="[isOpen ? 'rotate-0' : 'rotate-90']"/>
            </div>
          </AccordionTitle>
        </template>
        <template #default="{ isOpen }">
          <AccordionPanel :isOpen="isOpen">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </AccordionPanel>
        </template>
      </Accordion>
      <Accordion v-bind="args">
        <template #title="{ isOpen }">
          <AccordionTitle>
            <div class="flex justify-between py-2">
              <p>Title Three</p>
              <ChevronIcon class="transition-transform ease-in-out transform scale-75" :class="[isOpen ? 'rotate-0' : 'rotate-90']"/>
            </div>
          </AccordionTitle>
        </template>
        <template #default="{ isOpen }">
          <AccordionPanel :isOpen="isOpen">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </AccordionPanel>
        </template>
      </Accordion>
    </div>
  `,

  components: { Accordion, ChevronIcon, AccordionTitle, AccordionPanel },

  setup() {
    return { args }
  }
})

export const Primary = Template.bind({})
Primary.args = {
  isOpen: false
}

export const OneAtATime = () => ({
  template: `
    <div>
      <Accordion>
        <template #title>
          <AccordionTitle @click="currentPanel = 'title-one'">
            <div class="flex justify-between py-2">
              <p>Title One</p>
              <ChevronIcon class="transition-transform ease-in-out transform scale-75" :class="[isOpen('title-one') ? 'rotate-0' : 'rotate-90']"/>
            </div>
          </AccordionTitle>
        </template>

        <AccordionPanel :isOpen="isOpen('title-one')">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </AccordionPanel>
      </Accordion>

      <Accordion>
        <template #title>
          <AccordionTitle @click="currentPanel = 'title-two'">
            <div class="flex justify-between py-2">
              <p>Title Two</p>
              <ChevronIcon class="transition-transform ease-in-out transform scale-75" :class="[isOpen('title-two') ? 'rotate-0' : 'rotate-90']"/>
            </div>
          </AccordionTitle>
        </template>

        <AccordionPanel :isOpen="isOpen('title-two')">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </AccordionPanel>
      </Accordion>

      <Accordion>
        <template #title>
          <AccordionTitle @click="currentPanel = 'title-three'">
            <div class="flex justify-between py-2">
              <p>Title Three</p>
              <ChevronIcon class="transition-transform ease-in-out transform scale-75" :class="[isOpen('title-three') ? 'rotate-0' : 'rotate-90']"/>
            </div>
          </AccordionTitle>
        </template>

        <AccordionPanel :isOpen="isOpen('title-three')">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </AccordionPanel>
      </Accordion>
    </div>
  `,

  components: { Accordion, ChevronIcon, AccordionTitle, AccordionPanel },

  setup() {
    const currentPanel = ref('title-one')
    const isOpen = x => x === currentPanel.value

    return { currentPanel, isOpen }
  }
})

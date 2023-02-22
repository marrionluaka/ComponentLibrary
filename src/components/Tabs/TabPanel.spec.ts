import { expect } from 'vitest'
import { mount } from '@vue/test-utils'

import TabPanel from './TabPanel.vue'
import { initTabsContext } from './tabs-context'
import createComponent from '../../lib/create-component-helper'

describe('TabPanel', () => {
  const getComponent = createComponent({ TabPanel }, () => initTabsContext())

  it('throws an error when rendering a TabPanel without its parent', () => {
    expect(() => mount(TabPanel, { props: { id: 0 } })).toThrowError('<TabPanel /> must be used within a <Tabs /> component.')
  })

  it('renders nothing when not active', async () => {
    const component = getComponent('<TabPanel :id="1" />')
    expect(mount(component).html()).toContain('')
  })

  it('renders an element when active', async () => {
    const component = getComponent('<TabPanel :id="0">spongebobbu</TabPanel>')
    expect(mount(component).html()).toContain('spongebobbu')
  })
})

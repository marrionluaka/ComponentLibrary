import { expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Tab from './Tab.vue'
import { initTabsContext } from './tabs-context'
import createComponent from '../../lib/create-component-helper'

describe('Tab', () => {
  const getComponent = createComponent({ Tab }, () => initTabsContext())

  it('throws an error when rendering a Tab without its parent', () => {
    expect(() => mount(Tab, { props: { id: 0 } })).toThrowError('<Tab /> must be used within a <Tabs /> component.')
  })

  it('renders children', () => {
    const component = getComponent('<Tab :id="0" as="button">Tab 0</Tab>')
    expect(mount(component).html()).toContain('Tab 0')
  })

  it('renders as a button', () => {
    const component = getComponent('<Tab :id="0" as="button" />')
    expect(mount(component).html()).toContain('button')
    expect(mount(component).html()).not.toContain('div')
  })

  it('renders as a div', () => {
    const component = getComponent('<Tab :id="0" />')
    expect(mount(component).html()).toContain('div')
    expect(mount(component).html()).not.toContain('button')
  })

  it('sets the active tab on mount', () => {
    const component = getComponent('<Tab :id="0" as="button" :selected="true" />')
    expect(mount(component).classes()).toContain('active')
  })
})

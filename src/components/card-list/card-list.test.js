import React from 'react'
import { create } from 'react-test-renderer'
 
import CardList from './card-list.component'

describe('Card List Component', () => {
  let component
  let ingredients = ['Bread', 'Cheese', 'Butter']
 
  beforeEach(() => {
    component = create(<CardList ingredients={ingredients} />)
  })
 
  it('should render with given props', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })
})

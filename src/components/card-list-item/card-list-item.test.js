import React from 'react'
import { create } from 'react-test-renderer'
 
import CardListItem from './card-list-item.component'

describe('Card List Item Component', () => {
  let component
  let ingredient = 'Bread'
 
  beforeEach(() => { 
    component = create(<CardListItem ingredient={ingredient} />)
  })
 
  it('should render with given props', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })
})

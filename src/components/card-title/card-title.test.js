import React from 'react'
import { create } from 'react-test-renderer'
 
import CardTitle from './card-title.component'

describe('Card Title Component', () => {
  let component
 
  beforeEach(() => { 
    component = create(<CardTitle title='Potato Salad' />)
  })
 
  it('should render with given props', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })
})

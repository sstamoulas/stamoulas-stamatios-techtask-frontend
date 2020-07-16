import React from 'react'
import { Provider } from 'react-redux'
import { create } from 'react-test-renderer'
import configureStore from 'redux-mock-store'
 
import Card from './card.component'
 
const mockStore = configureStore([])
const recipes = [{
  "title": "Ham and Cheese Toastie",
  "ingredients": [
    "Ham",
    "Cheese",
    "Bread",
    "Butter"
  ]
},
{
  "title": "Salad",
  "ingredients": [
    "Lettuce",
    "Tomato",
    "Cucumber",
    "Beetroot",
    "Salad Dressing"
  ]
}]

describe('Card Component', () => {
  let store
  let component
 
  beforeEach(() => {
    store = mockStore({
      recipes: {
        recipes,
      },
    })
 
    component = create(
      <Provider store={store}>
        <Card />
      </Provider>
    )
  })
 
  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })
})

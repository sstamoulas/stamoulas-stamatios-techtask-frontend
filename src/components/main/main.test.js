import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import ReactTestUtils, { act } from 'react-dom/test-utils'
import { waitForElement, screen } from '@testing-library/react'

import Main from './main.component'
import RecipesActionTypes from './../../redux/recipes/recipes.types'

const mockStore = configureStore([])
const mealDate = new Date('07/14/2020')
const ingredients = [{
  "title": "Cheese",
  "use-by": "2020-01-08"
},
{
  "title": "Bread",
  "use-by": "2020-11-01"
},
{
  "title": "Butter",
  "use-by": "2020-11-25"
}]
const isFetching = false
const selectedIngredients = []

describe('Main Component', () => {
  let store
  let container
 
  beforeEach(() => {
    store = mockStore({
      ingredients: {
        ingredients,
      },
      mealDate: {
        mealDate,
      },
      recipes: {
        isFetching,
        selectedIngredients
      },
    })

    store.dispatch = jest.fn()

    container = document.createElement('div')
    document.body.appendChild(container)

    act(() => {
      ReactDOM.render(
        <Provider store={store}>
          <Main />
        </Provider>, 
        container
      )
    })
  })

  it('should render with given state from Redux store with no selectedIngredients', () => {
    expect(container).toMatchSnapshot()
  })

  it('should render with given state from Redux store with atleast one selectedIngredient', () => {
    store.getState().recipes.selectedIngredients = ['Bread']
    expect(container).toMatchSnapshot()
  })

  it('should dispatch an action when an ingredient is selected', async () => {
    ReactTestUtils.Simulate.click(container.querySelector('input.rw-input-reset'))
    
    await waitForElement(() => screen.getByText(/Bread/i))

    ReactTestUtils.Simulate.click(screen.getByText(/Bread/i))

    expect(container.querySelector('.rw-multiselect-tag span').textContent).toContain('Bread')

    selectedIngredients.push('Bread')

    expect(store.dispatch).toHaveBeenCalledTimes(1)
    expect(store.dispatch).toHaveBeenCalledWith({ 
      type: RecipesActionTypes.FETCH_RECIPES_START, 
      payload: selectedIngredients 
    })
  })
})

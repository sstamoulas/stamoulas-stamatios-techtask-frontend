import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { act } from 'react-dom/test-utils'
import { waitForElement, screen } from '@testing-library/react'

import App from './App'
import IngredientsActionTypes from './redux/ingredients/ingredients.types'

const mockStore = configureStore([])
const isFetching = true

describe('App Component', () => {
  let store
  let container
 
  beforeEach(() => {
    store = mockStore({
      ingredients: {
        isFetching,
      },
    })

    store.dispatch = jest.fn()

    container = document.createElement('div')
    document.body.appendChild(container)

    act(() => {
      ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>, 
        container
      )
    })
  })

  it('should render with given state from Redux store', () => {
    expect(container).toMatchSnapshot()
  })

  it('should dispatch an action once the application has loaded', () => {
    expect(store.dispatch).toHaveBeenCalledTimes(1)
    expect(store.dispatch).toHaveBeenCalledWith({ 
      type: IngredientsActionTypes.FETCH_INGREDIENTS_START,
    })
  })
})

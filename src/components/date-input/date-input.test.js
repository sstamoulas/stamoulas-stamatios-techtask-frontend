import React from 'react'
import { Provider } from 'react-redux'
import { act, create } from 'react-test-renderer'
import configureStore from 'redux-mock-store'
 
import DateInput from './date-input.component'
import MealDateActionTypes from './../../redux/mealDate/mealDate.types'
 
const mockStore = configureStore([])
const mealDate = new Date('07/14/2020')

describe('Date Input Component', () => {
  let store
  let component
 
  beforeEach(() => {
    store = mockStore({
      mealDate: {
        mealDate,
      },
    })
 
    store.dispatch = jest.fn()
 
    component = create(
      <Provider store={store}>
        <DateInput />
      </Provider>
    )
  })
 
  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should dispatch an action when the date changes', () => {
    act(() => {
      component.root.findByType('input').props.onChange({ target: { value: mealDate }})
    })
 
    expect(store.dispatch).toHaveBeenCalledTimes(1)
    expect(store.dispatch).toHaveBeenCalledWith({ 
      type: MealDateActionTypes.UPDATE_MEAL_DATE, 
      payload: mealDate 
    })
  })
})

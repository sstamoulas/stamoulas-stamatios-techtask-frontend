import MealDateActionTypes from './mealDate.types'
import mealDateReducer from './mealDate.reducer'

const initialState = {
}

describe('mealDateReducer', () => {
  it('should return initial state', () => {
    expect(mealDateReducer(undefined, {})).toEqual(initialState)
  })
})

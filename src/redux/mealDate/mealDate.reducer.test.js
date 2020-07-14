import MealDateActionTypes from './mealDate.types'
import mealDateReducer from './mealDate.reducer'

const initialState = {
  mealDate: new Date(),
}

describe('mealDateReducer', () => {
  it('should return initial state', () => {
    expect(mealDateReducer(undefined, {})).toEqual(initialState)
  })

  it('should set mealDate to payload if updateMealDate action', () => {
    const mockItems = new Date()
    expect(
      mealDateReducer(initialState, {
        type: MealDateActionTypes.UPDATE_MEAL_DATE,
        payload: mockItems
      })
    ).toEqual({
      ...initialState,
      mealDate: mockItems
    })
  })
})

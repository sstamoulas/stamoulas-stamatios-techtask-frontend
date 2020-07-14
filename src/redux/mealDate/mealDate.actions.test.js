import MealDateActionTypes from './mealDate.types'
import { updateMealDate } from './mealDate.actions'

describe('updateMealDate action', () => {
  it('should create the updateMealDate action', () => {
    expect(updateMealDate().type).toEqual(
      MealDateActionTypes.UPDATE_MEAL_DATE
    )
  })
})

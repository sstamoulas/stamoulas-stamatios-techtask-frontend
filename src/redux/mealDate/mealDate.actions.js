import MealDateActionTypes from './mealDate.types'

export const updateMealDate = (mealDate) => ({
  type: MealDateActionTypes.UPDATE_MEAL_DATE,
  payload: mealDate,
})

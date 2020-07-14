import MealDateActionTypes from './mealDate.types'

const INITIAL_STATE = {
  mealDate: new Date(),
}

const mealDateReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MealDateActionTypes.UPDATE_MEAL_DATE:
      return {
        ...state,
        mealDate: action.payload,
      }
    default:
      return state
  }
}

export default mealDateReducer

import IngredientsActionTypes from './ingredients.types'

const INITIAL_STATE = {
  ingredients: null,
  isFetching: false,
  errorMessage: undefined
}

const ingredientsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IngredientsActionTypes.FETCH_INGREDIENTS_START:
      return {
        ...state,
        isFetching: true
      }
    case IngredientsActionTypes.FETCH_INGREDIENTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        ingredients: action.payload
      }
    default:
      return state
  }
}

export default ingredientsReducer

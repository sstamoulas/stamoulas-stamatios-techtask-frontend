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
      };
    default:
      return state
  }
}

export default ingredientsReducer

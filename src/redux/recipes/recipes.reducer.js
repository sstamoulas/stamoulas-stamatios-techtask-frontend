import RecipesActionTypes from './recipes.types'

const INITIAL_STATE = {
  selectedIngredients: [],
  isFetching: false,
}

const recipesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RecipesActionTypes.FETCH_RECIPES_START:
      return {
        ...state,
        isFetching: true,
        selectedIngredients: action.payload,
      }
    default:
      return state
  }
}

export default recipesReducer

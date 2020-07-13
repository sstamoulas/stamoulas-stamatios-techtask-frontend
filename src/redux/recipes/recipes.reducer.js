import RecipesActionTypes from './recipes.types'

const INITIAL_STATE = {
  recipies: null,
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
    case RecipesActionTypes.FETCH_RECIPES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        recipes: action.payload
      }
    default:
      return state
  }
}

export default recipesReducer

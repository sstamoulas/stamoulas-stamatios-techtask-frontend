import RecipesActionTypes from './recipes.types'

const INITIAL_STATE = {
  selectedIngredients: [],
  isFetching: false,
}

const recipesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default recipesReducer

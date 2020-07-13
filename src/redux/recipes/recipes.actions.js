import RecipesActionTypes from './recipes.types'

export const fetchRecipesStart = (selectedIngredients) => ({
  type: RecipesActionTypes.FETCH_RECIPES_START,
  payload: selectedIngredients,
})

export const fetchRecipesSuccess = (recipesMap) => ({
  type: RecipesActionTypes.FETCH_RECIPES_SUCCESS,
  payload: recipesMap,
})

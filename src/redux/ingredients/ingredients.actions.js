import IngredientsActionTypes from './ingredients.types'

export const fetchIngredientsStart = () => ({
  type: IngredientsActionTypes.FETCH_INGREDIENTS_START,
})

export const fetchIngredientsSuccess = (ingredientsMap) => ({
  type: IngredientsActionTypes.FETCH_INGREDIENTS_SUCCESS,
  payload: ingredientsMap,
})

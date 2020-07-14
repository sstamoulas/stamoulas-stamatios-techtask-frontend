import { combineReducers } from 'redux'

import ingredientsReducer from './ingredients/ingredients.reducer'
import mealDateReducer from './mealDate/mealDate.reducer'
import recipesReducer from './recipes/recipes.reducer'

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  mealDate: mealDateReducer,
  recipes: recipesReducer,
})

export default rootReducer

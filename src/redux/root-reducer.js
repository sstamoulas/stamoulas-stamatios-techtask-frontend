import { combineReducers } from 'redux'

import ingredientsReducer from './ingredients/ingredients.reducer'

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
})

export default rootReducer

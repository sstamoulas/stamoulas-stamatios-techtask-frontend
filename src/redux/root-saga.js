import { all, call } from 'redux-saga/effects'

import ingredientsSagas from './ingredients/ingredients.sagas'
import recipesSagas from './recipes/recipes.sagas'

export default function* rootSaga() {
  yield all([
    call(ingredientsSagas),
    call(recipesSagas),
  ])
}

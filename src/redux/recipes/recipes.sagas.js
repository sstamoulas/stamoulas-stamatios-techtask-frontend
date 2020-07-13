import { takeEvery, call, select } from 'redux-saga/effects'

import { fetchRecipesSuccess } from './recipes.actions'

export function* fetchRecipesStart() {
  let { recipes: { selectedIngredients }} = yield select()
}

export default function* recipesSagas() {
  yield takeEvery('FETCH_RECIPES_START', fetchRecipesStart)
}

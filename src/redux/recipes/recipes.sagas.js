import { takeEvery, call, select } from 'redux-saga/effects'

import { fetchRecipesSuccess } from './recipes.actions'

export const api = (url) => fetch(url).then(response => {
  if (response.ok) {
    return response.json()
  } else {
    throw new Error(response.status)
  }
})

export function* fetchRecipesStart() {
  let { recipes: { selectedIngredients }} = yield select()
  const url = `${process.env.REACT_APP_BASE_URL}/recipes?ingredients=`
  
  try {
    const urlParams = selectedIngredients.join(',')
    const recipessMap = yield call(api, `${url}${urlParams}`)
  } catch (error) {
  }
}

export default function* recipesSagas() {
  yield takeEvery('FETCH_RECIPES_START', fetchRecipesStart)
}

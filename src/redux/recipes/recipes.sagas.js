import { takeEvery, call, select, put } from 'redux-saga/effects'

import { fetchRecipesSuccess, fetchRecipesFailure } from './recipes.actions'

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
    const recipesMap = yield call(api, `${url}${urlParams}`)
    
    yield put(fetchRecipesSuccess(recipesMap))
  } catch (error) {
    yield put(fetchRecipesFailure(error.message))
  }
}

export default function* recipesSagas() {
  yield takeEvery('FETCH_RECIPES_START', fetchRecipesStart)
}

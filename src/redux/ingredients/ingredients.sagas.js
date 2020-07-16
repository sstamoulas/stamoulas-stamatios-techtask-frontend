import { takeEvery, put, call } from 'redux-saga/effects'

import { fetchIngredientsSuccess, fetchIngredientsFailure } from './ingredients.actions'

export const api = (url) => fetch(url).then(response => {
  if (response.ok) {
    return response.json()
  } else {
    throw new Error(response.status)
  }
})

export function* fetchIngredientsStart() {
  const url = `${process.env.REACT_APP_BASE_URL}/ingredients`
  try {
    const ingredientsMap = yield call(api, url)
    yield put(fetchIngredientsSuccess(ingredientsMap))
  } catch (error) {
    yield put(fetchIngredientsFailure(error.message))
  }
}

export default function* ingredientsSaga() {
  yield takeEvery('FETCH_INGREDIENTS_START', fetchIngredientsStart)
}

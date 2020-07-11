import { takeLatest, put, call } from 'redux-saga/effects'

import IngredientsActionTypes from './ingredients.types'
import { fetchIngredientsSuccess, fetchIngredientsFailure } from './ingredients.actions'

export function* fetchIngredientsStart() {
  try {
    const ingredientsMap = yield call(fetch, `${process.env.REACT_APP_BASE_URL}/ingredients`)
    yield put(fetchIngredientsSuccess(ingredientsMap))
  } catch (error) {
    yield put(fetchIngredientsFailure(error.message))
  }
}

export default function* ingredientsSaga() {
  yield takeEvery('FETCH_INGREDIENTS_START', fetchIngredientsStart)
}

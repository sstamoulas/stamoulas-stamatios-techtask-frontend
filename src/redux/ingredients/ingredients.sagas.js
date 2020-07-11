import { takeLatest, put, call } from 'redux-saga/effects'

import IngredientsActionTypes from './ingredients.types'
import { fetchIngredientsSuccess, fetchIngredientsFailure } from './ingredients.actions'

export function* fetchIngredientsStart() {
  try {
    const ingredientsMap = yield call(fetch, 'https://lb7u7svcm5.execute-api.ap-southeast-1.amazonaws.com/dev/ingredients')
    yield put(fetchIngredientsSuccess(ingredientsMap))
  } catch (error) {
    yield put(fetchIngredientsFailure(error.message))
  }
}

export default function* rootSaga() {
  yield takeEvery('FETCH_INGREDIENTS_START', fetchIngredientsStart)
}

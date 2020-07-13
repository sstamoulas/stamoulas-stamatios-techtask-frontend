import { all, call } from 'redux-saga/effects'

import ingredientsSagas from './ingredients/ingredients.sagas'

export default function* rootSaga() {
  yield all([
    call(ingredientsSagas),
  ])
}

import { call, put } from 'redux-saga/effects'

import { api, fetchIngredientsStart } from './ingredients.sagas'
import { fetchIngredientsSuccess, fetchIngredientsFailure } from './ingredients.actions';

describe('ingredients saga', () => {
  const generator = fetchIngredientsStart()
  const url = `${process.env.REACT_APP_BASE_URL}/ingredients`

  it('should trigger on FETCH_INGREDIENTS_START', () => {
    expect(generator.next().value).toEqual(call(api, url))
  })

  it('should fire fetchIngredientsSuccess if succesful', () => {
    const mockIngredientsMap = {
      'title': 'Cheese',
      'use-by': '2020-01-08',
    }

    expect(generator.next(mockIngredientsMap).value).toEqual(
      put(fetchIngredientsSuccess(mockIngredientsMap))
    )
  })

  it('should fire fetchIngredientsFailure if failure', () => {
    const newGenerator = fetchIngredientsStart();
    newGenerator.next();

    expect(newGenerator.throw({ message: 'error' }).value).toEqual(
      put(fetchIngredientsFailure('error'))
    );
  })
})

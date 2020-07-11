import { call, put } from 'redux-saga/effects'

import IngredientsActionTypes from './ingredients.types'
import { fetchIngredientsStart } from './ingredients.sagas'
import { fetchIngredientsSuccess } from './ingredients.actions';

describe('ingredients saga', () => {
  const generator = fetchIngredientsStart()
  const url = 'https://lb7u7svcm5.execute-api.ap-southeast-1.amazonaws.com/dev/ingredients'

  it('should trigger on FETCH_INGREDIENTS_START', () => {
    expect(generator.next().value).toEqual(call(fetch, url))
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
})

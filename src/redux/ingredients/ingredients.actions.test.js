import IngredientsActionTypes from './ingredients.types'
import { fetchIngredientsStart, fetchIngredientsSuccess, fetchIngredientsFailure } from './ingredients.actions'

describe('fetchIngredientsStart action', () => {
  it('should create the fetchIngredientsStart action', () => {
    expect(fetchIngredientsStart().type).toEqual(
      IngredientsActionTypes.FETCH_INGREDIENTS_START
    )
  })
})

describe('fetchIngredientsSuccess action', () => {
  it('should create the fetchIngredientsSuccess action', () => {
    const mockIngredientsMap = {
      'title': 'Cheese',
      'use-by': '2020-01-08',
    }

    const action = fetchIngredientsSuccess(mockIngredientsMap)

    expect(action.type).toEqual(IngredientsActionTypes.FETCH_INGREDIENTS_SUCCESS)
    expect(action.payload).toEqual(mockIngredientsMap)
  })
})

describe('fetchIngredientsFailure action', () => {
  it('should create the fetchIngredientsFailure action', () => {
    const action = fetchIngredientsFailure('error')

    expect(action.type).toEqual(IngredientsActionTypes.FETCH_INGREDIENTS_FAILURE)
    expect(action.payload).toEqual('error')
  })
})

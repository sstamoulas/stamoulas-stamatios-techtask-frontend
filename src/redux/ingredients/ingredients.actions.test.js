import IngredientsActionTypes from './ingredients.types'
import { fetchIngredientsStart } from './ingredients.actions'

describe('fetchIngredientsStart action', () => {
  it('should create the fetchIngredientsStart action', () => {
    expect(fetchIngredientsStart().type).toEqual(
      IngredientsActionTypes.FETCH_INGREDIENTS_START
    )
  })
})

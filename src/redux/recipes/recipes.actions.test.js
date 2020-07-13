import RecipesActionTypes from './recipes.types'
import { fetchRecipesStart } from './recipes.actions'

describe('fetchRecipesStart action', () => {
  it('should create the fetchRecipesStart action', () => {
    expect(fetchRecipesStart().type).toEqual(
      RecipesActionTypes.FETCH_RECIPES_START
    )
  })
})

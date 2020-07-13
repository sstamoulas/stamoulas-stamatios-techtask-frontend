import RecipesActionTypes from './recipes.types'
import { fetchRecipesStart, fetchRecipesSuccess } from './recipes.actions'

describe('fetchRecipesStart action', () => {
  it('should create the fetchRecipesStart action', () => {
    expect(fetchRecipesStart().type).toEqual(
      RecipesActionTypes.FETCH_RECIPES_START
    )
  })
})

describe('fetchRecipesSuccess action', () => {
  it('should create the fetchRecipesSuccess action', () => {
    const mockRecipesMap = {
      'title': 'Ham and Cheese Toastie',
      'ingredients': [
        'Ham',
        'Cheese',
        'Bread',
        'Butter'
      ]
    }

    const action = fetchRecipesSuccess(mockRecipesMap)

    expect(action.type).toEqual(RecipesActionTypes.FETCH_RECIPES_SUCCESS)
    expect(action.payload).toEqual(mockRecipesMap)
  })
})

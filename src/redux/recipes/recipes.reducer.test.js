import RecipesActionTypes from './recipes.types'
import recipesReducer from './recipes.reducer'

const initialState = {
  recipies: null,
  selectedIngredients: [],
  isFetching: false,
  errorMessage: undefined,
}

describe('recipesReducer', () => {
  it('should return initial state', () => {
    expect(recipesReducer(undefined, {})).toEqual(initialState)
  })

  it('should set isFetching to true and selectedIngredients to payload if fetchRecipesStart action', () => {
    const mockSelectedItems = ['Cheese', 'Bread']

    expect(
      recipesReducer(initialState, {
        type: RecipesActionTypes.FETCH_RECIPES_START,
        payload: mockSelectedItems,
      })
    ).toEqual({
      ...initialState,
      isFetching: true,
      selectedIngredients: mockSelectedItems,
    })
  })

  it('should set isFetching to false and recipes to payload if fetchRecipesSuccess action', () => {
    const mockRecipes = {
      'title': 'Ham and Cheese Toastie',
      'ingredients': [
        'Ham',
        'Cheese',
        'Bread',
        'Butter'
      ]
    }

    expect(
      recipesReducer(initialState, {
        type: RecipesActionTypes.FETCH_RECIPES_SUCCESS,
        payload: mockRecipes
      })
    ).toEqual({
      ...initialState,
      isFetching: false,
      recipes: mockRecipes
    })
  })

  it('should set isFetching to false and errorMessage to payload if fetchingRecipesFailure', () => {
    expect(
      recipesReducer(initialState, {
        type: RecipesActionTypes.FETCH_RECIPES_FAILURE,
        payload: 'error'
      })
    ).toEqual({
      ...initialState,
      isFetching: false,
      errorMessage: 'error'
    })
  })
})

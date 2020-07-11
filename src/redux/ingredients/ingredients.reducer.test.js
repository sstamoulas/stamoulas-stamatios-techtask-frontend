import IngredientsActionTypes from './ingredients.types'
import ingredientsReducer from './ingredients.reducer'

const initialState = {
  ingredients: null,
  isFetching: false,
  errorMessage: undefined
}

describe('ingredientsReducer', () => {
  it('should return initial state', () => {
    expect(ingredientsReducer(undefined, {})).toEqual(initialState)
  })

  it('should set isFetching to true if fetchIngredientsStart action', () => {
    expect(
      ingredientsReducer(initialState, {
        type: IngredientsActionTypes.FETCH_INGREDIENTS_START
      }).isFetching
    ).toBe(true);
  });
})
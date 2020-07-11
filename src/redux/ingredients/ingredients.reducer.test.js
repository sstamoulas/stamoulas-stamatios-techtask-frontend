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
})
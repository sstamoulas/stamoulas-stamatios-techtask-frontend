import RecipesActionTypes from './recipes.types'
import recipesReducer from './recipes.reducer'

const initialState = {
  selectedIngredients: [],
  isFetching: false,
}

describe('recipesReducer', () => {
  it('should return initial state', () => {
    expect(recipesReducer(undefined, {})).toEqual(initialState)
  })
})

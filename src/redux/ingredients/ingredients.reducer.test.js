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
    ).toBe(true)
  })

  it('should set isFetching to false and ingredients to payload if fetchIngredientsSuccess action', () => {
    const mockItems = [{ title: 'Cheese', 'use-by': '2020-01-08' }, { title: 'Bread', 'use-by': '2020-11-01' }]
    expect(
      ingredientsReducer(initialState, {
        type: IngredientsActionTypes.FETCH_INGREDIENTS_SUCCESS,
        payload: mockItems
      })
    ).toEqual({
      ...initialState,
      isFetching: false,
      ingredients: mockItems
    })
  })

  it('should set isFetching to false and errorMessage to payload if fetchingIngredientsFailure', () => {
    expect(
      ingredientsReducer(initialState, {
        type: IngredientsActionTypes.FETCH_INGREDIENTS_FAILURE,
        payload: 'error'
      })
    ).toEqual({
      ...initialState,
      isFetching: false,
      errorMessage: 'error'
    })
  })
})

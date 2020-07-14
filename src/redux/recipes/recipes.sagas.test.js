import { call, put, select } from 'redux-saga/effects'
import sagaHelper from 'redux-saga-testing'

import { fetchRecipesSuccess, fetchRecipesFailure } from './recipes.actions'
import { api, fetchRecipesStart } from './recipes.sagas'

const selectRecipes = (state: any) => state.recipes.selectedIngredients
const url = `${process.env.REACT_APP_BASE_URL}/recipes?ingredients=`
const mockSelectedItems = { recipes: { selectedIngredients: ['Cheese', 'Bread'] }}
const mockRecipesMap = {
  'title': 'Ham and Cheese Toastie',
  'ingredients': [
    'Ham',
    'Cheese',
    'Bread',
    'Butter'
  ]
}

describe('recipes saga', () => {
  describe('When the input doesn\'t throw an error', () => {
    const it = sagaHelper(fetchRecipesStart())

    it('should trigger on FETCH_RECIPES_START and recieve ingredients from state', (result) => {
      expect(JSON.stringify(result)).toEqual(JSON.stringify((select(selectRecipes))))

      return mockSelectedItems
    })

    it('should call the api', (result) => {
      const urlParams = mockSelectedItems.recipes.selectedIngredients.join(',')
      expect(result).toEqual(call(api, `${url}${urlParams}`))

      return mockRecipesMap
    })

    it('should fire fetchRecipesSuccess if succesful', (result) => {
      expect(result).toEqual(put(fetchRecipesSuccess(mockRecipesMap)))
    })
  })

  describe('When the input throws an error', () => {
    const it = sagaHelper(fetchRecipesStart())

    it('should trigger on FETCH_RECIPES_START and recieve ingredients from state', (result) => {
      expect(JSON.stringify(result)).toEqual(JSON.stringify((select(selectRecipes))))

      return mockSelectedItems
    })

    it('should call the api, which will throw an exception', (result) => {
      const urlParams = mockSelectedItems.recipes.selectedIngredients.join(',')
      expect(result).toEqual(call(api, `${url}${urlParams}`))

      return new Error('Something went wrong');
    })

    it('should fire fetchRecipesFailure if failure', (result) => {
      expect(result).toEqual(put(fetchRecipesFailure('Something went wrong')))
    })
  })
})

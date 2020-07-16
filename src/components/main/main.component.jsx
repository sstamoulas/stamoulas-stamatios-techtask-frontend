import React from 'react'
import { connect } from 'react-redux'

import Multiselect from 'react-widgets/lib/Multiselect'

import CustomLoader from './../custom-loader/custom-loader.component'
import DateInput from './../date-input/date-input.component'
import Card from './../card/card.component'

import { fetchRecipesStart } from '../../redux/recipes/recipes.actions'
import { formatDate } from '../../redux/mealDate/mealDate.utils'

import 'react-widgets/dist/css/react-widgets.css'
import './main.styles.scss'

const Main = ({ ingredients, mealDate, isFetching, selectedIngredients, fetchRecipesStart }) => {
  const disabledIngredients = ingredients ? 
    ingredients
    .filter((ingredient) => ingredient['use-by'] <= formatDate(mealDate))
    .map((ingredient) => ingredient.title) 
  : []

  return !isFetching ? (
      <div className="container">
        <div>
          <DateInput />
          <div className="select-container">
            <Multiselect
              data={ingredients}
              textField='title'
              valueField='title'
              disabled={disabledIngredients}
              defaultValue={selectedIngredients}
              onChange={(ingredients) => 
                fetchRecipesStart(ingredients.map((ingredient) => ingredient.title))
              }
            />
          </div>
          <Card />
        </div>
      </div>
    )
  :
    <CustomLoader />
}

const mapStateToProps = (state) => ({
  ingredients: state.ingredients.ingredients,
  mealDate: state.mealDate.mealDate,
  isFetching: state.recipes.isFetching,
  selectedIngredients: state.recipes.selectedIngredients,
})

const mapDispatchToProps = (dispatch) => ({
  fetchRecipesStart: (selectedIngredients) => 
    dispatch(fetchRecipesStart(selectedIngredients)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)

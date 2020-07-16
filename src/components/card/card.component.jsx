import React from 'react'
import { connect } from 'react-redux'

import CardTitle from './../card-title/card-title.component'
import CardList from './../card-list/card-list.component'

import './card.styles.scss'

const Card = ({ recipes }) => (
  <div className="card-container">
    {
      recipes ? 
        recipes.map((recipe, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              <CardTitle title={recipe.title} />
              <CardList ingredients={recipe.ingredients} />
            </div>
          </div>
        ))
      :
        <div>There are no recipes to display</div>
    }
  </div>
)

const mapStateToProps = (state) => ({
  recipes: state.recipes.recipes,
})

export default connect(mapStateToProps)(Card)

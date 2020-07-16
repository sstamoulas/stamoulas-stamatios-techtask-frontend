import React from 'react'

import CardListItem from './../card-list-item/card-list-item.component'

import './card-list.styles.scss'

const CardList = ({ ingredients }) => (
  <div className="flip-card-back">
    <div>Ingredients:</div>
    <ul className="list-container">
      {
        ingredients.map((ingredient) => (
          <CardListItem key={ingredient} ingredient={ingredient} />
        ))
      }
    </ul>
  </div>
)

export default CardList

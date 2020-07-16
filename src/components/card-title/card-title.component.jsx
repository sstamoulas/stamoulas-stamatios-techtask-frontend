import React from 'react'

import './card-title.styles.scss'

const CardTitle = ({ title }) => (
  <div className="flip-card-front">
    <div>{title}</div>
  </div>
)

export default CardTitle

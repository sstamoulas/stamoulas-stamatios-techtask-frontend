import React from 'react'
import { connect } from 'react-redux'

import { updateMealDate } from './../../redux/mealDate/mealDate.actions'
import { formatDate } from '../../redux/mealDate/mealDate.utils'

import './date-input.styles.scss'

const DateInput = ({ mealDate, updateMealDate }) => (
  <div className="input-container">
    <label htmlFor="date">Meal Date:&nbsp;&nbsp;</label>
    <input 
      type="date" 
      id="date"
      value={formatDate(mealDate)} 
      onChange={(e) => updateMealDate(new Date(e.target.value))} 
    />
  </div>
)

const mapStateToProps = (state) => ({
  mealDate: state.mealDate.mealDate,
})

const mapDispatchToProps = (dispatch) => ({
  updateMealDate: (mealDate) => dispatch(updateMealDate(mealDate)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DateInput)

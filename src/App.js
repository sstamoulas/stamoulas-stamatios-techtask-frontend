import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'

import Main from './components/main/main.component'
import CustomLoader from './components/custom-loader/custom-loader.component'

import { fetchIngredientsStart } from './redux/ingredients/ingredients.actions'

import './App.styles.scss'

const App = ({ isFetching, fetchIngredientsStart }) => {
  const isMounted = useRef(false)

  useEffect(() => {
    if (!isMounted.current) {
      fetchIngredientsStart()
      isMounted.current = true
    }
  }, [isFetching, fetchIngredientsStart])

  return isMounted.current && !isFetching ?
    (
      <div className='App'>
        <Main />
      </div>
    )
  :
    <CustomLoader />
}

const mapStateToProps = (state) => ({
  isFetching: state.ingredients.isFetching,
})

const mapDispatchToProps = (dispatch) => ({
  fetchIngredientsStart: () => dispatch(fetchIngredientsStart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

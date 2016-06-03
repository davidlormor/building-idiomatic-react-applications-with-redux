import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { setVisibilityFilter } from '../visibility-filter/actions'

import Link from './link'

const mapStateToProps = ({ visibilityFilter }, { filter }) => ({
  active: filter === visibilityFilter
})

const mapDispatchToProps = (dispatch, { filter }) => ({
  onClick() {
    dispatch(setVisibilityFilter(filter))
  }
})

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link)

export default FilterLink

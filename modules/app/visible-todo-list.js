import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import TodoList from './todo-list'
import { toggleTodo } from '../todo/actions'

import { getVisibleTodos } from './helpers'

const mapStateToProps = ({ todos, visibilityFilter }) => ({
  todos: getVisibleTodos(todos, visibilityFilter)
})

const mapDispatchToProps = (dispatch) => ({
  onTodoClick(id) {
    dispatch(toggleTodo(id))
  }
})

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default VisibleTodoList

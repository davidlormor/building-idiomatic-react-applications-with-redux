// Dependencies
import React, { Component } from 'react'

// Components
import TodoList from '../todo-list'

// Class Definition
export default class VisibleTodoList extends Component {
  componentDidMount () {
    this.fetchData()
  }

  componentDidUpdate (prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData()
    }
  }

  fetchData () {
    const { fetchTodos, filter } = this.props
    fetchTodos(filter)
  }

  render () {
    const { toggleTodo, ...rest } = this.props

    return <TodoList
      {...rest}
      onTodoClick={toggleTodo}
    />
  }
}

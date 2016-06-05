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
    const { fetchTodos, filter, requestTodos } = this.props
    requestTodos(filter)
    fetchTodos(filter)
  }

  render () {
    const { toggleTodo, todos, isFetching } = this.props
    if (isFetching && !todos.length) return (<p>Loading...</p>)

    return <TodoList
      todos={todos}
      onTodoClick={toggleTodo}
    />
  }
}

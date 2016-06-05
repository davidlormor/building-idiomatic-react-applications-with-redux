// Dependencies
import React, { Component } from 'react'

// Components
import TodoList from '../todo-list'
import Error from '../error'

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
    fetchTodos(filter).then(() => console.log(`${filter} todos fetched!`))
  }

  render () {
    const { errorMessage, isFetching, toggleTodo, todos } = this.props

    if (isFetching && !todos.length) return (<p>Loading...</p>)

    if (errorMessage && !todos.length) {
      return (
        <Error
          message={errorMessage}
          onRetry={() => this.fetchData()}
        />
      )
    }

    return <TodoList
      todos={todos}
      onTodoClick={toggleTodo}
    />
  }
}

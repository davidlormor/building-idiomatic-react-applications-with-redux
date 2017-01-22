// Dependencies
import React, { Component } from 'react'

// Components
import TodoList from './todo-list'
import Error from 'components/error'

// Class Definition
class VisibleTodoList extends Component {
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
// Dependencies
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { getVisibleTodos, getErrorMessage, getIsFetching } from 'reducers'
import * as actions from 'actions'

// Mappings
const mapStateToProps = (state, { params }) => {
  const filter = params.filter || 'all'

  return {
    errorMessage: getErrorMessage(state, filter),
    filter,
    isFetching: getIsFetching(state, filter),
    todos: getVisibleTodos(state, filter)
  }
}

// Export
export default withRouter(connect(
  mapStateToProps,
  actions
)(VisibleTodoList))

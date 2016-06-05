import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { fetchTodos } from '../../api'

import TodoList from './todo-list'
import { toggleTodo } from '../todo/actions'

import { getVisibleTodos } from '../reducers'

class VisibleTodoList extends Component {
  componentDidMount () {
    fetchTodos(this.props.filter).then(todos => console.log(this.props.filter, todos))
  }

  componentDidUpdate ({ filter: prevFilter }) {
    const newFilter = this.props.filter

    if (newFilter !== prevFilter) {
      fetchTodos(newFilter).then(todos => {
        console.log(newFilter, todos)
      })
    }
  }

  render () {
    return <TodoList {...this.props} />
  }
}

const mapStateToProps = (state, { params }) => {
  const filter = params.filter || 'all'

  return {
    todos: getVisibleTodos(state, filter),
    filter
  }
}

const ExportedComponent = withRouter(connect(
  mapStateToProps,
  { onTodoClick: toggleTodo }
)(VisibleTodoList))

export default ExportedComponent

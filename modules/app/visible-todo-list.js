import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { fetchTodos } from '../../api'

import TodoList from './todo-list'
import { toggleTodo } from '../todo/actions'
import { receiveTodos } from '../todos/actions'

import { getVisibleTodos } from '../reducers'

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
    const { filter, receiveTodos } = this.props
    fetchTodos(this.props.filter).then(todos => receiveTodos(filter, todos))
  }

  render () {
    const { toggleTodo, ...rest } = this.props

    return <TodoList
      {...rest}
      onTodoClick={toggleTodo}
    />
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
  {
    onTodoClick: toggleTodo,
    receiveTodos
  }
)(VisibleTodoList))

export default ExportedComponent

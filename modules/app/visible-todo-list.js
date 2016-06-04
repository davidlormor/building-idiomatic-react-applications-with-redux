import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import TodoList from './todo-list'
import { toggleTodo } from '../todo/actions'

import { getVisibleTodos } from './helpers'

const mapStateToProps = ({ todos }, { params }) => ({
  todos: getVisibleTodos(todos, params.filter || 'all')
})

const mapDispatchToProps = (dispatch) => ({
  onTodoClick (id) {
    dispatch(toggleTodo(id))
  }
})

const VisibleTodoList = withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoList))

export default VisibleTodoList

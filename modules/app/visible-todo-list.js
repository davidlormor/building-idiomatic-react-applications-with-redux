import { connect } from 'react-redux'

import TodoList from './todo-list'
import { toggleTodo } from '../todo/actions'

import { getVisibleTodos } from './helpers'

const mapStateToProps = (
  { todos },
  { filter }
) => ({
  todos: getVisibleTodos(todos, filter)
})

const mapDispatchToProps = (dispatch) => ({
  onTodoClick (id) {
    dispatch(toggleTodo(id))
  }
})

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default VisibleTodoList

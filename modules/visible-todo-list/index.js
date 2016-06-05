// Dependencies
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { getVisibleTodos, getErrorMessage, getIsFetching } from '../todos/reducer'
import * as todosActions from '../todos/actions'
import { toggleTodo } from '../todo/actions'
import VisibleTodoList from './component'

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
  {
    ...todosActions,
    toggleTodo
  }
)(VisibleTodoList))

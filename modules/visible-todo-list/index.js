// Dependencies
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { getVisibleTodos } from '../todos/reducer'
import * as todosActions from '../todos/actions'
import { toggleTodo } from '../todo/actions'
import VisibleTodoList from './component'

// Mappings
const mapStateToProps = (state, { params }) => {
  const filter = params.filter || 'all'

  return {
    todos: getVisibleTodos(state, filter),
    filter
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

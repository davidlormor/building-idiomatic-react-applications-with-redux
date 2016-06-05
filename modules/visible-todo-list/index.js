// Dependencies
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { getVisibleTodos, getErrorMessage, getIsFetching } from '../todos/reducer'
import * as actions from '../actions'
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
  actions
)(VisibleTodoList))

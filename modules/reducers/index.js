import { combineReducers } from 'redux'
import todos, * as fromTodos from '../todos/reducer'

const reducers = combineReducers({
  todos
})

export default reducers

export const getVisibleTodos = (state, filter) =>
  fromTodos.getVisibleTodos(state.todos, filter)

import { combineReducers } from 'redux'
import todo from '../todo/reducer'

export const byId = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
    case 'TOGGLE_TODO':
      return {
        ...state,
        [action.id]: todo(state[action.id], action)
      }
    default:
      return state
  }
}

// Not sure why we need this...
// Can't we just map the byId object to an array directly (i.e. via lodash, etc.)?
export const allIds = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.id]
    default:
      return state
  }
}

const todos = combineReducers({
  byId,
  allIds
})

export default todos

const getAllTodos = state =>
  state.allIds.map(id => state.byId[id])

export const getVisibleTodos = (state, filter) => {
  const allTodos = getAllTodos(state)
  switch (filter) {
    case 'all':
      return allTodos
    case 'completed':
      return allTodos.filter(todo => todo.completed)
    case 'active':
      return allTodos.filter(todo => !todo.completed)
    default:
      throw new Error(`Unknown filter: ${filter}.`)
  }
}

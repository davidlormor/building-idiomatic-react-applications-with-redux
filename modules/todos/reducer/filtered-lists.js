// Dependencies
import { combineReducers } from 'redux'

// Create a reducer function for the given filter name
export const createList = filter => {
  const ids = (state = [], action) => {
    if (action.filter !== filter) return state

    switch (action.type) {
      case 'RECEIVE_TODOS':
        return action.response.map(todo => todo.id)
      default:
        return state
    }
  }

  const isFetching = (state = false, action) => {
    if (action.filter !== filter) return state

    switch (action.type) {
      case 'REQUEST_TODOS':
        return true
      case 'RECEIVE_TODOS':
        return false
      default:
        return state
    }
  }

  return combineReducers({
    ids,
    isFetching
  })
}

// Return a list of todo IDs for the given state and filter
export const getIds = (state) => state.ids

// Return whether a list is currently awaiting response from the server
export const getIsFetching = (state) => state.isFetching

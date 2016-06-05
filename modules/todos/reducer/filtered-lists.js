// Dependencies
import { combineReducers } from 'redux'

// Create a reducer function for the given filter name
export const createList = filter => {
  const ids = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_TODOS_SUCCESS':
        return filter === action.filter
          ? action.response.result
          : state
      case 'ADD_TODO_SUCCESS':
        return filter !== 'completed'
          ? [...state, action.response.id]
          : state
      default:
        return state
    }
  }

  const isFetching = (state = false, action) => {
    if (action.filter !== filter) return state

    switch (action.type) {
      case 'FETCH_TODOS_REQUEST':
        return true
      case 'FETCH_TODOS_SUCCESS':
      case 'FETCH_TODOS_FAILURE':
        return false
      default:
        return state
    }
  }

  const errorMessage = (state = null, action) => {
    if (filter !== action.filter) return state

    switch (action.type) {
      case 'FETCH_TODOS_FAILURE':
        return action.message
      case 'FETCH_TODOS_REQUEST':
      case 'FETCH_TODOS_SUCCESS':
        return null
      default:
        return state
    }
  }

  return combineReducers({
    errorMessage,
    ids,
    isFetching
  })
}

// Return a list of todo IDs for the given state and filter
export const getIds = (state) => state.ids

// Return whether a list is currently awaiting response from the server
export const getIsFetching = (state) => state.isFetching

export const getErrorMessage = (state) => state.errorMessage

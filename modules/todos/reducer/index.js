import { combineReducers } from 'redux'
import cache, { getTodo } from './cache'
import {
  createList as createListForFilter,
  getIds as getIdsByFilter,
  getIsFetching as listIsFetching,
  getErrorMessage as getErrorMessageForFilter
} from './filtered-lists'

const listByFilter = combineReducers({
  all: createListForFilter('all'),
  active: createListForFilter('active'),
  completed: createListForFilter('completed')
})

export default combineReducers({
  cache,
  listByFilter
})

export const getVisibleTodos = (state, filter) =>
  getIdsByFilter(state.listByFilter[filter]).map(id => getTodo(state, id))

export const getIsFetching = (state, filter) =>
  listIsFetching(state.listByFilter[filter])

export const getErrorMessage = (state, filter) =>
  getErrorMessageForFilter(state.listByFilter[filter])

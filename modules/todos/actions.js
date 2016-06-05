import * as api from '../../api'
import { getIsFetching } from './reducer'

const requestTodos = (filter) => ({
  type: 'REQUEST_TODOS',
  filter
})

const receiveTodos = (filter, response) => ({
  type: 'RECEIVE_TODOS',
  filter,
  response
})

export const fetchTodos = filter => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) return Promise.resolve()

  dispatch(requestTodos(filter))

  return api
    .fetchTodos(filter)
    .then(response => {
      dispatch(receiveTodos(filter, response))
    })
}

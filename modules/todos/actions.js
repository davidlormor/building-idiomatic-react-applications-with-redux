import * as api from '../../api'
import { getIsFetching } from './reducer'

export const fetchTodos = filter => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) return Promise.resolve()

  dispatch({
    type: 'FETCH_TODOS_REQUEST',
    filter
  })

  return api
    .fetchTodos(filter)
    .then(
      response => {
        dispatch({
          type: 'FETCH_TODOS_SUCCESS',
          filter,
          response
        })
      },
      error => {
        dispatch({
          type: 'FETCH_TODOS_FAILURE',
          filter,
          message: error.message || 'Something went wrong'
        })
      }
    )
}

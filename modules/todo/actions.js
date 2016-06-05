import * as api from '../../api'

export const addTodo = text => (dispatch) => {
  api.addTodo(text).then(response => {
    dispatch({
      type: 'ADD_TODO_SUCCESS',
      response
    })
  })
}

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

import * as api from '../../api'

const receiveTodos = (filter, response) => ({
  type: 'RECEIVE_TODOS',
  filter,
  response
})

export const fetchTodos = filter =>
  api.fetchTodos(filter).then(response => receiveTodos(filter, response))

export default (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_TODOS':
      const nextState = { ...state }

      action.response.forEach(todo => {
        nextState[todo.id] = todo
      })
      return nextState
    default:
      return state
  }
}

export const getTodo = (state, id) => state.cache[id]

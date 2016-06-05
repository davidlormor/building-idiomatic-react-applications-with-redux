// Create a reducer function for the given filter name
export const createList = filter => (state = [], action) => {
  if (action.filter !== filter) return state

  switch (action.type) {
    case 'RECEIVE_TODOS':
      return action.response.map(todo => todo.id)
    default:
      return state
  }
}

// Return a list of todo IDs for the given state and filter
export const getIds = (state) => state

export default (todo = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return newTodo(action)
    case 'TOGGLE_TODO':
      if (todo.id !== action.id) {
        return todo
      }

      return toggle(todo)
    default:
      return todo
  }
}

const toggle = todo => ({
  ...todo,
  completed: !todo.completed
})

const newTodo = ({ id, text, completed = false }) => ({ id, text, completed })

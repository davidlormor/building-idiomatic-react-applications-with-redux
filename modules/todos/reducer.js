import todo from '../todo/reducer'

export default (todos = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...todos,
        todo(null, action)
      ]
    case 'TOGGLE_TODO':
      return todos.map((t) => todo(t, action))
    default:
      return todos
  }
}

export const getVisibleTodos = (
  todos,
  filter
) => {
  switch (filter) {
    case 'all':
      return todos
    case 'completed':
      return todos.filter((t) => t.completed)
    case 'active':
      return todos.filter((t) => !t.completed)
  }
}

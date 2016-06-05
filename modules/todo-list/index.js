import React from 'react'

import Todo from '../todo/component'

export default ({ onTodoClick, todos }) => (
  <ul>
    {todos.map(todo => (
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    ))}
  </ul>
)

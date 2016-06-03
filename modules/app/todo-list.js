import React from 'react'

import Todo from '../todo/component'

const TodoList = ({ onTodoClick, todos }) => (
  <ul>
    {todos.map((todo) => (
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    ))}
  </ul>
)

export default TodoList

import React from 'react'

const Todo = ({
  completed,
  onClick,
  text
}) => {
  return (
    <li onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}>
      {text}
    </li>
  )
}

export default Todo

// Dependencies
import React from 'react'
import { connect } from 'react-redux'

// Components
import { addTodo } from 'actions'

let input

const AddTodo = ({ dispatch }) => (
  <div>
    <input ref={node => {
      input = node
    }} />
    <button onClick={() => {
      dispatch(addTodo(input.value))
      input.value = ''
    }}>
      Add Todo
    </button>
  </div>
)

export default connect()(AddTodo)

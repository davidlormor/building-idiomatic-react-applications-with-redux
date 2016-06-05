import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../todos/actions'

let input;

const AddTodo = ({ dispatch }) => (
  <div>
    <input ref={node => {
      input = node
    }} />
    <button onClick={() => {
      dispatch(addTodo(input.value))
      input.value= ''
    }}>
      Add Todo
    </button>
  </div>
)

export default connect()(AddTodo)

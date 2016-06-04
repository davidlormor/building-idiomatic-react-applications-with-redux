import React from 'react'

import VisibleTodoList from './visible-todo-list'
import AddTodo from './add-todo'
import Footer from './footer'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App

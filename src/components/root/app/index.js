import React from 'react'

import VisibleTodoList from 'components/visible-todo-list'
import AddTodo from 'components/add-todo'
import Footer from 'components/footer'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App

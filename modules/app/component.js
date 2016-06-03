import React, { Component } from 'react'
import store from '../../store'

import VisibleTodoList from './visible-todo-list'
import AddTodo from './add-todo'
import Footer from './footer'

const App = () => (
  <div>
    <AddTodo/>
    <VisibleTodoList/>
    <Footer/>
  </div>
)

export default App

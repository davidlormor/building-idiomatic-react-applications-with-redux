import React, { Component } from 'react'

import VisibleTodoList from './visible-todo-list'
import AddTodo from './add-todo'
import Footer from './footer'

class App extends Component {
  render () {
    const { params } = this.props

    return (
      <div>
        <AddTodo />
        <VisibleTodoList filter={params.filter || 'all'} />
        <Footer />
      </div>
    )
  }
}

export default App

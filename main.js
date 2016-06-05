// Dependencies
import React from 'react'
import { render } from 'react-dom'
import { fetchTodos } from './api'

// Get initial state from API
fetchTodos('all').then((todos) => {
  console.log(todos)
})

// Store
import { configureStore } from './store'
const store = configureStore()

// Components
import Root from './modules/root'

// Module
render(
  <Root store={store} />,
  document.getElementById('app')
)

// Dependencies
import React from 'react'
import { render } from 'react-dom'

// Store
import { configureStore } from 'store'
const store = configureStore()

// Components
import Root from 'components/root'

// Module
render(
  <Root store={store} />,
  document.getElementById('app')
)

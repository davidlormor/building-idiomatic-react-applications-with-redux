import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'

import store from './store'

import App from './modules/app/component'

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
)

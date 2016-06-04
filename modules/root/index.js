// Dependencies
import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

// Components
import App from '../app'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App} />
    </Router>
  </Provider>
)

export default Root

import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from 'reducers'

export const configureStore = () => {
  // Promise middlware
  const middlewares = [thunk]

  // Conditionally apply logging middlware when not in production
  if (process.env.NODE_ENV !== 'production') middlewares.push(createLogger())

  // Support both having redux devtools extension enabled and not
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  // Create store
  return createStore(
    reducer,
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  )
}

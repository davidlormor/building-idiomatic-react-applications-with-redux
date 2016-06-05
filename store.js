import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './modules/reducers'

export const configureStore = () => {
  // Promise middlware
  const middlewares = [thunk]

  // Conditionally apply logging middlware when not in production
  if (process.env.NODE_ENV !== 'production') middlewares.push(createLogger())

  // Create store
  return createStore(
    reducer,
    compose(
      applyMiddleware(...middlewares),
      window.devToolsExtension && window.devToolsExtension()
    )
  )
}

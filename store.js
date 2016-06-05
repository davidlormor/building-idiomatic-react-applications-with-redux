import { applyMiddleware, compose, createStore } from 'redux'
import createLogger from 'redux-logger'
import reducer from './modules/todos/reducer'

const thunk = (store) => (next) => (action) =>
  typeof action === 'function'
    ? action(store.dispatch)
    : next(action)

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

import { createStore } from 'redux'
import reducer from './modules/reducers'

const logger = store => next => {
  if (!console.group) return next

  return action => {
    console.group(action.type)
    console.log('%c prev state', 'color: gray', store.getState())
    console.log('%c action', 'color: blue', action)
    const returnValue = next(action)
    console.log('%c next state', 'color: green', store.getState())
    console.groupEnd(action.type)
    return returnValue
  }
}

const promise = store => next => action => {
  if (typeof action.then === 'function') return action.then(next)

  return next(action)
}

const wrapDispatchwithMiddlewares = (store, middlewares) => {
  middlewares.slice().reverse().forEach(middleware => {
    store.dispatch = middleware(store)(store.dispatch)
  })
}

export const configureStore = () => {
  const store = createStore(
    reducer,
    {},
    window.devToolsExtension && window.devToolsExtension()
  )

  const middlewares = [promise]

  if (process.env.NODE_ENV !== 'production') middlewares.push(logger)

  wrapDispatchwithMiddlewares(store, middlewares)

  return store
}

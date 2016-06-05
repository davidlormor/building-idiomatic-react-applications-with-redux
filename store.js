import { createStore } from 'redux'
import reducer from './modules/reducers'
import { loadState, saveState } from './local-storage'
import throttle from 'lodash/throttle'

const addLoggingToDispatch = (store) => {
  const rawDispatch = store.dispatch

  if (!console.group) return rawDispatch

  return (action) => {
    console.group(action.type)
    console.log('%c prev state', 'color: gray', store.getState())
    console.log('%c action', 'color: blue', action)
    const returnValue = rawDispatch(action)
    console.log('%c next state', 'color: green', store.getState())
    console.groupEnd(action.type)
    return returnValue
  }
}

export const configureStore = () => {
  const initialState = loadState()

  const store = createStore(
    reducer,
    initialState,
    window.devToolsExtension && window.devToolsExtension()
  )

  if (process.env.NODE_ENV !== 'production') store.dispatch = addLoggingToDispatch(store)

  store.subscribe(throttle(() => {
    console.log('saving...')
    saveState({
      todos: store.getState().todos
    })
  }, 1000))

  return store
}

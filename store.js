import { compose, createStore } from 'redux'
import reducers from './modules/reducers'
import { loadState, saveState } from './local-storage'
import throttle from 'lodash/throttle'

export const configureStore = () => {
  const initialState = loadState()

  const store = createStore(reducers, initialState, compose(
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  ))

  store.subscribe(throttle(() => {
    console.log('saving...')
    saveState({
      todos: store.getState().todos
    })
  }, 1000))

  return store
}

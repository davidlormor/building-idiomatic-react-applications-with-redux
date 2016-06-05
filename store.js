import { createStore } from 'redux'
import reducer from './modules/reducers'
import { loadState, saveState } from './local-storage'
import throttle from 'lodash/throttle'

export const configureStore = () => {
  const initialState = loadState()

  const store = createStore(
    reducer,
    initialState,
    window.devToolsExtension && window.devToolsExtension()
  )

  store.subscribe(throttle(() => {
    console.log('saving...')
    saveState({
      todos: store.getState().todos
    })
  }, 1000))

  return store
}

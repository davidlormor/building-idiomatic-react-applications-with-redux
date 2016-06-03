import { combineReducers, compose, createStore } from 'redux'
import todos from './modules/todos/reducer'
import visibilityFilter from './modules/visibility-filter/reducer'
import { loadState, saveState } from './local-storage'
import throttle from 'lodash/throttle'

const reducers = combineReducers({
  todos,
  visibilityFilter
})

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

export default store

import { combineReducers, compose, createStore } from 'redux'
import todos from './modules/todos/reducer'
import visibilityFilter from './modules/visibility-filter/reducer'

const reducers = combineReducers({
  todos,
  visibilityFilter
})

const initialState = {
  todos: [
    {
      id: '0',
      text: 'Welcome back!',
      completed: false
    }
  ]
}

const store = createStore(reducers, initialState, compose(
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
))
export default store

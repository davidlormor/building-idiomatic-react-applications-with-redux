import expect from 'expect'
import deepFreeze from 'deep-freeze'

import todos from './modules/todos/reducer'

describe('Reducers | todos', function () {
  it('adds a todo', function () {
    const stateBefore = []
    const action = {
      type: 'ADD_TODO',
      id: 0,
      text: 'Learn Redux'
    }
    const stateAfter = [
      {
        id: 0,
        text: 'Learn Redux',
        completed: false
      }
    ]

    deepFreeze(stateBefore)
    deepFreeze(action)

    expect(
      todos(stateBefore, action)
    ).toEqual(stateAfter)
  })

  it('toggles a todo', function () {
    const stateBefore = [
      {
        id: 0,
        text: 'Learn Redux',
        completed: false
      },
      {
        id: 1,
        text: 'Go shopping',
        completed: false
      }
    ]
    const action = {
      type: 'TOGGLE_TODO',
      id: 1
    }
    const stateAfter = [
      {
        id: 0,
        text: 'Learn Redux',
        completed: false
      },
      {
        id: 1,
        text: 'Go shopping',
        completed: true
      }
    ]

    deepFreeze(stateBefore)
    deepFreeze(action)

    expect(
      todos(stateBefore, action)
    ).toEqual(stateAfter)
  })
})

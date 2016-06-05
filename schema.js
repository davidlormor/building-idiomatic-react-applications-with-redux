import { Schema, arrayOf } from 'normalizr'

export const Todo = new Schema('todos')
export const Todos = arrayOf(Todo)

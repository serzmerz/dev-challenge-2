import {combineReducers} from 'redux'
import todoList from './todoList'
import env from './env'
import libraries from './libraries'
import books from './books'

export default combineReducers({
  todoList,
  env,
  libraries,
  books
})

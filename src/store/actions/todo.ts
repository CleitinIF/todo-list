import { ADD_TODO, TodoActionTypes, END_TODO, REMOVE_TODO } from '../reduces/types'

export function addTodo (content: string): TodoActionTypes {
  return {
    type: ADD_TODO,
    payload: content
  }
}

export function endTodo (id: string): TodoActionTypes {
  return {
    type: END_TODO,
    payload: id
  }
}

export function removeTodo (id: string): TodoActionTypes {
  return {
    type: REMOVE_TODO,
    payload: id
  }
}

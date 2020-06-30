import { ADD_TODO, Todo, TodoActionTypes, END_TODO, REMOVE_TODO } from '../reduces/types'

export function addTodo (todo: Todo): TodoActionTypes {
  return {
    type: ADD_TODO,
    payload: todo
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

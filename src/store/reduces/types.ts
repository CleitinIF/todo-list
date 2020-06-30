export const ADD_TODO = '@todo/ADD_TODO'
export const END_TODO = '@todo/END_TODO'
export const REMOVE_TODO = '@todo/REMOVE_TODO'

export interface Todo {
  id: string;
  status: 'ended' | 'opened';
  content: string;
}

export interface AddTodoAction {
  type: typeof ADD_TODO
  payload: Todo
}

export interface EndTodoAction {
  type: typeof END_TODO
  payload: string
}

export interface RemoveTodoAction {
  type: typeof REMOVE_TODO
  payload: string
}

export type TodoActionTypes = AddTodoAction | EndTodoAction | RemoveTodoAction

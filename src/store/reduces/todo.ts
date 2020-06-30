import produce from 'immer'
import { v4 as uuidv4 } from 'uuid'
import { Todo, TodoActionTypes, ADD_TODO, END_TODO, REMOVE_TODO } from './types'

const INITIAL_STATE: Todo[] = []

const myReducer = (state = INITIAL_STATE, action: TodoActionTypes) => {
  return produce(state, draft => {
    switch (action.type) {
      case ADD_TODO: {
        draft.push({
          id: uuidv4(),
          content: action.payload,
          status: 'opened'
        })
        break
      }
      case END_TODO: {
        const todoIndex = draft.findIndex((todo: Todo) => todo.id === action.payload)
        draft[todoIndex] = {
          ...draft[todoIndex],
          status: 'ended'
        }
        break
      }
      case REMOVE_TODO: {
        const newState = draft.filter((todo: Todo) => todo.id !== action.payload)
        return newState
      }
      default: return draft
    }
  })
}

export default myReducer

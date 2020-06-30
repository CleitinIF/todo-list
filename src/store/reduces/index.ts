import todo from './todo'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  todo
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>

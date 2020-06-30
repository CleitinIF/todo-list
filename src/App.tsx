import React from 'react'
import AddTodo from './components/add-todo'
import { Provider } from 'react-redux'
import store from './store'

function App () {
  return (
    <Provider store={store}>
      <AddTodo />
    </Provider>
  )
}

export default App

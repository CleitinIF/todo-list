import React from 'react'
import AddTodo from './components/add-todo'
import { Provider } from 'react-redux'
import store from './store'
import ListTodos from './components/list-todos'
import styled from 'styled-components'

function App () {
  return (
    <Provider store={store}>
      <AddTodo />
      <Container>
        <ListTodos />
      </Container>
    </Provider>
  )
}

const Container = styled.div`
  width: 100%;
  padding: 20px;

  box-sizing: border-box;
`

export default App

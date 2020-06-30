import React from 'react'
import { Container, ItemContainer } from './styles'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/reduces'

export default function ListTodos () {
  const todos = useSelector((state: RootState) => state.todo)

  return (
    <Container>
      {todos.map((todo) => (
        <ItemContainer key={todo.id}>
          {todo.content}
        </ItemContainer>
      ))}
    </Container>
  )
}

import React from 'react'
import { AddTodoContainer, Button, Input } from './styles'

export default function AddTodo () {
  return (
    <AddTodoContainer>
      <Input placeholder="Qual a tarefa de hoje?" spellCheck="false" autoFocus></Input>
      <Button>
        <i className="material-icons">add</i>
      </Button>
    </AddTodoContainer>
  )
}

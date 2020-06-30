import React, { useState } from 'react'
import { AddTodoContainer, Button, Input } from './styles'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../store/actions/todo'

export default function Homepage () {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget
    setValue(value)
  }

  const handleClick = () => {
    dispatch(addTodo(value))
    setValue('')
  }

  return (
    <AddTodoContainer>
      <Input placeholder="Qual a tarefa de hoje?" spellCheck="false" autoFocus value={value} onChange={handleChange}></Input>
      <Button>
        <i className="material-icons" onClick={handleClick}>add</i>
      </Button>
    </AddTodoContainer>
  )
}

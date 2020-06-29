import styled from 'styled-components'

export const AddTodoContainer = styled.div`
  width: 100%;
  height: 200px;
  background: #FAFAFA;
  box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.55);

  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Input = styled.input`
  width: 400px;
  height: 30px;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  padding: 5px 10px;

  box-sizing: content-box;

  transition: 150ms;

  &:focus, &:hover {
    border: 1px solid #ff7039;
    outline: none;
  }
`

export const Button = styled.button`
  background: transparent;
  border: none;

  padding: 7px 10px;
  margin-left: 10px;

  transition: 150ms;

  border-radius: 3px;

  &:hover {
    background: #ff7039;

    i {
      color: #FFF;
    }
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }
`

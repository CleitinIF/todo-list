import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;

  flex: 1;
`

export const ItemContainer = styled.div`
  min-width: 150px;
  min-height: 100px;

  max-width: 250px;
  max-height: 200px;

  background: #FFF;
  padding: 10px;

  margin-left: 20px;
  margin-bottom: 20px;

  box-shadow: 2px 2px 10px 1px rgba(0,0,0,0.25);
`

import React from 'react'
import styled from 'styled-components'

import TodoList from './TodoList'

//styled-component
const Container = styled.div`
  margin: 1rem;
  font-family: Arial, Helvetica, sans-serif, Nunito, 'Nunito-Bold, sans-serif';
  color: '#333333';
  width: 100vw;
  height: 100vh;
`

const App = () => {
  return (
    <Container>
      <TodoList />
    </Container>
  )
}

export default App

import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { addTodoRequest } from './thunks/thunk'
import { getTodos } from './selectors/selector'

//styled-components
const FormContainer = styled.div`
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 4px 8px grey;
`

const Input = styled.input`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-bottom: 2px solid #ddd;
  border-radius: 8px;
  width: 70%;
  outline: none;
`

const Button = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  margin-left: 8px;
  width: 20%;
  background-color: #22ee22;
`

const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [value, setValue] = useState('')

  return (
    <FormContainer>
      <Input
        className='new-todo-input'
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='Type'
      />
      <Button
        className='new-todo-button'
        onClick={() => {
          const isDuplicate = todos.some(
            (todo) => todo.text.toLowerCase() === value.toLowerCase()
          )
          if (!isDuplicate) {
            onCreatePressed(value)
            setValue('')
          }
        }}
      >
        Create Todo
      </Button>
    </FormContainer>
  )
}

const mapStateToProps = (state) => ({
  todos: getTodos(state),
})

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(addTodoRequest(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm)

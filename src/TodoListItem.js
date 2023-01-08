import React from 'react'
import styled from 'styled-components'

//style-components
const TodoItemContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  border-bottom: ${(props) =>
    new Date(props.createdAt) > new Date(Date.now() - 864000 * 5)
      ? 'none'
      : '1px solid blue'};
  margin-top: 8px;
  padding: 16px;
  position: relative;
  box-shadow: 0 4px 8px grey;
`

const ButtonContainer = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px;
`

const AddButton = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  display: inline-block;
  background-color: #22ee22;
`

const RemoveButton = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  display: inline-block;
  background-color: #ee2222;
  margin-left: 8px;
`

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
  return (
    <TodoItemContainer createdAt={todo.createdAt}>
      <h3 style={{ fontSize: '15px', color: 'goldenrod' }}>{todo.text}</h3>
      <p style={{ fontSize: '10px', color: 'gainsboro' }}>
        Created At : {new Date(todo.createdAt).toLocaleDateString()}
      </p>

      <ButtonContainer>
        {todo.isCompleted ? null : (
          <AddButton
            className='completed-button'
            onClick={() => onCompletedPressed(todo.id)}
          >
            Mark as Complete
          </AddButton>
        )}
        <RemoveButton
          className='remove-button'
          onClick={() => onRemovePressed(todo.id)}
        >
          Remove
        </RemoveButton>
      </ButtonContainer>
    </TodoItemContainer>
  )
}

export default TodoListItem

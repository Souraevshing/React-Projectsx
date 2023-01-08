import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import TodoListItem from './TodoListItem'
import NewTodoForm from './NewTodoForm'
import {
  Alert,
  loadTodos,
  removeTodoRequest,
  markTodoAsCompletedRequest,
} from './thunks/thunk'
import {
  getCompleteTodos,
  getIncompleteTodos,
  getTodosLoading,
} from './selectors/selector'

//styled-components
const ListWrapper = styled.div`
  max-width: 700px;
  margin: auto;
`

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #0b0b0b;
  display: grid;
  place-items: center;
  align-items: center;
`

const Loader = styled.div`
  border: 16px solid #e3e3e3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 140px;
  height: 140px;
  align-items: center;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`

const TodoList = ({
  inCompleteTodos,
  completeTodos,
  onRemovePressed,
  onCompletedPressed,
  onDisplay,
  Loading,
  startLoadingTodos,
}) => {
  useEffect(() => {
    startLoadingTodos()
  }, [])

  const loading = (
    <>
      <LoadingWrapper />
      <Loader />
    </>
  )

  const content = (
    <ListWrapper>
      <NewTodoForm />
      <h3 style={{ color: 'rosybrown' }}>Incomplete Todos:</h3>
      {inCompleteTodos.map((todo, index) => {
        return (
          <TodoListItem
            key={index}
            todo={todo}
            onRemovePressed={onRemovePressed}
            onCompletedPressed={onCompletedPressed}
          />
        )
      })}
      <h3 style={{ color: 'greenyellow' }}>Complete Todos:</h3>
      {completeTodos.map((todo, index) => {
        return (
          <TodoListItem
            key={index}
            todo={todo}
            onRemovePressed={onRemovePressed}
            onCompletedPressed={onCompletedPressed}
          />
        )
      })}
    </ListWrapper>
  )
  return Loading ? loading : content
}

const mapStateToProps = (state) => ({
  completeTodos: getCompleteTodos(state),
  inCompleteTodos: getIncompleteTodos(state),
  Loading: getTodosLoading(state),
})

const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  onCompletedPressed: (id) => dispatch(markTodoAsCompletedRequest(id)),
  onDisplay: (text) => dispatch(Alert(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

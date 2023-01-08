import {
  createTodo,
  removeTodo,
  loadTodoFail,
  loadTodosProgress,
  loadTodoSuccess,
  markTodoCompleted,
} from '../actions/actions'

const Alert = (text) => () => {
  alert(`${text.message}`)
}

const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodosProgress())
    const res = await fetch('http://localhost:8000/todos-delay')
    const todos = await res.json()

    dispatch(loadTodoSuccess(todos))
  } catch (error) {
    dispatch(loadTodoFail())
    dispatch(Alert(error))
  }
}

const addTodoRequest = (text) => async (dispatch) => {
  try {
    const body = JSON.stringify({ text })
    const res = await fetch('http://localhost:8000/todos', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      body,
    })

    const todo = await res.json()
    dispatch(createTodo(todo))
  } catch (error) {
    dispatch(Alert(error))
  }
}

const removeTodoRequest = (id) => async (dispatch) => {
  try {
    const res = await fetch(`http://localhost:8000/todos/${id}`, {
      method: 'delete',
    })
    const removeTodos = await res.json()
    dispatch(removeTodo(removeTodos))
  } catch (error) {
    dispatch(Alert(error))
  }
}

const markTodoAsCompletedRequest = (id) => async (dispatch) => {
  try {
    const res = await fetch(`http://localhost:8000/todos/${id}/completed`, {
      method: 'post',
    })
    const updateTodo = await res.json()
    dispatch(markTodoCompleted(updateTodo))
  } catch (error) {
    dispatch(Alert(error))
  }
}

export {
  Alert,
  loadTodos,
  addTodoRequest,
  removeTodoRequest,
  markTodoAsCompletedRequest,
}

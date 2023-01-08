import {
  CREATE_TODO,
  LOAD_TODO_FAIL,
  LOAD_TODO_IN_PROGRESS,
  LOAD_TODO_SUCCESS,
  MARK_TODO_COMPLETED,
  REMOVE_TODO,
} from '../actions/actions'

const initialState = { Loading: false, data: [] }

export const todos = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case CREATE_TODO: {
      const { todo } = payload
      return { ...state, data: state.data.concat(todo) }
    }

    case REMOVE_TODO: {
      const { todo: removeTodo } = payload
      return {
        ...state,
        data: state.filter((todo) => todo.id !== removeTodo.id),
      }
    }

    case MARK_TODO_COMPLETED: {
      const { todo: updatedTodo } = payload
      return {
        ...state,
        data: state.data.map((todo) => {
          if (todo.id === updatedTodo.id) {
            return updatedTodo
          }
          return todo
        }),
      }
    }

    case LOAD_TODO_SUCCESS: {
      const { todos } = payload
      return { ...state, Loading: false, data: todos }
    }

    case LOAD_TODO_IN_PROGRESS:
      return { ...state, Loading: true }

    case LOAD_TODO_FAIL:
      return { ...state, Loading: false }

    default:
      return state
  }
}

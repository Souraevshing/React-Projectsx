export const CREATE_TODO = 'CREATE_TODO'
export const createTodo = (todo) => ({
  type: CREATE_TODO,
  payload: { todo },
})

export const REMOVE_TODO = 'REMOVE_TODO'
export const removeTodo = (todo) => ({
  type: REMOVE_TODO,
  payload: { todo },
})

export const MARK_TODO_COMPLETED = 'MARK_TODO_COMPLETED'
export const markTodoCompleted = (todo) => ({
  type: MARK_TODO_COMPLETED,
  payload: { todo },
})

export const LOAD_TODO_IN_PROGRESS = 'LOAD_TODO_IN_PROGRESS'
export const loadTodosProgress = () => ({
  type: LOAD_TODO_IN_PROGRESS,
})

export const LOAD_TODO_SUCCESS = 'LOAD_TODO_SUCCESS'
export const loadTodoSuccess = (todos) => ({
  type: LOAD_TODO_SUCCESS,
  payload: { todos },
})

export const LOAD_TODO_FAIL = 'LOAD_TODO-FAIL'
export const loadTodoFail = () => ({
  type: LOAD_TODO_FAIL,
})

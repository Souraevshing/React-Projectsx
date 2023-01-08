import { createSelector } from 'reselect'

const getTodos = (state) => state.todos.data
const getTodosLoading = (state) => state.todos.Loading

const getIncompleteTodos = createSelector(getTodos, (todos) =>
  todos.filter((todo) => !todo.isCompleted)
)

const getCompleteTodos = createSelector(getTodos, (todos) =>
  todos.filter((todo) => todo.isCompleted)
)

export { getTodos, getTodosLoading, getIncompleteTodos, getCompleteTodos }

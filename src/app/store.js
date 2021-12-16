import { configureStore } from '@reduxjs/toolkit'
import MovieReducer from '../features/Movies/MovieSlice'
import UserSlice from '../features/Users/UserSlice'
// import UserReducer from '../features/Users/UserSlice'

export const store = configureStore({
  reducer: {
    movie: MovieReducer,
    user: UserSlice,
  },
})

import { configureStore } from '@reduxjs/toolkit'
import JobSlice from '../features/jobs/JobSlice'
import UserSlice from '../features/users/UserSlice'

export const Store = configureStore({
  reducer: {
    user: UserSlice,
    job: JobSlice,
  },
})

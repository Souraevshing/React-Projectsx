import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import fetchCustomer from '../../utils/axios'
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from '../../utils/localStorage'

const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  user: getUserFromLocalStorage(),
}

export const registerUser = createAsyncThunk(
  'user/signup',
  async (user, thunkAPI) => {
    try {
      const res = await fetchCustomer.post('/auth/register', user)
      return res.data
    } catch (error) {
      toast.error(error.response.data.msg)
      return thunkAPI.rejectWithValue(error.res.data.msg)
    }
  }
)

export const loginUser = createAsyncThunk(
  'user/login',
  async (user, thunkAPI) => {
    try {
      const res = await fetchCustomer.post('/auth/login', user)
      return res.data
    } catch (error) {
      toast.error(error.response.data.msg)
      return thunkAPI.rejectWithValue(error.res.data.msg)
    }
  }
)

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (user, thunkAPI) => {
    try {
      const res = await fetchCustomer.patch('/auth/updateUser', user, {
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      })
      console.log(thunkAPI.getState())
      console.log(res)
      return res.data
    } catch (error) {
      if (error.response.status === 401) {
        thunkAPI.dispatch(logoutUser())
        return thunkAPI.rejectWithValue('Unauthorized Access!')
      }
      toast.error(error.response.data.msg)
      console.log(error.response)
      return thunkAPI.rejectWithValue(error.res.data.msg)
    }
  }
)

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen
    },
    logoutUser: (state) => {
      state.user = null
      state.isSidebarOpen = false
      removeUserFromLocalStorage()
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { user } = payload
        state.isLoading = false
        state.user = user
        addUserToLocalStorage(user)
        toast.success(`Welcome ${user.name}`)
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error(payload)
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { user } = payload
        state.isLoading = false
        state.user = user
        addUserToLocalStorage(user)
        toast.success(`Welcome ${user.name}`)
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error(payload)
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        const { user } = payload
        state.isLoading = false
        state.user = user
        addUserToLocalStorage(user)
        toast.success('User Updated!')
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error(payload)
      })
  },
})

export default UserSlice.reducer
export const { toggleSidebar, logoutUser } = UserSlice.actions

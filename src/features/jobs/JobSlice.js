import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import fetchCustomer from '../../utils/axios'
import { getUserFromLocalStorage } from '../../utils/localStorage'

const initialState = {
  isLoading: false,
  position: '',
  company: '',
  jobLocation: '',
  jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
  jobType: 'full-time',
  statusOptions: ['interview', 'declined', 'pending'],
  status: '',
  isEditing: false,
  editJobId: '',
}

const JobSlice = createSlice({
  name: 'job',
  initialState,
})

export default JobSlice.reducer

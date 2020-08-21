import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../api'

/* {
  status: 'idle' | 'loading' | 'succeeded' | 'failed',
  error: string | null
} */

const initialState = {
  tasks: [],
  status: 'idle',
  error: null,
}

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const res = await api.get('/tasks')
  // console.log('fetchTasks -> res', res)
  return res.data
})

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addNewTask: (state, action) => {
      state.tasks.push(action.payload)
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload)
    },
  },
  extraReducers: {
    [fetchTasks.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchTasks.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.tasks = action.payload
    },
    [fetchTasks.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
  },
})

export const { addNewTask, removeTask } = tasksSlice.actions

export default tasksSlice.reducer

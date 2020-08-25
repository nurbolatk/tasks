import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../api'

/* {
  status: 'idle' | 'loading' | 'succeeded' | 'failed',
  error: string | null
} */

const initialState = {
  tasks: [],
  current: null,
  status: 'idle',
  error: null,
}
/*
text: "asdf"
description: "asdf"
priority: "Low"
id: "ORrP1poywjgMQ4KoA4m1-"
project: {
  name: "Inbox"
  color: "#00Af00"
  id: "b7FIyFx9CFtLEuDJpTkhP"
}
steps: [
  {
    id: ID,
    text: string,
  }
]
*/
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
    chooseTask: (state, action) => {
      state.current = state.tasks.find(task => task.id === action.payload)
    },
    updateTaskByAddingStep: (state, action) => {
      if (state.current) {
        state.current.steps.push(action.payload)
      } else {
        console.log(
          'Error in taskSlice/updateTaskByAddingStep - there is no current task',
          action.payload
        )
      }
    },
    toggleStep: (state, action) => {
      if (state.current) {
        const step = state.current.steps.find(
          step => step.id === action.payload
        )
        if (step) {
          step.completed = !step.completed
        }
      } else {
        console.warn(
          'Attempted to toggle step of undefined current task',
          state,
          action
        )
      }
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

export const {
  addNewTask,
  removeTask,
  chooseTask,
  updateTaskByAddingStep,
  toggleStep,
} = tasksSlice.actions

export default tasksSlice.reducer

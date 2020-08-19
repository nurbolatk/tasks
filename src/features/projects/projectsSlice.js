import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../api'

const initialState = {
  current: null,
  projects: [],
}

export const fetchProjects = createAsyncThunk(
  'projects/fetchProjects',
  async () => {
    const res = await api.get('/projects')
    return res
  }
)

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    chooseCurrentProject: (state, action) => {
      state.current = action.payload
    },
  },
  extraReducers: {
    [fetchProjects.fulfilled]: (state, action) => {
      state.projects = action.payload.data
    },
  },
})

export const { chooseCurrentProject } = projectsSlice.actions

export const selectCurrentProject = state => state.projects.current

export default projectsSlice.reducer

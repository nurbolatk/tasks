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
    setCurrentProject: (state, action) => {
      state.current = action.payload
    },
    deleteProject: (state, action) => {
      state.projects = state.projects.filter(project =>
        project.id === action.payload.id ? false : true
      )
      if (state.current === action.payload.id) {
        state.current = state.projects[0].id || null
        action.payload.history.replace(`/tasks/${state.current}`)
      }
    },
  },
  extraReducers: {
    [fetchProjects.fulfilled]: (state, action) => {
      state.projects = action.payload.data
    },
  },
})

export const { setCurrentProject, deleteProject } = projectsSlice.actions

export const selectCurrentProject = state => state.projects.current
export const selectCurrentProjectData = state =>
  state.projects.projects.find(project => project.id === state.projects.current)

export default projectsSlice.reducer

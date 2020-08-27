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
        if (state.projects[0]) {
          state.current = state.projects[0].id
          console.log(
            'redux',
            state.current,
            action.payload.id,
            state.projects[0].id
          )
          // action.payload.history.replace(`/tasks/${state.current}`)
        } else {
          state.current = null
          // action.payload.history.replace(`/tasks`)
        }
      }
    },
    addProject: (state, action, extra) => {
      state.projects.push(action.payload)
    },
  },
  extraReducers: {
    [fetchProjects.fulfilled]: (state, action) => {
      state.projects = action.payload.data
    },
  },
})

export const {
  setCurrentProject,
  deleteProject,
  addProject,
} = projectsSlice.actions

export const selectCurrentProject = state => state.projects.current
export const selectCurrentProjectData = state =>
  state.projects.projects.find(project => project.id === state.projects.current)

export default projectsSlice.reducer

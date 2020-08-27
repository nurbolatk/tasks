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

// export const deleteProjectAsync = createAsyncThunk('projects/deleteProject', async (projectId, history) => {
//   try {
//     await api.delete('/projects/id', projectId)
//     // history.replace('/tasks')
//   } catch (error) {
//     console.error(error.message)
//     alert(error.message)
//   }
// })

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setCurrentProject: (state, action) => {
      state.current = action.payload.id
      action.payload.history.push(`/tasks/${action.payload.id}`)
    },
    deleteProject: (state, action) => {
      if (state.current === action.payload.id) {
        const projects = state.projects.filter(project =>
          project.id === action.payload.id ? false : true
        )
        if (state.projects[0]) {
          console.log(
            'redux',
            state.current,
            action.payload.id,
            state.projects[0].id
          )
          state = {
            current: state.projects[0].id,
            projects,
          }
          action.payload.history.replace(`/tasks/${state.current}`)
        } else {
          state = {
            current: null,
            projects,
          }
          action.payload.history.replace(`/tasks`)
        }
      }
    },
    addProject: (state, action) => {
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

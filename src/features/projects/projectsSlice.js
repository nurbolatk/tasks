import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../api'
import history from '../../utils/history'

const initialState = {
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
    deleteProject: (state, action) => {
      const projects = state.projects.filter(
        project => project.id !== action.payload.id
      )
      state = {
        projects,
      }
      if (state.projects[0]) {
        history.replace(`/tasks/${state.projects[0].id}`)
      } else {
        history.replace(`/tasks`)
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

export const { deleteProject, addProject } = projectsSlice.actions

export default projectsSlice.reducer

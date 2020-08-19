import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  current: {},
  // projects: [],
}

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    chooseCurrentProject: (state, action) => {
      state.current = action.payload.project
    },
  },
})

export const { chooseCurrentProject } = projectsSlice.actions

export const selectCurrentProject = state => state.projects.current

export default projectsSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  current: {},
  // projects: [],
}

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    selectProject: (state, action) => {
      state.current = action.payload.project
    },
  },
})

export const { selectProject } = projectsSlice.actions

export default projectsSlice.reducer

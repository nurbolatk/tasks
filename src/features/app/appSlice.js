import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  rightSideBarOpen: false,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    openRightSideBar: (state, action) => {
      state.rightSideBarOpen = true
    },
    closeRightSideBar: (state, action) => {
      state.rightSideBarOpen = false
    },
  },
})

export const { openRightSideBar, closeRightSideBar } = appSlice.actions

export default appSlice.reducer

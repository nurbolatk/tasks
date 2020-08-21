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
    toggleRightSideBar: (state, action) => {
      state.rightSideBarOpen = !state.rightSideBarOpen
    },
  },
})

export const {
  openRightSideBar,
  closeRightSideBar,
  toggleRightSideBar,
} = appSlice.actions

export default appSlice.reducer

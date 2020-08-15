import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './ducks'
const store = configureStore({ reducer: rootReducer })
export default store

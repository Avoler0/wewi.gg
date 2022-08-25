import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Redux/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})
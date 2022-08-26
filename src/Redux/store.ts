import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './accountRedux/accountSlice';

export default configureStore({
  reducer: {
    account: accountReducer
  },
})
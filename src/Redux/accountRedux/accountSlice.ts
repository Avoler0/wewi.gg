import { createSlice } from '@reduxjs/toolkit';
import { setLogin, setLogout } from './accountModule';

export const accountSlice = createSlice({
  name: 'account',
  initialState:{
    value:0,
  },
  reducers:{
    accountLogin: () => {
      setLogin("empty")
    },
    accountLogout: () => {
      setLogout()
    }
  }
})
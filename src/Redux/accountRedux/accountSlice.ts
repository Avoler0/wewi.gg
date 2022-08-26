import { createSlice } from '@reduxjs/toolkit';
import { getLoginState } from '../../commons/loginState';
import { setLogin, setLogout } from './accountModule';

export const accountSlice = createSlice({
  name: 'account',
  initialState:{
    login:false,
    email:"",
  },
  reducers:{
    accountState: (state) => {
      const loginState = getLoginState;
      // state = loginState;
    },
    accountLogin: (state) => {
      state.login = true;
      setLogin(state.login)
    },
    accountLogout: (state) => {
      state.login = false;
      setLogout()
    }
  }
})

export const { accountState, accountLogin, accountLogout } = accountSlice.actions

export default accountSlice.reducer
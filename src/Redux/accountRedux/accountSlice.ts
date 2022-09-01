import { createSlice } from '@reduxjs/toolkit';
import { getAccount, setLogin, setLogout } from './accountModule';

export const accountSlice = createSlice({
  name: 'account',
  initialState:{
    login:false,
    email:"",
    nickName:"",
    type:"",
  },
  reducers:{
    accountState: (state) => {
      const data = getAccount();
      state.login = data.login;
      state.email = data.email;
      state.nickName = data.nickName;
      state.type = data.type;
    },
    accountLogin: (state,action) => {
      state.login = true;
      state.email = action.payload.email;
      state.nickName = action.payload.nickName;
      state.type = action.payload.type;
      setLogin(action.payload)
    },
    accountLogout: (state) => {
      state.login = false;
      state.email = "";
      state.nickName = "";
      state.type = "";
      setLogout();
    }
  }
})

export const { accountState, accountLogin, accountLogout } = accountSlice.actions

export default accountSlice.reducer
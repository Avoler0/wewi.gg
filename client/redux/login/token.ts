import storage from 'reduxjs-toolkit-persist/lib/storage'
import { createSlice,PayloadAction  } from '@reduxjs/toolkit';

export type ReduxLoginType = {
  token:string
}

const token = createSlice({
  name:'token',
  initialState:{
    token:'',
  },
  reducers:{
    setToken:(state:ReduxLoginType,action:PayloadAction<any>) => {
      state.token = action.payload.token
    },
    removeToken:(state:ReduxLoginType) => {
      state.token = '';
      storage.removeItem('persist:root')
    },
  }
});

export default token.reducer;
export const {setToken,removeToken} = token.actions;
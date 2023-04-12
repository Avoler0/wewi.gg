import storage from 'reduxjs-toolkit-persist/lib/storage'
import { createSlice,PayloadAction  } from '@reduxjs/toolkit';

export type ReduxLoginType = {
  state:boolean,
  id:number | null,
  email:string,
  nickName:string
  type:string
}

const user = createSlice({
  name:'user',
  initialState:{
    state:false,
    id:null,
    type:'',
    email:'',
    nickName:'',
  },
  reducers:{
    setLogin:(state:ReduxLoginType,action:PayloadAction<any>) => {
      state.state = true;
      state.id = action.payload.id
      state.type = action.payload.type
      state.email = action.payload.email;
      state.nickName = action.payload.nickName;
    },
    setLogout:(state:ReduxLoginType) => {
      state.state = false;
      state.id = null;
      state.type = '';
      state.email = '';
      state.nickName = '';
      storage.removeItem('persist:root')
    },
  }
});

export default user.reducer;
export const {setLogin,setLogout} = user.actions;
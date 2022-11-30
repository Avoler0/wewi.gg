import storage from 'reduxjs-toolkit-persist/lib/storage'
import { createSlice,PayloadAction  } from '@reduxjs/toolkit';

type Login = {
  state:boolean,
  email:string,
  nickName:string
  type:string
}

const user = createSlice({
  name:'user',
  initialState:{
    state:false,
    type:'',
    email:'',
    nickName:'',
  },
  reducers:{
    setLogin:(state:Login,action:PayloadAction<any>) => {
      state.state = true;
      state.type = action.payload.type
      state.email = action.payload.email;
      state.nickName = action.payload.nickName;
    },
    setLogout:(state:Login) => {
      state.state = false;
      state.email = '';
      state.nickName = '';
      storage.removeItem('persist:root')
    },
  }
});

export default user.reducer;
export const {setLogin,setLogout} = user.actions;
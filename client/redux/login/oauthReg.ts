import { createSlice,PayloadAction  } from '@reduxjs/toolkit';

type OauthRegister = {
  email:string,
  type:string
}

const oauthReg = createSlice({
  name:'oauthReg',
  initialState:{
    email:'',
    type:''
  },
  reducers:{
    setRegisterOauth:(state:OauthRegister,action:PayloadAction<any>) => {
      state.type = action.payload.type;
      state.email = action.payload.email;
    },
  }
});

export default oauthReg.reducer;
export const {setRegisterOauth} = oauthReg.actions;
import { createSlice,PayloadAction  } from '@reduxjs/toolkit';

type OauthRegister = {
  email:string,
  type:string,
}

const oauthReg = createSlice({
  name:'oauthReg',
  initialState:{
    email:'',
    type:'',
  },
  reducers:{
    setRegisterOauth:(state:OauthRegister,action:PayloadAction<any>) => {
      state.email = action.payload.email;
      state.type = action.payload.type;
    },
  }
});

export default oauthReg.reducer;
export const {setRegisterOauth} = oauthReg.actions;
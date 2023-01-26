import { createSlice,PayloadAction  } from '@reduxjs/toolkit';

type OauthRegister = {
  email:string,
  oauthType:string,
  oauthToken:string
}

const oauthReg = createSlice({
  name:'oauthReg',
  initialState:{
    email:'',
    oauthType:'',
    oauthToken:''
  },
  reducers:{
    setRegisterOauth:(state:OauthRegister,action:PayloadAction<any>) => {
      state.email = action.payload.email;
      state.oauthType = action.payload.oauthType;
      state.oauthToken = action.payload.oauthToken;
    },
  }
});

export default oauthReg.reducer;
export const {setRegisterOauth} = oauthReg.actions;
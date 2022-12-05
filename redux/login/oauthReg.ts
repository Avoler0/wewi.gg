import { createSlice,PayloadAction  } from '@reduxjs/toolkit';

type OauthRegister = {
  email:string
}

const oauthReg = createSlice({
  name:'oauthReg',
  initialState:{
    email:'',
  },
  reducers:{
    setOauthEmail:(state:OauthRegister,action:PayloadAction<any>) => {
      state.email = action.payload;
    },
  }
});

export default oauthReg.reducer;
export const {setOauthEmail,} = oauthReg.actions;
import { createSlice,PayloadAction  } from '@reduxjs/toolkit';

type Error = {
  status:number,
  message:string,
}

const duoError = createSlice({
  name:'duoError',
  initialState:{
    status:0,
    message:'',
  },
  reducers:{
    duoSetError:(state:Error,action:PayloadAction<any>) => {
      console.log("듀오 셋 에러",state,action)
      state.status = action.payload.status;
      state.message = action.payload.message
    }
  }
});

export default duoError.reducer;
export const {duoSetError} = duoError.actions;
import { createSlice,PayloadAction  } from '@reduxjs/toolkit';

export type _DuoData = {
  data:any
}

const duoData = createSlice({
  name:'duoData',
  initialState:{
    data:[]
  },
  reducers:{
    duoSetData:(state:_DuoData,action:PayloadAction<any>) => {
      console.log("듀오 셋 데이터",state,action)
      state.data = action.payload;
    }
  }
});

export default duoData.reducer;
export const {duoSetData} = duoData.actions;
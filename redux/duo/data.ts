import { createSlice,PayloadAction  } from '@reduxjs/toolkit';
import { SummonerType } from '../../types/riotType';

type Data = {
  data:any
}

const duoData = createSlice({
  name:'duoData',
  initialState:{
    data:[]
  },
  reducers:{
    duoSetData:(state:Data,action:PayloadAction<any>) => {
      console.log("듀오 셋 데이터",state,action)
      state.data = action.payload;
    }
  }
});

export default duoData.reducer;
export const {duoSetData} = duoData.actions;
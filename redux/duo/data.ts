import { createSlice,PayloadAction  } from '@reduxjs/toolkit';
import { useQuery, useQueryClient } from 'react-query';

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
      state.data = action.payload;
    }
  }
});

export default duoData.reducer;
export const {duoSetData} = duoData.actions;
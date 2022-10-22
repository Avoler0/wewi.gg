import { createSlice,PayloadAction  } from '@reduxjs/toolkit';
import { SummonerType } from '../../types/riotType';

type search = {
  type:string | null
  value:SummonerType | string | null
}

const searchSlice = createSlice({
  name:'search',
  initialState:{
    type: null,
    value: null
  },
  reducers:{
    searchSet:(state:search,action:PayloadAction<any>) => {
      state.type = action.payload.type;
      state.value = action.payload.value;
    }
  }
});

export default searchSlice;
export const {searchSet} = searchSlice.actions;
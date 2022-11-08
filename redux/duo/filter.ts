import { createSlice,PayloadAction  } from '@reduxjs/toolkit';
import { SummonerType } from '../../types/riotType';

type Filter = {
  tier:string,
  mode:string,
  line:string
}

const duoFilter = createSlice({
  name:'filter',
  initialState:{
    tier:"all",
    mode:"all",
    line:"all"
  },
  reducers:{
    setTier:(state:Filter,action:PayloadAction<any>) => {
      console.log("듀오 필터 티어",state,action)
      state.tier = action.payload;
    },
    setMode:(state:Filter,action:PayloadAction<any>) => {
      console.log("듀오 필터 모드",state,action)
      state.mode = action.payload;
    },
    setLine:(state:Filter,action:PayloadAction<any>) => {
      console.log("듀오 필터 라인",state,action)
      state.line = action.payload;
    },
  }
});

export default duoFilter;
export const {setTier,setMode,setLine} = duoFilter.actions;
import { createSlice,PayloadAction  } from '@reduxjs/toolkit';
import { useQuery, useQueryClient } from 'react-query';

type Rank = {
  solo:any,
  team:any
}

export type Summoner = {
  info:any,
  rank:Rank
  status:boolean
}


const Summoner = createSlice({
  name:'Summoner',
  initialState:{
    status:false,
    info:[],
    rank:{
      solo:{},
      team:{}
    }
  },
  reducers:{
    setSummonerInfo:(state:Summoner,action:PayloadAction<any>) => {
      state.info = action.payload
    },
    setSummonerRank:(state:Summoner,action:PayloadAction<any>) => {
      state.rank = action.payload
      state.status = true;
    },
  }
});

export default Summoner.reducer;
export const {setSummonerInfo,setSummonerRank} = Summoner.actions;
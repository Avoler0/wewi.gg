import { createSlice,PayloadAction  } from '@reduxjs/toolkit';
import { SummonerType } from '../../types/riotType';

type Filter = {
  tier:string,
  mode:string,
  line:string
}

const duoFilter = createSlice({
  name:'duoFilter',
  initialState:{
    tier:"all",
    mode:"all",
    line:"all"
  },
  reducers:{
    duoSetFilter:(state:Filter,action:PayloadAction<any>) => {
      const type = action.payload.type;
      switch (type) {
        case 'tier':
          state.tier = action.payload.value;
          break;
        case 'mode':
          state.mode = action.payload.value;
          break;
        case 'line':
          state.line = action.payload.value
        default:
          break;
      }
    }
  }
});


export default duoFilter.reducer;
export const {duoSetFilter} = duoFilter.actions;
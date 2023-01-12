import { createSlice,PayloadAction  } from '@reduxjs/toolkit';

type LoLVersion = {
  version:string,
}

const lolVersion = createSlice({
  name:'lolVersion',
  initialState:{
    version:0
  },
  reducers:{
    setLoLVersion:(state:any,action:PayloadAction<any>) => {
      state.version = action.payload.version;
    },
  }
});

export default lolVersion.reducer;
export const {setLoLVersion} = lolVersion.actions;
import { createSlice,PayloadAction  } from '@reduxjs/toolkit';

type search = {
  type:string | null
  value:string | null
}

const searchSlice = createSlice({
  name:'searchString',
  initialState:{
    type: null,
    value: null
  },
  reducers:{
    searchSet:(state:search,action:PayloadAction<string>) => {
      state.value = action.payload;
    }
  }
});

export default searchSlice;
export const {searchSet} = searchSlice.actions;
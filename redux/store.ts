import { configureStore } from '@reduxjs/toolkit';
import { SummonerType } from '../types/riotType';
import duoFilter from './duo/filter';
import duoError from './duo/error';
import duoData from './duo/data';
import searchSlice from './search/searchSlice';


export type SearchReduxType = {
  search: any;
  type:string | null,
  value:string | SummonerType | null
}

const store = configureStore({
  reducer:{
    search:searchSlice.reducer,
    duoFilter:duoFilter,
    duoData:duoData,
    duoError:duoError,
  }
})

export default store;
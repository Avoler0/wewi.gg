import { configureStore } from '@reduxjs/toolkit';
import duoFilter from './duo/filter';
import duoError from './duo/error';
import duoData from './duo/data';
import summoner from './summoner';


export type SearchReduxType = {
  search: any;
  type:string | null,
  value:string | null
}

const store = configureStore({
  reducer:{
    duoFilter:duoFilter,
    duoData:duoData,
    duoError:duoError,
    summoner:summoner
  }
})

export default store;
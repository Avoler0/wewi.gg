import { configureStore } from '@reduxjs/toolkit';
import duoFilter from './duo/filter';
import duoError from './duo/error';
import duoData from './duo/data';


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
  }
})

export default store;
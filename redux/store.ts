import { configureStore } from '@reduxjs/toolkit';
import duoFilter from './duo/filter';
import duoError from './duo/error';

export type SearchReduxType = {
  search: any;
  type:string | null,
  value:string | null
}

const store = configureStore({
  reducer:{
    duoFilter:duoFilter,
    duoError:duoError,
  }
})

export default store;
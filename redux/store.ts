import { combineReducers, configureStore } from '@reduxjs/toolkit';
import duoFilter from './duo/filter';
import duoError from './duo/error';
import user from './login/user'
import storage from 'reduxjs-toolkit-persist/lib/storage'
import { persistStore, persistReducer } from 'reduxjs-toolkit-persist'
export type SearchReduxType = {
  search: any;
  type:string | null,
  value:string | null
}
const persistConfig = {
  key:'root',
  storage,
  whitelist:['user']
}
const rootResucers = combineReducers({
  duoFilter:duoFilter,
  duoError:duoError,
  user:user
})

const store = configureStore({
  reducer: persistReducer(persistConfig,rootResucers)
})

export const persistore = persistStore(store)
export default store;
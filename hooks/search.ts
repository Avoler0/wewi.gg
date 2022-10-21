import { useDispatch } from 'react-redux';
import router from "next/router";
import { apiInstance } from "./axiosInstance";
import store from '../redux/store';
import { searchSet } from '../redux/search/searchSlice';

type searchType = "summoner" | "champion"

export function searchHook(type:searchType,value:string){
  console.log(type,value);
  // router.push(`/api/?type=${type}/value=${value}`)
  apiInstance({
    method:'post',
    url:`/search/${type}/${value}`,

  }).then((_res)=>{
    console.log("데이터 들어옴",_res.data);
    // dispatch(searchSet(_res.data))
  })
}
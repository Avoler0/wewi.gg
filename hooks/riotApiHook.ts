import { apiInstance } from "./axiosInstance";
import qs from "qs";
type searchType = "summoner" | "champion"
type valueType = string | string[]

export async function riotSummoner(type:searchType,value:valueType){
  const searchData = await apiInstance({
    url:`/search/summoner/name/`,
    params:{
      type:type,
      value:value
    }
  }).then((_res)=>{
    return _res.data;
  }).catch((_error)=>{
    const status = _error.response.status
    if(status === 404){
      return "not find"
    }
    return _error
  })

  return searchData;
}

export async function matchList(puuid:string) {
   const result = await apiInstance({
    url:'/search/summoner/match/',
    params:{
        puuid:puuid,
        start:0,
        end:20
    },
  }).then((_res)=>{
    return _res.data;
  }).catch((_error)=>{
    const status = _error.response.status
    if(status === 404){
      return "not find"
    }
    return _error
  })
  return result;
}


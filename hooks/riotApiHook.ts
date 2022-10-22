import { apiInstance } from "./axiosInstance";
import qs from "qs";
type searchType = "summoner" | "champion"
type valueType = string | string[]

export async function riotSummoner(type:searchType,value:valueType){
  const searchData = await apiInstance({
    method:'post',
    url:`/search/${type}/${value}`,
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
    url:`/search/summoner/match/${puuid}`,
    params:{
      ids:{
        start:0,
        end:20
      }
    },
  })
  .then(function(response) {
    console.log(response.data);
  })
  .catch(function(error) {
    console.log(error);
  })

  return result;
  // puuid,start,count,type?
  // https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/UzjnP4h_jrXxo5U5mF9ciPfN_Wp1os-SY_QfZ9rWIv7ySieHxn2l8oP0FK3cBjUX-hlH5vpLoi3GWQ/ids?start=0&count=20&api_key=RGAPI-92b4d59d-ab59-4cd0-bf77-cc23a29d960f
}


import { apiInstance } from "./axiosInstance";
type searchType = "summoner" | "champion"
type valueType = string | string[]


export const riot = {
  summoner:async function(type:searchType,value:valueType){
    return await apiInstance({
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
  },
  matchList:async function (puuid:string,start:number,end:number) {
    console.log("매치리스트 실행");
    return await apiInstance({
      url:'/search/summoner/match/',
      params:{
          puuid:puuid,
          start:0,
          end:20
      },
    }).then((_res)=>{
      return _res.data;
    }).catch((_error)=>{
      return _error
    })
  },
  league:async function(id:string) {
    console.log("리그 실행");
    return await apiInstance({
      url:'/search/summoner/league/',
      params:{
        id:id
      }
    }).then((_res)=>{
      return _res.data;
    }).catch((_error)=>{
      return _error
    })
    
  },
  record: function (match:string) {
    return new Promise((resolve,rejects)=>{
      apiInstance({
          url:'/record/',
          params:{
            match:match
          }
          }).then((_res)=>{
            resolve(_res)
          }).catch((_error)=>{
            rejects(_error)
      })
    })
  }
}



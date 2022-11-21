import axios from "axios";
import { apiInstance } from "./axiosInstance";
type searchType = "summoner" | "champion"
type valueType = string | string[]


export const riot = {
  summoner:async function(value:valueType){
    return await apiInstance({
      url:`/riot/summoner/info/`,
      params:{
        value:value
      }
    }).then((_res)=>{
      console.log(_res.data)
      return _res.data;
    }).catch((_error)=>{
      console.log(_error)
      return false;
    })
  },
  champion:{
    mastery:async function(id:string,count?:number) {
      return await apiInstance({
        url:'riot/champion/mastery/',
        params:{
          id:id,
          count:count
        }
      })
      
    },
  },
  matchList:async function (puuid:string,start:number) {
    console.log("매치리스트 실행");
    return await apiInstance({
      url:'/riot/summoner/match/list',
      params:{
          puuid:puuid,
          start:start,
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
      url:'/riot/summoner/league/',
      params:{
        id:id
      }
    }).then((_res)=>{
      return _res.data;
    }).catch((_error)=>{
      return _error
    })
    
  },
  matchDetail: async function (match:string) {
    return await apiInstance({
          url:'/riot/summoner/match/detail/',
          params:{
            match:match
          }
          }).then((_res)=>{
            return _res
          }).catch((_error)=>{
            return _error
      })
  },
  runeInfo: async function(){
    return await axios.get('https://ddragon.leagueoflegends.com/cdn/12.9.1/data/en_US/runesReforged.json')
  }
}



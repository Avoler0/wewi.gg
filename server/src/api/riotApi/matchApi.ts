import { riotApi } from "../apiInstance";

export async function matchList(puuid:string,start:number){
  return await new Promise(async (resolve,reject) => {
    await riotApi({
      url:`https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids`,
      params:{
          start:start,
          count:5
      }
      })
    .then((_res:any)=> resolve(_res))
    .catch((_error:any)=> reject(_error))
  })
}

export async function matchDetail(matchId:string){
  return await new Promise(async (resolve,reject) => {
    await riotApi.get(`https://asia.api.riotgames.com/lol/match/v5/matches/${matchId}`)
    .then((_res:any)=> resolve(_res))
    .catch((_error:any)=> reject(_error))
  })
}
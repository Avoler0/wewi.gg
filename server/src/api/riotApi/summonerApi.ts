import { riotApi } from "../apiInstance"



export async function summonerInfo(summonerName:string){
  return await new Promise(async (resolve,reject) => {
    await riotApi({
      method:'get',
      url:`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`
    })
    .then((_res:any)=> resolve(_res))
    .catch((_error:any)=> reject(_error))
  })
}

export async function summonerLeague(summonerId:string){
  return await new Promise(async (resolve,reject) => {
    await riotApi({
      method:'get',
      url:`https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerId}`
    })
    .then((_res:any)=> {
      resolve(_res)
    })
    .catch((_error:any)=> reject(_error))
  })
}
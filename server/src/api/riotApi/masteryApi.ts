import { riotApi } from "../apiInstance"

export async function summonerMasteryTop(id:string,count:number) {
  return await new Promise(async (resolve,reject) => {
    await riotApi({
      method:'get',
      url:`https://kr.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}/top?count=${count}`
    })
    .then((_res:any)=> resolve(_res))
    .catch((_error:any)=> reject(_error))
  })
}
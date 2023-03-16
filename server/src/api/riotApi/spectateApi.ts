import { riotApi } from "../apiInstance"


export async function summonerSpectate(summonerId:string) {
  return await new Promise(async (resolve,reject) => {
    await riotApi({
      url:`https://kr.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/${summonerId}`,
      })
    .then((_res:any)=> resolve(_res))
    .catch((_error:any)=> reject(_error))
  })
}
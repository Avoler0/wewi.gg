import { dbInstance } from "../../axiosInstance"


export const riotSummonerHook = {
  info:async function(summonerName:string) {
    return await new Promise(async (resolve,reject) => {
      await dbInstance({
        method:'get',
        url:`/lol/summoner/info`,
        params:{
          summoner:summonerName
        }
      })
      .then((_res)=> resolve(_res))
      .catch((_err) => reject(_err))
    })
  },
  league:async function(summonerId:string) {
    return await new Promise(async (resolve,reject) => {
      await dbInstance({
        method:'get',
        url:'/lol/summoner/league',
        params:{
          summonerId:summonerId
        }
      })
      .then((_res)=> resolve(_res))
      .catch((_err) => reject(_err))
    })
  }
}
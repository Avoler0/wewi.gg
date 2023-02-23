import { dbInstance } from "../../axiosInstance"

// THUNJ4r8HJZh93E6oCA8XP-Rh8dXXU6pRz5kXOt2ESIQJ8ByHFtzNj9mAyhGb3lnwoAXhK8-y222jA
export const riotMatchHook = {
  list:async function (puuid:string,start:number) {
    return await new Promise(async (resolve,reject) => {
      await dbInstance({
        method:'get',
        url:`/lol/match/list/`,
        params:{
          puuid:puuid,
          start:start
        }
      })
      .then((_res)=> resolve(_res))
      .catch((_err) => reject(_err))
    })
  },
  detail:async function (puuid:string,matchId:string) {
    return await new Promise(async (resolve,reject) => {
      await dbInstance({
        method:'get',
        url:`/lol/match/detail/`,
        params:{
          puuid:puuid,
          matchId:matchId,
        }
      })
      .then((_res)=> resolve(_res))
      .catch((_err) => reject(_err))
    })
  },
}
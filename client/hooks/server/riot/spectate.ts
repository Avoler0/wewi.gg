import { dbInstance } from "../../axiosInstance"


export const riotSpectateHook = {
  watch:async function(summonerId:string) {
    return await new Promise(async (resolve,reject) => {
      await dbInstance({
        method:'post',
        url:`/lol/summoner/watch`,
        data:{
          summonerId:summonerId
        }
      })
      .then((_res)=> resolve(_res))
      .catch((_err) => reject(_err))
    })
  }
}
import { dbInstance } from "../../axiosInstance"


export const riotImageHook = {
  profile:async function(iconId:any) {
    const result = await dbInstance.get(`/lol/images/profile/${iconId}`)
    return result.data;
  },
  champion:async function(championId:any) {
    const result = await dbInstance.get(`/lol/images/champion/${championId}`)
    return result.data;
  },
  spell:async function(iconId:any) {
    const result = await dbInstance.get(`/lol/images/spell/${iconId}`)
    return result.data;
  },
  rune:async function(runeId:any){
    const result = await dbInstance.get(`/lol/images/rune/${runeId}`)
    return result.data;
  },
}
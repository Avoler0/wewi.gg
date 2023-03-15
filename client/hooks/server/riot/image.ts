import { dbInstance } from "../../axiosInstance"


export const riotImageHook = {
  profile:async function(iconId:number) {
    const result = await dbInstance.get(`/lol/images/profile/${iconId}`);
    return result.data;
  },
  championByName:async function(championName:string) {
    const result = await dbInstance.get(`/lol/images/champion/name/${championName}`);
    return result.data;
  },
  championById:async function(championId:number) {
    console.log('챔피언 아이디',championId)
    const result = await dbInstance.get(`/lol/images/champion/id/${championId}`);
    return result.data;
  },
  item:async function(itemId:number) {
    const result = await dbInstance.get(`/lol/images/item/${itemId}`);
    return result.data;
  },
  spell:async function(iconId:number) {
    const result = await dbInstance.get(`/lol/images/spell/${iconId}`);
    return result.data;
  },
  rune:async function(runeId:number){
    const result = await dbInstance.get(`/lol/images/rune/${runeId}`);
    return result.data;
  },
}
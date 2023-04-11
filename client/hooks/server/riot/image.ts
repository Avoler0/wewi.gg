import { dbInstance } from "../../axiosInstance"


export const riotImageHook = {
  profile:async function(iconId:number) {
    console.time('프로필')
    const result = await dbInstance.get(`/lol/images/profile/${iconId}`);
    if(result){
      console.timeEnd('프로필')
    }
    return result.data;
  },
  championByName:async function(championName:string) {
    console.time('챔피언')
    const result = await dbInstance.get(`/lol/images/champion/name/${championName}`);
    if(result){
      console.timeEnd('챔피언')
    }
    
    return result.data;
  },
  championById:async function(championId:number) {
    const result = await dbInstance.get(`/lol/images/champion/id/${championId}`);
    return result.data;
  },
  item:async function(itemId:number) {
    console.time(`아이템 ${itemId}`)
    const result = await dbInstance.get(`/lol/images/item/${itemId}`);
    if(result){
      console.timeEnd(`아이템 ${itemId}`)
    }
    
    return result.data;
  },
  spell:async function(iconId:number) {
    console.time(`스펠 ${iconId}`)
    const result = await dbInstance.get(`/lol/images/spell/${iconId}`);
    if(result){
      console.timeEnd(`스펠 ${iconId}`)
    }
    return result.data;
  },
  rune:async function(runeId:number){
    console.time(`룬 ${runeId}`)
    const result = await dbInstance.get(`/lol/images/rune/${runeId}`);
    if(result){
      console.timeEnd(`룬 ${runeId}`)
    }
    return result.data;
  },
}
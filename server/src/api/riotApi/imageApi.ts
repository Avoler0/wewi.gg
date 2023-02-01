import axios from "axios";
import { riotDragonApi } from "../apiInstance";
import { riotDragonVersion } from "./version";

const dragonPath = 'http://ddragon.leagueoflegends.com/cdn/'

export async function riotChampionImage(ids:any){
  const version = await riotDragonVersion();
  const idArr = Object.assign([],ids)
  const result = await riotDragonApi(`${version}/data/en_US/champion.json`)
  .then((_res:any) => {
    const championList = _res.data.data;
    const chapionName = []
    for(let name in championList){
      for(const index in idArr){
        if(championList[name].key === idArr[index]+''){
          chapionName.push(championList[name].image.full)
          idArr.splice(index,1);
        }
        if(chapionName.length === ids.length) break;
      }
      if(chapionName.length === ids.length) break;
    }
    return chapionName
  })
  console.log('챔 이미지 리설트',result)
  return result.map((value:string) => `${dragonPath}${version}/img/champion/${value.replace(/[']|\s/,'')}`)
}

export async function riotProfileIconImage(iconId:number){
  const version = await riotDragonVersion();
  return `${dragonPath}${version}/img/profileicon/${iconId}.png`
}
import axios from "axios";
import { riotDragonApi } from "../apiInstance";
import { riotDragonVersion, riotRuneJson, riotSpellJson } from "./const";

const dragonPath = 'http://ddragon.leagueoflegends.com/cdn/'

export async function riotChampionIdImage(ids:any){
  console.log('아이디',ids)
  const version = await riotDragonVersion();
  const result = await riotDragonApi(`${version}/data/en_US/champion.json`)
  .then((_res:any) => {
    const championList = _res.data.data;
    let chapionName = '';
    for(let name in championList){
      if(championList[name].key === ids+''){
        chapionName = championList[name].image.full
        break;
      }
    }
    return chapionName
  })

  return `${dragonPath}${version}/img/champion/${result.replace(/[']|\s/,'')}`
}

export async function riotChampionImage(ids:any){
  console.log('아이디',ids)
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
  return result.map((value:string) => `${dragonPath}${version}/img/champion/${value.replace(/[']|\s/,'')}`)
}

export async function riotProfileIconImage(iconId:number){
  const version = await riotDragonVersion();
  return `${dragonPath}${version}/img/profileicon/${iconId}.png`
}

export async function riotChampionIconImage(championId:number){
  const version = await riotDragonVersion();
  return `${dragonPath}${version}/img/champion/${championId}.png`
}

export async function riotItemIconImage(itemId:number){
  const version = await riotDragonVersion();
  return `${dragonPath}${version}/img/item/${itemId}.png`
}

export async function riotSpellIconImage(iconId:number){
  const version = await riotDragonVersion();
  const spellJson = await riotSpellJson();
  let spellName = '';
  for(let i in spellJson.data){
    if(spellJson.data[i].key === iconId){
      spellName = spellJson.data[i].image.full;
      break;
    }
  }
  console.log('스펠 네임',spellName)
  return `http://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${spellName}`
}
export async function riotRuneIconImage(runeId:string){
  const runeJson = await riotRuneJson();
  let runeIconPath = '';
  runeJson.forEach((data:any) => {
    if(data.id+'' == runeId){
      runeIconPath = data.icon
    }
  });
  return `https://ddragon.canisback.com/img/${runeIconPath}`
}
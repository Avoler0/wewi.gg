import { riotVersion, spellName } from './../const/utils';
import axios from "axios";


export const riotImg = {
  path:`http://ddragon.leagueoflegends.com/cdn/${riotVersion}`,
  ddragon:"https://ddragon.canisback.com/img",
  champion:function(champion:string){
    return `${this.path}/img/champion/${champion}.png`
  },
  championsId:async function(ids:any){
    const idArr = Object.assign([],ids)
    const result = await axios.get(`${this.path}/data/en_US/champion.json`)
    .then((_res:any)=>{
      const championList = _res.data.data;
      if(typeof ids === 'object'){
        
      }else{
        const chapionName:string[] = []
         for(let i in championList){
          if(championList[i].key == ids){
            chapionName.push(championList[i].name)
          }
          if(chapionName.length === ids.length) break;
        }
        return chapionName
      }
    })
    return result.map((value)=> `${this.path}/img/champion/${value.replace(/[']|\s/,'')}.png` )
  },
  item:function(itemId:number){
    return `${this.path}/img/item/${itemId}.png`
  },
  profile:function(iconNumber:number){
    return `${this.path}/img/profileicon/${iconNumber}.png`
  },
  
  rune:async function(primary:any,sub:any){
    return await axios.get(`${this.path}/data/en_US/runesReforged.json`)
    .then((_res)=>{
      const primaryIndex = _res.data.findIndex((data) => data.id === primary?.style);
      const subIndex = _res.data.findIndex((data) => data.id === sub?.style);
      const primaryIcon = _res.data[primaryIndex]?.icon;
      const subIcon = _res.data[subIndex]?.icon

      return [`${this.ddragon}/${primaryIcon}`,`${this.ddragon}/${subIcon}`]
    })
  },
  spell:function(spellId:number){
    const spell = spellName(spellId);
    return `${this.path}/img/spell/${spell}.png`;
  },

  
  
  
  
}

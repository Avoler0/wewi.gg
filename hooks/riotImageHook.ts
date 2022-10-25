import axios from "axios";


export const riotImg = {
  ddragon:"https://ddragon.canisback.com/img",
  champion:function(champion:string){
    return `http://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/${champion}.png`
  },
  item:function(id){

  },
  perk:function(id){

  },
  profile:function(iconNumber:string){
    return `http://ddragon.leagueoflegends.com/cdn/10.11.1/img/profileicon/${iconNumber}.png`
  },
  
  rune:async function(primary:any,sub:any){
    const result = await axios.get('https://ddragon.leagueoflegends.com/cdn/12.9.1/data/en_US/runesReforged.json')
    .then((_res)=>{
      const primaryIndex = _res.data.findIndex((data) => data.id === primary?.style);
      const subIndex = _res.data.findIndex((data) => data.id === sub?.style);
      const primaryIcon = _res.data[primaryIndex]?.icon;
      const subIcon = _res.data[subIndex]?.icon

      return [`${this.ddragon}/${primaryIcon}`,`${this.ddragon}/${subIcon}`]
    })
    return result;
  },
  spell:function(spellName){
    return `http://ddragon.leagueoflegends.com/cdn/12.9.1/img/spell/${spellName}.png`;
  },

  
  
  
  
}

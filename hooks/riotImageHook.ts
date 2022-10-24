import axios from "axios";


export const riotImg = {
  ddragon:"https://ddragon.canisback.com/img",
  champion:function(id){

  },
  item:function(id){

  },
  perk:function(id){

  },
  profile:function(id){

  },
  rune:async function(primary:any,sub:any){
    console.log("룬 함수",primary, sub);
    
    const result = await axios.get('https://ddragon.leagueoflegends.com/cdn/12.9.1/data/en_US/runesReforged.json')
    .then((_res)=>{
      const primaryIndex = _res.data.findIndex((data) => data.id === primary?.style);
      const subIndex = _res.data.findIndex((data) => data.id === sub?.style);
      const primaryIcon = _res.data[primaryIndex]?.icon;
      const subIcon = _res.data[subIndex]?.icon

      return [`${this.ddragon}/${primaryIcon}`,`${this.ddragon}/${subIcon}`]
    })
    console.log(result);
    return result;
  },
  spell:function(spellName){
    return `http://ddragon.leagueoflegends.com/cdn/12.9.1/img/spell/${spellName}.png`;
  },
  
  
  
  
}
import { useEffect, useState } from "react";
import styled from "styled-components";
import ChampList from "./RecentList/ChampList";
interface I_soloData{
  champ:string,
  kills:number,
  deaths:number,
  assists:number,
  wins:number,
  count:number
}
function ChampRecently({gameInfo}:any) {
  const [recordData, setRecordData] = useState([]);
  const soloData:any[] = [];
  const freeData:any[] = [];
  const champRecord:any[] = [];
  // console.log("챔피언인포",gameInfo);
  
  useEffect(()=>{
    if(gameInfo){
      gameInfo.map((data:any)=>{
        const queueType = data.info.queueId;
        // console.log(data);
        if(queueType === 420 || queueType === 440){
          champRecord.push({
            champ:data.info.participants[data.participantId].championName,
            kills:data.info.participants[data.participantId].kills,
            deaths:data.info.participants[data.participantId].deaths,
            assists:data.info.participants[data.participantId].assists,
            win:data.info.participants[data.participantId].win,
            queue:queueType === 420 ?"solo" : "free"
            })
          }
      })
      // const result = champRecord.reduce((obj:any,val:any)=>{
      //   // console.log(obj,val);
        
      //   obj[obj.champ] = obj;
        
      //   if(obj[val.champ]){
      //     obj[val.champ].kills = obj[val.champ].kills + val.kills;
      //     obj[val.champ].deaths = obj[val.champ].deaths + val.deaths;
      //     obj[val.champ].assists = obj[val.champ].assists + val.assists;
      //     obj[val.champ].win = obj[val.champ].win + val.win;
      //     obj[val.champ].count = obj[val.champ].count + 1;
      //   } else {

          
      //     obj[val.champ] = val;
      //     obj[val.champ].win = obj[val.champ].win ? 1 : 0
      //     obj[val.champ].count = 1;
      //   }
      //   return obj;
        
      // })
      // console.log("리설트",result);
      
      //     const result = champRecord.filter((filterData:any,index:number)=> {
      // return champRecord.some(x2 => filterData.champ !== x2.champ)
      // champRecord.findIndex(findData => filterData.champ === findData.champ) === index
   
    // return setRecordData(recentChamp.filter((x:any) => x).sort((a:any,b:any) => b.count - a.count))
    
    }
  },[gameInfo])
  
return (
    <>
      <ChampList champRecord={champRecord} />
    </>
  );
}

const RecordUl = styled.ul`

`;

export default ChampRecently;

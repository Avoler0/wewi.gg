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
  const champRecord:any = [];
  console.log("챔피언인포",gameInfo);
  
  useEffect(()=>{
    if(gameInfo){
      gameInfo.map((data:any)=>{
        console.log(data);
        if(data.info.queueId === 420 ){
          soloData.push({
            champ:data.info.participants[data.participantId].championName,
            kills:data.info.participants[data.participantId].kills,
            deaths:data.info.participants[data.participantId].deaths,
            assists:data.info.participants[data.participantId].assists,
            win:data.info.participants[data.participantId].win
            })
        }else if(data.info.queueId === 440){
          freeData.push({
            champ:data.info.participants[data.participantId].championName,
            kills:data.info.participants[data.participantId].kills,
            deaths:data.info.participants[data.participantId].deaths,
            assists:data.info.participants[data.participantId].assists,
            win:data.info.participants[data.participantId].win
          })
        }
      })
    // return setRecordData(recentChamp.filter((x:any) => x).sort((a:any,b:any) => b.count - a.count))
    
    console.log("솔데",soloData);
    console.log("프데",freeData);
    
    }
  },[gameInfo])
  
return (
    <>
      <ChampList soloData={soloData} freeData={freeData}/>
    </>
  );
}

const RecordUl = styled.ul`

`;

export default ChampRecently;

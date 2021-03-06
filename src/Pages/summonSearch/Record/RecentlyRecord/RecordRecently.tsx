import { AnyMap } from "@reduxjs/toolkit/node_modules/immer/dist/internal";
import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import GameList from "./RecentList/GameList";


function RecordRecently({gameInfo}:any) {
  const [isLoading,setIsLoading] = useState<boolean>(true);
  const [champRecord , setChampRecord] = useState([]);
  const [gameRecord, setGameRecord] = useState<any>([]);
  let recordCount = 0;
  
  // console.log("소트인포",result);
  useEffect(()=>{
    let sortLoading = true;
    if(gameInfo) {
      gameInfo.map((data:any)=>{
      })
      gameInfo.sort((prevData:any,nextData:any)=>{
          const prevRes = Number(prevData.metadata.matchId.split('KR_')[1])
          const nextRes = Number(nextData.metadata.matchId.split('KR_')[1])
          return nextRes - prevRes
      })
      
      setIsLoading(false)
      // const detailGameInfo = gameInfo.reduce(
      //   (obj:any,val:any) => {
      //     obj.info.participants[val.participantId].kills = obj.info.participants[val.participantId].kills + val.info.participants[val.participantId].kills;
      //     return obj
      // })
      // console.log("디테일게임",detailGameInfo);
      if(sortLoading){
         gameInfo.map((data:any , index:number)=>{
        const leagueInfo = data.info
        const detailInfo = data.info.participants[data.participantId]
        const gameDetailData = {
          queueId:leagueInfo.queueId,
          gameCreation:leagueInfo.gameCreation,
          gameDuration:leagueInfo.gameDuration,
          gameEndTimestamp:leagueInfo.gameEndTimestamp,
          gameMode:leagueInfo.gameMode,
          win:detailInfo.win,
          assists: detailInfo.assists,
          deaths: detailInfo.deaths ,
          kills: detailInfo.kills ,
          lane: detailInfo.lane,
          totalMinionsKilled:detailInfo.totalMinionsKilled,
          neutralMinionsKilled:detailInfo.neutralMinionsKilled,
          championName:detailInfo.championName,
          summoner1Id:detailInfo.summoner1Id,
          summoner2Id:detailInfo.summoner2Id,
          perks:detailInfo.perks,
          team1Kills:leagueInfo.teams[0].objectives.champion.kills,
          team2Kills:leagueInfo.teams[1].objectives.champion.kills,
          teamId: detailInfo.teamId,
          visionScore:detailInfo.visionScore,
          item: [detailInfo.item0,detailInfo.item1,detailInfo.item2,detailInfo.item3,detailInfo.item4,detailInfo.item5,detailInfo.item6]
        };
          setGameRecord((gameRecord:any)=> [...gameRecord , gameDetailData] )
          
      })
      }
     
    }
  },[gameInfo])
  
  if(isLoading){
    return <div>기록 없음</div>
  }

  return (
    <RecordUl id="record">
        {gameRecord.map((data:any,index:number)=> <GameList key={index} gameInfo={data}/>)}
    </RecordUl>
  );
}

export default React.memo(RecordRecently);

const RecordUl = styled.ul`

`;

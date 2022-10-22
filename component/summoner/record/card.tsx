import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { riot } from "../../../hooks/riotApiHook";
// import GameList from "./RecentList/GameList";


export default function RecordCard({match}:any) {
  const [isLoading,setIsLoading] = useState<boolean>(true);
  const [champRecord , setChampRecord] = useState([]);
  const [gameRecord, setGameRecord] = useState<any>([]);
  let recordCount = 0;
  useEffect(()=>{
    riot.record(match)
    .then((_res)=>{
      console.log("기록",_res);
    })
    .catch((_error)=>{
      console.log("기록에러",_error);
    })
  },[])
  // useEffect(()=>{
  //   let sortLoading = true;
  //   if(match) {
  //     match.map((data:any)=>{
  //     })
  //     match.sort((prevData:any,nextData:any)=>{
  //         const prevRes = Number(prevData.metadata.matchId.split('KR_')[1])
  //         const nextRes = Number(nextData.metadata.matchId.split('KR_')[1])
  //         return nextRes - prevRes
  //     })
      
  //     setIsLoading(false)

  //     if(sortLoading){
  //        match.map((data:any , index:number)=>{
  //       const leagueInfo = data.info
  //       const detailInfo = data.info.participants[data.participantId]
  //       const gameDetailData = {
  //         queueId:leagueInfo.queueId,
  //         gameCreation:leagueInfo.gameCreation,
  //         gameDuration:leagueInfo.gameDuration,
  //         gameEndTimestamp:leagueInfo.gameEndTimestamp,
  //         gameMode:leagueInfo.gameMode,
  //         win:detailInfo.win,
  //         assists: detailInfo.assists,
  //         deaths: detailInfo.deaths ,
  //         kills: detailInfo.kills ,
  //         lane: detailInfo.lane,
  //         totalMinionsKilled:detailInfo.totalMinionsKilled,
  //         neutralMinionsKilled:detailInfo.neutralMinionsKilled,
  //         championName:detailInfo.championName,
  //         summoner1Id:detailInfo.summoner1Id,
  //         summoner2Id:detailInfo.summoner2Id,
  //         perks:detailInfo.perks,
  //         team1Kills:leagueInfo.teams[0].objectives.champion.kills,
  //         team2Kills:leagueInfo.teams[1].objectives.champion.kills,
  //         teamId: detailInfo.teamId,
  //         visionScore:detailInfo.visionScore,
  //         item: [detailInfo.item0,detailInfo.item1,detailInfo.item2,detailInfo.item3,detailInfo.item4,detailInfo.item5,detailInfo.item6]
  //       };
  //         setGameRecord((gameRecord:any)=> [...gameRecord , gameDetailData] )
          
  //     })
  //     }
     
  //   }
  // },[match])
  
  // if(isLoading){
  //   return <div>기록 없음</div>
  // }

  return (
    <div></div>
  );
}

const RecordUl = styled.ul`

`;

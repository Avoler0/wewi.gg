import { log } from "console";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { riot } from "../../../hooks/riotApiHook";
import RecordCard from "./card";

type props = {
  matchList:string[],
  puuid:string
}

export default function Record({matchList,puuid}:props) {
  // const matchList = matchList.slice(0,3);
  const [isLoading,setIsLoading] = useState<boolean>(true);
  const [matchDetail,setMatchDetail] = useState([]);
  function GameDetail(this: any, detail:any){
    const myGame = detail.metadata.participants.findIndex((id:string) => id === puuid);
    const myTeam = detail.info.participants.teamId === 100 ? 0 : 1;
    
    this.gameCreation = detail.info.gameCreation;
    this.gameDuration = detail.info.gameDuration;
    this.gameEndTimestamp = detail.info.gameEndTimestamp;
    this.gameId = detail.info.gameId;
    this.gameMode = detail.info.gameMode;
    this.gameStartTimestamp = detail.info.gameStartTimestamp
    this.participants = detail.info.participants[myGame]
    this.platformId = detail.info.platformId
    this.queueId = detail.info.queueId;
    this.win = detail.info.teams[myTeam].win;
    this.teamKill = detail.info.teams[myTeam].objectives.champion.kills;
  }
  
  useEffect(()=>{
    
    if(isLoading){
      (async()=>{
        const result:any = await Promise.all(
          matchList.map((match:string)=>{
            return riot.record(match)
            .then((_res:any)=>{
              const response = _res.data
              
              return response
            })
            .catch((_error:any)=>{
              console.log("record failed",_error);
              return _error
            })
          })
        ) 
        const resultDetail = result.map((data: any)=>{
          return new GameDetail(data);
        })
        setMatchDetail(resultDetail)
        setIsLoading(false)
      })()
    }
  },[isLoading])
  console.log("뭉텅이",matchDetail);
  
  if(isLoading) return (<div>없음</div>)

  return (
  <>
    <ChampView>
      {/* <ChampRecently  /> */}
    </ChampView>
    <GameView >
      {matchDetail.map((detail:string)=>{
        return (<RecordCard key={detail.gameId} detail={detail} />)
      })}
    </GameView>
  </>
  );
}

const ChampView = styled.div`

`;
const GameView = styled.div`

`;


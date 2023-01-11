
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { riot } from "../../../hooks/riotApiHook";
import RecordCard from "./card";

type props = {
  info:any
}

export default React.memo(Record)

function Record({info}:any) {
  const [details,setDetails] = useState<any>([])
  const [isLoading,setIsLoading] = useState(true);
  const [start,setStart] = useState<number>(0);
  const fetchMatch = useCallback(async (start:number)=>{
    const matchlist = await riot.matchList(info.puuid,start)
    await Promise.all(
      matchlist.map(async (match:string)=>{
        const response = await riot.matchDetail(match)
        const myParticipant = response.data.metadata.participants.indexOf(info.puuid)
        const myTeamId = response.data.info.participants[myParticipant].teamId === 100 ? 0 : 1;
        const result = {myIndex:myParticipant,myTeamId:myTeamId,...response.data}
        return result;
      })
    ).then((_details)=>{
      setDetails((prev:any) => [...prev,..._details])
      setIsLoading(false)
    })
  },[info])


  useEffect(()=>{
    fetchMatch(start)
  },[fetchMatch, start])
  if(isLoading) return (<div></div>)
  console.log(details)
  return (
  <>
    <ChampView>
      {/* <ChampRecently  /> */}
    </ChampView>
    <GameView >
      {details && details?.map((detail:any)=> <RecordCard key={detail.info.gameId} detail={detail}  />)}
      <More onClick={()=>{setStart(prev => prev+10)}}>더 보기</More>
    </GameView>
    
  </>
  );
}

const ChampView = styled.div`

`;
const GameView = styled.div`
  padding: 5px;
`;

const More = styled.button`
  width: 100%;
  height: 30px;
  margin: 10px auto;
  background-color: #3c556e;
  border: none;
  color: white;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;


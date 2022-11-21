import { log } from "console";
import React, { useEffect, useState } from "react";
import { useQueries, useQuery } from "react-query";
import styled from "styled-components";
import { riot } from "../../../hooks/riotApiHook";
import RecordCard from "./card";

type props = {
  info:any
}

export default function Record({info}:props) {
  const { data:details,isLoading } = useQuery('details',async () => await fetchMatch());
  const [start,setStart] = useState(0);
  async function fetchMatch(){
    const matchlist = await riot.matchList(info.puuid,start)
    const matchli = matchlist.slice(0,3)
    return await Promise.all(
      matchli.map(async (match:string)=>{
        const response = await riot.matchDetail(match)
        const myParticipant = response.data.metadata.participants.indexOf(info.puuid)
        const myTeamId = response.data.info.participants[myParticipant].teamId
        return {myIndex:myParticipant,myTeamId:myTeamId,...response.data};
      })
    )
}
{/* <RecordCard key={detail.matadata.matchId} detail={detail}/> */}
  useEffect(()=>{
    console.log("디테일스",details)
  },[details])

  if(isLoading) return (<div>없음</div>)

  return (
  <>
    <ChampView>
      {/* <ChampRecently  /> */}
    </ChampView>
    <GameView >
      {/* <RecordCard /> */}
      {details?.map((detail)=>{
        return <RecordCard key={detail.metadata.matchId} detail={detail}/>
      })}
    </GameView>
    <div>더보기</div>
  </>
  );
}

const ChampView = styled.div`

`;
const GameView = styled.div`

`;


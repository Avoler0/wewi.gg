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
  const [details,setDetails] = useState<any>([])
  const [isLoading,setIsLoading] = useState(true);
  // const { data:details,isLoading } = useQuery('details',async () => await fetchMatch());
  const [start,setStart] = useState(0);
  async function fetchMatch(){
    const matchlist = await riot.matchList(info.puuid,start)
    return await Promise.all(
      matchlist.map(async (match:string)=>{
        const response = await riot.matchDetail(match)
        const myParticipant = response.data.metadata.participants.indexOf(info.puuid)
        const myTeamId = response.data.info.participants[myParticipant].teamId === 100 ? 0 : 1;
        const result = {myIndex:myParticipant,myTeamId:myTeamId,...response.data}
        return result;
      })
    ).then((_res)=>{
      console.log(_res)
      // setDetails(prev => [...prev,_res])
      setDetails(prev => [...prev,_res])
      setIsLoading(false)
    })
}
  useEffect(()=>{
    fetchMatch()
  },[start])
{/* <RecordCard key={detail.matadata.matchId} detail={detail}/> */}
  useEffect(()=>{
    console.log("디테일스",details)
  },[details])

  if(isLoading) return (<div>없음</div>)
//  return (
//   <button onClick={()=>{setStart(perv => perv + 5)}}>스타트 업</button>)
  return (
  <>
  <button onClick={()=>{setStart(perv => perv + 5)}}>스타트 업</button>
    <ChampView>
      {/* <ChampRecently  /> */}
    </ChampView>
    <GameView >
      {/* <RecordCard /> */}
      {details?.map((detail)=>{
        return detail.map((deta,index)=>{
           return <RecordCard key={index} detail={deta}/>
        })
      })}
    </GameView>
    <div onClick={()=>{setStart(perv => perv + 5)}}>더보기</div>
  </>
  );
}

const ChampView = styled.div`

`;
const GameView = styled.div`

`;


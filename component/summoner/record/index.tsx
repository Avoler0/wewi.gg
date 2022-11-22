
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { riot } from "../../../hooks/riotApiHook";
import RecordCard from "./card";

type props = {
  info:any
}

export default function Record({info}:props) {
  const [details,setDetails] = useState<any>([])
  const [isLoading,setIsLoading] = useState(true);
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
      setDetails(prev => [...prev,_res])
      setIsLoading(false)
    })
}
  useEffect(()=>{
    fetchMatch()
  },[start])

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
        return detail.map((deta,index)=>{
           return <RecordCard key={index} detail={deta}/>
        })
      })}
      <More onClick={()=>{setStart(perv => perv + 10)}}>더 보기</More>
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


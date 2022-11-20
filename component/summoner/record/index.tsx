import { log } from "console";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { riot } from "../../../hooks/riotApiHook";
import RecordCard from "./card";

type props = {
  info:any
}

export default function Record({info}:props) {
  const [matchList,setMatchList] = useState([]);
  const [isLoading,setIsLoading] = useState<boolean>(true);
  const [matchDetail,setMatchDetail] = useState([]);

  function fetchMatch(){
    riot.matchList(info.puuid,0,3)
    .then(async (_res)=>{
      return _res.map((match:string)=>{
        riot.matchDetail(match)
      })
      
    })
  }
  useEffect(()=>{

  },[])

  if(isLoading) return (<div>없음</div>)

  return (
  <>
    <ChampView>
      {/* <ChampRecently  /> */}
    </ChampView>
    <GameView >

    </GameView>
  </>
  );
}

const ChampView = styled.div`

`;
const GameView = styled.div`

`;


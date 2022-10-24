import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { riot } from "../../../hooks/riotApiHook";
import RecordCard from "./card";

type props = {
  matchList:string[]
}

export default function Record({matchList,puuid}:any) {
  const matchLi = ['KR_6171170875', 'KR_6171056283', 'KR_6170148681']
  const [isLoading,setIsLoading] = useState<boolean>(true);
  const [matchDetail,setMatchDetail] = useState([]);

  useEffect(()=>{
    setIsLoading(false)
    if(!isLoading){
      (async()=>{
        const result:any = await Promise.all(
          matchLi.map((match:string)=>{
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
        setMatchDetail(result)
      })()
    }
  },[isLoading])

  if(isLoading) return (<div>없음</div>)

  return (
  <>
    <ChampView>
      {/* <ChampRecently  /> */}
    </ChampView>
    <GameView >
      {matchDetail.map((detail:string)=>{
        return (<RecordCard key={detail} detail={detail} puuid={puuid} />)
      })}
    </GameView>
  </>
  );
}

const ChampView = styled.div`

`;
const GameView = styled.div`

`;


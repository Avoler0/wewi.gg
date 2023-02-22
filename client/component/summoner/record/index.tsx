
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { riotMatchHook } from "../../../hooks/server/riot/match";
import RecordCard from "./card";

type props = {
  info:any,
  searchString:string
}

export default React.memo(Record)

function Record({info,searchString}:props) {
  const [details,setDetails] = useState<any>([])
  const [isLoading,setIsLoading] = useState(true);
  const [start,setStart] = useState<number>(0);
  const fetchMatch = useCallback(async (start?:number)=>{
    const matchlist:any = await riotMatchHook.list(info.puuid,start ?? 0).then((_res:any) => _res.data)
    await Promise.all(
      matchlist.map(async (match:string)=>{
        return riotMatchHook.detail(info.puuid,match).then((_res:any)=> _res.data)
      })
    ).then((_details)=>{
      setDetails((prev:any) => [...prev,..._details])
      setIsLoading(false);
    })
  },[info])


  useEffect(()=>{
    fetchMatch()
  },[fetchMatch])

  useEffect(()=>{
    setDetails([])
  },[searchString])

  if(isLoading) return (<div></div>)

  return (
  <>
    <ChampView>
      {/* <ChampRecently  /> */}
    </ChampView>
    <GameView >
      {details && details?.map((detail:any)=> <RecordCard key={detail.info.gameId} detail={detail}  />)}
      <More onClick={()=>{
        fetchMatch(start+5);
        setStart(+5)
      }}>더 보기</More>
    </GameView>
    
  </>
  );
}

const ChampView = styled.div`
  
`;
const GameView = styled.div`
  padding: 0 5px;
  background-color: #fff;
  border-radius: 5px;
`;

const More = styled.button`
  width: 100%;
  height: 30px;
  margin: 0 auto;
  background-color: #9fb2c5;
  border: none;
  color: white;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;


import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { riot } from "../../../hooks/riotApiHook";

export default React.memo(ChampMastery)

function ChampMastery({info}:any){
  console.log("마스터리",info)

  useEffect(()=>{
    (async()=>{
      const result = await riot.champion.mastery(info.id)
      console.log("마스터리 리설트",result)
    })()
  },[])

  return (
    <Wrap>
      마스터리
    </Wrap>
  )
}

const Wrap = styled.div`
  padding: 10px;
`;
import React from "react";
import { useEffect } from "react";
import styled from "styled-components";

export default React.memo(ChampMastery)

function ChampMastery({info}:any){
  console.log("마스터리",info)



  return (
    <Wrap>
      마스터리
    </Wrap>
  )
}

const Wrap = styled.div`
  padding: 10px;
`;
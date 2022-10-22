import { useState } from "react";
import styled from "styled-components";
import LeagueCard from "./card";


export default function LeagueInfo({league}:any){
  const soloLeague = league[0];
  const teamLeague = league[1]
  return (
    <RankWrap>
      <LeagueCard info={league[0]} margin/>
      <LeagueCard info={league[1]} />
    </RankWrap>
  )
}

const RankWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;


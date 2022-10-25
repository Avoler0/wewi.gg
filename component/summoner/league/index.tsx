import { useState } from "react";
import styled from "styled-components";
import LeagueCard from "./card";


export default function LeagueInfo({league}:any){
  if(!league) return <div>없음</div>
  const rank = {
    solo:league[0],
    team:league[1]
  }

  return (
    <RankWrap>
      <LeagueCard info={rank.solo} margin={true} />
      <LeagueCard info={rank.team} margin={false} />
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


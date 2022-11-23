import React from "react";
import { useState } from "react";
import styled from "styled-components";
import LeagueCard from "./card";

export default React.memo(LeagueInfo)

function LeagueInfo({league}:any){
  const rank = {
    solo:league[0].queueType === 'RANKED_SOLO_5x5' ? league[0] : league[1],
    team:league[1].queueType === 'RANKED_FLEX_SR' ? league[1] : league[0]
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


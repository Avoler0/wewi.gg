import React from "react";
import styled from "styled-components";
import LeagueCard from "./card";
import LeagueUnrankCard from "./unrankedCard";

export default React.memo(LeagueInfo)

function LeagueInfo({league}:any){
  const rank = {
    solo:league[0] ? league[0].queueType === 'RANKED_SOLO_5x5' ? league[0] : league[1] : 'unranked',
    team:league[1] ? league[1].queueType === 'RANKED_FLEX_SR' ? league[1] : league[0] : 'unranked'
  }
  console.log(rank.team)
  return (
    <RankWrap>
      {rank.solo === 'unranked' ? <LeagueUnrankCard margin={true} /> : <LeagueCard info={rank.solo} margin={true} /> }
      {rank.team === 'unranked' ? <LeagueUnrankCard margin={false} /> : <LeagueCard info={rank.team} margin={false} /> }
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
  background-color: RGB(235, 238, 241);
`;


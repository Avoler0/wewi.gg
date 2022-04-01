import { useEffect, useState } from "react";
import styled from "styled-components";
import SoloRank from "./soloRank/soloRank";

function SummonerInfo ({summonerInfo}:any) {
  const [soloRank,setSoloRank] = useState();
  const [teamRank,setTeamRank] = useState();

  useEffect(()=>{
    summonerInfo.map((rank:any) => {
      rank.queueType==="RANKED_SOLO_5x5" ? setSoloRank(rank) : setTeamRank(rank);
    })
  },[])
  
  console.log("solo",soloRank);
  console.log("team",teamRank);
  
  
  return (
    <RankWrap>
      <RankType>
          <SoloRank />

      </RankType>
    </RankWrap>
  );
}

export default SummonerInfo;


const RankWrap = styled.div`

`;
const RankType = styled.div`

`;
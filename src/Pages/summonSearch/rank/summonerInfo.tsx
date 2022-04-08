import { useEffect, useState } from "react";
import styled from "styled-components";
import SoloRank from "./soloRank/soloRank";
import TeamRank from "./teamRank/teamRank";

function SummonerInfo ({summonerInfo}:any) {
  const [soloRank,setSoloRank] = useState();
  const [teamRank,setTeamRank] = useState();
  const [rankType , setRankType] = useState(true);
  useEffect(()=>{
    summonerInfo.map((rank:any) => {
      rank.queueType==="RANKED_SOLO_5x5" ? setSoloRank(rank) : setTeamRank(rank);
    })
  },[])
  const rankClick = (e:any) => {
    const {value} = e.target;
    if(value === "solo") {
      setRankType(true);
    }else{
      setRankType(false);
    }
    
  }
  // console.log("solo",soloRank);
  // console.log("team",teamRank);
  
  
  return (
    <RankWrap>
      <RankType>
        <TypeButton onClick={rankClick} value="solo">솔로랭크</TypeButton>
        <TypeButton onClick={rankClick} value="team">자유랭크</TypeButton>
      </RankType>
      <RankInfo>
        {rankType ? <SoloRank soloRank={soloRank!}/> : <TeamRank />}
      </RankInfo>
    </RankWrap>
  );
}

export default SummonerInfo;


const RankWrap = styled.div`
  
`;

const RankType = styled.div`
  height: 30px;
  border-bottom: 1px solid black;
`;
const TypeButton = styled.button`
  border: none;
  background-color:transparent ;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;
const RankInfo = styled.div`
`;
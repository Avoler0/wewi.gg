import styled from "styled-components";
import { getTierName } from "../../../../const/utils";

const RankInfo = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  padding: 10px;
`;
const RankImg = styled.div`
width: 40%;
  height: 150px;
  overflow: hidden;
  position: relative;
  padding: 20px;
  img{
    border-radius: 50px;
    /* background-color: red; */
    border: 2px solid gray;
    padding: 3px;
    position: absolute;
    left: 10px;
    width: 90%;
    height: auto;
    display: block;
    object-fit: cover;
  }
`;
const RankDetail = styled.div`
  padding: 30px;
`;
const RankTier = styled.div`
  font-size: 16px;
  font-weight: bold;
`;
const RankPoint = styled.div`

`;
const RankRate = styled.div`

`;

interface I_summonerInfo {
  soloRank:{
    freshBlood: boolean,
    hotStreak: boolean,
    inactive: boolean,
    leagueId: string,
    leaguePoints: number,
    losses: number,
    queueType: string,
    rank: string,
    summonerId: string,
    summonerName: string,
    tier: string,
    veteran: boolean,
    wins: number,
  }
    
}
function SoloRank({soloRank}:I_summonerInfo) {
  // console.log(soloRank.tier.toLowerCase().trim());
  
  if(soloRank === undefined)
  {
    return <div>없음</div>
  }
  const tierKr = getTierName(soloRank.tier)
  return (
      <RankInfo>
        <RankImg>
          <img src={`../images/tier-icons/tier-icons/${soloRank.tier.toLowerCase().trim()}_${soloRank.rank.toLowerCase().trim()}.png`}/>
        </RankImg>
        <RankDetail>
          <RankTier>
          {tierKr} {soloRank.rank}
          </RankTier>
          <RankPoint>
            {soloRank.leaguePoints} LP
          </RankPoint>
          <RankRate>
            {soloRank.wins}승 {soloRank.losses}패 ({}%)
          </RankRate>
        </RankDetail>
      </RankInfo>
  );
}

export default SoloRank;
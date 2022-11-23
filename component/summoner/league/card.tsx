import styled from "styled-components";
import Image from "next/image";

export default function LeagueCard({info,margin}:any){
  const { leaguePoints, losses,queueType,rank,tier,wins } = info;
  const rankType = queueType === "RANKED_SOLO_5x5" ? "솔로 랭크" : "자유 랭크"
  const rate = (wins/(wins+losses))*100

  return(
    <Card margin={margin} >
      <RankTitle>{rankType}</RankTitle>
      <InfoWrap>
        <ImageDiv>
          <div>
            <Image src={`/images/tier-icons/tier-icons/${info.tier.toLowerCase().trim()}_${info.rank.toLowerCase().trim()}.png`} alt="tier" width="80" height="80" objectFit="cover"/>
          </div>
        </ImageDiv>
        <ContentDiv>
          <Rank>
            <div>{tier} {rank}</div>
            <div>{leaguePoints}LP</div>
          </Rank>
          <WinRate>
            <div>
              <span>{wins}승</span>
              &nbsp;
              <span>{losses}패</span>
            </div>
            <div>
              <span>승률 {Math.floor(rate)}%</span>
            </div>
          </WinRate>
        </ContentDiv>
      </InfoWrap>
    </Card>
  )

}

const Card = styled.div<{margin:boolean}>`
  align-items: center;
  width: 100%;
  height: 8rem;
  background-color: #2c3e50;
  border-radius: 0.5rem;
  margin-bottom: ${props => props.margin ? "0.5rem":"0"}
`;
const RankTitle = styled.div`
  padding: 0.1rem 0 0.2rem 0.7rem;
  color: white;
  font-weight: bold;
  border-bottom: 1px solid #706a6a;
`;
const InfoWrap = styled.div`
  display: flex;
  align-items: center;
`;
const ImageDiv = styled.div`
  flex: 4;
  div{
    display: inline-block;
    padding: 0.5rem;
    border-radius: 5rem;
  }
`;
const ContentDiv = styled.div`
  width: 100%;
  flex: 6;
  display: flex;
  justify-content: space-between;
`;
const Rank = styled.div`
  color: white;
  font-size: 0.9rem;
`;
const WinRate = styled.div`
  padding-right: 1rem;
  color: #cccccc;
`;
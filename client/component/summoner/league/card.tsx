import styled from "styled-components";
import Image from "next/image";

export default function LeagueCard({info,margin}:any){
  
  const { leaguPoints, losses,queueType,rank,tier,wins } = info;
  const rankType = queueType === "RANKED_SOLO_5x5" ? "솔로 랭크" : "자유 랭크"
  const rate = (wins/(wins+losses))*100

  console.log(leaguePoints)
  return(
    <Card margin={margin} >
      <RankTitle>{rankType}</RankTitle>
      <InfoWrap>
        <ImageDiv>
          <div>
            <Image src={`/images/tier-icons/emblem-icons/emblem-${info.tier.toLowerCase()}.png`} alt="tier" width="350" height="300" objectFit="none"/>
          </div>
        </ImageDiv>
        <ContentDiv>
          <Rank>
            <div>{tier} {rank}</div>
            {/* <div>{leaguePoints}LP</div> */}
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
  width: 100%;
  height: 8rem;
  background-color: rgb(22, 43, 59);
  color: #fff;
  margin-bottom: ${props => props.margin ? "0.5rem":"0"}
`;
const RankTitle = styled.div`
  height: 20%;
  padding: 0.1rem 0 0.2rem 0.7rem;
  border-bottom: 1px solid #706a6a;
`;
const InfoWrap = styled.div`
  display: flex;
  align-items: center;
  height: 80%;
`;
const ImageDiv = styled.div`
  flex: 4;
  width: 100%;
  height: 100%;
  div{
    display: inline-block;
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
  font-size: 0.9rem;
  font-weight: bold;
`;
const WinRate = styled.div`
  padding-right: 1rem;
  font-size: 0.8rem;
`;
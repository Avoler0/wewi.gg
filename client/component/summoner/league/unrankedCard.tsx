/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";

export default function LeagueUnrankCard({margin}:any){
  return(
    <Card margin={margin} >
      <RankTitle>{margin ? '솔로 랭크' : '자유 랭크'}</RankTitle>
      <InfoWrap className="infoWrap">
        <Rank>
          <img src={`/images/tier-icons/emblem-icons/emblem-unranked.svg`} alt="티어" width="100" height="100"/>
          <div>Unranked</div>
        </Rank>
      </InfoWrap>
    </Card>
  )

}

const Card = styled.div<{margin:boolean}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 8rem;
  background-color: rgb(22, 43, 59);
  margin-bottom: ${props => props.margin ? "0.5rem":"0"};
  color:#fff;
`;
const RankTitle = styled.div`
  padding: 0.1rem 0 0.2rem 0.7rem;
  text-align: left;
  border-bottom: 1px solid rgb(205, 215, 224);
`;
const InfoWrap = styled.div`
  width: 100%;
  height: 100%;
`;
const Rank = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  line-height: 5rem;
  color: #b3adad;
  font-size: 2rem;
  align-items: center;
  img{
    margin-left: .5rem;
  }
  div{
    margin-left: 1.2rem;
  }
`;

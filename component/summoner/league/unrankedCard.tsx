import styled from "styled-components";
import Image from "next/image";

export default function LeagueUnrankCard({margin}:any){
  return(
    <Card margin={margin} >
      <RankTitle>{margin ? '솔로 랭크' : '자유 랭크'}</RankTitle>
      <InfoWrap className="infoWrap">
        <Rank>
          <div>Unranked</div>
        </Rank>
      </InfoWrap> *
    </Card>
  )

}

const Card = styled.div<{margin:boolean}>`
  display: flex;
  flex-direction: column;
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
  text-align: left;
  border-bottom: 1px solid #706a6a;
`;
const InfoWrap = styled.div`
  width: 100%;
  height: 100%;
`;
const Rank = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 5rem;
  color: #b3adad;
  font-size: 2rem;
`;

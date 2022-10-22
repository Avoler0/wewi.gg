import styled from "styled-components";


export default function Rankinfo(){
  
  return (
    <RankWrap>
      <RankType>
        <TypeButton value="solo">솔로랭크</TypeButton>
        <TypeButton value="team">자유랭크</TypeButton>
      </RankType>
      {/* <RankInfo>
        {rankType ? <SoloRank soloRank={soloRank!}/> : <TeamRank />}
      </RankInfo> */}
    </RankWrap>
  )
}

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
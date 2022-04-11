import { useState } from "react";
import styled from "styled-components";
import ClanRes from "./ClanRes/ClanRes";

const Container = styled.div`
  max-width: 1903px;
  min-width: 1200px ;
  margin: 0 auto ;
`;
const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const Head = styled.div`
  width:100% ;
  height: 20vh ;
  padding-bottom: 48px;
`;
const Filter = styled.div`
  display: flex ;
`;
const CategoryBt = styled.button`
  border-radius: 0;
  font-size: 16px;
  font-weight: bold;
  background-color: white;
  
  border: 0;
`;
const CategoryWrap = styled.div`
  display: flex;
  transition: 0.2s ease-in-out;
`;
const CategoryValue = styled.button`
  margin-left: 5px;
`;
const BoardWrapper = styled.div`
  padding-top: 40px ;
  display: grid;
  grid-template-columns: repeat(4,1fr) ;
  grid-gap: calc(15px);
`;
function Clan() {
  const [cgSwitch,setCgSwitch] = useState(false);
  const categorySwitch = () => {
    setCgSwitch(prev => !prev)
  }
  return (
    <Container>
      <Wrapper>
        <Head />
        <Filter>
          <CategoryBt onClick={categorySwitch}>카테고리</CategoryBt>
          {cgSwitch ? 
          <CategoryWrap>
            <CategoryValue>성인</CategoryValue>
            <CategoryValue>친목</CategoryValue>
            <CategoryValue>랭크</CategoryValue>
            <CategoryValue>즐겜</CategoryValue>
          </CategoryWrap>
           : null}
        </Filter>
        <BoardWrapper>
          {[1,2,3,4,5,6,7,8,9,10,11,12,13].map((board) => <ClanRes/>)}
        </BoardWrapper>
      </Wrapper>
    </Container>
  );
}

export default Clan;
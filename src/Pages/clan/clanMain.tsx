
import { useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Container, Wrapper } from "../../commons/sharingCss";
import ClanInput from "./ClanCommon/ClanInput";
import ClanRes from "./ClanCommon/ClanRes";

const Filter = styled.div`
  position: relative;
  display: flex ;
  width: 100%;
  height: 2.2rem;
`;
const CategoryBt = styled.button`

  height: 2.2rem;
  border-radius: 0;
  font-size: 16px;
  font-weight: bold;
  background-color: #28283b;
  border: 0;
  color: white;
  cursor: pointer;
`;
const CategoryWrap = styled.div`

`;
const CategoryValue = styled.div`
  margin-left: 5px;
  width: 2.8rem;
  height: 2.2rem;
  background-color: #28283b;
  font-size: 14px;
  border: none;
  color: white;
  text-align: center;
  line-height: 2rem;
  display: inline-block;
`;
const BoardWrapper = styled.div`
  padding-top: 40px ;
  display: grid;
  grid-template-columns: repeat(4,1fr) ;
  grid-gap: calc(15px);
  @media (max-width: 1199px) {
    grid-template-columns: repeat(3,1fr) ;
    grid-gap: calc(20px);
  }
  @media (max-width: 995px) {
    grid-template-columns: repeat(2,1fr) ;
    grid-gap: calc(15px);
  }
  @media (max-width: 572px){
    grid-template-columns: repeat(2,1fr) ;
    grid-gap: calc(5px);
  }
`;
const AddButton = styled.button`
  position: absolute;
  width: 5.2rem;
  height: 2.2rem;
  margin-left: 20px;
  font-size: 16px;
  font-weight: bold;
  right: 0;

  background-color: #2c3e50;
  border: none;
  border-radius: 5px;
  color: rgba(123,122,142,1);
  cursor: pointer;
`;
function Clan() {
  const [cgSwitch,setCgSwitch] = useState(false);
  const history = useNavigate();
  const overlayMatch = useMatch('/clan/addClan');
  const categorySwitch = () => {
    setCgSwitch(prev => !prev)
  }
  const addClick = () => {
    history('/clan/addClan')
  }

  return (
      <Container>
        <Wrapper>
          <Filter id="filter">
            {/* <CategoryBt onClick={categorySwitch}>카테고리</CategoryBt>
            {cgSwitch ? 
            <CategoryWrap>
              <CategoryValue>나이</CategoryValue>
              <CategoryValue>성향</CategoryValue>
              <CategoryValue>게임</CategoryValue>
            </CategoryWrap>
            : null} */}
            <AddButton onClick={addClick}>등록</AddButton>
          </Filter>
          <BoardWrapper>
            {[1,2,3,4,5,6,7,8,9,10,11,12,13].map((board) => <ClanRes key={board}/>)}
          </BoardWrapper>
        </Wrapper>     
        {overlayMatch ? <ClanInput /> : null}
      </Container>
  );
}

export default Clan;
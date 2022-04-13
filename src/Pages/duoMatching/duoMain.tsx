import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useMatch, useNavigate  } from "react-router-dom";
import styled from "styled-components";
import DuoInput from "./DuoCommon/DuoInput";
import DuoRes from "./DuoCommon/DuoRes";

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
  position: relative;
`;
const GameFilter = styled.div`
`;
const GameSelect = styled.select`
  margin-right: 20px ;
  font-size: 15px ;
  border: 1px solid (66,66,84,0.8);
  background-color: #2c3e50;
  width: 6.5rem;
  height: 2.2rem;
  border-radius: 5px;
  color: rgba(123,122,142,1);
`;
const GameOption = styled.option`
 
`;
const TierFilter = styled.div`
`;
const TierSelect = styled.select`
  margin-right: 20px ;
  font-size: 15px ;
  width: 6.5rem;
  height: 2.2rem;
  border: 1px solid (66,66,84,0.8);
  border-radius: 5px;
  background-color: #2c3e50;
  color: rgba(123,122,142,1);
`;
const TierOption = styled.option`

`;

const LineTypes = styled.ul`
  display: flex ;

  
`;
const LineItems = styled.li`
  width: 2.2rem;
  height: 2.2rem;
  padding: 0.2rem;
  border: none;
  background-color: #2c3e50;
  border: 1px solid rgba(66,66,84,0.8);
  cursor: pointer;
  img{
    width: 100%;
  }
`;
const BoardLayOut = styled.div`
  display:grid ;
  grid-template-columns: repeat(5,1fr) ;
  grid-gap: calc(20px);
  padding-top: 40px ;
`;
const AddButton = styled.button`
  position: absolute;
  width: 5.2rem;
  height: 2.2rem;
  margin-left: 20px;
  font-size: 16px;
  font-weight: bold;
  right: 0;
  margin-right: 3rem;
  background-color: #2c3e50;
  border: none;
  border-radius: 5px;
  color: rgba(123,122,142,1);
  cursor: pointer;
`;
function Main() {
  const history = useNavigate();
  const overlayMatch = useMatch('/duo/addDuo');
  let report = 2;
  let hour = 0;
  let minutes = 1;
  const addDuoInput = () => {
    history("/duo/addDuo")
  };
  useEffect(()=>{
    console.log(overlayMatch);
  },[overlayMatch])
  
  return (
    <>
      <Container>
        <Wrapper>
          <Head/>
            <Filter>
              <GameFilter>
                <GameSelect>
                  <GameOption value="all">모두보기</GameOption>
                  <GameOption value="normal">일반게임</GameOption>
                  <GameOption value="soloRank" selected>솔로랭크</GameOption>
                  <GameOption value="teamRank">자유랭크</GameOption>
                  <GameOption value="windFall">칼 바 람</GameOption>
                  <GameOption value="special">특별모드</GameOption>
                </GameSelect>
              </GameFilter>
              <TierFilter>
                <TierSelect>
                  <TierOption>아이언</TierOption>
                  <TierOption>브론즈</TierOption>
                  <TierOption selected>실버</TierOption>
                  <TierOption>골드</TierOption>
                  <TierOption>플래티넘</TierOption>
                  <TierOption>다이아</TierOption>
                  <TierOption>마스터</TierOption>
                  <TierOption>그랜드마스터</TierOption>
                  <TierOption>챌린저</TierOption>
                </TierSelect>
              </TierFilter>
              <LineTypes>
                <LineItems>
                  <img src={`../images/icon/line/Line-All-Ico.png`} />
                </LineItems>
                <LineItems>
                  <img src={`../images/icon/line/Line-Top-Ico.png`} />
                </LineItems>
                <LineItems>
                  <img src={`../images/icon/line/Line-Jungle-Ico.png`} />
                </LineItems>
                <LineItems>
                  <img src={`../images/icon/line/Line-Mid-Ico.png`} />
                </LineItems>
                <LineItems>
                  <img src={`../images/icon/line/Line-Bottom-Ico.png`} />
                </LineItems>
                <LineItems>
                  <img src={`../images/icon/line/Line-Support-Ico.png`} />
                </LineItems>
              </LineTypes>
              <AddButton onClick={() => addDuoInput()}>등록</AddButton>
            </Filter>
            
            <BoardLayOut>
              {[1,2,3,4,5,6,7,8,9].map((board:number)=> <DuoRes />)}
            </BoardLayOut>
          </Wrapper>
      </Container>
      {overlayMatch ? <DuoInput /> : null}
    </>
  );
}

export default Main;



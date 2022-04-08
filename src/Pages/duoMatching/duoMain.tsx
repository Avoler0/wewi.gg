import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import DuoRes from "./DuoRes/DuoRes";

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
const MainLayout = styled.div`
  padding: 30px ;
`;
const GameFilter = styled.div`
`;
const GameSelect = styled.select`
  margin-right: 20px ;
  font-size: 15px ;
  border: 1px solid black;
  background-color: #ecf0f1;
  width: 100px;
`;
const GameOption = styled.option`
 
`;
const TierFilter = styled.div`
`;
const TierSelect = styled.select`
  margin-right: 20px ;
  font-size: 15px ;
`;
const TierOption = styled.option`

`;

const LineFilter = styled.div`

`;
const LineTypes = styled.div`
  display: flex ;
  border: 1px solid wheat;
`;
const LineItems = styled.button`
  padding: 0 10px ;
  border: none;
  background-color: white;
  width: 50px;
  
  :hover{
    cursor: pointer;
  }
  img{
    width: 80%;
  }
`;
const BoardLayOut = styled.div`
  display:grid ;
  grid-template-columns: repeat(5,1fr) ;
  grid-gap: calc(20px);
  padding-top: 40px ;
`;
const AddButton = styled.button`
  margin-left: 20px;
  font-size: 16px;
  font-weight: bold;
  background-color: red;
  border: none;
  cursor: pointer;
`;
function Main() {
  // const history:any = useHistory();
  let report = 2;
  let hour = 0;
  let minutes = 1;
  // const addOverLay = () => history.push("/addDuo");
  return (
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
            <LineFilter>
              <LineTypes>
                <LineItems>
                  <img src={`../images/icon/line/Line-All-Ico.png`} />
                </LineItems>
                <LineItems>
                  <img src={`../images/icon/line/Line-Top-Ico.png`} />
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
            </LineFilter>
            {/* <AddButton onClick={addOverLay}>등록</AddButton> */}
          </Filter>
          <BoardLayOut>
            {[1,2,3,4,5,6,7,8,9].map((board:number)=> <DuoRes />)}
          </BoardLayOut>
        </Wrapper>
    </Container>
  );
}

export default Main;

function useHistory() {
  throw new Error("Function not implemented.");
}

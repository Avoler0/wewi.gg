import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
const MainLayout = styled.div`
  padding: 30px ;
`;
const GameFilter = styled.div`
`;
const GameSelect = styled.select`
  margin-right: 20px ;
  font-size: 15px ;
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
const LineTypes = styled.ul`
  display: flex ;
`;
const LineItems = styled.li`
  padding: 0 10px ;
`;
const BoardLayOut = styled.div`
  display:grid ;
  grid-template-columns: repeat(5,1fr) ;
  grid-gap: calc(20px);
  padding-top: 40px ;
`;
const Board = styled.div`
  position: relative;
  background-color: #1B1464 ;
  width: 180px ;
  height: 180px;
  border-radius: 15px ;

`;
const BoardBottom = styled.div`
  font-size: 16px;
  margin: 5px;
  height: 42%;
`;
const BoardFooter = styled.div`
  position: absolute;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  right: 0;
  bottom: 0px;
  padding: 7px;
  width: 100%;
  color: rgba(255,255,255,0.7)
`;
const BoardTime = styled.div`
  font-weight: 400;
`;
const BoardReport = styled.div`

`;
const BoardTop = styled.div`
  
`;
const BoardHigh = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  width: 100%;
`;
const BoardLow = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 5px;
  border-bottom: solid 1px white;
`;
const BoardItems = styled.ul`
  display:flex ;
  width: 90% ;
  height: 40% ;
  margin: auto ;
  padding-top: 8px;
`;
const BoardItem = styled.li`
  margin-right: 5px;
  
`;

const BoardIcon = styled.div`
  border: solid 1px white;
  border-radius: 20px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
const BoardSummoner = styled.div`
  font-size: 16px;
  font-weight: 800;
  margin: 0 auto;
  cursor: pointer;
`;
function Main() {
  
  let report = 2;
  let hour = 0;
  let minutes = 1;
  return (
    <Container>
      <Wrapper>
        <Head/>
          <Filter>
            <GameFilter>
              <GameSelect>
                <GameOption>일반게임</GameOption>
                <GameOption>솔로랭크</GameOption>
                <GameOption>자유랭크</GameOption>
                <GameOption>칼 바 람</GameOption>
                <GameOption>특별모드</GameOption>
              </GameSelect>
            </GameFilter>
            <TierFilter>
              <TierSelect>
                <TierOption>아이언</TierOption>
                <TierOption>브론즈</TierOption>
                <TierOption>실버</TierOption>
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
                  모두
                </LineItems>
                <LineItems>탑</LineItems>
                <LineItems>미드</LineItems>
                <LineItems>원딜</LineItems>
                <LineItems>서폿</LineItems>
              </LineTypes>
            </LineFilter>
          </Filter>
          <BoardLayOut>
            {[1,2,3,4,5,6,7,8,9].map((board:number)=> <Board key={board+""}>
              <BoardTop>
                <BoardHigh>
                  <BoardIcon />
                  <BoardSummoner>소환사명</BoardSummoner>
                </BoardHigh>
                <BoardLow>
                  <BoardItems>
                    <BoardItem>라인</BoardItem>
                    <BoardItem>승률</BoardItem>
                    <BoardItem>최근챔</BoardItem>
                  </BoardItems>
                </BoardLow>
                </BoardTop>
              
              <BoardBottom>
                <span>같이 할 사람 구해요 ~</span>
                <BoardFooter>
                  <BoardReport>
                    <Link to="/reportView">신고 누적 : {report}회</Link>
                  </BoardReport>
                  <BoardTime>
                    <span>{minutes} 분전</span>
                  </BoardTime>
                </BoardFooter>
              </BoardBottom>
              
            </Board>)}
          </BoardLayOut>
        </Wrapper>
    </Container>
  );
}

export default Main;
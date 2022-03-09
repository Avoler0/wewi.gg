import styled from "styled-components";

const Container = styled.div`
  max-width: 1148px ;
  min-width: 768px ;
  margin: 0 auto ;
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
const Head = styled.div`
  width:100% ;
  height: 10vh ;
  padding-bottom: 48px;
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
  grid-gap: 10px;
  padding-top: 40px ;
`;
const Board = styled.div`
  background-color: red ;
  width: 180px ;
  height: 180px;
  border-radius: 15px ;

`;
const BoardItems = styled.ul`
  display:flex ;
  width: 90% ;
  height: 40% ;
  margin: auto ;
`;
const BoardItem = styled.li`
  margin-right: 5px;
  
`;
const BoardMemo = styled.div`
  margin: 5px
`;
const LineIcon = styled.img`
  width: 20px ;
  height: 20px ;
`;
function Main() {
  
  return (
    <Container>
      <Head>
        
      </Head>
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
          {[1,2,3,4,5,6,7,8,9,1,2,3,4,5,1].map((board:number)=> <Board>
            <BoardItems>
              <BoardItem>아이콘</BoardItem>
              <BoardItem>소환사명</BoardItem>
              <BoardItem>라인</BoardItem>
              <BoardItem>승률</BoardItem>
              <BoardItem>최근챔</BoardItem>
            </BoardItems>
            <BoardMemo>
              <span>같이 할 사람 구해요 ~</span>
            </BoardMemo>
          </Board>)}
        </BoardLayOut>
    </Container>
    
  );
}

export default Main;
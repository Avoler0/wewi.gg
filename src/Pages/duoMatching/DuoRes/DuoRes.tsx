import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


function DuoRes(){
  const minute = useState(1);
  const report = useState(0);
  return (
    <Board >
      <BoardTop>
        <BoardHigh>
          <BoardProfileIcon />
          <BoardSummoner>소환사명</BoardSummoner>
        </BoardHigh>
        <BoardLow>
          <BoardItems>
            <BoardLine>
              <BoardLineIcon src={`../images/icon/line/Line-All-Ico.png`} />
            </BoardLine>
            <BoardWinRate>승률 77%</BoardWinRate>
            <BoardChamp>최근챔 3개</BoardChamp>
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
            <span>{minute} 분전</span>
          </BoardTime>
        </BoardFooter>
      </BoardBottom>
      
    </Board>
  )
}
//2c3e50
export default DuoRes;

const Board = styled.div`
  position: relative;
  background-color: #2c3e50 ;
  width: 180px ;
  height: 180px;
  border-radius: 15px ;

`;
const BoardBottom = styled.div`
  font-size: 16px;
  margin: 5px;
  height: 42%;
  color: white;
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
  color: white;
`;
const BoardTime = styled.div`
  font-weight: 400;
`;
const BoardReport = styled.div`
  
`;
const BoardTop = styled.div`
  color: white;
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
const BoardItems = styled.div`
  display:flex ;
  width: 90% ;
  height: 40% ;
  margin: auto ;
`;

const BoardLine = styled.div`
  margin-right: 5px;
  width: 20%;
`;
const BoardWinRate = styled.div`
  padding-top: 10px;
  font-size: 12px;
  margin-right: 5px;
`;
const BoardChamp = styled.div`
  padding-top: 10px;
  font-size: 13px;
`;
const BoardLineIcon = styled.img`
  width: 100%;
`;
const BoardProfileIcon = styled.div`
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
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { AT_puuid, AT_recordList, getRecord, getRecordData } from "./Api/RiotRecordApi";


interface I_props {
  name:string,
  puuid:string,
  count:number,
}
interface I_infoObj {
  timeStamp: number,
  gameResult:boolean,
  gameType:string,
  gameLength1:number,
  gameLength2:number,
}

const BoardWrap = styled.ul`
  background-color: gray;
`;
const Board = styled.li`
  display: flex;
  width: 100%;
  background-color: blue;
  height: 125px;
  border: 1px solid white;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 15px;
`;
const Info = styled.div`
  height: 100%;
  width: 10%;
`;

const TimeStamp = styled.div`
  font-size: 12px;
  text-align: center;
`;
const GameResult = styled.div`
  margin: 3px 0 3px 0;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;
const GameType = styled.div`
  font-size: 14px;
  text-align: center;
`;

const GameLength = styled.div`
  margin: 3px 0 3px 0;
  font-size: 14px;
  text-align: center;
`;
const IconWrap = styled.div`
  width: 13%;
  height: 100%;
  overflow: hidden; // 박스 넘어가는 부분의 이미지를 잘라줌
  position: relative;
  span{
    position: absolute;
    bottom: 0;
    left: 35%;
    z-index: 999;
    font-weight: bold;
}
`;
const Icon = styled.img`
  position: absolute;
  width: 80%;
  height: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  border-radius: 50px;
`;
const KdaWrap = styled.div`
  width: 15%;
  height: 100%;
  text-align: center;
  justify-content: center;
`;
const Kda = styled.div`
  font-size: 15px;
  font-weight: 700;
  white-space: nowrap;
  display: inline-block;
`;
const Ratio = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-top: 6px;
`;
const MaxKill = styled.div`
  margin-top: 6px;
  border: 1px solid rgb(198, 68, 62);
  border-radius: 15px;
  padding: 2px 5px;
  line-height: 1;
  width: 50px;
  margin: 8px 4px 0px;
  font-size: 10px;
  font-weight: 600;
  display: inline-block;
`;
const Stats = styled.div`
  width: 10%;
  height: 100%;
  background-color: white;
`;
const Spell = styled.div`
  width: 5%;
  height: 100%;
  background-color: red;
`;
const Rune = styled.div`
  width: 5%;
  height: 100%;
  background-color: gray;
`;
const Item = styled.div`
  width: 25%;
  height: 100%;
  background-color: black;
`;
const Participants = styled.div`
  width: 20%;
  height: 100%;
  background-color: wheat;
`;
const RecordDisplay = (props:I_props) =>{
  const setAT_puuid = useSetRecoilState(AT_puuid); // RecordApi의 puuid atom에 props로 받은 puuid를 넘겨주기 위한 Recoil
  setAT_puuid(props.puuid); // RecordApi의 puuid atom에 props로 넘겨받은 puuid를 다시 넘겨줌
  const getAP_record = useRecoilValue(getRecord); // puuid로 찾은 getRecord Api의 값 , 최근 전적 count를 갖고옴
  const setAT_recordList = useSetRecoilState(AT_recordList); // 최근 전적의 상세한 내용을 json으로 받아오기 위해 recordList atom에 최근전적을 넘겨줌
  
  
  setAT_recordList(getAP_record[0]);
  const getAP_recordData = useRecoilValue(getRecordData);
  let recordDataCount = 0;
  console.log(getAP_record[0]);
  console.log(getAP_recordData);

  const infoObj:I_infoObj = {
    timeStamp: 22,
    gameResult:true,
    gameType:'솔로랭크',
    gameLength1:40,
    gameLength2:22,
  }
  for(let i = 0; i < getAP_recordData.info?.participants.length; i++ ){
    if(getAP_recordData.info?.participants[i].puuid === props.puuid){
      recordDataCount = i;
      break;
    }
  }
  if(props.name === ""){
    return <div>이름 없음</div>;
  }
  const chamImg:string = `https://ddragon.leagueoflegends.com/cdn/10.11.1/img/champion/${getAP_recordData.info?.participants[recordDataCount].championName}.png`;
  return (
    <BoardWrap>
      <Board>
        <Info>
          <GameResult>
            {infoObj.gameResult ? "승리" : "패배"}
          </GameResult>
          <TimeStamp>22분전</TimeStamp>
          <br/>
          <GameType>
            {infoObj.gameType}
          </GameType>
          <GameLength>
            {infoObj.gameLength1}분 {infoObj.gameLength2 < 0 ? null : infoObj.gameLength2 + "초"}
          </GameLength>
        </Info>
        <IconWrap>
          {chamImg === undefined ? null : <Icon src={chamImg} />}
          <span>샤코</span> 
          {/* 수정 필요함 */}
        </IconWrap>
        <KdaWrap>
          <Kda>
            <span>11 </span> / <span>10</span> / <span>12</span>
          </Kda>
          <Ratio>
            <span>2:30.1</span>평점
          </Ratio>
          <MaxKill>
            멀티킬
          </MaxKill>
        </KdaWrap>
        <Stats>
          스탯창
        </Stats>
          <Spell>
            <span>D</span>
            <span>F</span>
          </Spell>
          <Rune>
            <span>주요룬</span>
            <span>보조룬</span>
          </Rune>
          <Item>

          </Item>
          <Participants>

          </Participants>
      </Board>
    </BoardWrap>
  );
}

export default RecordDisplay;

 /* 
 <RecordBorad>
              {apiRecentlyRecordArr.map((record:any,index:number) =>
                <ScoreWrap key={record}>
                  {
                  <>
                    <ScoreInfo>
                      <ScroeTimeStamp>
                        몇분전
                      </ScroeTimeStamp>
                      <ScroeType>
                        승리
                      </ScroeType>
                      <ScroeType>
                        솔로랭크
                      </ScroeType>
                      <ScoreTime>
                        몇분
                      </ScoreTime>
                    </ScoreInfo>
                    <ScoreIcon>
                      <img src={chamImg[index]} />
                    </ScoreIcon>
                    
                    <ScoreBoard>
                      스펠과 룬 , 아이템 , 게임내 레벨 KDA CS 킬관여 , 같이 플레이한 사람들
                    </ScoreBoard>
                  </>
                  }
                </ScoreWrap>
              )}
              </RecordBorad> */
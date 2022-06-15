import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getTime, timeDiff, } from "../../../commons/functionCollection";
import { ReactComponent as Trash } from "../../../images/icons/trash-svgrepo-com.svg"
import {ReactComponent as MicOn} from "/MyApp/wewi.gg/src/images/icons/mic-fill-svgrepo-com.svg"
import {ReactComponent as MicOff} from "/MyApp/wewi.gg/src/images/icons/mic-mute-fill-svgrepo-com.svg"
import OverlayMessage from "../../../Components/OverlayMessage";

function DuoRes({duoRes,setDeleteState,setDeletePw,setDeleteId}:any){
  const report = useState(0);
  const {Content ,CreatedAt,DuoType ,Id , Line ,Lose ,SeekerName ,UpdatedAt ,Win} = duoRes
  const [password , setPassword] = useState("0000");
  const winningRate = Math.round(Win / (Win + Lose) * 100)
  const nowDate = getTime(new Date());
  // 소환사 아이콘은 프론트에서 제공해 넘겨주기. getSummonerInfo("스쿵씨")
  // 윈 로즈 프론트에서 사용 가능 getSummonerLeagueInfo(id)
  console.log(duoRes);
  
  const resTimeDiff:any = timeDiff(nowDate,getTime(new Date(CreatedAt)))
  // setDeleteState(true,duoRes.Password,duoRes.Id)
  const deleteBoard = () => {
    setDeleteState(true);
    setDeletePw(duoRes.Password);
    setDeleteId(duoRes.Id);
  }
  return (
    <Board >
      <BoardTop>
        <BoardHigh>
          <BoardProfileIcon />
          <BoardSummoner>{SeekerName}</BoardSummoner>
          <BoardDelete>
            <Trash onClick={deleteBoard} xmlns={`${Trash}`} style={{ width:"13px",
            fill:"#fff", marginRight:"5px" , marginBottom:"2px" , cursor:"pointer"}}/> 
          </BoardDelete>
        </BoardHigh>
        <BoardLow>
          <BoardItems>
            <BoardLine>
              <BoardLineIcon src={`../images/icon/line/Line-All-Ico.png`} />
            </BoardLine>
            <BoardWinRate>{winningRate}</BoardWinRate>
            <BoardChamp>최근챔 3개</BoardChamp>
            <BoardMic>{duoRes.IsMic ? <MicOn style={{fill:"red"}}/>:<MicOff style={{fill:"red"}}/>}</BoardMic>
          </BoardItems>
        </BoardLow>
        </BoardTop>
      
      <BoardBottom>
        <span>{Content}</span>
        <BoardFooter>
          <BoardReport>
            <Link to="/reportView">신고 누적 : {report}회</Link>
          </BoardReport>
          <BoardTime>
            {<span>{resTimeDiff[0]}{resTimeDiff[1]} 전</span>  }
          </BoardTime>
        </BoardFooter>
      </BoardBottom>
    </Board>
  )
}
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
  /* color: white; */
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
const BoardDelete = styled.div``

;
const BoardItems = styled.div`
  display:flex ;
  position: relative;
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
const BoardMic = styled.div`
  padding-top: 10px;
  position: absolute;
  right: 0;
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
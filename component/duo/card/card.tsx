import { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { riot } from "../../../hooks/riotApiHook";
import { riotImg } from "../../../hooks/riotImageHook";
import { url } from "inspector";
import { SummonerInfo } from "../../../types/riotType";
// import { getTime, timeDiff, } from "../../../commons/functionCollection";
// import { ReactComponent as Trash } from "../../../images/icons/trash-svgrepo-com.svg"
// import {ReactComponent as MicOn} from "/MyApp/wewi.gg/src/images/icons/mic-fill-svgrepo-com.svg"
// import {ReactComponent as MicOff} from "/MyApp/wewi.gg/src/images/icons/mic-mute-fill-svgrepo-com.svg"



function DuoCard({duoRes}:any){
  const [summonerInfo,setSummonerInfo] = useState<SummonerInfo | string>("0");
  const report = useState(0);
  const {summoner,memo,line,password,id,} = duoRes
  // const winningRate = Math.round(Win / (Win + Lose) * 100)
  // 소환사 아이콘은 프론트에서 제공해 넘겨주기. getSummonerInfo("스쿵씨")
  // 윈 로즈 프론트에서 사용 가능 getSummonerLeagueInfo(id)
  console.log("듀오 레스",duoRes);
  useEffect(()=>{
    riot.summoner("summoner",summoner)
    .then((_res)=>{
      console.log("듀오 카드 레스",_res)
      setSummonerInfo(_res)
    })
  },[])
  // setDeleteState(true,duoRes.Password,duoRes.Id)
  // const deleteBoard = () => {
  //   setDeleteState(true);
  //   setDeletePw(duoRes.Password);
  //   setDeleteId(duoRes.Id);
  // }

  return (
    <Board >
      <ProfileIcon imgPath={riotImg.profile(summonerInfo.profileIconId)} />
      <div>
        <Column>
          <NickName>{summoner}</NickName>
          <BoardDelete>
            {/* <Trash onClick={deleteBoard} xmlns={`${Trash}`} style={{ width:"13px", */}
            {/* fill:"#fff", marginRight:"5px" , marginBottom:"2px" , cursor:"pointer"}}/>  */}
          </BoardDelete>
        </Column>
        <Column under >
          <BoardItems>
            <BoardLine>
              <Image src={`/images/line-icons/Line-${duoRes.line}-Ico.png`} alt="line" layout="fill" objectFit="cover" />
            </BoardLine>
            {/* <BoardWinRate>{winningRate}</BoardWinRate> */}
            {/* <BoardChamp>최근챔 3개</BoardChamp> */}
            {/* <BoardMic>{duoRes.IsMic ? <MicOn style={{fill:"red"}}/>:<MicOff style={{fill:"red"}}/>}</BoardMic> */}
          </BoardItems>
        </Column>
        </div>
      
      <div>
        <span>{memo}</span>
        <BoardFooter>
          <BoardReport>
            {/* <Link to="/reportView">신고 누적 : {report}회</Link> */}
          </BoardReport>
          <BoardTime>
            {/* {<span>{resTimeDiff[0]}{resTimeDiff[1]} 전</span>  } */}
          </BoardTime>
        </BoardFooter>
      </div>
    </Board>
  )
}
export default DuoCard;

const Board = styled.div`
  position: relative;
  background-color: #2c3e50 ;
  width: 180px ;
  height: 180px;
  border-radius: 15px ;
  color: white;
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

const Column = styled.div<{under:boolean}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  width: 100%;
  border-bottom: ${props => props.under ? "solid 1px white" : "none"};
`;
const Middle = styled.div`
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
const ProfileIcon = styled.div<{imgPath:string}>`
  border: solid 1px white;
  border-radius: 30px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-image: ${props => `url(${props.imgPath})`};
  background-size: contain;
`;
const NickName = styled.div`
  font-size: 16px;
  font-weight: 800;
  margin: 0 auto;
  cursor: pointer;
`;
import { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { riot } from "../../../hooks/riotApiHook";
import { riotImg } from "../../../hooks/riotImageHook";
import { url } from "inspector";
import { SummonerInfo } from "../../../types/riotType";
import { timeHook } from "../../../hooks/timeHook";
import { tierUtils } from "../../../const/utils";
import router from "next/router"
import Link from "next/link";
// import { getTime, timeDiff, } from "../../../commons/functionCollection";
// import { ReactComponent as Trash } from "../../../images/icons/trash-svgrepo-com.svg"
// import {ReactComponent as MicOn} from "/MyApp/wewi.gg/src/images/icons/mic-fill-svgrepo-com.svg"
// import {ReactComponent as MicOff} from "/MyApp/wewi.gg/src/images/icons/mic-mute-fill-svgrepo-com.svg"

type SummonerLeague = {
  tier:string,
  rank:string
}

function DuoCard({duoRes}:any){
  const [isLoading,setIsLoading] = useState(true);
  const [summonerInfo,setSummonerInfo] = useState<SummonerInfo|undefined>();
  const [champPath,setChampPath] = useState<string[]>([]);
  const [summonerLeague, setSummonerLeague] = useState<SummonerLeague>({tier:"",rank:""});
  const report = useState(0);
  const {summoner,memo,line,password,id,mic,createdAt} = duoRes
  useEffect(()=>{
    riot.summoner("summoner",summoner)
    .then((_res)=>{
      setSummonerInfo(_res)
      Promise.all([riot.champion.mastery(_res.id,3),riot.league(_res.id)])
      .then(([champIds,league]) => {
        const champIdArr = champIds.data.map((data:any)=> data.championId)
        riotImg.championsId(champIdArr).then((_res)=>{
          setChampPath(_res)
        })
        setSummonerLeague({tier:league[1].tier,rank:league[1].rank})
        setIsLoading(false)
      })
    })
  },[])
  useEffect(()=>{
    console.log("라인 패스",champPath)
  },[champPath])
  if(isLoading) return;
  return (
    <Wrap >
      <Profile_Inner>
        <Info_Layer>
          <ProfileIcon imgPath={riotImg.profile(summonerInfo.profileIconId)}>
            <div />
          </ProfileIcon>
          <Info>
            <Info_Column>
              <NickName>
                <Link href={`summoner/${summoner}`}>{summoner}</Link>
              </NickName>
              <Level><span>Lv. {summonerInfo.summonerLevel}</span></Level>
            </Info_Column>
            <Info_Column >
              <Tier tierColor={tierUtils.color(summonerLeague.tier)}>
                <div className="tier main">{summonerLeague.tier ? summonerLeague.tier : "unranked"}</div>
                <div className="tier number">{summonerLeague.rank}</div>
              </Tier>
              <MicCheck>
                <div className="mic text">마이크</div>
                {/* <div className="mic check">{mic ? "On" : "Off"}</div> */}
                <MicCircle mic={mic}/>
              </MicCheck>
            </Info_Column>
          </Info>
        </Info_Layer>
        <Game_Layer under={false} >
          <Game_Info className="Game_Info">
            <Line>
              <Image src={`/images/line-icons/Line-${duoRes.line}-Ico.png`} alt="line" layout="fill" objectFit="cover" />
            </Line>
            <Champ>
              {champPath.map((path,idx)=>{
                return (
                  <div key={idx}>
                    <Image src={path} alt="line" layout="fill" objectFit="cover"/>
                  </div>
                )
              })}
            </Champ>
            {/* <BoardWinRate>{winningRate}</BoardWinRate> */}
            {/* <BoardChamp>최근챔 3개</BoardChamp> */}
            {/* <BoardMic>{duoRes.IsMic ? <MicOn style={{fill:"red"}}/>:<MicOff style={{fill:"red"}}/>}</BoardMic> */}
          </Game_Info>
        </Game_Layer>
      </Profile_Inner>
      <Content_Inner>
        <Memo_Layer>
          <span>{memo}</span>
        </Memo_Layer>
        <BoardFooter>
          <BoardReport>
            {/* <Link to="/reportView">신고 누적 : {report}회</Link> */}
          </BoardReport>
          <BoardTime>
            {<span>{timeHook.otherDay(createdAt)}</span>  }
          </BoardTime>
        </BoardFooter>
      </Content_Inner>
    </Wrap>
  )
}
export default DuoCard;


const Wrap = styled.div`
  position: relative;
  background-color: #2c3e50 ;
  width: 180px ;
  height: 180px;
  border-radius: 15px ;
  color: white;
`;
const Profile_Inner = styled.div`
  padding: 0.4rem 0.3rem 0 0.3rem;
  border-bottom: solid 1px rgba(123,122,142,1);
`;
const Info_Layer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
  div{
    
  }
`;

const ProfileIcon = styled.div<{imgPath:string}>`
  display: inline-block;
  div{
    border: solid 1px white;
    border-radius: 25px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    background-image: ${props => `url(${props.imgPath})`};
    background-size: contain;
  }
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-left: 1rem;
`;
const Info_Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Tier = styled.div<{tierColor:string}>`
  font-size: 13px;
  width: 55px;
  color: ${props => props.tierColor};
  .tier{
    display: inline-block;
  }

  .tier.number{
    margin-left: 0.2rem;
  }
`;
const MicCheck = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  .mic{
    display: inline-block;
  }
  .mic.check{
    margin-left: 0.2rem;
  }

`;
const MicCircle = styled.div<{mic:boolean}>`
  margin-left: 0.3rem;
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 10px;
  background-color: ${props => props.mic ? "green" : "red"};
`;

const NickName = styled.div`
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;
`;

const Level = styled.span`
  font-size: 12px;
  color:#cec7c7;
`;

const Game_Layer = styled.div<{under:boolean}>`
  align-items: center;
  width: 100%;
  height: 40px;

`;

const Content_Inner = styled.div`
  padding: 0.2rem;
`;

const Memo_Layer = styled.div`
  text-align: center;
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


const Middle = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 5px;
  border-bottom: solid 1px white;
`;
const BoardDelete = styled.div``

;
const Game_Info = styled.div`
  display:flex ;
  justify-content: space-between;
`;

const Line = styled.div`
  position: relative;
  width: 2.2rem;
  height: 2.2rem;
  background-color: rgba(66,66,84,0.8);
  border-radius: 1rem;
  img{
    border-radius: 1rem;
  }
`;
const Champ = styled.div`
  div{
    position: relative;
    display: inline-block;
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 1rem;
    margin: 0 0.2rem;
  }
  img{
    border-radius: 1rem;
  }
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


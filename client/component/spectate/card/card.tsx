/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import styled from "styled-components"
import VideoSvg from '../../../public/images/public-icons/video.svg'
import { riotSpectateHook } from "../../../hooks/server/riot/spectate";
import { riotImageHook } from "../../../hooks/server/riot/image";
import { timeHook } from "../../../hooks/timeHook";
import CardTime from "./cardTime";

export default function ProCard({gamer}:any){
  const [inGame,setInGame] = useState(false);
  const {nick,team,teamNick,id} = gamer;
  const [gameData,setGameData] = useState<any>();
  
  useEffect(()=>{
      (async()=>{
        await Promise.all([riotSpectateHook.watch(id)])
        .then(async ([_watchRes]:any)=>{
          console.log("왓치레스",_watchRes.data)
          const findResult = _watchRes.data.participants.findIndex((data:any)=> data.summonerName === nick)
          console.log('파인드 파티시팬트',{..._watchRes.data,findIndex:findResult})
          const result = await riotImageHook.championById(_watchRes.data?.participants[findResult].championId)
          console.log('게임 데이터 파헤치기',result)
          setGameData({..._watchRes.data,findIndex:findResult,findChamp:result})
          setInGame(true)
        })
        .catch((_watchError) => {
          console.log("왓치에러",_watchError)
        })
      })()
  },[])
  
  // timeHook.elapsed(gameData?.gameStartTime)
  console.log('게임 데이터 파헤치기',gameData)
  if(!inGame) return <></>
  // console.log(timeHook.elapsed(gameData?.gameStartTime))
  return (
    <Card>
      <Content>
          <Team_Icon>
            <img src={`/images/pro-team-icons/${gamer.team}.webp`} alt="team" />
          </Team_Icon>
          <Team_Info>
            <div>{team}</div>
            <span>{teamNick}</span>
          </Team_Info>
        <GameType>
            솔로랭크
        </GameType>
        <NickName>{nick}</NickName>
        <Profile_Icon>
          <img src={gameData.findChamp} />
        </Profile_Icon>
        <User_Info>
          <span>그랜드마스터</span>
          <span>338LV</span>
        </User_Info>
        
          <Spectate>
            <div>
              <div>
                <VideoSvg />
                <CardTime time={gameData?.gameStartTime}/>
              </div>
              <button>관전하기</button>
            </div>
          </Spectate>
        
      </Content>
    </Card>
  )
}


const Card = styled.div`
  /* width: calc(25% - 6px); */
  font-size: .825rem;
  padding: .725rem;
  border-bottom: 1px solid rgb(39, 58, 73);
`;

const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
const Team_Icon = styled.div`
  width: 30px;
  height: 30px;
  margin-right: .725rem;
  background-color: #ddcfcf;
`;
const Team_Info = styled.div`
  width: 15%;
  align-items: center;
  margin-right: .5rem;
  font-size: .775rem;

  span{
    font-size: .725rem;
    color: #b4b4a2;
  }
`;
const GameType = styled.div`
  align-items: center;
  font-weight: 700;
`;

const Profile_Icon = styled.span`
  display: inline-block;
  width: 30px;
  height: 30px;
  background-color: red;
  margin-right: 2rem;
`;

const NickName = styled.div`
  width: 30%;
  margin: 0 .825rem;
  font-size: 0.925rem;
  font-weight: 700;
  text-align: center;
`

const User_Info = styled.div`
  font-size: .825rem;
  margin-right: 1rem;
  span{
    display: inline-block;
    &:first-child{
      margin-right: .5rem;
    }
  }
  
  
`;

const Spectate = styled.div`
  position: absolute;
  display: flex;
  right: 0;
  svg{
    margin-right: 1rem;
  }
  span{
    margin-right: 1rem;
  }
  div{
    &:first-child{
      display: flex;
      align-items: center;
    }
  }
  button{
    background-color: transparent;
    border: 1px solid #595c5f;
    color: #fff;
    padding: .2rem 1rem;
  }
`;

const SpectateBtn = styled.div`
`;
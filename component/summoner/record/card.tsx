import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { riotImg } from "../../../hooks/riotImageHook";
import { queueUtils } from "../../../const/utils";
import { timeHook } from "../../../hooks/timeHook";

type props = {
  match:string
}

type Detail = {
  gameCreation:number,
  gameDuration:number,
  gameStartTimestamp:number,
  gameEndTimestamp:number,
  participants:any,
  teamKill:number,
  queueId:number,
  gameLengthTime:number
  win:boolean
}
export default function RecordCard({detail}:any) {
  const {info,myIndex,myTeamId,metadata} = detail;
  const { gameCreation,gameDuration,gameStartTimestamp,gameEndTimestamp,teams,participants,queueId,gameLengthTime,  } = info;
  const participant = participants[myIndex];
  const teamKills = teams[myTeamId].objectives.champion.kills
  const {kills,deaths,assists,totalMinionsKilled,neutralMinionsKilled,visionScore,win} = participant
  console.log("카드 디테일",win);
  const [isLoading,setIsLoading] = useState(true);
  const [runeImg,setRuneImg] = useState({
    rune:["null","null"],
  });
  // return <div>1234</div>;
  useEffect(()=>{
    
    if(detail){
      (async ()=>{
        Promise.all([
          await riotImg.rune(participant.perks?.styles[0],participant.perks?.styles[1])
        ]).then(([rune])=>{
          const image = {
            rune: rune,
          }
          setRuneImg(image)
        })
        setIsLoading(false);
      })()
    }
    
  },[detail])

  
  function ItemRender(){
    let ItemArr = ["item0","item1","item2","item6","item3","item4","item5"];
    
    const Item = ItemArr.map((itemId,)=>{
      return (
        <>
          <div className="item-image">
            {participant[itemId] ? <Image key={itemId} src={ riotImg.item(participant[itemId])} alt="icon" layout="fill" objectFit="fill"/> : <span className="item-image" />}
          </div>
          {itemId === "item6" ? <br></br> : null}
        </>
        
      )
    })
    return Item
  }
  if(isLoading){
    return <div>불러오는 중</div>
  }
  console.log("트루폴스",gameDuration < 500)
  return (
    <WarpLi result={win} restart={gameDuration < 500}>
      <Wrap result={win} restart={gameDuration < 500}>
        <InfoWrap result={win} restart={gameDuration < 500}>
          <b>{queueUtils.type[queueId]}</b>
          <div>{timeHook.otherDay(gameEndTimestamp)}</div>
          <b className="result">{ gameDuration < 500 ? '다시 하기' : win ? '승리' : '패배' }</b>
          <div>{gameLengthTime}</div>
          <div>{timeHook.duration(gameDuration)}</div>
        </InfoWrap>
        <ChampWrap>
          <div>
            <Image src={riotImg.champion(participant?.championName)} alt="icon" layout="fill" objectFit="fill"/>
          </div>
        </ChampWrap>
        <SkillsWrap>
          <Skill>
            <div>
              <Image className="icon" src={riotImg.spell(participant.summoner1Id)}  alt="icon" layout="fill" objectFit="fill" objectPosition="center"/>
            </div>
            <div>
              <Image className="icon" src={riotImg.spell(participant.summoner2Id)}  alt="icon" layout="fill" objectFit="fill" objectPosition="center"/>
            </div>
          </Skill>
          <Skill>
            <div>
              <Image className="icon" src={runeImg.rune[0]}  alt="icon" layout="fill" objectFit="fill" objectPosition="center"/>
            </div>
            <div >
              <Image className="icon" src={runeImg.rune[1]}  alt="icon" layout="fill" objectFit="fill" objectPosition="center" />
            </div>
          </Skill>
        </SkillsWrap>
        <ItemWrap>
          {ItemRender()}
        </ItemWrap>
        <KdaWrap>
            <div className="kda">{kills} / {deaths} / {assists}</div>
            <div className="kda">{kills+assists+deaths == 0 ? '0.00' : ((participant.kills+participant.assists) / participant.deaths).toFixed(2)}:1 평점</div>
            <div className="kda">킬관여 { kills + deaths + assists == 0 ? "0" : ((kills+assists)/teamKills*100).toFixed(0)}%</div>
        </KdaWrap>
        <StatsWrap>
            <div className="stats">{totalMinionsKilled + neutralMinionsKilled} CS</div>
            <div className="stats">{((totalMinionsKilled + neutralMinionsKilled) / Math.floor(gameDuration / 60)).toFixed(1)} CS/분</div>
            <div className="stats"><span>시야점수</span> {visionScore}</div>
        </StatsWrap>
      </Wrap>
    </WarpLi>
  );
}

const WarpLi = styled.li<{result:boolean,restart:boolean}>`
  border: 1px solid ${props => props.restart ? 'rgba(34,34,58,0.6)' : props.result ? 'rgba(62, 31, 177, 0.6)' : 'rgba(177,31,62,0.6)'};
  border-left: 6px solid ${props => props.restart ? 'rgba(34,34,58,1)' : props.result ? 'rgba(62, 31, 177, 1)' : 'rgba(177,31,62,1)'};
  border-radius: 5px;
  list-style: none;
  margin: 5px 0;
  color: white;
`;
const Wrap = styled.div<{result:boolean,restart:boolean}>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  padding: 10px;
  background-color: ${props => props.restart ? 'rgba(34,34,58,0.2)' : props.result ? "rgba(62, 31, 177, 0.2)" : "rgba(177,31,62,0.2)"};
  border-radius: 0 5px 5px 0;
`;
const InfoWrap = styled.div<{result:boolean,restart:boolean}>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 10%;
  margin-left: 0.8rem;
  font-size: 0.8rem;
  font-weight: lighter;

  .result{
    color: ${props => props.restart ? '#7272af' : props.result ? '#00adfdd5' : 'red'};
  }
`;

const ChampWrap = styled.div`
  display: flex;
  text-align: center;
  flex: 0 0 10%;
  div{
    position: relative;
    width: 100%;
    height: 100%;
  }
`;


const KdaWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 25px;
  font-size: 0.9rem;
  div{
    
  }
`;

const StatsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 0.9rem;
  flex: 0 0 10%;
  .stats{
    margin-top: 3px;
  }
  span{
    font-size: 12px;
  }
`;
const SkillsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 0.03;
`;
const Skill = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 0.1;
  width: 100%;
  height: 100%;
  div{
    position: relative;
    width: 1.7rem;
    height: 1.7rem;
    padding: 1.1rem;
    background-color: #271f1f;
    border-radius: 5px;
  }
  img{
    border-radius: 5px;
  }
`;


const ItemWrap = styled.div`
  margin-left: 25px;
  .item-image{
    position: relative;
    display: inline-block;
    width: 2.2rem;
    height: 2.3rem;
    margin-right: 0.3rem;
    background-color: #271f1f;
    border-radius: 5px;
    img{
      border-radius: 5px;
    }
  }
`;
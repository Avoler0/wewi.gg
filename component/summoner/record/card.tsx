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
export default function RecordCard({match}:props) {
  const { gameCreation,gameDuration,gameStartTimestamp,gameEndTimestamp,participants,teamKill,queueId,gameLengthTime,win  } = detail;

  // console.log("카드 디테일",detail);

  const [isLoading,setIsLoading] = useState(true);
  const [runeImg,setRuneImg] = useState({
    rune:["null","null"],
  });
  

  useEffect(()=>{
    
    if(detail){
      (async ()=>{
        Promise.all([
          await riotImg.rune(participants.perks?.styles[0],participants.perks?.styles[1])
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
            {participants[itemId] ? <Image key={itemId} src={ riotImg.item(participants[itemId])} alt="icon" layout="fill" objectFit="fill"/> : <span className="item-image" />}
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
  
  return (
    <WarpLi win={win}>
      <Wrap win={win}>
        <InfoWrap>
          <b>{queueUtils.type[queueId]}</b>
          <div>{timeHook.otherDay(gameEndTimestamp)}</div>
          <b>{win ? "승리" : "패배"}</b>
          <div>{gameLengthTime}</div>
          <div>{timeHook.pass(gameCreation,gameEndTimestamp)}</div>
        </InfoWrap>
        <ChampWrap>
          <div>
            <Image src={riotImg.champion(participants?.championName)} alt="icon" layout="fill" objectFit="fill"/>
          </div>
        </ChampWrap>
        <SkillsWrap>
          <Skill>
            <div>
              <Image className="icon" src={riotImg.spell(participants.summoner1Id)}  alt="icon" layout="fill" objectFit="fill" objectPosition="center"/>
            </div>
            <div>
              <Image className="icon" src={riotImg.spell(participants.summoner2Id)}  alt="icon" layout="fill" objectFit="fill" objectPosition="center"/>
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
            <div className="kda">{participants.kills} / {participants.deaths} / {participants.assists}</div>
            <div className="kda">{((participants.kills+participants.assists) / participants.deaths).toFixed(2)}:1 평점</div>
            <div className="kda">킬관여 {
              participants.kills + participants.deaths + participants.assists == 0 ?
              "0" : ((participants.kills+participants.assists)/teamKill*100).toFixed(0)
            }%</div>
        </KdaWrap>
        <StatsWrap>
            <div className="stats">{participants.totalMinionsKilled + participants.neutralMinionsKilled} CS</div>
            <div className="stats">{((participants.totalMinionsKilled + participants.neutralMinionsKilled) / Math.floor(gameDuration / 60)).toFixed(1)} CS/분</div>
            <div className="stats"><span>시야점수</span> {participants.visionScore}</div>
        </StatsWrap>
      </Wrap>
    </WarpLi>
  );
}

const WarpLi = styled.li<{win:boolean}>`
  border-left: 6px solid ${props => props.win ? "rgba(62, 31, 177, 1)" : "rgba(177,31,62,1)"};
  border-radius: 5px;
  list-style: none;
  margin: 5px;
  color: white;
`;
const Wrap = styled.div<{win:boolean}>`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  height: 100px;
  border: 1px solid ${props => props.win ? "rgba(62, 31, 177, 0.6)" : "rgba(177,31,62,0.6)"};
  background-color: ${props => props.win ? "rgba(62, 31, 177, 0.2)" : "rgba(177,31,62,0.2)"};
  border-radius: 0 5px 5px 0;
`;
const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 10%;
  margin-left: 0.8rem;
  font-size: 0.8rem;
  font-weight: lighter;
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
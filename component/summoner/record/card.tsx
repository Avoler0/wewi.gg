import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { riotImg } from "../../../hooks/riotImageHook";
import { queueUtils } from "../../../const/utils";
import { time } from "../../../hooks/timeHook";

// type detialType = {
//   gameCreation,
//     gameDuration,
//     queueId,
//     gameEndTimestamp,
//     gameMode,
//     win,
//     assists,
//     deaths,
//     kills,
//     lane,
//     summoner1Id,
//     summoner2Id,
//     totalMinionsKilled,
//     neutralMinionsKilled,
//     championName,
//     perks,
//     item,
//     team1Kills,
//     team2Kills,
//     teamId,
//     visionScore
// }

export default function RecordCard({detail,puuid}:any) {
  const [isLoading,setIsLoading] = useState(true);
  const [myDetail,setMyDetal] = useState({});
  const [runeImg,setRuneImg] = useState({
    rune:["null","null"],
  });
  const nowDate = new Date();

  
  
  
  const [queueType,setQueueType] = useState({});
  const result = detail.metadata.participants.findIndex((id:string) => id === puuid )
  const { queueId,gameLengthTime  } = detail.info;
  
  

  useEffect(()=>{
    
    if(detail){
      (async ()=>{
        
        const my = detail.info.participants[result];
        setMyDetal(my);
        Promise.all([
          await riotImg.rune(my.perks?.styles[0],my.perks?.styles[1])
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
  
    useEffect(()=>{
      console.log("디테일",detail);
      console.log("나의 디테일",myDetail);
  },[myDetail])
  
  

  function teamKills(){
    const myTeamKills = [];
    detail.info.teams.map((data:any)=>{
      if(data.teamId === myDetail.teamId){
        myTeamKills.push(data.objectives.champion.kills)
      }
    } )
    return myTeamKills[0];
  }
  function ItemRender(){
    let ItemArr = ["item0","item1","item2","item6","item3","item4","item5"];
    
    const Item = ItemArr.map((itemId,)=>{
      return (
        <>
          <div className="item-image">
            {myDetail[itemId] ? <Image key={itemId} src={ riotImg.item(myDetail[itemId])} alt="icon" layout="fill" objectFit="fill"/> : <span className="item-image" />}
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
    <WarpLi win={myDetail.win }>
      <InfoWrap>
        <b>{queueUtils.type[queueId]}</b>
        <div>{time.otherDay(detail.info.gameEndTimestamp)}</div>
        <b>{myDetail.win ? "승리" : "패배"}</b>
        <div>{gameLengthTime}</div>
        <div>{time.pass(detail.info.gameCreation,detail.info.gameEndTimestamp)}</div>
      </InfoWrap>
      <ChampWrap>
        <div>
          <Image src={riotImg.champion(myDetail?.championName)} alt="icon" layout="fill" objectFit="fill"/>
        </div>
      </ChampWrap>
      <SkillsWrap>
        <Skill>
          <div>
            <Image className="icon" src={riotImg.spell(myDetail.summoner1Id)}  alt="icon" layout="fill" objectFit="fill" objectPosition="center"/>
          </div>
          <div>
            <Image className="icon" src={riotImg.spell(myDetail.summoner2Id)}  alt="icon" layout="fill" objectFit="fill" objectPosition="center"/>
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
          <div className="kda">{myDetail.kills} / {myDetail.deaths} / {myDetail.assists}</div>
          <div className="kda">{((myDetail.kills+myDetail.assists) / myDetail.deaths).toFixed(2)}:1 평점</div>
          <div className="kda">킬관여 {((myDetail.kills+myDetail.assists)/teamKills()*100).toFixed(0)}%</div>
      </KdaWrap>
      <StatsWrap>
          <div className="stats">{myDetail.totalMinionsKilled + myDetail.neutralMinionsKilled} CS</div>
          <div className="stats">{((myDetail.totalMinionsKilled + myDetail.neutralMinionsKilled) / Math.floor(detail.info.gameDuration / 60)).toFixed(1)} CS/분</div>
          <div className="stats"><span>시야점수</span> {myDetail.visionScore}</div>
      </StatsWrap>
      </WarpLi>
  );
}

const RecordUl = styled.ul`

`;
const WarpLi = styled.li<{win:boolean}>`
  display: flex;
  justify-content: space-between;
  height: 90px;
  margin: 5px;
  padding: 10px;
  border: 1px solid white;
  color: white;
  background-color: ${props => props.win ? "rgba(62, 31, 177, 0.2)" : "rgba(177,31,62,0.2)"};
`;
const InfoWrap = styled.div`
  width: 10%;
  margin-left: 5px;
  align-items: left;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 12px;
  font-weight: lighter;
  flex: 0 0 10%;
`;

const ChampWrap = styled.div`
  display: flex;
  text-align: center;
  flex: 0 0 10%;
  border-radius: 8rem;
  div{
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 8rem;
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
  margin-left: 15px;
  font-size: 14px;
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
    padding: 1rem;
    background-color: #271f1f;
    border-radius: 5px;
  }
  img{
    border-radius: 5px;
  }
`;

const Rune = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  div{
    position: relative;
    width: 1.7rem;
    height: 1.7rem;
    padding: 1rem;
    background-color: #271f1f;
    border-radius: 5px;
    span{
      background-color: #271f1f;
    }
  }
`;

const ItemWrap = styled.div`
  margin-left: 25px;
  .item-image{
    position: relative;
    display: inline-block;
    width: 2rem;
    height: 2rem;
    margin-right: 0.3rem;
    background-color: #271f1f;
    border-radius: 5px;
    img{
      border-radius: 5px;
    }
  }
`;
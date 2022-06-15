import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getChampionIcon, getItemIcon, getRuneIcon, getRunesInfo, getSpellIcon, getSpellInfo } from "../../../../../api/api";
import { getTime, timeDiff } from "../../../../../commons/functionCollection";
import { getQueueType, getSpellName } from "../../../../../commons/utils";

function GameList({gameInfo}:any) {
  // 문법 구조 분해 할당
  
  const {
    gameCreation,
    gameDuration,
    queueId,
    gameEndTimestamp,
    gameMode,
    win,
    assists,
    deaths,
    kills,
    lane,
    summoner1Id,
    summoner2Id,
    totalMinionsKilled,
    neutralMinionsKilled,
    championName,
    perks,
    item,
    team1Kills,
    team2Kills,
    teamId,
    visionScore
  } = gameInfo;
  const [isLoading,setIsLoading] = useState(true); // params가 잘 넘어왔는지 확인하는 State
  const [runeIcoPath,setRuneIcoPath] = useState<any>([]);
  const teamKills = teamId === 100 ? team1Kills : team2Kills
  const minionKills = totalMinionsKilled + neutralMinionsKilled;
  // console.log("팀킬 수 ",team1Kills , team2Kills);
  
  // 룬 정보 , 아이콘 PATH 저장하는 함수
  
  useEffect( ()=>{
    getRunesInfo().then(async(res)=>{
    const perksJson = res.data;
    const perkIndex:any = [];
    const mainRuneId = perksJson.findIndex((perk:any)=> perk.id == perks.styles[0].style)
    const subRuneId = perksJson.findIndex((perk:any)=> perk.id == perks.styles[1].style)
    perksJson[mainRuneId].slots.findIndex((slot:any,slotIndex:number)=> {
      slot.runes.findIndex((rune:any,runeIndex:number)=> {
        if(rune.id === perks.styles[0].selections[0].perk){
          return perkIndex.push(slotIndex,runeIndex)
          
        }
      }
      )
    })
    setRuneIcoPath([perksJson[mainRuneId].slots[perkIndex[0]].runes[perkIndex[1]].icon,perksJson[subRuneId].icon]);
  })
  },[])
  
  useEffect(()=>{
    if(gameInfo){
      setIsLoading(false);
    }
  },[])
  const spellD = getSpellIcon(getSpellName(summoner1Id));
  const spellF = getSpellIcon(getSpellName(summoner2Id));
  const gameEndTime:any = timeDiff(getTime(new Date()),getTime(new Date(gameEndTimestamp)));
  // const gameLengthTime:any = timeDiff(getTime(new Date(gameCreation)),getTime(new Date(gameEndTimestamp)))
  
  const gameLegth:any = String(Math.round(gameDuration/60 *100)/100).split('.');
  if(isLoading){
    return <div>기록 없음</div>
  }
  
  // console.log("킬관여 계산하기" ,teamKills/(kills+assists)*100 , teamKills , (kills+assists));
  
  // 넘겨 받을것 
  // 게임타입 , 게임끝난시간 , 게임 지속 시간 , 승리 패배 , 플레이한 챔피언 
  // 전체 킬뎃 , KDA , CS , 와드
 return (
      <RecordLi>
      <RecordInfo>
        <InfoType>{getQueueType(queueId)}</InfoType>
        <InfoTimeStamp>{gameEndTime[0].toString()}{gameEndTime[1]} 전</InfoTimeStamp>
        <InfoResult>{win ? "승리" : "패배"}</InfoResult>
        {/* <InfoLength>{gameLengthTime}</InfoLength> */}
        <InfoLength>{gameLegth[0]}분 {gameLegth[1]}초</InfoLength>
      </RecordInfo>
      <RecordChamp>
        <ChampImg src={gameInfo && getChampionIcon(championName)}/>
      </RecordChamp>
     
      <RecordSpell>
        <img src={spellD}  />
        <img src={spellF} />
      </RecordSpell>
      <RecordRune>
        <img src={getRuneIcon(runeIcoPath[0])} />
        <img src={getRuneIcon(runeIcoPath[1])} />
      </RecordRune>
      <RecordItem>
        {item.map((id:any , index:number)=> id === 0 ? <img /> : index !== item.length-1  ? <img key={id} src={ getItemIcon(id) }/> : null)}
      </RecordItem>
      <RecordKDA>
          <KDA>{kills} / {deaths} / {assists}</KDA>
          <KDARatio>{((kills+assists) / deaths).toFixed(2)}:1 평점</KDARatio>
          <KDAKillInvol>킬관여 {((kills+assists)/teamKills*100).toFixed(0)}%</KDAKillInvol>
      </RecordKDA>
      <RecordStats>
          <StatsAllCs>{totalMinionsKilled + neutralMinionsKilled} CS</StatsAllCs>
          <StatsMinuteCs>{((totalMinionsKilled + neutralMinionsKilled) /gameLegth[0]).toFixed(1)} CS/분</StatsMinuteCs>
          <StatsVision><span style={{fontSize:"12px"}}>시야점수</span> {visionScore}</StatsVision>
      </RecordStats>
      </RecordLi>
 )
}

export default React.memo(GameList);

interface gameInfo{
  gameInfo:any
}
const RecordLi = styled.li`
  margin: 5px;
  border: 1px solid white;
  height: 90px;
  display: flex;
  padding: 10px;
`;

const RecordInfo = styled.div`
  width: 10%;
  margin-left: 5px;
  align-items: left;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 12px;
`;
const InfoTimeStamp = styled.div`
  font-weight: lighter;
`;
const InfoResult =styled.div`
  font-weight: 700;
`;
const InfoType = styled.div`
  font-weight: bold;
`;
const InfoLength = styled.div`
`;
const RecordChamp = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
`;
const ChampImg = styled.img`
  height: 95%;
  border: none;
  border-radius: 15px;
`;

const RecordKDA = styled.div`
  margin-left: 25px;
  font-size: 14px;
`;
const KDA = styled.div`
  margin-top: 3px;
`;
const KDARatio = styled.div`
  margin-top: 3px;
`;
const KDAKillInvol = styled.div`
  margin-top: 3px;
`;
const RecordStats = styled.div`
  margin-left: 15px;
  font-size: 14px;
`;
const StatsAllCs = styled.div`
  margin-top: 3px;
`;
const StatsMinuteCs = styled.div`
  margin-top: 3px;
`;
const StatsVision = styled.div`
  margin-top: 3px;
`;
const RecordSpell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
  img{
    width: 30px;
    height: 30px;
    border-radius: 5px;
    background-color: #271f1f;
  }
`;
const RecordRune = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 3px;
  img{
    width: 30px;
    height: 30px;
    border-radius: 5px;
    background-color: #271f1f;
  }
`;
const RecordItem = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: calc(3px);
  margin-left: 25px;
  
  img{
    width: 30px;
    height: 30px;
    border-radius: 5px;
    background-color: #271f1f;
  }
`;
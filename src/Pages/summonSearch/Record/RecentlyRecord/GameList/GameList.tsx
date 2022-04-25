import React from "react";
import styled from "styled-components";
import { getChamiponInfo, getChampionIcon } from "../../../../../api/api";

function GameList({gameInfo}:any) {
  // const puuid = useRecoilValue<string>(AT_puuid)
  // const dataCount = gameInfo?.metadata.participants.findIndex((data:any)=> data === puuid)
  console.log("게임 인포",gameInfo)
  
  const myScore = gameInfo.participantId
  const {
    win,
    assists,
    deaths,
    kills,
    totalMinionsKilled,
    neutralMinionsKilled,
    championName,
  } = gameInfo.info.participants[myScore];
  const getChamp = (championName:string) => {
    Promise.all([getChampionIcon(championName)])
    .then(([fetchChamp]) => {
      return fetchChamp
    })
  }
  const championInfo = getChamp(championName);
  // const champName = champ
  console.log(championInfo)
  // const chamIcon = getChampionIcon(championName);
  // return null;
 return (
      <RecordLi>
      <RecordInfo>
        <InfoTimeStamp>40분전</InfoTimeStamp>
        <InfoResult>{win ? "승리" : "패배"}</InfoResult>
        <InfoType>솔로랭크</InfoType>
        <InfoLength>40:00</InfoLength>
      </RecordInfo>
      <RecordChamp>
        <ChampImg src={getChampionIcon(championName)}/>
        <ChampName>{}</ChampName>
      </RecordChamp>
      <RecordKDA>
          <KDA>{kills} / {deaths}/ {assists}</KDA>
          <KDARatio>0.00</KDARatio>
          <KDAKillInvol>77%관여</KDAKillInvol>
      </RecordKDA>
      <RecordStats>
          <StatsAllCs>{totalMinionsKilled + neutralMinionsKilled} CS</StatsAllCs>
          <StatsMinuteCs>1.0 CS/분</StatsMinuteCs>
      </RecordStats>
      <RecordSpell>

      </RecordSpell>
      <RecordRune>

      </RecordRune>
      <RecordItem>

      </RecordItem>
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
  align-items: center;
`;
const InfoTimeStamp = styled.div`
  font-size: 12px;
  font-weight: lighter;
  margin: 0 auto;
`;
const InfoResult =styled.div`
  font-size: 16px;
  font-weight: 700;
`;
const InfoType = styled.div`
  font-size: 14px;
  font-weight: bold;
`;
const InfoLength = styled.div`
  font-size: 14px;
`;
const RecordChamp = styled.div`
  width: 4.5rem;
`;
const ChampImg = styled.img`
  width: 3.5rem;
  border: none;
`;
const ChampName = styled.span`

`;
const RecordKDA = styled.div`

`;
const KDA = styled.div`

`;
const KDARatio = styled.div`

`;
const KDAKillInvol = styled.div`

`;
const RecordStats = styled.div`

`;
const StatsAllCs = styled.div`

`;
const StatsMinuteCs = styled.div`

`;
const RecordSpell = styled.div`

`;
const RecordRune = styled.div`

`;
const RecordItem = styled.div`
  
`;
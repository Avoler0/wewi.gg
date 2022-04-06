import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { AT_puuid } from "../../../../../Router/Api/RiotRecordApi";

function GameList({gameInfo}:gameInfo) {
  const puuid = useRecoilValue<string>(AT_puuid)
  const dataCount = gameInfo?.metadata.participants.findIndex((data:any)=> data === puuid)
  const {
    win,
    assists,
    deaths,
    kills,
    totalMinionsKilled,
    neutralMinionsKilled,
    championName,
  } = gameInfo.info.participants[dataCount];
 return (
      <RecordLi>
      <RecordInfo>
        <InfoTimeStamp>40분전</InfoTimeStamp>
        <InfoResult>{win ? "승리" : "패배"}</InfoResult>
        <InfoType>솔로랭크</InfoType>
        <InfoLength>40:00</InfoLength>
      </RecordInfo>
      <RecordChamp>
        <ChampImg />
        <ChampName>{championName}</ChampName>
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

export default GameList;

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

`;
const ChampImg = styled.img`

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
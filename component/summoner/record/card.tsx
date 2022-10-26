import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { riotImg } from "../../../hooks/riotImageHook";
import { queueUtils } from "../../../const/utils";

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
  console.log("디테일",detail);
  
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
  
    console.log(myDetail);
    
  },[detail])
  
    useEffect(()=>{
    console.log(gameLengthTime);
    
  },[myDetail])
  console.log("나의 디에틸",myDetail);
  
  if(isLoading){
    return <div>기록 없음</div>
  }

  function teamKills(){
    const myTeamKills = [];
    detail.info.teams.map((data)=>{
      if(data.teamId === myDetail.teamId){
        myTeamKills.push(data.objectives.champion.kills)
      }
    } )
    console.log("나의팀은",myTeamKills[0]);
    return myTeamKills[0];
  }
  // detail.info.teams.filter((data)=> data.teamId === myDetail.teamId)
  return (
    <WarpLi>
      <InfoWrap>
        <InfoType>{queueUtils.type[queueId]}</InfoType>
        {/* <InfoTimeStamp>{myDetail.gameEndTime[0].toString()}{myDetail.gameEndTime[1]} 전</InfoTimeStamp> */}
        <InfoResult>{myDetail.win ? "승리" : "패배"}</InfoResult>
        <InfoLength>{gameLengthTime}</InfoLength>
        {/* <InfoLength>{myDetail.gameLegth[0]}분 {gameLegth[1]}초</InfoLength> */}
      </InfoWrap>
      <ChampWrap>
        <div className="champ-image">
          <Image src={riotImg.champion(myDetail?.championName)} alt="icon" layout="fill"/>
        </div>
      </ChampWrap>
     
      <SpellWrap>
        {/* <Image src={spellD}  alt="icon" width="100" height="100" objectFit="cover" />
        <Image src={spellF}  alt="icon" width="100" height="100" objectFit="cover" /> */}
      </SpellWrap>
      <RuneWrap>
        <Rune margin={true} >
          <div className="rune-icon"  >
            <Image className="icon" src={runeImg.rune[0]}  alt="icon" layout="fill" />
          </div>
        </Rune>
        <Rune margin={false} >
          <div className="rune-icon">
            <Image className="icon" src={runeImg.rune[1]}  alt="icon" layout="fill" />
          </div>
        </Rune>
      </RuneWrap>
      <ItemWrap>
        {/* {item.map((id:any , index:number)=> id === 0 ? <Image /> : index !== item.length-1  ? <Image key={id} src={ getItemIcon(id) }/> : null)} */}
      </ItemWrap>
      <KdaWrap>
          <div className="kda">{myDetail.kills} / {myDetail.deaths} / {myDetail.assists}</div>
          <div className="kda">{((myDetail.kills+myDetail.assists) / myDetail.deaths).toFixed(2)}:1 평점</div>
          <div className="kda">킬관여 {((myDetail.kills+myDetail.assists)/teamKills()*100).toFixed(0)}%</div>
      </KdaWrap>
      <StatsWrap>
          <div className="stats">{myDetail.totalMinionsKilled + myDetail.neutralMinionsKilled} CS</div>
          {/* <div className="stats">{((myDetail.totalMinionsKilled + myDetail.neutralMinionsKilled) /myDetail.gameLegth[0]).toFixed(1)} CS/분</div> */}
          <div className="stats"><span>시야점수</span> {myDetail.visionScore}</div>
      </StatsWrap>
      </WarpLi>
  );
}

const RecordUl = styled.ul`

`;
const WarpLi = styled.li`
  margin: 5px;
  border: 1px solid white;
  height: 90px;
  display: flex;
  padding: 10px;
`;

const InfoWrap = styled.div`
  width: 10%;
  margin-left: 5px;
  align-items: left;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 12px;
  flex: 0 0 10%;
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
const ChampWrap = styled.div`
  display: flex;
  text-align: center;
  flex: 0 0 10%;
  .champ-image{
    position: relative;
    width: 100%;
    height: 100%;
  }
  .champ-image img{
    border-radius: 6rem;
  }
`;


const KdaWrap = styled.div`
  margin-left: 25px;
  font-size: 14px;
  flex: 0 0 10%;
  .kda{
    margin-top: 3px;
  }
`;

const StatsWrap = styled.div`
  margin-left: 15px;
  font-size: 14px;
  flex: 1;
  .stats{
    margin-top: 3px;
  }
  span{
    font-size: 12px;
  }
`;

const SpellWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
  flex: 0 0 10%;
  img{
    width: 30px;
    height: 30px;
    border-radius: 5px;
    background-color: #271f1f;
  }
`;
const RuneWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .rune-icon{
    position: relative;
    width: 1.7rem;
    height: 1.7rem;
  }

`;
const Rune = styled.div`
  padding: 0.2rem;
  border-radius: 5px;
  background-color: #271f1f;
`;
const ItemWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: calc(3px);
  margin-left: 25px;
  flex: 0 0 30%;
  img{
    width: 30px;
    height: 30px;
    border-radius: 5px;
    background-color: #271f1f;
  }
`;
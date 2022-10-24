import { useRouter } from "next/router";
import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { riot } from "../../../hooks/riotApiHook";
import Image from "next/image";
import { riotImg } from "../../../hooks/riotImageHook";


export default function RecordCard({detail,puuid}:any) {
  const [isLoading,setIsLoading] = useState(true);
  const [myDetail,setMyDetal] = useState({});
  const [runeImg,setRuneImg] = useState();
  const runeIcon = new Array();
  const router = useRouter();
  let imgPath = {
    rune:[],
  }
  const nickName = router.query.summoner;
  // console.log("매치",detail.info);
  useEffect(()=>{
    
    if(isLoading){
      const result = detail.metadata.participants.findIndex((id:string) => id === puuid )
      setMyDetal(detail.info.participants[result])
      
      
      // const reduc = detail.info?.reduce((prev,current)=>{
      //   console.log("푸렛부",prev);
      //   return prev
      // })
      console.log("아이디",result);
    }
    
  },[isLoading])
  useEffect(()=>{
    if(myDetail !== undefined){
      
      (()=>{
      riotImg.rune(myDetail.perks?.styles[0],myDetail.perks?.styles[1])
      .then((_res)=>{
        setRuneImg(()=> _res);
        setIsLoading(false);
      })
    })()
    }
  },[myDetail])
  useEffect(()=>{
  console.log("이미지 패스",runeImg);

  },[runeImg])
  
  if(isLoading){
    return <div>기록 없음</div>
  }
  console.log(myDetail);
  
  return (
    <RecordLi>
      <RecordInfo>
        {/* <InfoType>{getQueueType(queueId)}</InfoType> */}
        {/* <InfoTimeStamp>{myDetail.gameEndTime[0].toString()}{myDetail.gameEndTime[1]} 전</InfoTimeStamp> */}
        <InfoResult>{myDetail.win ? "승리" : "패배"}</InfoResult>
        {/* <InfoLength>{gameLengthTime}</InfoLength> */}
        {/* <InfoLength>{myDetail.gameLegth[0]}분 {gameLegth[1]}초</InfoLength> */}
      </RecordInfo>
      <RecordChamp>
        {/* <ChampImg src={myDetail.gameInfo && getChampionIcon(championName)}/> */}
      </RecordChamp>
     
      <RecordSpell>
        {/* <Image src={spellD}  alt="icon" width="100" height="100" objectFit="cover" />
        <Image src={spellF}  alt="icon" width="100" height="100" objectFit="cover" /> */}
      </RecordSpell>
      <RecordRune>
        <div className="rune-icon"><Image className="icon" src={runeImg[0]}  alt="icon" layout="fill" /></div>
        <span className="rune-icon"><Image className="icon" src={runeImg[1]}  alt="icon" width="30" height="30" />  </span>
      </RecordRune>
      <RecordItem>
        {/* {item.map((id:any , index:number)=> id === 0 ? <Image /> : index !== item.length-1  ? <Image key={id} src={ getItemIcon(id) }/> : null)} */}
      </RecordItem>
      <RecordKDA>
          <KDA>{myDetail.kills} / {myDetail.deaths} / {myDetail.assists}</KDA>
          <KDARatio>{((myDetail.kills+myDetail.assists) / myDetail.deaths).toFixed(2)}:1 평점</KDARatio>
          <KDAKillInvol>킬관여 {((myDetail.kills+myDetail.assists)/myDetail.teamKills*100).toFixed(0)}%</KDAKillInvol>
      </RecordKDA>
      <RecordStats>
          <StatsAllCs>{myDetail.totalMinionsKilled + myDetail.neutralMinionsKilled} CS</StatsAllCs>
          {/* <StatsMinuteCs>{((myDetail.totalMinionsKilled + myDetail.neutralMinionsKilled) /myDetail.gameLegth[0]).toFixed(1)} CS/분</StatsMinuteCs> */}
          <StatsVision><span style={{fontSize:"12px"}}>시야점수</span> {myDetail.visionScore}</StatsVision>
      </RecordStats>
      </RecordLi>
  );
}

const RecordUl = styled.ul`

`;
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
  .rune-icon{
    position: relative;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    background-color: #271f1f;
    img{
      width: 90%;
    }
    .icon{
      width: 10px;
    }
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
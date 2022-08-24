import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { getSummonerGameInfo, getSummonerInfo, getSummonerLeagueInfo } from "../../Api/riotApi";
import { I_summonerBasicData, I_summonerInfo } from "../../Types/apiInterFace";
import { customAsync } from "../../commons/asyncUtils";
import { AT_puuid } from "../../commons/Atom";
import { Container, Wrapper } from "../../commons/sharingCss";
import Profile from "./profile/summonerProfile";
import SummonerInfo from "./rank/summonerLeagueInfo";
import Recently from "./Record/Recently";
import ChampRecently from "./Record/RecentlyRecord/ChampRecently";


const ProfileView = styled.div`
  width: 300px;
  height: 100px;
  background-color: #2c3e50;
  margin-bottom: 6px;
  border-radius: 5px;
  display: block;
`;
const RankView = styled.div`
  width: 300px;
  height: 180px;
  background-color: #2c3e50;
  margin: 6px 0;
  border-radius: 5px;
  display: block;
`;
const ChampStatsView = styled.div`
  width: 300px;
  min-height: 300px;
  background-color: #2c3e50;
  margin: 6px 0;
  border-radius: 5px;
  display: block;
`;
const RecentlyView = styled.div`
  width: 900px;
  /* width: 90vw; */
  min-height: 1200px;
  background-color: #2c3e50;
  border-radius: 5px;
`;
const Column = styled.div`
`;

interface dsd {
  accountId: string,
  id: string,
  name: string,
  profileIconId: number,
  puuid: string,
  revisionDate: number,
  summonerLevel: number,
}
function SummonerRecord() {
  const { summonerId } = useParams<string>();
  const [isLoading,setIsLoading] = useState(true)
  const [summonerInfo,setSummonerInfo] = useState<I_summonerBasicData>();
  const [summonerLeagueInfo, setSummonerLeagueInfo] = useState<I_summonerInfo>();
  const [gameList,setGameList] = useState([]);
  const [stPuuId,setStPuuId] = useState("");
  const [gameInfo,setGameInfo] = useState<any[]>();
  const start = 0;
  const count = 20;
  const getApiData = async () => {

    
  }
  useEffect(()=>{
    setIsLoading(true);
    const summonerName = summonerId as string;
    getSummonerInfo(summonerId!).then(async (res:any)=>{
      if(res.data){
        const {id , puuid} = res.data.data
        console.log(id);
        
        setSummonerInfo(res.data)
        Promise.all([
          await customAsync(getSummonerLeagueInfo(id),1000),
          getContent(puuid,start,count)
        ])
        .then(([fetchLeague]:any)=>{
          setSummonerLeagueInfo(fetchLeague.data)
          setIsLoading(false)
        })
      }
    })
    
  },[])
  // useEffect(()=>{
  //   console.log("리그인포",summonerLeagueInfo);
  //   console.log("서몬인포",summonerInfo);
  // },[summonerInfo,summonerLeagueInfo])
  // const click = () => {
  //   getApiData()
  //   console.log("리그인포",summonerLeagueInfo);
  //   console.log("서몬인포",summonerInfo);
  // }
  
  
  const getContent = (puuid:string , start:number , count:number) => {
    Promise.all([customAsync(getSummonerGameInfo(puuid,start,count),1000)])
    .then(([res]:any) => {
      setGameInfo(res.data.matchDetails[0]);
    })
    .catch((error) => {
      console.error("에러",error);
    })
  }
  // useEffect(() => {
  //   getContent(stPuuId,start,count)
  // },[])
  if(isLoading){
    return (
      <div>
        is Loading
      </div>
    )
  }
  
  return(
    <Container>
      <Wrapper style={{display:"flex"}} id="wrap">
        <Column style={{marginRight:"10px"}}>
          <ProfileView id="profileView">
            <Profile summonerInfo={summonerInfo!}/>
          </ProfileView>
          <RankView>
            <SummonerInfo summonerLeagueInfo={summonerLeagueInfo} />
          </RankView>
          <ChampStatsView>
            <ChampRecently gameInfo={gameInfo} />
          </ChampStatsView>
        </Column>
        <Column>
          <RecentlyView>
            <Recently gameInfo={gameInfo}/>
          </RecentlyView>
        </Column>
        
      </Wrapper>
    </Container>
  )
}

export default React.memo(SummonerRecord);
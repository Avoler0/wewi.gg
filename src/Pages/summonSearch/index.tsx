import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { getSummonerGameInfo, getSummonerInfo, getSummonerLeagueInfo } from "../../api/api";
import { I_summonerBasicData, I_summonerInfo } from "../../commons/apiInterFace";
import { customAsync } from "../../commons/asyncUtils";
import { Container, Wrapper } from "../../commons/sharingCss";
import { AT_puuid } from "../../Router/Api/RiotRecordApi";
import Profile from "./profile/summonerProfile";
import SummonerInfo from "./rank/summonerLeagueInfo";
import Recently from "./Record/Recently";


const ProfileView = styled.div`
  width: 25%;
  height: 100px;
  background-color: #2c3e50;
  margin-bottom: 6px;
  border-radius: 5px;
`;
const RankView = styled.div`
  width: 25%;
  height: 180px;
  background-color: #2c3e50;
  margin: 6px 0;
  border-radius: 5px;
`;
const ChampStatsView = styled.div`
  width: 25%;
  min-height: 300px;
  background-color: #2c3e50;
  margin: 6px 0;
  border-radius: 5px;
`;
const RecentlyView = styled.div`
  position: absolute;
  right: 0;
  width: 73%;
  min-height: 1200px;
  background-color: #2c3e50;
  border-radius: 5px;
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
  const setATPuuid = useSetRecoilState(AT_puuid);
  let start = 0
  let count = 20;
  const getApiData = async () => {

    
  }
  useEffect(()=>{
    setIsLoading(true);
    console.log("유주이펙트");
    const summonerName = summonerId as string;
    getSummonerInfo(summonerId!).then(async (res:any)=>{
      console.log("실행");
      if(res.data){
        const {id , puuid} = res.data.data
        console.log(id);
        
        setSummonerInfo(res.data)
        Promise.all([
          await customAsync(getSummonerLeagueInfo(id),1000),
          setATPuuid(puuid)
        ])
        .then(([fetchLeague]:any)=>{
          setSummonerLeagueInfo(fetchLeague.data)
          console.log("프람스 실행");
          console.log("패치데이터",fetchLeague.data);
          
          setIsLoading(false)
        })
      }
    })
    
  },[])
  useEffect(()=>{
    console.log("리그인포",summonerLeagueInfo);
    console.log("서몬인포",summonerInfo);
  },[summonerInfo,summonerLeagueInfo])
  const click = () => {
    getApiData()
    console.log("리그인포",summonerLeagueInfo);
    console.log("서몬인포",summonerInfo);
  }
  
  // console.log(summonerInfo);
  // console.log(summonerLeagueInfo);
  // console.log(gameList);
  // getSummonerBasicData(summonerName!).then(async res => {
  //     setSummonerInfo(res.data)
  //     console.log("실행");
  //     if(res.data){
  //       const {id:summonerId , puuid:summonerPuuid} = res.data.data;
  //       console.log("아이디",summonerId);
        
  //       Promise.all([
  //         await customAsync(getSummonerLeagueInfo(summonerId),300),
  //         await customAsync(getSummonerGameInfo(summonerPuuid,start,count),300),
          
  //       ]).then(([fetchSummonInfo,fetchSummonerRecordList]:any) => {
  //         console.log(fetchSummonInfo);
  //         console.log(fetchSummonerRecordList);
  //         // setSummonerInfo(fetchSummonId.data);
  //         // setSummonerLeagueInfo(fetchSummonInfo.data)
  //         // setGameList(fetchSummonerRecordList.data)
  //         // setATPuuid(summonerPuuid)
  //         // setIsLoading(false);
  //       })
  //     }
  //   })
  if(isLoading){
    return (
      <div>
        is Loading
      </div>
    )
  }
  
  return(
    <Container>
      <Wrapper>
        <ProfileView id="profileView">
          <Profile summonerInfo={summonerInfo!}/>
        </ProfileView>
        <RankView>
          <SummonerInfo summonerLeagueInfo={summonerLeagueInfo} />
        </RankView>
        <ChampStatsView>

        </ChampStatsView>
        <RecentlyView>
          <Recently/>
        </RecentlyView>
      </Wrapper>
    </Container>
  )
}

export default SummonerRecord;
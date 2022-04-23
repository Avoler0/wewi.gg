import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { getSummonerBasicData, getSummonerGameList, getSummonerInfo, getSummonerLeagueInfo, getSummonerRecordList } from "../../api/api";
import { I_summonerBasicData, I_summonerInfo } from "../../commons/apiInterFace";
import { customAsync } from "../../commons/asyncUtils";
import { AT_puuid } from "../../Router/Api/RiotRecordApi";
import Profile from "./profile/summonerProfile";
import SummonerInfo from "./rank/summonerLeagueInfo";
import Recently from "./Record/Recently";

const Container = styled.div`
  z-index: 2;
  display: flex;
  max-width: 1903px;
  min-width: 1200px ;
  margin: 0 auto ;
`;
const Wrap = styled.div`
  padding: 5% 0;
  width: 1200px;
  height: 1900px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  background: none;
`;
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
  useEffect(()=>{
    setIsLoading(true);
    const summonerName = summonerId;
    getSummonerInfo(summonerName!).then(async res => {
      setSummonerInfo(res.data)
      console.log("실행");
      if(res.data){
        const {id:summonerId , puuid:summonerPuuid} = res.data.data;
        console.log("아이디",summonerId);
        
        Promise.all([
          // await customAsync(getSummonerBasicData(summonerName!),300),
          await customAsync(getSummonerLeagueInfo(summonerId),300),
          await customAsync(getSummonerGameList(summonerPuuid,start,count),300),
          
        ]).then(([fetchSummonInfo,fetchSummonerRecordList]:any) => {
          // setSummonerBasicData(fetchSummonId.data) fetchSummonId,;
          setSummonerLeagueInfo(fetchSummonInfo.data)
          setGameList(fetchSummonerRecordList.data)
          setATPuuid(summonerPuuid)
          setIsLoading(false);
        })
      }
    })
  },[])
  // console.log(summonerInfo);
  // console.log(summonerLeagueInfo);
  // console.log(gameList);
  
  if(isLoading){
    return (
      <div>
        Is Loading
      </div>
    )
  }
  
  return(
    <Container>
      <Wrap>
        <ProfileView id="profileView">
          <Profile summonerInfo={summonerInfo!}/>
        </ProfileView>
        <RankView>
          <SummonerInfo summonerLeagueInfo={summonerLeagueInfo} />
        </RankView>
        <ChampStatsView>

        </ChampStatsView>
        <RecentlyView>
          <Recently recordList={gameList} />
        </RecentlyView>
      </Wrap>
    </Container>
  )
}

export default SummonerRecord;
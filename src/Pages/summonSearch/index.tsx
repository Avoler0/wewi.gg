import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getSummonerBasicData, getSummonerInfo, getSummonerRecordList } from "../../api/api";
import { I_summonerBasicData, I_summonerInfo } from "../../commons/apiInterFace";
import { customAsync } from "../../commons/asyncUtils";
import Profile from "./profile/summonerProfile";
import SummonerInfo from "./rank/summonerInfo";

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
  height: 200px;
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
  const [summonerBasicData,setSummonerBasicData] = useState<I_summonerBasicData>();
  const [summonerInfo, setSummonerInfo] = useState<I_summonerInfo>();
  const [summonerRecord,setSummonerRecord] = useState([]);
  let start = 0
  let count = 20;
  useEffect(()=>{
    setIsLoading(true);
    const summonerName = summonerId;
    getSummonerBasicData(summonerName!).then(async res => {
      if(res.data){
        
        const {id:summonerId , puuid:summonerPuuid} = res.data;
        
        Promise.all([
          await customAsync(getSummonerBasicData(summonerName!),300),
          await customAsync(getSummonerInfo(summonerId),300),
          await customAsync(getSummonerRecordList(summonerPuuid,start,count),300),
        ]).then(([fetchSummonId,fetchSummonInfo,fetchSummonerRecordList]:any) => {
          setSummonerBasicData(fetchSummonId.data);
          setSummonerInfo(fetchSummonInfo.data)
          setSummonerRecord(fetchSummonerRecordList.data)
          
          setIsLoading(false);
        })
      }
    })
  },[])
  
  if(isLoading){
    return (
      <div>
        Is Loading
      </div>
    )
  }
  console.log(summonerInfo);
  
  return(
    <Container>
      <Wrap>
        <ProfileView id="profileView">
          <Profile basicData={summonerBasicData!}/>
        </ProfileView>
        <RankView>
          <SummonerInfo summonerInfo={summonerInfo} />
        </RankView>
        <ChampStatsView>

        </ChampStatsView>
        <RecentlyView>

        </RecentlyView>
      </Wrap>
    </Container>
  )
}

export default SummonerRecord;
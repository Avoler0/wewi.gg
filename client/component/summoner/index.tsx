import styled from "styled-components";
import SummonerProfile from "./profile/profile";
import LeagueInfo from "./league";
import Record from "./record";
import React, { useCallback, useEffect, useState } from "react";
import { riotSummonerHook } from "../../hooks/server/riot/summoner";
import Summoner404Page from "./summoner404";

export type props = {
  searchString : string
}

export default React.memo(Summoner)

function Summoner({searchString}:props){
  const [summoner,setSummoner] = useState<any>({});
  const [isLoading,setIsLoading] = useState(true);

  const fetchSummoner = useCallback(async ()=>{
    await riotSummonerHook.info(searchString)
    .then(async (_res:any)=>{
      const resData = _res.data;
      const league:any = await riotSummonerHook.league(resData.id)
      setSummoner({...resData,rank:league.data})
      setIsLoading(false)
    })
    .catch((_err)=>{
      setIsLoading(true) // 404 페이지로 이동
    })
  },[searchString]) 

  useEffect(()=>{
    fetchSummoner();
  },[fetchSummoner])

  if(isLoading) return <Summoner404Page></Summoner404Page>;
  
  return (
    <Container>
      <Wrapper style={{display:"flex"}} id="wrap">
        <Column style={{marginRight:"10px"}}>
          <ProfileView id="profileView">
            <SummonerProfile profile={summoner} />
          </ProfileView>
          <RankView>
            <LeagueInfo league={summoner?.rank} />
          </RankView>
        </Column>
        <Column>
          <RecentlyView>
            <Record info={summoner} searchString={searchString}/>
          </RecentlyView>
        </Column>
      </Wrapper>
      <style jsx global>{`
        body{
          
          /* background-image: url(https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt15d3facea57e5b7e/634613111338101198fce129/K_Sante-Base-Splash.jpg); */
          /* background-repeat: repeat; */
        }
      `}</style>
    </Container>
  )
}


const Container = styled.div`
  width: 100%;
  height: 100%;
  color:black;
  background-color: RGB(235, 238, 241);
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 150px;  
  @media (min-width: 992px) and (max-width: 1199px) {
    width: 792px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 568px;
  }
  @media (max-width: 767px){
	  width: 567px;
  }
`;
const ProfileView = styled.div`
  width: 19rem;
  background-color: #fff;
  margin-bottom: 6px;
  border-radius: 5px;
  display: block;
`;
const RankView = styled.div`
  width: 19rem;
  margin: 6px 0;
  border-radius: 5px;
  display: block;
`;
const ChampStatsView = styled.div`
  width: 19rem;
  min-height: 300px;
  background-color: #fff;
  margin: 6px 0;
  border-radius: 5px;
  display: block;
`;
const RecentlyView = styled.div`
  min-width: 56rem;
  min-height: 60rem;
  border-radius: 5px;
`;
const Column = styled.div`
`;
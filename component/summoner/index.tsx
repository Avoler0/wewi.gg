import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { riot } from "../../hooks/riotApiHook";
import SummonerProfile from "./profile/profile";
import Rankinfo from "./league";
import LeagueInfo from "./league";
import Record from "./record";

export type props = {
  searchString : string | string[]
}

export default function Summoner({searchString}:props){
  const [isLoading,setIsLoading] = useState(true);
  const [profile,setProfile] = useState();
  const [league,setLeague] = useState({});
  const [matchList,setMatchList] = useState({});
  const searchType = "summoner"
  const summoner = useSelector((state:any) =>{
    return state.search.value
  })
    useEffect(()=>{
      setIsLoading(true)
    if(searchString !== undefined){
      riot.summoner(searchType,searchString).then(async (_res:any)=>{
        const { id,name,profileIconId,puuid,revisionDate,summonerLevel} = _res;
        Promise.all([
          await riot.matchList(puuid,1,5),
          await riot.league(id)
        ]).then(([fetchMatchList,fetchLeague])=>{
          setProfile(_res)
          setMatchList(fetchMatchList)
          setLeague(fetchLeague)
          setIsLoading(false);
        })
        .catch(([matchError,leagueError])=>{
          console.log("처음 에러",matchError,leagueError);
          
        })
      }).catch((_error)=>{
        console.log("기본정보부분 에러",_error);
      })
    }
  },[searchString])
  
  if(isLoading){
    return(<div>없음</div>);
  }
 
  
  return (
    <Container>
      <Wrapper style={{display:"flex"}} id="wrap">
        <Column style={{marginRight:"10px"}}>
          <ProfileView id="profileView">
            <SummonerProfile profile={profile} />
          </ProfileView>
          <RankView>
            <LeagueInfo league={league} />
          </RankView>
          <ChampStatsView>
            {/* <ChampRecently gameInfo={gameInfo} /> */}
          </ChampStatsView>
        </Column>
        <Column>
          <RecentlyView>
            <Record matchList={matchList} puuid={profile.puuid}/>
          </RecentlyView>
        </Column>
      </Wrapper>
    </Container>
  )
}
const Container = styled.div`
  width: 100%;
  height: 100%;
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
  background-color: #2c3e50;
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
  background-color: #2c3e50;
  margin: 6px 0;
  border-radius: 5px;
  display: block;
`;
const RecentlyView = styled.div`
  min-width: 56rem;
  min-height: 60rem;
  background-color: #2c3e50;
  border-radius: 5px;
`;
const Column = styled.div`
`;
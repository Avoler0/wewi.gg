import styled from "styled-components";
import { riot } from "../../hooks/riotApiHook";
import SummonerProfile from "./profile/profile";
import LeagueInfo from "./league";
import Record from "./record";
import { useQuery } from "react-query";

export type props = {
  searchString : string | string[]
}

export default function Summoner({searchString}:props){
  const {data:summoner,isLoading} = useQuery('summoner',async () => await fetchSummonerInfo());
  async function fetchSummonerInfo(){
    return await riot.summoner(searchString)
    .then(async (_res:any)=>{
      const league = await riot.league(_res.id)
      return {..._res,rank:league}
    }).catch((_error)=>{
      console.log("기본정보부분 에러",_error);
    })
  }

  if(isLoading){
    return(<div>없음</div>);
  }
  
  
  
  return (
    <Container>
      <Wrapper style={{display:"flex"}} id="wrap">
        <Column style={{marginRight:"10px"}}>
          <ProfileView id="profileView">
            <SummonerProfile profile={summoner} />
          </ProfileView>
          <RankView>
            <LeagueInfo league={summoner.rank} />
          </RankView>
          <ChampStatsView>
            {/* <ChampRecently gameInfo={gameInfo} /> */}
          </ChampStatsView>
        </Column>
        <Column>
          <RecentlyView>
            <Record info={summoner}/>
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
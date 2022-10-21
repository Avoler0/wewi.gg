import { useSelector } from "react-redux";
import styled from "styled-components";
import { SummonerType } from "../../types/riotType";
import SummonerProfile from "./debs/profile";

export type props = {
  props : SummonerType
}

export default function Summoner(){
  const summoner = useSelector((state:any) =>{
    return state.search.value
  })
  const { id,name,profileIconId,puuid,revisionDate,summonerLevel} = summoner
  console.log("써모너",summoner);
  
  return (
    <Container>
      <Wrapper style={{display:"flex"}} id="wrap">
        <Column style={{marginRight:"10px"}}>
          <ProfileView id="profileView">
            <SummonerProfile {...summoner!}/>
          </ProfileView>
          <RankView>
            {/* <SummonerInfo summonerLeagueInfo={summonerLeagueInfo} /> */}
          </RankView>
          <ChampStatsView>
            {/* <ChampRecently gameInfo={gameInfo} /> */}
          </ChampStatsView>
        </Column>
        <Column>
          <RecentlyView>
            {/* <Recently gameInfo={gameInfo}/> */}
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
  height: 8rem;
  background-color: #2c3e50;
  margin-bottom: 6px;
  border-radius: 5px;
  display: block;
`;
const RankView = styled.div`
  width: 19rem;
  height: 180px;
  background-color: #2c3e50;
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
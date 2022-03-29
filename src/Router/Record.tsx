
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { AT_summonerName,getSummonerId,getSummonerInfo } from "./Api/RiotBasicDataApi";
import RecordDisplay from "./RecordDisplay";
const Container = styled.div`
  max-width: 1903px;
  min-width: 1200px ;
  margin: 0 auto ;
`;
const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const Layout = styled.div`
  display: flex;
`;
const Head = styled.div`
  width:100% ;
  height: 20vh ;
  padding-bottom: 48px;
`;
const Left = styled.div`
  background-color: black;
  width: 80%;
`;
const Right = styled.div`
  background-color: whitesmoke;
  width: 20%;
`;
const ReportBoard=styled.div`
  background-color: aqua;
`;
const ReBoardLabel = styled.div`
  width: 100%;
  font-size: 24px;
  font-weight: 700;
  color: black;
  padding: 10px;
`;
const ReBoardPost = styled.div`
  width: 100%;
  height: 70px;
  background-color: blue;
`;
const Profile = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  height: 18vh;
  background-color: red;
`;
const Middle = styled.div`
  width: 100%;
  height: 100vh;
  background-color: green;
`;
const RecordBorad = styled.ul`
  background-color: gray;
`;
const ScoreWrap = styled.li`
  display: flex;
  background-color: blue;
  height: 125px;
  border: 1px solid white;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const ScoreInfo = styled.div`
  height: 100%;
  width: 10%;
`;
const ScoreResult = styled.div`

`;
const ScroeType = styled.div`

`;
const ScroeTimeStamp = styled.div`

`;
const ScoreTime = styled.div`

`;
const ScoreIcon = styled.div`
  height: 100%;
  width: 15%;
`;
const ScoreBoard = styled.div`
  height: 100%;
`;
const Bottom = styled.div`
  width: 100%;
  height: 20vh;
  background-color: blue;
`;
const IconWrap = styled.div`
  margin: 0 20px;
  white-space: nowrap;
  
`;
const IconImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 30px;
`;



const Info = styled.div`
  height: 100%;

`;
const SClan = styled.div`
  font-size: 12px;
  display: inline;
`;
const Sname = styled.span`
  font-size: 28px;
  font-weight: bold;
  margin: 5px 10px 15px 0px;
  margin-top: 10px;
  color: black;
`;
const Slevel = styled.div`
  font-size: 16px;
`;
const RankWrap = styled.div`
  display: flex;
  margin: 10px;
`;
const SummonerCheck = styled.div`
  padding-top: 20px;
`;
const SoloTierWrap = styled.div`
  height: 100%;
`;
const WithTierWrap = styled.div`
  height: 100%;
`;
const RankType = styled.div`
  font-size: 12px;
  font-weight: 700;
  text-align: center;
`;
const RankIconImg = styled.img`
  height: 70%;
`;
const RankIntro = styled.div`
  font-size: 12px;
  font-weight: 700;
  text-align: center;
`;
function Record() {
  // 변수 선언 
  const { summonerId } = useParams<string>();
  const setName = useSetRecoilState(AT_summonerName);
  const summonBasicData = useRecoilValue(getSummonerId);
  const summonInfo = useRecoilValue(getSummonerInfo);
  const imgfile:string = `http://ddragon.leagueoflegends.com/cdn/10.11.1/img/profileicon/${summonBasicData?.profileIconId}.png`;
  let recentlyCount = 20;

  // 변수 선언 끝

  if(typeof summonerId === 'string'){
    setName(summonerId);
  } 
  
  // useEffect(()=>{
  //   console.log("데이터" , summonId);
  //   console.log("Icon 데이터" , imgfile);
  //   console.log("Info 데이터" , summonInfo);
  // },[summonId,imgfile,summonInfo]);

  return (
    <Container>
      <Wrapper>
        <Head />
        <Layout>
          <Left>
            <Profile id="main">
              <IconWrap>
                <IconImg src={imgfile} />
              </IconWrap>

                  <Info id="info">
                    {/* <Slevel>{summonId?.summonerLevel} Level</Slevel> */}
                    <Sname>{summonerId}</Sname>
                      <SClan>TETRA</SClan>
                    <SummonerCheck>
                      <button>전적갱신</button>
                      <button>신고하기</button>
                    </SummonerCheck>
                  </Info>
                  {/* 승리:{summonInfo[0]?.wins} */}
                  {/* 패배:{summonInfo[0]?.losses} */}
                  <RankWrap>
                    <SoloTierWrap>
                      <RankType>솔로 랭크</RankType>
                      <RankIconImg src={`../images/tier-icons/tier-icons/${summonInfo[0]?.tier.toLowerCase().trim()}_${summonInfo[0]?.rank.toLowerCase().trim()}.png`} />
                      <RankIntro>{summonInfo[0]?.tier} {summonInfo[0]?.rank}</RankIntro>
                    </SoloTierWrap>
                    <WithTierWrap>
                      <RankType>자유 랭크</RankType>
                      <RankIconImg src={`../images/tier-icons/tier-icons/${summonInfo[1]?.tier.toLowerCase().trim()}_${summonInfo[1]?.rank.toLowerCase().trim()}.png`} />
                      <RankIntro>{summonInfo[1]?.tier} {summonInfo[1]?.rank}</RankIntro>
                    </WithTierWrap>
                  </RankWrap>
                </Profile>
            <Middle>
              <RecordDisplay name={summonerId === undefined? "" : summonerId} puuid={summonBasicData.puuid} count={recentlyCount}/>
              <RecordDisplay name={summonerId === undefined? "" : summonerId} puuid={summonBasicData.puuid} count={recentlyCount}/>
              <RecordDisplay name={summonerId === undefined? "" : summonerId} puuid={summonBasicData.puuid} count={recentlyCount}/>
              <RecordDisplay name={summonerId === undefined? "" : summonerId} puuid={summonBasicData.puuid} count={recentlyCount}/>
              <RecordDisplay name={summonerId === undefined? "" : summonerId} puuid={summonBasicData.puuid} count={recentlyCount}/>
              <RecordDisplay name={summonerId === undefined? "" : summonerId} puuid={summonBasicData.puuid} count={recentlyCount}/>
              <RecordDisplay name={summonerId === undefined? "" : summonerId} puuid={summonBasicData.puuid} count={recentlyCount}/>
              <RecordDisplay name={summonerId === undefined? "" : summonerId} puuid={summonBasicData.puuid} count={recentlyCount}/>
              <RecordDisplay name={summonerId === undefined? "" : summonerId} puuid={summonBasicData.puuid} count={recentlyCount}/>
              <RecordDisplay name={summonerId === undefined? "" : summonerId} puuid={summonBasicData.puuid} count={recentlyCount}/>
              <RecordDisplay name={summonerId === undefined? "" : summonerId} puuid={summonBasicData.puuid} count={recentlyCount}/>
              <RecordDisplay name={summonerId === undefined? "" : summonerId} puuid={summonBasicData.puuid} count={recentlyCount}/>
            </Middle>
            <Bottom>

            </Bottom>
          </Left>
          <Right>
            <ReportBoard>
              <ReBoardLabel>
                신고 현황 누적:0개
              </ReBoardLabel>
              <ReBoardPost>
                
              </ReBoardPost>
            </ReportBoard>
          </Right>
        </Layout>
      </Wrapper>
    </Container>
  );

  }
export default Record;

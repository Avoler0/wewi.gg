import { Key, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { summonerName, getSummonerId ,getSummonerInfo, getRecentlyRecord, RecentlyRecord, getRecordMatch } from "./Api/api";

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
  width: 100%;
  display: flex;
  height: 20vh;
  background-color: red;
`;
const Middle = styled.div`
  width: 100%;
  height: 100vh;
  background-color: green;
`;
const Bottom = styled.div`
  width: 100%;
  height: 20vh;
  background-color: blue;
`;
const IconWrap = styled.div`
  margin: 0 20px;
`;
const IconImg = styled.img`
  max-width: 100%;
  height: 80%;
`;
const RecordBorad = styled.ul`
  background-color: gray;
`;
const Score = styled.li`

`;


const Info = styled.div`
  height: 100%;
  margin: 0 5vh 0 5vh;
  padding: 5px;
`;
const SClan = styled.div`
  font-size: 12px;
  display: inline;
`;
const Sname = styled.span`
  font-size: 20px;
  font-weight: bolder;
  margin: 5px 10px 15px 0px;
  margin-top: 10px;
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
  const { summonerId } = useParams<string>();
  const setName = useSetRecoilState(summonerName);
  const summonId = useRecoilValue(getSummonerId);
  const summonInfo = useRecoilValue(getSummonerInfo);
  const recentlyRecord = useRecoilValue(getRecentlyRecord);
  const setRecord = useSetRecoilState(RecentlyRecord);
  const Record = useRecoilValue(getRecordMatch);
  const imgfile:string = `http://ddragon.leagueoflegends.com/cdn/10.11.1/img/profileicon/${summonId?.profileIconId}.png`;
  // const setRecord = useSetRecoilState(getRecordMatch);
  if(typeof summonerId === 'string'){
    setName(summonerId);
  } 
  // useEffect(()=>{
  //   console.log("데이터" , summonId);
  //   console.log("Icon 데이터" , imgfile);
  //   console.log("Info 데이터" , summonInfo);
  // },[summonId,imgfile,summonInfo]);
  console.log(summonId);
  // console.log(championPoint[0]);
  console.log(recentlyRecord);
  
  setRecord(recentlyRecord[0]);
  console.log(Record);
  
  
  
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
              <RecordBorad>
              {recentlyRecord.map((record:any,index:number) =>
                <Score key={record}>
                  {index}
                </Score>
              )}
              </RecordBorad>
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

import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes, useMatch, useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { summonerName, getSummonerId ,getSummonerInfo} from "./Api/api";

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


const Info = styled.div`

`;
const SClan = styled.div`
font-size: 12px;
`;
const Sname = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
`;
const RankWrap = styled.div`
  display: flex;
`;
const SummonerCheck = styled.div`
  padding-top: 20px;
`;
const SoloTierWrap = styled.div`
  height: 100%;
  padding: 10px;
`;
const WithTierWrap = styled.div`
  height: 100%;
  padding: 10px;
`;
function Record() {
  const { summonerId } = useParams<string>();
  const setName = useSetRecoilState(summonerName);
  const summonId = useRecoilValue(getSummonerId);
  const summonInfo = useRecoilValue(getSummonerInfo);
  const imgfile:string = `http://ddragon.leagueoflegends.com/cdn/10.11.1/img/profileicon/${summonId?.profileIconId}.png`;
  if(typeof summonerId === 'string'){
    setName(summonerId);
  } 
  // http://ddragon.leagueoflegends.com/cdn/10.18.1/data/en_US/profileicon.json

  useEffect(()=>{
    console.log("데이터" , summonId);
    console.log("Icon 데이터" , imgfile);
    console.log("Info 데이터" , summonInfo);
  },[summonId,imgfile,summonInfo]);
  
  return (
    <Container>
      <Wrapper>
        <Head />
        <Layout>
          <Left>
                <Profile>
                  <IconWrap>
                    <IconImg src={imgfile} />
                  </IconWrap>
                  <Info>
                    <SClan>TETRA</SClan>
                    <span>{summonId?.summonerLevel} Level</span>
                    <Sname>{summonerId}</Sname>
                    <SummonerCheck>
                      <button>신고하기</button>
                      <button>전적갱신</button>
                    </SummonerCheck>
                  </Info>
                  {/* 승리:{summonInfo[0]?.wins} */}
                  {/* 패배:{summonInfo[0]?.losses} */}
                  <RankWrap>
                    <SoloTierWrap>솔로 : {summonInfo[0]?.tier} {summonInfo[0]?.rank}</SoloTierWrap>
                    <WithTierWrap>자유 : {summonInfo[1]?.tier} {summonInfo[1]?.rank}</WithTierWrap>
                  </RankWrap>
                </Profile>
            
            <Middle>

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

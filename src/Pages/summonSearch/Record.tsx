
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { API_KEY , PATH} from "../../commons/API_KEY";
import { I_summonerBasicData,I_summonerInfo } from "../../commons/apiInterFace";
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
  min-height: 100vh;
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
  background-color: gray;
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
  const [summonerBasicData,setSummonerBasicData] = useState<I_summonerBasicData>(); // 기본 소환사의 ID 정보들
  const [summonerInfo , setSummonerInfo] = useState<I_summonerInfo>();
  const [summonerRecord,setSummonerRecord] = useState([]);
  async function  getSummonerBasicData(summonerName:string) {
    const response = await axios.get(`${PATH.KR_RIOT}/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`)
    setSummonerBasicData(response.data);
  };
  async function getSummonerInfo(summonerDataID:string) {
      const response = await axios.get(`${PATH.KR_RIOT}/${PATH.INFO}/${summonerDataID}?api_key=${API_KEY}`)
      setSummonerInfo(response.data);
  };
  async function getSummonerRecord(puuid:string,start:number,count:number) {
    const response = await axios.get(`https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=${start}&count=${count}&api_key=${API_KEY}`);
    setSummonerRecord(response.data);
  }
  
  
  useEffect(()=>{
    getSummonerBasicData(summonerId!)
  },[]);

  useEffect(()=>{
    if(summonerBasicData !== undefined) {
      getSummonerInfo(summonerBasicData!.id)
      getSummonerRecord(summonerBasicData?.puuid,0,20);
    }
  },[summonerBasicData]);

  useEffect(()=>{
    console.log(summonerBasicData);
    console.log(summonerInfo);
    console.log(summonerRecord);
  
  },[summonerBasicData,summonerInfo,summonerRecord]);
  
  
  const imgfile:string = `http://ddragon.leagueoflegends.com/cdn/10.11.1/img/profileicon/${summonerBasicData?.profileIconId}.png`;
  if(summonerBasicData === undefined ) return null;
  if(summonerInfo === undefined) return null;
  if(summonerRecord === undefined) return null;
  return null;
  // return (
  //   <Container>
  //     <Wrapper>
  //       <Head />
  //       <Layout>
  //         <Left>
  //           <Profile id="main">
  //             <IconWrap>
  //               <IconImg src={imgfile} />
  //             </IconWrap>

  //                 <Info id="info">
  //                   {/* <Slevel>{summonId?.summonerLevel} Level</Slevel> */}
  //                   <Sname>{summonerId}</Sname>
  //                     <SClan>TETRA</SClan>
  //                   <SummonerCheck>
  //                     <button>전적갱신</button>
  //                     <button>신고하기</button>
  //                   </SummonerCheck>
  //                 </Info>
  //                 {/* 승리:{summonInfo[0]?.wins} */}
  //                 {/* 패배:{summonInfo[0]?.losses} */}
  //                 <RankWrap>
  //                   <SoloTierWrap>
  //                     <RankType>솔로 랭크</RankType>
  //                     <RankIconImg src={`../images/tier-icons/tier-icons/${summonerInfo?.[0]?.tier.toLowerCase().trim()}_${summonerInfo?.[0]?.rank.toLowerCase().trim()}.png`} />
  //                     <RankIntro>{summonerInfo?.[0].tier} {summonerInfo?.[0]?.rank}</RankIntro>
  //                   </SoloTierWrap>
  //                   <WithTierWrap>
  //                     <RankType>자유 랭크</RankType>
  //                     <RankIconImg src={`../images/tier-icons/tier-icons/${summonerInfo?.[1].tier.toLowerCase().trim()}_${summonerInfo?.[1]?.rank.toLowerCase().trim()}.png`} />
  //                     <RankIntro>{summonerInfo?.[1].tier} {summonerInfo?.[1].rank}</RankIntro>
  //                   </WithTierWrap>
  //                 </RankWrap>
  //               </Profile>
  //           <Middle>
  //             {/* {getAP_record.map((record:any,index:number) => (<RecordDisplay key={index} name={summonerId === undefined? "" : summonerId} puuid={summonerBasicData.puuid} record={record} count={20}/>))} */}
  //             {/* {getAP_record.map((data:any,index:number) => ( <div key={index}>{index}{data}</div>))} */}
  //             <RecordDisplay name={summonerId!} puuid={summonerBasicData?.puuid!} record={summonerRecord[0]} count={20} />
  //              {/*    */}
  //           </Middle>
  //           <Bottom>

  //           </Bottom>
  //         </Left>
  //         <Right>
  //           <ReportBoard>
  //             <ReBoardLabel>
  //               신고 현황 누적:0개
  //             </ReBoardLabel>
  //             <ReBoardPost>
                
  //             </ReBoardPost>
  //           </ReportBoard>
  //         </Right>
  //       </Layout>
  //     </Wrapper>
  //   </Container>
  // );
    
  }
// export default React.memo(Record);
export default Record;
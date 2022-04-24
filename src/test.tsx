import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import api from '../src/commons/apiUtil';
import { getSummonerBasicData, getSummonerGameInfo, getSummonerGameList, getSummonerInfo, getSummonerLeagueInfo, getSummonerRecordList } from "./api/api";
import { API_KEY } from "./commons/API_KEY";
import { customAsync } from "./commons/asyncUtils";

function Test() {
  const [data,setData] = useState<any>();
  const name = encodeURI("스쿵씨");
  const id = "rPFgYXdzYa-eXaxBbcE5V-XbxjoTm_klJeI2bEDvUP34eA"
  const puuid = "UzjnP4h_jrXxo5U5mF9ciPfN_Wp1os-SY_QfZ9rWIv7ySieHxn2l8oP0FK3cBjUX-hlH5vpLoi3GWQ";
  const start = 0;
  const count = 20;
  console.log(encodeURI("스쿵씨"));
  //  const jo = customAsync(axios.get('https://asia.api.riotgames.com/lol/match/v5/matches/KR_5879778640?api_key=RGAPI-92b4d59d-ab59-4cd0-bf77-cc23a29d960f'),3000);
  //  console.log(jo);
  
  function onClick() {
    console.log("클릭");
    
    customAsync(getSummonerGameInfo(puuid,start,count),1000)
    .then((res) => {
      setData(res);
      console.log("실행")
    })
    .catch((error) => {
      console.error("에러",error);
    })
  }
  function onClick2() {
  
  }

  useEffect(()=>{
    console.log("데이터",data);
  },[data])
  return (
    <>
      <XB onClick={onClick}>버튼</XB>
      <XB onClick={onClick2}></XB>
    </>
  );
}
const XB = styled.button`
  width: 500px;
  height: 300px;
`;
export default Test;


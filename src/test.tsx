import axios from "axios";
import { useEffect, useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import api from '../src/commons/apiUtil';
import {  getSummonerGameInfo, getSummonerInfo, getSummonerLeagueInfo } from "./api/api";
import { API_KEY } from "./commons/API_KEY";
import { customAsync } from "./commons/asyncUtils";
import { getTime } from "./commons/functionCollection";
import DuoInput from "./Components/Duo/DuoModule/DuoInput";

function Test() {
  const [data,setData] = useState<any>();
  const name = encodeURI("스쿵씨");
  const id = "rPFgYXdzYa-eXaxBbcE5V-XbxjoTm_klJeI2bEDvUP34eA"
  const puuid = "UzjnP4h_jrXxo5U5mF9ciPfN_Wp1os-SY_QfZ9rWIv7ySieHxn2l8oP0FK3cBjUX-hlH5vpLoi3GWQ";
  const start = 0;
  const count = 20;
  const [summonerInfo , setSummonerInfo] = useState<any>();
  const history = useNavigate();
  const overlayMatch = useMatch("/test/overlay");
  const [overlay ,setOverlay] = useState(false);
  console.log(encodeURI("스쿵씨"));
  //  const jo = customAsync(axios.get('https://asia.api.riotgames.com/lol/match/v5/matches/KR_5879778640?api_key=RGAPI-92b4d59d-ab59-4cd0-bf77-cc23a29d960f'),3000);
  //  console.log(jo);
  const [clanRes,setClanRes] = useState<any>();
  
  const createDate = getTime(new Date(1650085042376))
  const nowDate = getTime(new Date())
  const [error,setError] = useState(false);
  const diffTime = timeDiff(nowDate,createDate)
  const errorState = (state:any) => {
    setError(state);
  }
  function onClick() {
    // history("/test/overlay")
    setError(true)
    
    
}
  function onClick2() {
    
    
  }

  useEffect(()=>{
    console.log("데이터",overlayMatch);
  },[overlayMatch])
  return (
    <>
      <XB onClick={onClick}>버튼</XB>
      <XB onClick={onClick2}></XB>
      {error ? <ErrorMessage setErrorState={errorState} error={error}/> : null}
    </>
  );
}
const XB = styled.button`
  width: 500px;
  height: 300px;
`;
export default Test;


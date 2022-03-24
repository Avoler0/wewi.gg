import axios from "axios";
import path from "path/posix";
import { atom,  useRecoilState, useSetRecoilState, selector } from "recoil";

const API_KEY = "RGAPI-92b4d59d-ab59-4cd0-bf77-cc23a29d960f";
const RIOT_PATH = "https://kr.api.riotgames.com";
const SUMMONER_PATH = "lol/summoner/v4/summoners/by-name";
export interface ISummoner{
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
}
const PATH = {
    RIOT: 'https://kr.api.riotgames.com',
    INFO: 'lol/league/v4/entries/by-summoner',
    CHAM: 'lol/champion-mastery/v4/champion-masteries/by-summoner',
    ICON: 'http://ddragon.leagueoflegends.com/cdn/10.11.1/img/profileicon',
}
const summonerName = atom({
  key: 'summonName',
  default: '',
}) // 검색된 소환사 닉네임을 저장하는 아톰
const getSummonerId = selector({
  key: 'summonerId',
  get: async ({get}) => {
    try{
      const getName = get(summonerName);
      if(getName === "") return;
      const response = await axios.get(`${RIOT_PATH}/lol/summoner/v4/summoners/by-name/${getName}?api_key=${API_KEY}`);
      const recoilProjectInfo = response.data;
      return recoilProjectInfo;
    }catch(error){
      return error;
    }
  },
}) // 소환사 닉네임을 토대로 기본적인 정보 , 아이디 등을 받아옴


const getSummonerInfo = selector({
  key: 'summonerInfo',
  get: async({get}) => {
  try{
      const summonData = get(getSummonerId);
      const response = await axios.get(`${PATH.RIOT}/${PATH.INFO}/${summonData.id}?api_key=${API_KEY}`);
      const recoilProjectInfo = response.data;
      return recoilProjectInfo;
  }catch(error){
      console.log(error);
    }
  },
})


const getRecentlyRecord = selector({
  key:'championMSpoint',
  get: async({get}) => {
    try{
      const summonData = get(getSummonerId);
      const start = 0;
      const count = 20;
      const response = await axios.get(`https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${summonData.puuid}/ids?start=${start}&count=${count}&api_key=${API_KEY}`);
      const recoilProjectInfo = response.data;
      return recoilProjectInfo;
    }catch(error){
      console.log(error);
    }
  },
}) // 최근 20게임 매치를 보여줌
const RecentlyRecord = atom({
  key:'recentlyRecord',
  default:''
})
const getRecordMatch = selector({
  key:'matchGame',
  get:async({get}) => {
    try{
      const matchGame = get(RecentlyRecord);
      const response = await axios.get(`https://asia.api.riotgames.com/lol/match/v5/matches/${matchGame}?api_key=${API_KEY}`)
      const recoilProjectInfo = response.data;
      return recoilProjectInfo;
      
    }catch(error){
      console.log(error);
    }
  }
})
export {summonerName,getSummonerId,getSummonerInfo,getRecentlyRecord,RecentlyRecord,getRecordMatch}
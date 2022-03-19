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
const summonerName = atom({
  key: 'summonName',
  default: "",
})
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
})
const PATH = {
    RIOT: 'https://kr.api.riotgames.com',
    INFO: 'lol/league/v4/entries/by-summoner',
    ICON: 'http://ddragon.leagueoflegends.com/cdn/10.11.1/img/profileicon',
  }

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

// async function getSummonerInfo() {
//     try{
//       const response = await axios.get(`${PATH.RIOT}/${PATH.INFO}/${summonData.id}?api_key=${API_KEY}`);

//     }catch(error){
//       console.log(error);
      
//     }
//   } 
export {summonerName,getSummonerId,getSummonerInfo}
import axios from "axios";
import path from "path/posix";
import { atom,  useRecoilState, useSetRecoilState, selector } from "recoil";

const API_KEY = "RGAPI-92b4d59d-ab59-4cd0-bf77-cc23a29d960f";
// RGAPI-9bf1e634-da78-40bb-bbf9-99501a60ddf7
// RGAPI-92b4d59d-ab59-4cd0-bf77-cc23a29d960f
const RIOT_PATH = "https://kr.api.riotgames.com";
const SUMMONER_PATH = "lol/summoner/v4/summoners/by-name";
// let summonerData:ISummoner = {
//   id:"",
//   accountId: "",
//   puuid: "",
//   name: "",
//   profileIconId: 0,
//   revisionDate: 0,
//   summonerLevel: 0,
// };
export interface ISummoner{
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
}
const summonerId = atom({
  key: 'summonName',
  default: "",
})
const summonerGeto = selector({
  key: 'summoner',
  get: async ({get}) => {
    
    const getName = get(summonerId);
    if(getName === "") return;
    const response = await axios.get(`${RIOT_PATH}/lol/summoner/v4/summoners/by-name/hideonbush?api_key=${API_KEY}`);
    const recoilProjectInfo = response.data;
    return recoilProjectInfo;
  },
  
})

export {summonerId,summonerGeto}


// default: {
//     id: '',
//     accountId: '',
//     puuid: '',
//     name: '',
//     profileIconId: '',
//     revisionDate: '',
//     summonerLevel: '',
//   }
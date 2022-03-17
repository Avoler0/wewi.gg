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
const summoner = atom({
  key: 'summonName',
  default: "",
})
const summonerIdGet = selector({
  key: 'summonerGet',
  get: async ({get}) => {
    const getName = get(summoner);
    if(getName === "") return;
    const response = await axios.get(`${RIOT_PATH}/lol/summoner/v4/summoners/by-name/${getName}?api_key=${API_KEY}`);
    const recoilProjectInfo = response.data;
    return recoilProjectInfo;
  },
  
})

// https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/rPFgYXdzYa-eXaxBbcE5V-XbxjoTm_klJeI2bEDvUP34eA?api_key=RGAPI-92b4d59d-ab59-4cd0-bf77-cc23a29d960f
export {summoner,summonerIdGet}
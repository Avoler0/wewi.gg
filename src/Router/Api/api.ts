import axios from "axios";
import path from "path/posix";
import { atom, selector } from "recoil";

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
export async function getSummoner() {
  // return fetch(`${RIOT_PATH}/lol/summoner/v4/summoners/by-name/%EC%8A%A4%EC%BF%B5%EC%94%A8?api_key=${API_KEY}`).then((response) => response.json())
  try {
    const response = await axios.get(`${RIOT_PATH}/lol/summoner/v4/summoners/by-name/%EC%8A%A4%EC%BF%B5%EC%94%A8?api_key=${API_KEY}`);
    console.log(response);
  }catch(error){
    console.error(error);
  }
  
}

export const summonerId = atom({
  key: 'summonerId',
  default: '',
})

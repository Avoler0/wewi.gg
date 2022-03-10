import axios from "axios";
import path from "path/posix";

const API_KEY = "RGAPI-9bf1e634-da78-40bb-bbf9-99501a60ddf7";
const RIOT_API = "https://na1.api.riotgames.com";
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

// https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/hideonbush 
// https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/dtJACrcdcP97bJNFxI4yYa4HVsYmtxRvPde4EimE8RJYSGI
// export async function getSummoner(name:string){
//   return await fetch(`${RIOT_API}/${SUMMONER_PATH}/{name}`).then((resopnse) => resopnse.json());
// }
export interface ISummoner{
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
}
async function getData(name?:string) {
  try {
    const response = await axios.get('https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/hideonbush');
    console.log(response + "리스폰");
  }catch(error){
    console.error(error);
  }
}


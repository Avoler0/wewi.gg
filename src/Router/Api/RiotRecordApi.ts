import axios from "axios";
import { atom, selector } from "recoil";
const API_KEY = "RGAPI-92b4d59d-ab59-4cd0-bf77-cc23a29d960f";


const AT_puuid = atom({
  key:'puuid',
  default:''
})
const getRecord = selector({
  key:'recentlyRecordGame',
  get: async({get}) => {
    try{
      const puuid = get(AT_puuid);
      const start = 0;
      const count = 20;
      const response = await axios({
      method: "GET",
      url: `https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=${start}&count=${count}&api_key=${API_KEY}`,
      headers:{
        'APIKey': API_KEY,
      }
    });
      const recoilProjectInfo = response.data;
      return recoilProjectInfo;
    }catch(error){
      const puuid = get(AT_puuid);
      console.log("API GET Info Error [Error fetch name : getRecentlyRecord]",puuid);
      
      console.log(error);
    }
  },
}) // 최근 20게임 매치를 보여줌

const AT_recordList = atom({
  key: 'recordMatch',
  default: '',
})
const getRecordData = selector({
    key: 'recordData',
    get: async({get}) => {
    try{
      const recordList = get(AT_recordList);
      console.log("RL",recordList);
      
      const response = await axios({
      method: "GET",
      url: `https://asia.api.riotgames.com/lol/match/v5/matches/${recordList}?api_key=${API_KEY}`,
      headers:{
        'APIKey': API_KEY,
      }
    });
      
      const recoilProjectInfo = response.data;
      return recoilProjectInfo;
    }catch(error){
      const recordList = get(AT_recordList);
      console.log("API GET Info Error [Error fetch name : getRecentlyRecord]",recordList);
      console.log(error);
    }
  }
})


export {AT_puuid,getRecord,AT_recordList,getRecordData}
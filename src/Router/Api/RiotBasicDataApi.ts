import axios from "axios";
import { atom, selector } from "recoil";

const API_KEY = "RGAPI-92b4d59d-ab59-4cd0-bf77-cc23a29d960f";
const RIOT_PATH = "https://kr.api.riotgames.com";
// const PROXY = "https://lol-duosite.herokuapp.com"

const PATH = {
    KR_RIOT: 'https://kr.api.riotgames.com',
    INFO: 'lol/league/v4/entries/by-summoner',
    CHAM: 'lol/champion-mastery/v4/champion-masteries/by-summoner',
    ICON: 'http://ddragon.leagueoflegends.com/cdn/10.11.1/img/profileicon',
}
const AT_summonerName = atom({
  key: 'name',
  default: '',
}) // 검색된 소환사 닉네임을 저장하는 아톰
const getSummonerId = selector({
  key: 'summonerId',
  get: async ({get}) => {
    try{
      const name = get(AT_summonerName);
      if(name === "") return;
      const response = await axios({
      method: "GET",
      url: `${PATH.KR_RIOT}/lol/summoner/v4/summoners/by-name/${name}?api_key=${API_KEY}`,
    });
      const recoilProjectInfo = response.data;
      return recoilProjectInfo;
    }catch(error){
      console.log("API GET ID Error [Error fetch name : getSummonerId]",error);
    }
  },
}) // 소환사 닉네임을 토대로 기본적인 정보 , 아이디 등을 받아옴


const getSummonerInfo = selector({
  key: 'summonerInfo',
  get: async({get}) => {
  try{
      const summonData = get(getSummonerId);
      const response = await axios({
      method: "GET",
      url: `${PATH.KR_RIOT}/${PATH.INFO}/${summonData.id}?api_key=${API_KEY}`,
    });
      const recoilProjectInfo = response.data;
      return recoilProjectInfo;
  }catch(error){
      console.log("API GET Info Error [Error fetch name : getSummonerInfo]",error);
    }
  },
})


export {AT_summonerName,getSummonerId,getSummonerInfo}
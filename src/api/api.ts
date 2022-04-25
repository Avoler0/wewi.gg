import api from '../commons/apiUtil';
import { API_KEY, PATH } from '../commons/API_KEY';
const path = 'http://localhost:4000'

export const getSummonerBasicData = (summonerName:string) => {
   return api.get(`${PATH.KR_RIOT}/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`)
}
export const getSummonerRecordList = (puuid:string,start:number,count:number) => {
   return api.get(`https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=${start}&count=${count}&api_key=${API_KEY}`);
};

export const getSummonerRecordInfo = (recordList:string) => {
   return api.get(`https://asia.api.riotgames.com/lol/match/v5/matches/${recordList}?api_key=${API_KEY}`);
};
export const getSummonerGameList = (puuid:string,start:number,count:number) => {
   const data = {
      puuid:puuid,
      start:start,
      count:count,
   }
   return api.post(`${path}/api/summoner/gameList/`,data)
};
// 사용하는 API 겟!

export const getSummonerInfo = (summonerName:string) => {
   return api.get(`${path}/api/summoner/summonerInfo/by-name=${summonerName}`);
}
export const getSummonerLeagueInfo = (summonerId:string) => {
   return api.get(`${path}/api/summoner/summonerLeagueInfo/${summonerId}`);
}
export const getSummonerGameInfo = (puuid:string,start:number,count:number) => {
   return api.get(`${path}/api/summoner/gameList/${puuid}/${start}/${count}`)
};
export const getProfileIcon = (profileNumber:number) => {
   return `http://ddragon.leagueoflegends.com/cdn/10.11.1/img/profileicon/${profileNumber}.png`
}
export const getChampionIcon = (champion:string) => {
   return `https://ddragon.leagueoflegends.com/cdn/10.11.1/img/champion/${champion}.png`
}
export const getChamiponInfo = (champion:string) => {
   return api.get(`http://ddragon.leagueoflegends.com/cdn/10.11.1/data/ko_KR/champion/${champion}.json`)
}

export const getDuoMatching = () => {
   return api.get(`${path}/api/duo/rescue`)
}
// export const getChampionInfo = () => {
//    return api.get(`http://ddragon.leagueoflegends.com/cdn/10.1.1/data/ko_KR/champion.json`);
// };
// export const getSpellInfo = () => {
//    return api.get(`https://ddragon.leagueoflegends.com/cdn/10.6.1/data/ko_KR/summoner.json`);
// }
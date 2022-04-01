import api from '../commons/apiUtil';
import { API_KEY, PATH } from '../commons/API_KEY';

export const getSummonerBasicData = (summonerName:string) => {
   return api.get(`${PATH.KR_RIOT}/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY}`)
}
export const getSummonerInfo = (summonerDataId:string) => {
   return api.get(`${PATH.KR_RIOT}/${PATH.INFO}/${summonerDataId}?api_key=${API_KEY}`);
};

export const getSummonerRecordList = (puuid:string,start:number,count:number) => {
   return api.get(`https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=${start}&count=${count}&api_key=${API_KEY}`);
};

export const getSummonerRecordInfo = (recordList:string) => {
   return api.get(`https://asia.api.riotgames.com/lol/match/v5/matches/${recordList}?api_key=${API_KEY}`);
};

// export const getRecentChampion = (accountId:string,summonerName:string) => {
//    return api.get(`/marcus-gg/summoner/championInfo/by-account/${accountId}/${summonerName}`);
// };

// export const getDetailGameList = (accountId:string,summonerName:string,endIndex = 10) => {
//    return api.get(`/marcus-gg/summoner/detailGameInfo/by-account/${accountId}/${summonerName}/${endIndex}`)
// }

export const getChampionInfo = () => {
   return api.get(`http://ddragon.leagueoflegends.com/cdn/10.1.1/data/ko_KR/champion.json`);
};
export const getSpellInfo = () => {
   return api.get(`https://ddragon.leagueoflegends.com/cdn/10.6.1/data/ko_KR/summoner.json`);
}
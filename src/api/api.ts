import api from '../commons/apiUtil';
const path = 'http://localhost:4000'

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
export const postDuoMatching = (data:any) => {
   return api({
      method:'post',
      url:`${path}/api/duo/reg`,
      data: {
         SeekerName:data.Name,
         ApplicantName:data.Name,
         Content:data.Content,
         Tier:0,
         DuoType:data.GameType,
         Line:data.LineType,
         Win:0,
         Lose:0,
         Password:data.Password,
         IsMic:false
      }
   })
   // .then((res) => {
   //    return res
   // }).catch((error) => {
   //    return error
   // })
}
export const getClanBoard = () => {
   return api.get(`${path}/api/clan/rescue`).then((res)=> {console.log("성공");
    return res}).catch((error) => {console.log("에러!!",error.response);
   })
}
// export const getChampionInfo = () => {
//    return api.get(`http://ddragon.leagueoflegends.com/cdn/10.1.1/data/ko_KR/champion.json`);
// };
// export const getSpellInfo = () => {
//    return api.get(`https://ddragon.leagueoflegends.com/cdn/10.6.1/data/ko_KR/summoner.json`);
// }
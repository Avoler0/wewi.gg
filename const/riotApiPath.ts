

export const summonerName = "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/" // 소환사 닉네임으로 검색

export const getProfileIcon = (profileNumber:number) => {
   return `http://ddragon.leagueoflegends.com/cdn/10.11.1/img/profileicon/${profileNumber}.png`
}
export const getChampionIcon = (champion:string) => {
   return `http://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/${champion}.png`
}
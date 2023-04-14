export interface SummonerInfo {
  ccountId: string,
  id: string,
  name: string,
  profileIconId: number,
  puuid: string,
  revisionDate: number,
  summonerLevel: number
}


export interface GameDetail {
  info:{
    gameCreation:number,
    gameDuration:number,
    gameEndTimestamp:number,
    gameId:number,
    gameMode:string,
    gameName:string
    gameStartTimestamp:number,
    gameType:string
    gameVersion:string
    mapId:number
    participants:any,
    platformId:string,
    queueId:number
    teams:any,
    tournamentCode:string
  }
  metadata:{
    dataVersion: string,
    matchId: string
    participants:string[]
  }
}


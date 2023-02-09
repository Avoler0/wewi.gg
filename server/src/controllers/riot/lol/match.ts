import { matchList, matchDetail } from "../../../api/riotApi/matchApi";

export async function getMatchList(req:any,res:any){
  const {puuid,start} = req.query;
  try{
    const result:any = await matchList(puuid,start);
    res.status(200).json(result.data)
  }catch(_err:any){
    res.status(_err.response.status).send(_err.response.statusText)
  }
}

export async function getMatchDetail(req:any,res:any){
  const {puuid,matchId} = req.query;
  console.log(matchId)
  const result = await Promise.all([matchDetail(matchId)])
    .then(([_res]:any)=>{
      const myParticipant = _res.data.metadata.participants.indexOf(puuid)
      const myTeamId = _res.data.info.participants[myParticipant].teamId === 100 ? 0 : 1;
      const resData = _res.data
      console.log(myParticipant,myTeamId)
      return res.status(200).json({myIndex:myParticipant,myTeamId:myTeamId,...resData}) 
    })
    .catch((_err:any)=>{
      res.status(_err.response.status).send(_err.response.statusText)
    })

}
import { summonerInfo, summonerLeague } from "../../../api/riotApi/summonerApi";


export async function getlolInfo(req:any,res:any){
  const {summoner} = req.query;
  
  try{
    const result:any = await summonerInfo(summoner);

    res.status(200).json(result.data)
  }catch(_err:any){
    res.status(_err.response.status).send(_err.response.statusText)
  }
  
}

export async function getlolLeague(req:any,res:any){
  const {summonerId} = req.query;
  console.log(summonerId)
  try{
    const result:any = await summonerLeague(summonerId);

    res.status(200).json(result.data)
  }catch(_err:any){
    res.status(_err.response.status).send(_err.response.statusText)
  }
  
}
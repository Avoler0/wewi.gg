import { summonerSpectate } from "../../../api/riotApi/spectateApi";

export async function getSpectGameData(req:any,res:any){
  const {summonerId} = req.body;
  try{
      const result:any = await summonerSpectate(summonerId);
      res.status(200).json(result.data)
  }catch(_err:any){
    const status:number = _err.response.status
    console.log(_err.response.status)
    return res.status(status).send(_err.response.statusText)
  }
}

export async function getSpectFile(req:any,res:any){
  const {summonerId} = req.body;
  try{
      const result:any = await summonerSpectate(summonerId);
      res.status(200).json(result.data)
  }catch(_err:any){
    const status:number = _err.response.status
    console.log(_err.response.status)
    return res.status(status).send(_err.response.statusText)
  }
}

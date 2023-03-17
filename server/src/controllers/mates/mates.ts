import '../../../dotenv'
import { riotChampionImage, riotProfileIconImage } from '../../api/riotApi/imageApi';
import { summonerMasteryTop } from '../../api/riotApi/masteryApi';
import { summonerInfo, summonerLeague } from '../../api/riotApi/summonerApi';
import { matesErrorStateMessage } from '../../mariadb/sqlError';
import { matesQuery } from './../../mariadb/query/mates';

export async function getMatesList(req:any,res:any) {
  try{
    const result = await matesQuery.select.mates()
    res.status(200).json(result)
  }catch(_error:any){
    const err = matesErrorStateMessage(_error);
    res.status(err.state).send(err.message);
  }
}

export async function postMatesList(req:any,res:any) {
  await summonerInfo(req.body.seekerName)
  .then(async (_res:any)=> {
    const {id,accountId,puuid,name,profileIconId,summonerLevel} = _res.data;
    return await Promise.all([await summonerMasteryTop(id,3),await summonerLeague(id)])
    .then(async ([mastery,league]:any) => {
      const profileIcon = await riotProfileIconImage(profileIconId);
      const champIds = mastery.data.map((_res:any)=> _res.championId)
      const champions = await riotChampionImage(champIds).then((_response)=> _response.join())
      const leagueInfo = JSON.stringify(league.data);
      const summonerValue = {champions:champions,league:leagueInfo,icon:profileIcon,level:summonerLevel};
      await matesQuery.insert({...req.body,...summonerValue})
      .then((_res)=>{
        return res.status(200).json({message:'success mates add'})
      })
      .catch((_err)=>{
        const err = matesErrorStateMessage(_err);
        return res.status(err.state).send(err.message)
      })
    })
  })
  .catch((_err:any)=>{
    return res.status(_err.response.data.status.status_code).send(_err.response.data.status.message)
  })
  
}

export async function deleteMates(req:any,res:any) {
  const {id} = req.body;
  try{
    const result = await matesQuery.delete(id)
    return res.status(200).json(result)
  }catch(_err:any){
    return res.status(_err.response.data.status.status_code).send(_err.response.data.status.message)
  }
}
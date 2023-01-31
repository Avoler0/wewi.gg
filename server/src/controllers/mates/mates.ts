import '../../../dotenv'
import { RIOT_API_KEY } from '../../../dotenv';
import { riotChampionImage } from '../../api/riotApi/imageApi';
import { summonerMasteryTop } from '../../api/riotApi/mastery';
import { summonerInfo, summonerLeague } from '../../api/riotApi/summoner';
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
  // console.log('포스트 메이트스',req.body,RIOT_API_KEY)
  
  await summonerInfo(req.body.seekerName)
  .then(async (_res:any)=> {
    const {id,accountId,puuid,name,profileIconId,summonerLevel} = _res.data;
    return await Promise.all([await summonerMasteryTop(id,3),await summonerLeague(id)])
    .then(async ([mastery,league]:any) => {
      const champIds = mastery.data.map((_res:any)=> _res.championId)
      const champions = await riotChampionImage(champIds).then((_response)=>{
        return _response.join();
      })
      const leagueInfo = JSON.stringify(league.data);
      const summonerValue = {champions:champions,league:leagueInfo};
      await matesQuery.insert({...req.body,...summonerValue})
      .then((_res)=>{
        return res.status(200).send('success mates')
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
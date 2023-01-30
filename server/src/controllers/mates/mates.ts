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
  console.log('포스트 메이트스',req.body,RIOT_API_KEY)
  
  await summonerInfo(req.body.seekerName)
  .then(async (_res:any)=> {
    const {id,accountId,puuid,name,profileIconId,summonerLevel} = _res.data;
    await Promise.all([await summonerMasteryTop(id,3),await summonerLeague(id)])
    .then(async ([mastery,league]:any) => {
      console.log(id)
      const champIds = mastery.data.map((_res:any)=> _res.championId)
      await riotChampionImage(champIds).then((_response)=>{
        console.log('리스폰스',_response)
      })
      console.log('리그',JSON.stringify(league.data))
    })
  })
  .catch((_err:any)=>{
    res.status(_err.response.data.status.status_code).send(_err.response.data.status.message)
  })
  // try{
  //   const result = await matesQuery.select.mates()
    
  //   res.status(200).json(result)
  // }catch(_error:any){
  //   const err = matesErrorStateMessage(_error);
  //   res.status(err.state).send(err.message);
  // }
}
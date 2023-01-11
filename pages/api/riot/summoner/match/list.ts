import type { NextApiRequest, NextApiResponse } from 'next'
import { riotApi } from '../../../../../hooks/axiosInstance';


type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await riotApi({
    url:`https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${req.query.puuid}/ids`,
    params:{
      start:req.query.start,
      count:5
    }
  })
  .then((_res:any)=>{
    
    return res.status(200).json(_res.data);
  })
  .catch((_error)=>{
    return res.status(_error.response.data.status.status_code)
  })
}

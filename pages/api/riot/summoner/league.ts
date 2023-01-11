import type { NextApiRequest, NextApiResponse } from 'next'
import { riotApi } from '../../../../hooks/axiosInstance';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  await riotApi(`https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${req.query.id}`)
  .then((_res:any)=>{
    
    return res.status(200).json(_res.data);
  })
  .catch((_error)=>{
    return res.status(_error.response.data.status.status_code)
  })
}

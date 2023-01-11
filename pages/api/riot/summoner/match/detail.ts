import type { NextApiRequest, NextApiResponse } from 'next'
import { riotApi } from '../../../../../hooks/axiosInstance';


type Data = {
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
  setTimeout(()=>{
    riotApi(`https://asia.api.riotgames.com/lol/match/v5/matches/${req.query.match}`)
    .then((_res:any)=>{
      return res.status(200).json(_res.data);
    })
    .catch((_error)=>{
      return res.status(_error.status);
    })
  },300)
}

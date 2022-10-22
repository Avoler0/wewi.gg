import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'
import { riotApi } from '../../../../hooks/axiosInstance';
// 

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
  riotApi.get(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${req.query.value}`)
  .then((_res:any)=>{
    return res.status(200).json(_res.data);
  })
  .catch((_error)=>{
    return res.status(_error.response.data.status.status_code).json(_error);
  })
  
  
}

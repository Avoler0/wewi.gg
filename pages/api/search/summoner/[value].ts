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
    console.log("성공",_res.data);
    return res.status(200).json(_res.data);
  })
  .catch((_error)=>{
    console.log("실패",_error.response.data.status.status_code);
    return res.status(_error.response.data.status.status_code).json(_error);
    
  })
  
  
}

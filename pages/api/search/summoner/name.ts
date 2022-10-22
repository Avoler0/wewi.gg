import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'
import { riotApi } from '../../../../hooks/axiosInstance';
// 

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("네임 실행");
  await riotApi.get(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${req.query.value}`)
  .then((_res:any)=>{
    return res.status(200).json(_res.data);
  })
  .catch((_error)=>{
    console.log("네임 에러");
    return res.status(_error.response.data.status.status_code);
  })
  
  
}

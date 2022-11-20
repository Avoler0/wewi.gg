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
  console.log("인포 실행")
  await riotApi.get(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${req.query.value}`)
  .then((_res:any)=>{
    return res.status(200).json(_res.data);
  })
  .catch((_error)=>{
    return res.status(_error.response.status).send(`Response: ${_error.response.status}`)
  })
}

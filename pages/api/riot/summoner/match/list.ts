import type { NextApiRequest, NextApiResponse } from 'next'
import { riotApi } from '../../../../../hooks/axiosInstance';


type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("매치 실행");
  await riotApi({
    url:`https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${req.query.puuid}/ids`,
    params:{
      start:req.query.start,
      count:10
    }
  })
  .then((_res:any)=>{
    
    return res.status(200).json(_res.data);
  })
  .catch((_error)=>{
    // console.log("에러",_error);
    console.log("매치 에러");
    return res.status(_error.response.data.status.status_code)
  })
}

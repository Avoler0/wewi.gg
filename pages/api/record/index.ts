import type { NextApiRequest, NextApiResponse } from 'next'
import { riotApi } from '../../../hooks/axiosInstance';


type Data = {
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("매치 디테일 실행됨");
  
  setTimeout(()=>{
  riotApi(`https://asia.api.riotgames.com/lol/match/v5/matches/${req.query.match}`)
  .then((_res:any)=>{
    
    return res.status(200).json(_res.data);
  })
  .catch((_error)=>{
    console.log("매치 디테일 에러",_error.response.data.status.status_code);
    
    return res.status(_error.response.data.status.status_code);
  })
  },300)
}

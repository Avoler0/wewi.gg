import type { NextApiRequest, NextApiResponse } from 'next'
import { riotApi } from '../../../../hooks/axiosInstance';


type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  console.log("쿼리",req.query);
  riotApi({
    url:`https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${req.query.puuid}/ids`,
    params:{
      start:req.query.start,
      end:req.query.end
    }
  })
  .then((_res:any)=>{
    console.log(_res.data);
    
    return res.status(200).json(_res.data);
  })
  .catch((_error)=>{
    console.log("에러",_error);
    
    return res.status(500).json(_error);
  })
}

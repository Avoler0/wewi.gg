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
  riotApi(`https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${req.query.id}`)
  .then((_res:any)=>{
    console.log(_res.data);
    
    return res.status(200).json(_res.data);
  })
  .catch((_error)=>{
    console.log("에러",_error);
    
    return res.status(500).json(_error);
  })
}

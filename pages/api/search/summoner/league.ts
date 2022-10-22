import type { NextApiRequest, NextApiResponse } from 'next'
import { riotApi } from '../../../../hooks/axiosInstance';


type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  console.log("리그 실행");
  await riotApi(`https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${req.query.id}`)
  .then((_res:any)=>{
    
    return res.status(200).json(_res.data);
  })
  .catch((_error)=>{
    // console.log("에러",_error);
    console.log("리그 에러");
    return res.status(_error.response.data.status.status_code)
  })
}

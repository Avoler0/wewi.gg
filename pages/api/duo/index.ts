// https://asia.api.riotgames.com/lol/match/v5/matches/KR_6171170875?api_key=RGAPI-92b4d59d-ab59-4cd0-bf77-cc23a29d960f

import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'
import { dbInstance } from '../../../hooks/axiosInstance';


type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
  // console.log("에이피아이",req.body);
  dbInstance.post('/duo',req.body)
  .then((_res)=>{
    console.log(_res);
    
  })
}

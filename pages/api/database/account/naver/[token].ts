
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'
import { dbInstance } from '../../../../hooks/axiosInstance';


type Data = {
  status:number,
  error?:string,
  data?:any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {token} = req.query
  console.log("네이버 실행ㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ",token)
  const response = await axios({
    method:'post',
    baseURL: 'https://openapi.naver.com/v1/nid/me',
    headers:{
      Authorization:'Bearer ' + token,
    },

    
  })
  console.log(token)
  res.status(200).json(response)
}

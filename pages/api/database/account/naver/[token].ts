
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'



type Data = {
  status:number,
  error?:string,
  data?:any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("실행됨",req.query)

  // return res.json('하이')
  
  const {token} = req.query
  const header = `Bearer ${token}`
  // console.log("네이버 실행ㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ",token,header)
  await axios({
    method:'get',
    baseURL: 'https://openapi.naver.com/v1/nid/me',
    headers:{
      Authorization:header,
    },
  }).then((_res) => {
    console.log("레쓰",_res.status)
    res.status(_res.status).json(_res.data)
  })
  .catch((_error)=>{
    console.log('에러')
    // res.json(_error)
  })
    
  // })
  // console.log(token)
  // res.status(200).json(response)
}

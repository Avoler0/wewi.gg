
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
  
  const {token} = req.query
  const header = `Bearer ${token}`

  await axios.get('https://openapi.naver.com/v1/nid/me',{
    headers:{
      Authorization:header,
    }
  }).then((_res) => {
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

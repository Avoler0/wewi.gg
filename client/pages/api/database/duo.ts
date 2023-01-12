import type { NextApiRequest, NextApiResponse } from 'next'
import { dbInstance } from '../../../hooks/axiosInstance';


type Data = {
  message:string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.method)
  const method = req.method;
  if(method === 'GET'){
    console.log("겟 작동?")
    return dbInstance.get(`/duo`)
    .then((_res)=> res.status(200).json(_res.data) )
    .catch((_error)=> res.status(500).json(_error) )

  }else if(method === 'POST'){
    console.log("포스트 작동")
    return dbInstance.get(`/duo?summoner=${req.body.summoner}`)
    .then((_res)=>{
      if(_res.data.length){
        return res.status(409).json({..._res.data,message:"이미 게시된 소환사 이름입니다."})
      }else{
        dbInstance.post('/duo',req.body)
          .then((_res)=>{
            return res.status(201).json(_res.data,)
          })
          .catch((_error)=>{
            console.log("에러",_error.response.data.status)
          return res.status(_error.response.data.status).json(_error);
        })
      }
    })
  }else if(method === 'DELETE'){
    console.log('온거',method,req.body.id)
    return dbInstance.delete('/duo/'+req.body.id)
    .then((_res)=>{
      // console.log(_res)
      return res.status(201).json(_res.data,)
    })
    .catch((_error)=>{
      console.log("에러",_error,_error.response.status)
      return res.status(_error.response.status).json(_error);
    })
  }
  
  
}

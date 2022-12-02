import type { NextApiRequest, NextApiResponse } from 'next'
import { dbInstance } from '../../../../hooks/axiosInstance';


type Data = {
  conflict?:string,
  status:number,

}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.body)
  const {email,password,nickName,type} = req.body;

  const overlapEmail = await dbInstance.get(`/account?email=${email}`).then(res => res.data.length !== 0)
  const overlapNick = await dbInstance.get(`/account?nickName=${nickName}`).then(res => res.data.length !== 0)

  if(overlapEmail) return res.status(409).send({conflict:'email', status:409})
  if(overlapNick) return res.status(409).send({conflict:'nick', status:409})

  const resultOverlap = overlapEmail && overlapNick;
  if(!resultOverlap){
    await dbInstance.post('/account',req.body)
    .then((_res)=>{
      return res.status(201).send({status:201})
    })
  }
  
}

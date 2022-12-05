import type { NextApiRequest, NextApiResponse } from 'next'
import { dbInstance } from '../../../../../hooks/axiosInstance';


type Data = {
  status:number,
  error?:string,
  data?:any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id, email} = req.body;
  
  const response = await dbInstance.get(`/account?email=${email}`)

  if(response.data[0]){
    return res.status(200).send({status:200,data:response.data})
  }else{
    return res.status(404).send({status:404,error:'Not Found Account'})
  }
  

}

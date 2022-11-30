import { AxiosResponse } from 'axios';
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
  const {email,password} = req.body;
  
  const response = await dbInstance.get(`/account?email=${email}`)
  console.log(response)
  if(response.data[0]){
    const resPassword = response.data[0].password;
    if(resPassword === password){
      return res.status(200).send({status:200,data:response.data})
    }
    else{
      return res.status(401).send({status:401,error:'Bad Request'})
    }
  }else{
    return res.status(404).send({status:404,error:'Not Found Account'})
  }

}

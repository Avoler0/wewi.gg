import { AxiosResponse } from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'
import { dbInstance } from '../../../../hooks/axiosInstance';


type Data = {
  message:string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {email,password} = req.body;
  
  const response = await dbInstance.get(`/account?email=${email}`)

  if(response.data[0]){
    const resPassword = response.data[0].password;
    if(resPassword === password){
      return res.status(200).send({message:'Success Login'})
    }
    else{
      return res.status(401).send({message:'Bad Request'})
    }
  }else{
    return res.status(404).send({message:'Not Found Account'})
  }

}

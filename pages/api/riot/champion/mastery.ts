import type { NextApiRequest, NextApiResponse } from 'next'
import { riotApi } from '../../../../hooks/axiosInstance';


type Data = {
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // https://kr.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/
  const {id,count} = req.query;
  console.log(count)
  if(count){
    riotApi(`https://kr.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}/top?count=${count}`)
    .then((_res:any)=> res.status(200).json(_res.data))
    .catch((_error) => res.status(_error.response.data.status.status_code))
  }else{
    riotApi(`https://kr.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}`)
    .then((_res:any)=> res.status(200).json(_res.data))
    .catch((_error) => res.status(_error.response.data.status.status_code))
  }

}

import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'
import { riotApi } from '../../../../hooks/axiosInstance';


type Data = {
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("쿼리",req.query,"바디",req.body)
  const {code} = req.query
  axios({
    method:'post',
    baseURL:'https://oauth2.googleapis.com/token',
    headers:{
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    params:{
      code:code,
      client_id:'625687004788-5pv5rsjeqkel0arqfclrmco227f4ven1.apps.googleusercontent.com',
      client_secret:'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',
      redirect_uri:'http://localhost:3000/api/oauth/callback',
      // refresh_token:'',
      grant_type:'authorization_code'
    },
    
  })
  .then((_res)=>{
    console.log("성공1234123412341231414234",_res.data.access_token)
    axios.get(`https://www.googleapis.com/drive/v2/files?access_token=`,{
      headers:{
        Authorization : `Bearer ${_res.data.access_token}`
      }
    })
    .then((_res)=>{
      console.log("겟 성공")
    })
    .catch((_error)=>{
      console.log("겟 실패",_error.response.data)
      res.status(404).json({data:_error.response.data})
    })
  })
  .catch((_error)=>{
    console.log("에러")
    // res.status(404).json({data:'dadada'})
    // console.log("에러")
  })
  // res.status(200).json({data:'dsdsd'})
  // https://kr.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/
  // res.writeHead(302,{Location:"https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A//www.googleapis.com/auth/drive.metadata.readonly&access_type=offline&include_granted_scopes=true&response_type=code&state=state_parameter_passthrough_value&redirect_uri=http://localhost:3000/login&client_id=625687004788-5pv5rsjeqkel0arqfclrmco227f4ven1.apps.googleusercontent.com"})
  // res.end();
  // res.status(200).json({data:'ddds'})
}

import axios from "axios"

export async function naverOauth(req:any,res:any){
  const {token} = req.query;
  try{
    const result = await axios({
      method:'get',
      url:'https://openapi.naver.com/v1/nid/me',
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    res.status(200).json(result.data);
  }catch(_error:any){
    res.status(502).json(_error)
  }
}
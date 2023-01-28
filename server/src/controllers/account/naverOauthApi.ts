import axios from "axios"

export async function naverOauth(req:any,res:any){
  const {token} = req.query;
  console.log('네이버 오오스',token)

  try{
    const result = await axios({
      method:'get',
      url:'https://openapi.naver.com/v1/nid/me',
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    console.log('네이버 리설트',result)
  }catch(_error:any){
    console.log('네이버 실패',_error)
    // const err = accountErrorStateMessage(_error)
    // res.status(err.state).send(err.message)
  }
}
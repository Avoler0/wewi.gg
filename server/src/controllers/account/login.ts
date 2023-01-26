import { accountErrorStateMessage } from '../../mariadb/sqlError';
import { accountQuery } from './../../mariadb/query/account';



export async function loginController(req:any,res:any){
  
  const {email,password,oauthType,oauthToken} = req.body;
  console.log('로그인 컨트롤러',req.body)
  try{
    const _response:any = await accountQuery.select.loginByEmail(email)
    console.log(_response[0],_response.length)
    if(_response[0]){
      // console.log('레스 있음',_response[0])
      const {Id,Email,Name,OauthToken,OauthType,Password,CreatedAt,UpdatedAt} = _response[0]
      console.log(Password,password ?? null,Password === password)
      if(Password === password || oauthType){
        console.log('200 넘겨줌')
        res.status(200).json({Id,Email,Name,OauthType,UpdatedAt})
      }else{
        console.log('400 넘겨줌')
        res.status(400).send('not matched password')
      }
    }else{
      console.log('레스 없음',_response)
      res.status(404).json('unknown id')
    }
  }catch(_error:any){
    const err = accountErrorStateMessage(_error)
    res.status(err.state).send(err.message)
  }
}
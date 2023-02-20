import { accountErrorStateMessage } from '../../mariadb/sqlError';
import { accountQuery } from './../../mariadb/query/account';



export async function loginController(req:any,res:any){
  const {email,password,oauthType,oauthToken} = req.body;
  try{
    const _response:any = await accountQuery.select.loginByEmail(email)
    if(_response[0]){
      const {Id,Email,Name,OauthToken,OauthType,Password,CreatedAt,UpdatedAt} = _response[0]
      if(Password === password || oauthType){
        res.status(200).json({Id,Email,Name,OauthType,UpdatedAt}).send('success')
      }else{
        throw new Error('server error!')
      }
    }else{
      // console.log('레스 없음',_response)
      res.status(404).json('unknown id')
    }
  }catch(_error:any){
    const err = accountErrorStateMessage(_error)
    res.status(err.state).send(err.message)
  }
}

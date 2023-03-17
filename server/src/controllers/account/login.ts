import { accountErrorStateMessage } from '../../mariadb/sqlError';
import { accountQuery } from './../../mariadb/query/account';



export async function loginController(req:any,res:any){
  const {email,password,oauthType,oauthToken} = req.body;
  try{
    const _response:any = await accountQuery.select.loginByEmail(email)
    if(_response[0]){
      const {Id,Email,Name,OauthToken,OauthType,Password,CreatedAt,UpdatedAt} = _response[0]
      if(Password === password || oauthType){
        res.status(200).json({Id,Email,Name,OauthType,UpdatedAt})
      }else{
        throw new Error('비밀번호가 올바르지 않습니다.');
      }
    }else{
      throw new Error('계정을 찾을 수 없습니다.');
    }
  }catch(_error:any){
    const err = accountErrorStateMessage(_error)
    res.status(err.state).json({message:_error.message})
  }
}

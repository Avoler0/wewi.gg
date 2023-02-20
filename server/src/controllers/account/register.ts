import { accountErrorStateMessage } from '../../mariadb/sqlError';
import { accountQuery } from './../../mariadb/query/account';


export async function registerController(req:any,res:any){

  try{
    const _response:any = await accountQuery.insert.register(req.body)
    console.log(_response.insertId.toString())
    res.status(200).json({'user_id':_response.insertId.toString()}).send('WEWI.GG 가입이 완료 되었습니다. 로그인 후 서비스를 이용해주세요.');
  }catch(_error:any){
    const err = accountErrorStateMessage(_error)
    res.status(err.state).send(err.message)
  }
}
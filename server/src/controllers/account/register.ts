import { accountErrorStateMessage } from '../../mariadb/sqlError';
import { accountQuery } from './../../mariadb/query/account';


export async function registerController(req:any,res:any){

  try{
    const _response:any = await accountQuery.insert.register(req.body)
    console.log(_response.insertId.toString())
    res.status(200).json({userId:_response.insertId.toString(),message:'WEWI.GG 가입이 완료 되었습니다. 로그인 후 서비스를 이용해주세요.'});
  }catch(_error:any){
    res.status(400).send({message:'이미 존재하는 아이디입니다.'})
  }
}
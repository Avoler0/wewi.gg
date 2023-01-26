import { accountErrorStateMessage } from '../../mariadb/sqlError';
import { accountQuery } from './../../mariadb/query/account';


export async function registerController(req:any,res:any){
  console.log('레지스터',req.body,req.query)

  try{
    const _response:any = await accountQuery.insert.register(req.body)
    console.log('레지스터 성공',_response.insertId,_response.affectedRows,_response[0])
    res.status(200).json(_response.insertId.toString());
  }catch(_error:any){
    console.log('레지스터 실패',_error)
    const err = accountErrorStateMessage(_error)
    res.status(err.state).send(err.message)
  }
}
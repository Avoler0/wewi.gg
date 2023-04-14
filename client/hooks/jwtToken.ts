import { LoginToken } from '../types/dbType';


export function jwtTokenDecode(token:string){
  if(!token) return

  const base64Payload = token.split('.')[1];
  const payload = Buffer.from(base64Payload,'base64');
  const result:LoginToken = JSON.parse(payload.toString());
  const nowTime = Math.floor(+ new Date() / 1000)

  if(result.exp > nowTime){
    return result
  }
  return null
}
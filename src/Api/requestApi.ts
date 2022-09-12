import { db } from "../hook/axiosInstance";
import { registerQueryT } from '../Types/accountTypes';


  export async function readEmail(email:string) {
    return db.get(`account?email_like=${email}`)
  }
  export async function saveRegister(query:registerQueryT){
    return db.post('account',{
        type:query.type,
        email:query.email,
        password:query.password,
        nickName:query.nickName
      })
  }

  export async function checkNickName(nickName:string){
    return db.get(`account?nickName_like=${nickName}`)
  }

  export async function tryLogin(email:string,password:string){
     return db.get(`account?email_like=${email}&password_like=${password}`)
  }
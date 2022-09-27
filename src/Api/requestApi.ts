import { db } from "../hook/axiosInstance";
import { registerQueryT } from '../Types/accountTypes';

export const requestApi = {
  readEmail: async function(email:string){
    return await db.get(`account?email_like=${email}`)
  },
  saveRegister: function(query:registerQueryT){
    return db.post('account',{
        type:query.type,
        email:query.email,
        password:query.password,
        nickName:query.nickName
    })
  },
  checkNickName: function(nickName:string){
    return db.get(`account?nickName_like=${nickName}`)
  },
  tryLogin: function(email:string,password:string){
    return db.get(`account?email_like=${email}&password_like=${password}`)
  }
}

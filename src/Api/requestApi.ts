import { db } from "../hook/axiosInstance";
import { registerQueryT } from '../Types/accountTypes';



// useState넘기는거 말고 그냥 넘기는 방법 찾기
  export async function readEmail(email:string) {
    return await new Promise((resolve)=>{
      db.get(`account?email_like=${email}`,(_response:any)=>{
        setTimeout(()=>{
          resolve(_response)
        },200)
      })
    })
  }
  export async function saveRegister(query:registerQueryT){
    return await new Promise((resolve)=>{
      db.post('account',{
        type:query.type,
        email:query.email,
        password:query.password,
        nickName:query.nickName
      },(_response:any)=>{
        console.log("닉 포스트",_response)
      })
    })
  }
  export async function checkNickName(nickName:string){
    return await new Promise((resolve)=>{
      db.get(`account?nickName_like=${nickName}`,(_response:any)=>{
        setTimeout(()=>{
          resolve(_response)
        },200)
      })
    })
  }
  export async function tryLogin(email:string,password:string){
     return await new Promise ( (resolve) => {
       db.get(`account?email_like=${email}&password_like=${password}`, (_response:any) => {
          setTimeout(()=>{
            resolve(_response)
          },200)
        }
      )
    })
  }
import { dbInstance } from "../../axiosInstance"

interface LoginQuery {
  email:string,
  password?:string
  oauthType?:string
  oauthToken?:string
}
interface RegisterQuery extends LoginQuery{
  nickName:string,
  
}

export const accountHook = {
  login:async function(query:LoginQuery){
    console.log('로그인 훅',query)
    return await new Promise(async (resolve,reject) => {
      await dbInstance({
        method:'post',
        url:'/account/login',
        data:query
      })
      .then((_res)=> resolve(_res))
      .catch((_err) => reject(_err))
    })
  },
  register:async function(query:RegisterQuery){
    console.log("회원가입 훅",query)
    return await new Promise(async (resolve,reject) => {
      await dbInstance({
        method:'post',
        url:'/account/register',
        data:query
      })
      .then((_res)=> resolve(_res))
      .catch((_err) => reject(_err))
    })
  }
}
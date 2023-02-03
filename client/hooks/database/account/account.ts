import axios from "axios"
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

export const accountHook = { // 로그인 , 회원가입 부분 Server 통신 Hook
  login:async function(query:LoginQuery){ // 로그인 시 Server 접속
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
  register:async function(query:RegisterQuery){ // 회원가입 시 유저 데이터를 담아 서버에 보냄
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
  },
  naverOauthApi:async function name(token:string) {
    return await new Promise(async (resolve,reject) => {
      await dbInstance({
        method:'get',
        url:'/account/naver',
        params:{
          token:token
        }
      })
      .then((_res)=> resolve(_res))
      .catch((_err) => reject(_err))
    })
  }
}
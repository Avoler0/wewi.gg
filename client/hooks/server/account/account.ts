import { dbInstance } from "../../axiosInstance"
interface OauthLoginQuery{
  email:string
  type:string
}
interface LoginQuery extends OauthLoginQuery{
  password:string
}
interface RegisterQuery extends LoginQuery{
  nickName:string,
}

export const accountHook = { // 로그인 , 회원가입 부분 Server 통신 Hook
  login:async function(query:LoginQuery){ // 로그인 시 Server 접속
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
  oauthLogin:async function(query:OauthLoginQuery){ // 로그인 시 Server 접속
    return await new Promise(async (resolve,reject) => {
      await dbInstance({
        method:'post',
        url:'/account/login/oauth',
        data:query
      })
      .then((_res)=> resolve(_res))
      .catch((_err) => reject(_err))
    })
  },
  register:async function(query:RegisterQuery){ // 회원가입 시 유저 데이터를 담아 서버에 보냄
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
  },
  jwtDecode:async function name(token:string) {
    return await new Promise(async (resolve,reject) => {
      await dbInstance({
        method:'get',
        url:'/account/token',
        params:{
          token:token
        }
      })
      .then((_res)=> resolve(_res))
      .catch((_err) => reject(_err))
    })
  },
}
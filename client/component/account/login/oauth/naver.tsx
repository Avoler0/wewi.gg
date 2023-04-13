import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setRegisterOauth } from "../../../../redux/login/oauthReg";
import { accountHook } from "../../../../hooks/server/account/account";
import styled from "styled-components";
import jwt from 'jsonwebtoken'
import { jwtTokenDecode } from "../../../../hooks/jwtToken";
import { setLogin } from "../../../../redux/login/user";
declare global {
  interface Window {
    naver_id_login: any;
  }
}

function NaverOauth(){
  const router = useRouter();
  const dispatch = useDispatch();

  async function handleNaverCallBack(){
    const naver_login = new window.naver_id_login(process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,`${process.env.NEXT_PUBLIC_URL}/account/login/oauth/naver`)
    
    await accountHook.naverOauthApi(naver_login.oauthParams.access_token)
    .then(async (_res:any)=>{
      await accountHook.oauthLogin({email:_res.data.response.email,type:'naver'})
      .then((_res:any)=>{
        const token = _res.data.token;
        const payload = jwtTokenDecode(token);
        dispatch(setLogin({
          id:payload.id,
          type:payload.type,
          email:payload.email,
          nickName:payload.name,
        }));

        window.location.href = '/'
      })
      .catch((_err:any)=> {
        if(_err.response.data.conflict === '없는 아이디'){
          dispatch(setRegisterOauth({email:_res.data.response.email,type:'naver'}))
          router.push('/account/register')
        }else if(_err.response.data.conflict === 'WEWI.GG ID'){
          alert('이미 가입된 아이디입니다.')
          window.location.href = '/account/login'
        }else{
          alert('서버에 오류가 발생했습니다.')
        }
      })
    })
  }
  useEffect(()=>{
    const timer = setTimeout(()=>{
      handleNaverCallBack()
    },600)

    return () => clearTimeout(timer)
  })

  return <OauthText>잠시만 기다려주세요. 네이버 로그인 중 입니다.</OauthText>
  
}

export default NaverOauth;


const OauthText = styled.div`
  text-align: center;
`;
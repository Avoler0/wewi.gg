import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLogin } from "../../../../redux/login/user";
import { setRegisterOauth } from "../../../../redux/login/oauthReg";
import { accountHook } from "../../../../hooks/server/account/account";
import styled from "styled-components";
import axios from "axios";
declare global {
  interface Window {
    naver_id_login: any;
  }
}

function NaverOauth(){
  const router = useRouter();
  const dispatch = useDispatch();

  function initNaverOauth(){
    const naver_id_login = new window.naver_id_login('NR61LLLoBLU2vcfbHvDY','http://localhost:3000/login')
    const state = naver_id_login.getUniqState();
    naver_id_login.setButton('green',0,40)
    naver_id_login.setDomain('http://localhost:3000')
    naver_id_login.setState(state);
    naver_id_login?.init_naver_id_login();
  }

  async function handleNaverCallBack(){
    const {naver_id_login} = window as any
    const naver_login = new window.naver_id_login('NR61LLLoBLU2vcfbHvDY','http://localhost:3000/account/login/oauth/naver')
    
    console.log(naver_login.oauthParams.access_token)
    await accountHook.naverOauthApi(naver_login.oauthParams.access_token)
    // if(router.asPath !== '/login'){
    //   const token_parameter = router.asPath.split('=')[1].split('&')[0];
    //   await accountHook.naverOauthApi(token_parameter)
    //   .then(async (_res:any)=>{
    //     await accountHook.login({email:_res.data.response.email,oauthType:'naver',oauthToken:token_parameter})
    //     .then((_res:any)=>{
    //       dispatch(setLogin({
    //         id:_res.data.Id,
    //         oauth:'naver',
    //         email:_res.data.Email,
    //         nickName:_res.data.Name,
    //       }));
    //     })
    //     .catch((_error:any)=>{
    //       dispatch(setRegisterOauth({email:_res.data.response.email,oauthType:'naver',oauthToken:token_parameter}))
    //       router.push('/register')
    //     })
    //   })
    //   .catch((_err)=>{
    //     alert('서버 오류! 잠시 후 다시 시도 해 주세요.')
    //   })
    // }
  }
  useEffect(()=>{
    handleNaverCallBack()
  })

  return <OauthText>잠시만 기다려주세요. 네이버 로그인 중 입니다.</OauthText>
  
}

export default NaverOauth;


const OauthText = styled.div`
  text-align: center;
`;
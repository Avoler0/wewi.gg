import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setLogin } from "../../../../redux/login/user";
import { setRegisterOauth } from "../../../../redux/login/oauthReg";
import { dbHook } from "../../../../hooks/dbHook";
import { accountHook } from "../../../../hooks/database/account/account";


function NaverAouth(){
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
    if(router.asPath !== '/login'){
      const token_parameter = router.asPath.split('=')[1].split('&')[0];
      console.log(token_parameter)
      await accountHook.naverOauthApi(token_parameter)
      .then((_res)=>{
        console.log('네이버 레스',_res)
      })
      .catch((_err)=>{
        console.log('네이버 에러',_err)
      })
    }
  }
  useEffect(()=>{
    initNaverOauth()
    handleNaverCallBack()
  })

  return <NaverLogin  id='naver_id_login'/>
  
}

const NaverLogin = styled.div`
`;

export default NaverAouth;
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setLogin } from "../../../../redux/login/user";
import { setRegisterOauth } from "../../../../redux/login/oauthReg";
import { dbHook } from "../../../../hooks/dbHook";


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

  function handleNaverCallBack(){
    if(router.asPath !== '/login'){
      const token_parameter = router.asPath.split('=')[1].split('&')[0];
      (async ()=>{
        await dbHook.account.oauth.callNaverProfile(token_parameter)
        .then(async (_res) => {
          const naver_useProfile = _res.data.response;
          const { id , email } = naver_useProfile;
          
          const result = await dbHook.account.oauth.login({type:'naver',key:id,email:email});
          if(result.status === 200){
            dispatch(setLogin({
              type:result.data[0].type,
              email:result.data[0].email,
              nickName:result.data[0].nickName
            }));
          }else{
            dispatch(setRegisterOauth({type:'naver',email}))
            router.push('/register')
          }
        })
        .catch((_error)=>{
          console.log("서버 에러")
        })
      })()
        

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
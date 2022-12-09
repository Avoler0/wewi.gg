import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import Image from "next/image";
import OauthCustomBtn from "./customBtn";

type props = {
  text: string
}

function NaverAouth(){
  const naverRef = useRef<HTMLDivElement>();
  const router = useRouter();
  console.log("네이버 라우터",router)
  function initNaverOauth(){
    const naver_id_login = new window.naver_id_login('NR61LLLoBLU2vcfbHvDY','http://localhost:3000/login')
    const state = naver_id_login.getUniqState();
    naver_id_login.setButton('green',0,44)
    naver_id_login.setDomain('http://localhost:3000')
    naver_id_login.setState(state);
    naver_id_login?.init_naver_id_login();
  }
  function handleNaverCallBack(){
    // if(router.asPath !== '/login'){
    //   const token_parameter = router.asPath.split('=')[1].split('&')[0];
    //   (async ()=>{
    //     await dbHook.account.naver.callUserProfile(token_parameter)
    //     .then(async (_res) => {
    //       const naver_useProfile = _res.data.response;
    //       const { id , email } = naver_useProfile;
          
    //       const result = await dbHook.account.naver.login(naver_useProfile);

    //       if(result.status === 200){
    //         dispatch(setLogin({
    //           type:result.data[0].type,
    //           email:result.data[0].email,
    //           nickName:result.data[0].nickName
    //         }));
    //       }else{
    //         dispatch(setRegisterOauth({type:'naver',email}))
    //         // router.push('/register')
    //       }
    //     })
    //   })()
        

    // }
  }
  useEffect(()=>{
      return () => {
        initNaverOauth()
      }
  })

  return (
    <>
      <NaverLogin  id='naver_id_login' className="login-btn" ref={naverRef} display='none'/>
      <OauthCustomBtn type='naver' isRef={naverRef}/>
      {/* <Btn onClick={handleClick}>
          <ImageWrap>
            <Image className="naverIcon" src={`/images/path-icons/naver_Icon.png`} alt='naverIdLogin' layout="fill" objectFit="contain" />
          </ImageWrap>
          <Text>네이버로 로그인</Text>
      </Btn> */}
    </>
  )
  
}

const NaverLogin = styled.div`
  /* display: none; */
`;

export default NaverAouth;
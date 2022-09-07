
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { accountLogin } from "../../../Redux/accountRedux/accountSlice";
import React from "react";
import {tryLogin}  from "../../../api/requestApi";
const { naver } = window as any;

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const emailRef = React.useRef<HTMLInputElement>(null);
  const pwRef = React.useRef<HTMLInputElement>(null);
  const [loginError , setLoginError] = useState(false);
  const [loginType , setLoginType] = useState("basic");
  const location = useLocation();

  const onLogin = async () => {
    if(emailRef.current && pwRef.current){
      const email = emailRef.current.value;
      const password = pwRef.current.value;
      tryLogin(email,password)
      .then((_response:any)=>{
        if(_response.data.length){
          dispatch(accountLogin(_response.data[0]))
          console.log(location)
          navigate("/")
        }else{
          setLoginError(true);
          console.log("회원 데이터 없음")
        }
      })
      .catch((error)=>{
        console.log("에러",error)
      })
    }
  }
  const naverInit = () =>{
      const login = new naver.LoginWithNaverId({
      clientId: 'NR61LLLoBLU2vcfbHvDY',
      callbackUrl: 'http://localhost:3000/login', 
      callbackHandle:true,
      isPopup: false, // popup 형식으로 띄울것인지 설정
      loginButton: { 
        color: 'green', type: 3, height: '65' 
      }, //버튼의 스타일, 타입, 크기를 지정
    });
    login.init();
  };
  // const naverToken = location.hash.split('=')[1].split('&')[0];  
  const postNaverToken = () => {
   if(!location.hash && loginType !== "naver" ){
     return;
   }
  
  // axios.post('http://localhost:4000/api/login/naver' , {
  //   token:naverToken
  // }).then((res) => {
  //   console.log("RES",res.data);
  //   //이메일 확인 후 가입 안되어 있으면 가입화면으로
  //   history('/register',{state:res.data})
  // })
}
 const googleLogin = () => {
   setLoginType("google");
   const clientID = '625687004788-gd57fikpm0v5854djf8emrm7bgmh4drg.apps.googleusercontent.com'
   const path = 'http://localhost:3000/login'
   const googleOauthURL =`https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientID}`+
    `&response_type=token&redirect_uri=${path}&scope=https://www.googleapis.com/auth/userinfo.email`;
    window.location.assign(googleOauthURL);
 }
 const postGoogleToken = () => {
   if(!window.location.hash && loginType !== "google") return;
  // const accessToken = window.location.hash.split("=")[1].split("&")[0]
 }
 
  useEffect(() => {
    naverInit();
    postGoogleToken();
  }, []);

  return (
  <>
    <Head>
    
    </Head>
    <Container>
      <Layout>
        <LogoWrap>
          <Logo>wewi.gg</Logo>
        </LogoWrap>
        <Form onSubmit={(e) => e.preventDefault()}>
          <InWrap>
            <Label htmlFor="loginId">이메일</Label>
            <Input id="loginId" type="text" ref={emailRef} />
          </InWrap>
          <InWrap>
            <Label htmlFor="loginPw">비밀번호</Label>
            <Input id="loginPw" type="password" ref={pwRef} />
          </InWrap>
          <InWrap style={{
            display:'flex'
          }}>
            <CheckBox type="checkbox" id="keepLogin"/>
            <Label>자동 로그인</Label>
            <IDPW>ID/PW 찾기</IDPW>
          </InWrap>
            {loginError &&  
              <>
                <ErrorMsg>아이디 또는 비밀번호를 잘못 입력했습니다.</ErrorMsg>
                <ErrorMsg>입력하신 내용을 다시 확인해주세요.</ErrorMsg>
              </>
            }
          <OR>OR</OR>
          <FastLogin>간편 로그인</FastLogin>
          <NaverLogin id='naverIdLogin' onClick={postNaverToken}>
              네이버 로그인
          </NaverLogin>
          <GoogleLogin onClick={googleLogin}>
            <img src="../images/path-icons/btn_google_signin_dark_normal_web@2x.png" style={{
              width:"314px",
              borderRadius:"20px",
              cursor: "pointer",
            }} />
          </GoogleLogin>
          <ExitWrap>
            <OkBt onClick={onLogin}>로그인</OkBt>
            
          </ExitWrap>
          <Register>
            <span>아이디가 없다면 ?</span>
            <Link to="/register">회원가입</Link>
          </Register>
        </Form>
        
      </Layout>
    </Container>
  </>
  );
}

const Container = styled.div`
  width: 450px ;
  min-height: 682px;
  margin: 0 auto ;
  height: 25rem;
  background-color: #2c3e50;
`;
const Layout = styled.div`
  margin: 0 40px;
  
`;
const Head = styled.div`
  height: 13rem ;
  padding-bottom: 48px;
`;
const LogoWrap = styled.div`
  margin: 0 auto;
`;
const Logo = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: white;
  text-align: center;
  padding: 32px 0 24px 0;
`;
const Form = styled.form`
  display:flex ;
  flex-direction:column ;
  margin: auto ;
  padding: 1rem;
  padding-top: 0;
`;
const InWrap = styled.div`
  margin-top: 1rem;
`;
const Label = styled.label`
  font-size: 15px;
  display: block;
  /* color: rgba(123,122,142,0.8); */
  color: white;
  margin-bottom: 8px;
`;
const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  font-size: 0.875rem;
  background-color: #28283b;
  color: white;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 5px;
  padding: 0.8rem;
  :focus,:active{
    outline: none;
  }
`;
const CheckBox = styled.input`
  
`;
const IDPW = styled.div`
  font-size: 15px;
  color: #8686f0;
  margin: 0 10px;
  cursor: pointer;
`;
const OR = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  margin: 8px 0px;
  font-size: 14px;
  text-align: center;
  ::before,::after{
  content: "";
  flex-grow: 1;
  background: rgba(0, 0, 0, 0.35);
  height: 1px; font-size: 0px;
  line-height: 0px;
  margin: 0px 16px;
  }
  
`;
const FastLogin = styled.h2`

`;
const NaverLogin = styled.div`
  text-align:center;
  padding: 10px;
`;
const NaverLink = styled.div`
  display: inline;
`;
const GoogleLogin = styled.div`
  color: #fff;
  border: none;
  border-radius: 5px;
  margin: 8px 0;
  font-size: 18px;
  text-align: center;
`;
const ExitWrap = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  text-align: center;
`;
const OkBt = styled.button`
  margin: 0 auto;
  width: 303px;
  height: 50px;
  border: 0.08rem solid rgba(123,122,142,0.8);
  border-radius: 5px;
  background-color: #b5b5c0;
  color: #fff;
  cursor: pointer;
  font-size: 22px;
`;
const Register = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  padding: 0 2.5rem 0 2.5rem;
  text-align: center;
  a{
    text-decoration: underline;
    color:#1ea1f7;
  }
`;
const ErrorMsg = styled.div`
  padding-left: 5px;
  font-size: 12px;
  color: #ff0000c5;
`;

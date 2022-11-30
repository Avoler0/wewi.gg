
import { useEffect, useState } from "react";
import styled from "styled-components";
// import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { accountLogin } from "../../../../Redux/accountRedux/accountSlice";
import React from "react";
import Link from "next/link";
import { dbHook } from "../../../hooks/dbHook";
import { Router, useRouter } from "next/router";
import { setLogin } from "../../../redux/login/user";
import { useSelector } from "react-redux";
// import NaverLogin from "./naver";
// import { requestApi }  from "../../../../api/requestApi";
export default function Login() {
  const dispatch = useDispatch()
  const user = useSelector((state:any)=> state.user)
  const router = useRouter();
  const [errorMsg,setErrorMsg] = useState({
    type:'',
    message:''
  });
  const [loginError , setLoginError] = useState(false);
  const [loginType , setLoginType] = useState("basic");
  useEffect(() => {
    const {naver} = window as any
    console.log(window ,naver)
  }, [window]);




    
  useEffect(() => {
    
    // postGoogleToken();
    const naverScript = document.createElement("script");
    naverScript.src = "https://static.nid.naver.com/js/naverLogin_implicit-1.0.3.js";
    naverScript.async = true;
    document.body.appendChild(naverScript);

    naverScript.onload = ()=>{ 
      let naverLogin = new naver_id_login('NR61LLLoBLU2vcfbHvDY','http://localhost:3000/login')
      // let state = naver_id_login.getUniqState();
      naverLogin.setButton('green',3,65)
      naverLogin.setDomain('http://localhost:3000')
      naverLogin.setState('state');
      // naverLogin.setPopup();
      naverLogin.init_naver_id_login();
      // if(naver){
      //   console.log("네이버 실행")
      //   let naverLogin:any;
      //   const login = () => {
      //     naverLogin = new naver.LoginWithNaverId({
      //     clientId: 'NR61LLLoBLU2vcfbHvDY',
      //     callbackUrl: 'http://localhost:3000/login', 
      //     callbackHandle:true,
      //     isPopup: false, // popup 형식으로 띄울것인지 설정
      //     loginButton: { 
      //       color: 'green', type: 3, height: '65' 
      //     }, //버튼의 스타일, 타입, 크기를 지정
      //     });
      //     naverLogin.init();
      }

    
  }, [window]);
  async function postLogin(event:any){
    event.preventDefault();
    const query = {
      email:event.target['email'].value,
      password:event.target['password'].value
    }
    const loginResult = await dbHook.account.login(query)
    
    switch(loginResult.status){
      case 200:
          dispatch(setLogin({
            email:loginResult.data[0].email,
            nickName:loginResult.data[0].nickName
          }))
          // router.push('/');
          break;
      case 401:
        return setErrorMsg({type:'password',message:'틀린 비밀번호 입니다.'});
      case 404:
        return setErrorMsg({type:'email',message:'없는 이메일 입니다.'});
    }

  }
  return (
    <Wrap>
      <Title>
        <h1>wewi.gg</h1>
      </Title>
      <Container>
        <Form onSubmit={postLogin}>
          <Input_Layout>
            <Label htmlFor="email">이메일</Label>
            {errorMsg.type === 'email' && <ErrorMessage>{errorMsg.message}</ErrorMessage>}
            <Input id="email" type="text"/>
          </Input_Layout>
          <Input_Layout>
            <Label htmlFor="password">비밀번호</Label>
            {errorMsg.type === 'password' && <ErrorMessage>{errorMsg.message}</ErrorMessage>}
            <Input id="password" type="password"/>
          </Input_Layout>
          <Option_Layout>
            <div>
              <input type="checkbox" id="keepLogin"/>
              <label htmlFor="keepLogin" >자동 로그인</label>
            </div>
            <div><Link href={"/register"}>ID/PW 찾기</Link></div>
          </Option_Layout>
            {loginError &&  
              <>
                <ErrorMsg>아이디 또는 비밀번호를 잘못 입력했습니다.</ErrorMsg>
                <ErrorMsg>입력하신 내용을 다시 확인해주세요.</ErrorMsg>
              </>
            }
          <OR>OR</OR>
          <FastLogin>간편 로그인</FastLogin>
          <NaverLogin id='naver_id_login'>
              네이버 로그인
          </NaverLogin>
          {/* <NaverLogin /> */}
          <GoogleLogin>
            {/* <img src="../images/path-icons/btn_google_signin_dark_normal_web@2x.png" style={{
              width:"314px",
              borderRadius:"20px",
              cursor: "pointer",
            }} /> */}
          </GoogleLogin>
          <ExitWrap>
            <OkBt name="basicLogin">로그인</OkBt>
            
          </ExitWrap>
          <Register>
            <span>아이디가 없다면 ?</span>
            <Link href="/register">회원가입</Link>
          </Register>
        </Form>
      </Container>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 450px ;
  min-height: 682px;
  margin: 0 auto ;
  margin-top: 7rem;
  height: 25rem;
  color:white;
  background-color: #2c3e50;
`;
const Container = styled.div`
  margin: 0 8%;
  
`;
const Title = styled.section`
  margin: 0 auto;
  h1{
    font-size: 48px;
    font-weight: bold;
    color: white;
    text-align: center;
    padding: 32px 0 24px 0;
    margin: 0;
  }
`;

const Form = styled.form`
  display:flex ;
  flex-direction:column ;
  margin: auto ;
  padding: 1rem;
  padding-top: 0;
`;
const Input_Layout = styled.div`
  margin-top: 1rem;
`;
const Option_Layout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  input{
    margin-right: 0.3rem;
  }
  a{
    color: #8686f0;
    margin: 0 10px;
    cursor: pointer;
    text-decoration: underline;
  }

`;
const Label = styled.label`
  font-size: 15px;
  color: rgba(123,122,142,0.8);
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
const ErrorMessage = styled.span`
  margin-left: 1rem;
  color: red;
  font-size: 14px;
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


import styled from "styled-components";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { setLogin } from "../../../redux/login/user";
import { useSelector } from "react-redux";
import jwt from 'jsonwebtoken'
import { accountHook } from "../../../hooks/server/account/account";
import GoogleOauth from "./oauth/google";
export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch()
  const user = useSelector((state:any)=> state.user)

  // if(user.state) router.push('/')

  async function postLogin(event:any){
    event.preventDefault();
    const query = {
      email:event.target['email'].value,
      password:event.target['password'].value,
      type:'wewigg'
    }
    
    await accountHook.login(query)
    .then((_res:any)=>{
      console.log(_res)
      dispatch(setLogin({
        id:_res.data.Id,
        oauth:_res.data.OauthType,
        email:_res.data.Email,
        nickName:_res.data.Name,
      }));
    })
    .catch((_err)=>{
      console.log(_err)
      const error = _err.response;
      if(error.status === 404 || error.status === 400){
        alert('잘못된 아이디 또는 비밀번호입니다.')
      }
    })
  }

  function initNaverOauth(){
    const naver_id_login = new window.naver_id_login(process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,`${process.env.NEXT_PUBLIC_URL}/account/login/oauth/naver`)
    const state = naver_id_login.getUniqState();
    naver_id_login.setButton('green',0,40)
    naver_id_login.setDomain(process.env.NEXT_PUBLIC_URL)
    naver_id_login.setState(state);
    naver_id_login?.init_naver_id_login();
  }

//   function initGoogleOauth(){
//     const googleScript = document.createElement('script');
//     googleScript.src = 'https://accounts.google.com/gsi/client';
//     document.head.appendChild(googleScript);
    
//     googleScript.onload = () =>{
//       window.google.accounts.id.initialize({
//         client_id: '625687004788-5pv5rsjeqkel0arqfclrmco227f4ven1.apps.googleusercontent.com',
//         ux_mode: 'popup',
//         redirect_uri: `${process.env.NEXT_PUBLIC_URL}/account/login/oauth/google`,
//       });

//     window.google.accounts.id.renderButton(
//       document.getElementById("google_id_login"),
//       { 
//         'type':'icon',
//         'theme':'outline',
//         'shape':'square',
//         'size': "x-large", 
//         'width': '300', 
//         'height': '100',
//         'longtitle': true,
//         'login_uri' : 'redirect'
//       }
//     );
    
//     window.google.accounts.id.prompt();
//   }
// }

  useEffect(()=>{
    initNaverOauth();
  },[])
  return (
    <Wrap id="wrap">
      <Title>
        <h1>wewi.gg</h1>
      </Title>
      <Container>
        <Form onSubmit={postLogin}>
          <Input_Layout>
            <Label htmlFor="email">이메일</Label>
            <Input id="email" type="text"/>
          </Input_Layout>
          <Input_Layout>
            <Label htmlFor="password">비밀번호</Label>
            <Input id="password" type="password"/>
          </Input_Layout>
          <Option_Layout>
            <div>
              <input type="checkbox" id="keepLogin"/>
              <label htmlFor="keepLogin" >자동 로그인</label>
            </div>
            <div><Link href={"/register"}>ID/PW 찾기</Link></div>
          </Option_Layout>
          <OR>OR</OR>
          <FastLogin>간편 로그인</FastLogin>
          <LoginBtnInner>
            <OauthBtn>
              <div  id='naver_id_login'/>
              <GoogleOauth />
            </OauthBtn>
            <LoginButton className="login-btn">로그인</LoginButton>
          </LoginBtnInner>
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
  padding: 1rem;
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
    padding: 1rem 0;
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
  text-align: center;
`;
const LoginButton = styled.button`
  margin: 0 auto;
  width: 303px;
  height: 50px;
  border: 0.08rem solid rgba(123,122,142,0.8);
  border-radius: 5px;
  background-color: #b5b5c0;
  color: #fff;
  cursor: pointer;
  font-size: 22px;
  margin-top: 5px;
`;
const OauthBtn = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
`;
const LoginBtnInner = styled.div`
  padding: 10px;

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

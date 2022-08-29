import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { API_KEY, PATH } from "../../../const/API_KEY";


const Container = styled.div`
  width: 610px ;
  min-height: 100%;
  margin: 0 auto ;
  background-color: #2c3e50;
`;
const Layout = styled.div`
  margin: 0 60px;
  padding: 1rem;
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
const SignTitle = styled.div`
  font-size: 24px;
`;
const SignExp = styled.div`
  padding: 10px;
  border: 1px solid #0a82a0;
  border-radius: 10px;
  margin: 10px 0;
`;
const Form = styled.form`
  display:flex ;
  flex-direction:column ;
  margin: auto ;
  
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
  /* background-color: #28283b; */
  background-color: transparent;
  color: white;
  /* border: 1px solid rgba(0,0,0,0.2); */
  border: none;
  border-bottom: 1px solid #f3ebeb33;
  border-radius: 5px;
  :focus,:active{
    outline: none;
  }
`;
const Email = styled.div`
  width: 100%;
  height: 2.5rem;
  font-size: 20px;
  font-weight: bold;
  border-bottom: 1px solid #f3ebeb33;
  color: green;
  line-height: 30px;
`;
const ExitWrap = styled.div`
  margin: 2.5rem 0;
  display: flex;
  justify-content: space-between;
`;
const CancelBt = styled.button`
  width: 42%;
  height: 3.2rem;
  border: 0.08rem solid rgba(123,122,142,0.8);
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;
  font-size: 22px;
`;
const OkBt = styled.button`
  width: 42%;
  height: 3.2rem;
  border: 0.08rem solid rgba(123,122,142,0.8);
  border-radius: 5px;
  background-color: #7c7c83;
  cursor: pointer;
  font-size: 22px;
`;
const NickSub = styled.span`
  display: inline;
  margin: 0 10px;
  font-size: 12px;
  line-height: 18px;
  color: #cf9797cc;
`;
const NickColum = styled.div`
  display: flex;
`;
const NickCheck = styled.div`
  padding-top: 5px;
  font-size: 14px;
`;
interface I_navState {
  hash: string,
  key: string,
  pathname: string,
  search: string,
  state: string,
}
function Register() {
  const history = useNavigate();
  const navState:any = useLocation();
  const cancelClick = () => history('/');
  const {register,watch,handleSubmit} = useForm();
  const [nickCheck,setNickCheck] = useState("none");
  const [oauthEmail , setOauthEmail] = useState("");
  // let oauthEmail;
  const reg = {
    Id: !navState.state ? watch("email") : navState.state.split(',')[3].split(':')[1].split('}')[0].split('"')[1],
    Pw: watch("password"),
    Nick:watch("nickname")
  }
  const navEmail = () =>{
    if(!navState.state) return;
    const naverEmail = navState.state.split(',')[3].split(':')[1].split('}')[0].split('"')[1]
    setOauthEmail(naverEmail);
  }
  useEffect(()=>{
    navEmail()
  },[])
  function postName() {
    axios({
      method: 'get',
      url:`http://localhost:4000/api/register/${reg.Nick}`,
    })
      .then((response) => {
        setNickCheck("success");
        console.log("성공",response);
      })
      .catch((error) => {
        setNickCheck("failed");
        console.log("에러",error);
      })
  }
  function postReg() {
    if(nickCheck === "failed") return;
    axios({
      method: 'post',
      url:'http://localhost:4000/api/register',
      data: {
        email:reg.Id,
        password:reg.Pw
      }, 
    })
      .then((response) => {
        console.log("성공",response);
      })
      .catch((error) => {
        console.log("에러",error);
      })
  }
  const onValid = (e:any) => {
    postReg();
    // postName();
  }
  return (
    <>
    <Head />
    <Container>
      <Layout>
        <LogoWrap>
          <Logo>wewi.gg</Logo>
        </LogoWrap>
        <SignTitle>기본 정보 입력</SignTitle>
        <SignExp>회원가입을 위해서 이메일 인증이 진행되며, 인증이 완료되기 전까지 회원가입이 완료가 되지 않습니다.</SignExp>
        <Form onSubmit={handleSubmit(onValid)}>
          <InWrap>
            <Label htmlFor="regiId">이메일 주소</Label>
            {oauthEmail.length > 8 ? <Email>{oauthEmail}</Email> : <Input id="id" type="email" {...register("email")} />}
          </InWrap>
          <InWrap>
            <Label htmlFor="regiPw">비밀번호</Label>
            <Input id="pw" type="password" {...register("password")} />
          </InWrap>
          <InWrap>
            <NickColum>
              <Label htmlFor="regiNick">닉네임</Label>
              <NickSub>자신의 롤 닉네임을 입력 해 주세요</NickSub>
            </NickColum>
            <NickColum>
              <Input id="id" type="text" {...register("nickname")} />
            </NickColum>
            {nickCheck === "success" && <NickCheck>닉네임이 확인 되었습니다.</NickCheck>}
            {nickCheck === "failed" && <NickCheck>존재하지 않은 닉네임입니다.</NickCheck> }
            
          </InWrap>
          <ExitWrap>
            <CancelBt onClick={cancelClick}>취소</CancelBt>
            <OkBt>가입하기</OkBt>
          </ExitWrap>
        </Form>
      </Layout>
      
    </Container>
    </>
  )
}

export default Register;
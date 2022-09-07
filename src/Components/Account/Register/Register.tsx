import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { checkNickName, saveRegister } from "../../../api/requestApi";
import { getSummoner } from "../../../api/riotApi";


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
type nickCheck = "success" | "failed" | "none";
function Register() {
  const history = useNavigate();
  const emailRef = useRef<HTMLInputElement|null>(null);
  const pwRef = useRef<HTMLInputElement|null>(null);
  const nickRef = useRef<HTMLInputElement|null>(null);
  const [nickCheck,setNickCheck] = useState<nickCheck>("none");

  function vaildationName(event:any) {
    // console.log(event.target.value)
    // getSummoner(event.target.value)
    getSummoner(event)
    // checkNickName(nickName)
    // .then((_response:any)=>{
    //   if(_response.data.length === 0){
    //     setNickCheck("success")
    //   }else{
    //     setNickCheck("failed")
    //   }
    // })
  }
  function validation(){
    return (
      emailRef.current?.value.includes("@") &&
      emailRef.current?.value.includes(".") &&
      pwRef.current && pwRef.current?.value?.length >= 8 ?
      true : false
    )
  }
  function postRegister() {
    if(validation()){
      vaildationName(nickRef.current!.value)
      console.log("포스트");
      saveRegister({
        type:"general",
        email: emailRef.current!.value,
        password: pwRef.current!.value,
        nickName: nickRef.current!.value,
      })
    }
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
        <Form onSubmit={(e) => e.preventDefault()}>
          <InWrap>
            <Label htmlFor="regiId">이메일 주소</Label>
            {/* {oauthEmail.length > 8 ? <Email>{oauthEmail}</Email> : <Input id="id" type="email" {...register("email")} />} */}
            <Input type="email" ref={emailRef} />
          </InWrap>
          <InWrap>
            <Label>비밀번호</Label>
            <Input type="password" ref={pwRef} />
          </InWrap>
          <InWrap>
            <NickColum>
              <Label>닉네임</Label>
              <NickSub >자신의 롤 닉네임을 입력 해 주세요</NickSub>
            </NickColum>
            <NickColum>
              <Input type="text"  ref={nickRef}  />
              {/* onChange={(event) => vaildationName(event)} */}
            </NickColum>
            {nickCheck === "success" && <NickCheck>닉네임이 확인 되었습니다.</NickCheck>}
            {nickCheck === "failed" && <NickCheck>존재하지 않은 닉네임입니다.</NickCheck> }
          </InWrap>
          <ExitWrap>
            <CancelBt onClick={() => history('/')}>취소</CancelBt>
            <OkBt onClick={postRegister}>가입하기</OkBt>
          </ExitWrap>
        </Form>
      </Layout>
      
    </Container>
    </>
  )
}

export default Register;
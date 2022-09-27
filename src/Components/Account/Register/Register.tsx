import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { requestApi } from "../../../api/requestApi";
import { getSummoner } from "../../../api/riotApi";
import { postRegistT } from "../../../Types/accountTypes";


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
const InputDiv = styled.div`
  position: relative;
  margin-top: 1rem;
`;
const Label = styled.label`
  font-size: 15px;
  display: inline-block;
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
  position: absolute;
  right: 0;
  display: inline-block;
  margin: 0 10px;
  font-size: 12px;
  line-height: 18px;
  color: #cf9797cc;
`;
const Tooltip = styled.div`
  margin-top: 0.7rem;
  right:0;
  span{
    font-size: 12px;
    color: #ca9090;
  }
`;

function Register() {
  const pwPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\d~!@#$%^&*()+|=]{8,20}$/;
  const [validation,setValidation] = useState(
    {email:false,
    password:false,
    nickName:false,
    readEmail:false}
  )
  const [value,setValue] = useState(
    {email:"",
    password:"",
    nickName:"",
    readEmail:""}
  )
  const history = useNavigate();
  const toolTip:any = {
    email:["올바른 이메일 형식이 아닙니다." , "이메일을 다시 한번 입력 해 주세요."],
    password:["비밀번호가 올바르지 않습니다." , "8~20자 영문 대소문자, 숫자, 특수문자를 이용하여 완성해주세요."],
    nickName:["존재하지 않는 닉네임입니다." , "다시 한번 확인해주세요."],
    readEmail:["이미 등록된 이메일입니다."]
  }
  async function checkValidation(){
    let valid = validation;
    valid.email = value.email.includes("@") && value.email.includes(".")
    valid.password = pwPattern.test(value.password)
    valid.readEmail = await overlapEmail()
    valid.nickName = await checkNickname()
    
    setValidation({...valid})
  }
  function overlapEmail(){
    const result = requestApi.readEmail(value.email)
      .then((_response:any)=>{
        if(_response.data.length === 0){
          return true
        }else{
          return false;
        }
      })
      return result;
  }
  function checkNickname(){
    const result = getSummoner(value.nickName)
      .then((_response)=>{
        return true
      })
      .catch(()=>{
        return false
      })
      return result;
  }
  function postRegister() {
    requestApi.saveRegister({type:"general", ...value})
  }

  function onSubmit(event:any){
    let valueData = value;
    valueData.email = event.target[0].value;
    valueData.password = event.target[1].value;
    valueData.nickName = event.target[2].value;
    setValue({...valueData})

    checkValidation()
    
    
    event.preventDefault();
  }
  useEffect(()=>{
    const falseValid = Object.entries(validation).find((data:any) => {
      if(data[1] === false) return true
    })
    if(!falseValid) postRegister();
  },[validation])
  function ValidationToolTip(){
      const falseValid = Object.entries(validation).find((data:any) => {
        if(data[1].valid === false) return true
      })
      return (
        <Tooltip>
              {
              falseValid &&
              <>
                <span>{toolTip[falseValid[0]]}</span>
                <br/>
              </> 
              }
        </Tooltip>
      )
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
        <Form onSubmit={(e) => onSubmit(e)}>
          <InputDiv>
            <Label htmlFor="regiId">이메일 주소</Label>
            <Input type="text" name="email" />
          </InputDiv>
          <InputDiv>
            <Label>비밀번호</Label>
            <Input type="password" name="password" />
          </InputDiv>
          <InputDiv>
              <Label>닉네임</Label>
              <NickSub >자신의 롤 닉네임을 입력 해 주세요</NickSub>
              <Input type="text" name="nickName" />
          </InputDiv>
          <ValidationToolTip />
          <ExitWrap>
            <CancelBt onClick={() => history('/')}>취소</CancelBt>
            <OkBt>가입하기</OkBt>
          </ExitWrap>
        </Form>
      </Layout>
      
    </Container>
    </>
  )
}

export default Register;
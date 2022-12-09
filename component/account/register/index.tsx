import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { dbHook } from "../../../hooks/dbHook";
import { validHook } from "../../../hooks/validationHook";
import { setLogin } from "../../../redux/login/user";

function Register() {
  const dispatch = useDispatch();
  const user = useSelector((state:any)=> state.user)
  const oauthEmail = useSelector((state:any)=> state.oauthReg.email)
  const router = useRouter();
  const [emailError,setEmailError] = useState<string>('');
  const [passwordError,setPasswordError] = useState<string>('');
  const [nickError,setNickError] = useState<string>('');
  const [oauthJoin,setOauthJoin] = useState(false);
  if(user.state) router.push('/')

  
  
  useEffect(()=>{
    console.log(oauthEmail)
    if(oauthEmail) setOauthJoin(true)
  },[])
  
  function resetState(){
    setEmailError('');
    setPasswordError('');
    setNickError('');
  }

  function validState(emailValid:boolean,pwValid:boolean){
    let email = false;
    let password = false;

    if(emailValid){
      email = true;
    }else{
      setEmailError('올바른 이메일 형식이 아닙니다.')
    }

    if(pwValid){
      password = true;
    }else{
      setPasswordError('8자 이상 영문 대소문자, 숫자, 특수문자를 이용하여 완성해주세요.')
    }

    return email && password
  }
  async function joinPost(query:any){
    await dbHook.account.register(query)
      .then((_res)=>{
        if(_res.status === 201){
          dispatch(setLogin({
            type:query.type,
            email:query.email,
            nickName:query.nickName
          }));
          // router.push('/');
        }else if(_res.status === 409){
          switch(_res.conflict){
            case 'email':
              return setEmailError('이미 등록된 이메일입니다.');
            case 'nick':
              return setNickError('이미 등록된 닉네임입니다.');
          }
        }
      })
      .catch((_error)=>{
        console.log("레지스터 에러",_error)
      })
  }

  async function postRegister(event:any){
    resetState();
    event.preventDefault();
    const query = {
      email:event.target['email'].value,
      password:event.target['password'] ? event.target['password'].value : 'oauth-login',
      nickName:event.target['nickName'].value,
      type:oauthJoin ? 'oauth' : 'basic'
    };
    const emailValid = validHook.email(query.email)
    const passwordValid = validHook.password(query.password)
    console.log("타겟",query.password)
    const validation = validState(emailValid,passwordValid)

    console.log(query.nickName)
    if(query.nickName < 2) return setNickError('2글자 이상의 닉네임을 입력 해 주세요.')

    if(validation){
      joinPost(query);
    }else{
      return;
    }
  }

  return (
    <>
    <Wrap>
      <Container>
        <Title>
          <h1>wewi.gg</h1>
        </Title>
        <SignTitle>기본 정보 입력</SignTitle>
        <SignExp>회원가입을 위해서 이메일 인증이 진행되며, 인증이 완료되기 전까지 회원가입이 완료가 되지 않습니다.</SignExp>
        <Form onSubmit={postRegister}>
          <InputDiv>
            <Label htmlFor="regiId">이메일 주소</Label>
            <ErrorMessage>{emailError}</ErrorMessage>
            {oauthJoin ? 
            <Input type="text" name="email" value={oauthEmail}/> :
            <Input type="text" name="email"/>
            }
          </InputDiv>
          {oauthJoin ? null : <InputDiv>
            <Label>비밀번호</Label>
            <ErrorMessage>{passwordError}</ErrorMessage>
            <Input type="password" name="password" />
          </InputDiv>}
          <InputDiv>
              <Label>닉네임</Label>
              <ErrorMessage>{nickError}</ErrorMessage>
              <Input type="text" name="nickName" />
          </InputDiv>
          {/* <ValidationToolTip /> */}
          <ExitWrap>
            <Button btType={false} onClick={(e) => e.preventDefault()}>
              <Link href="/">취소</Link>
            </Button>
            <Button btType={true}>가입하기</Button>
          </ExitWrap>
        </Form>
      </Container>
      
    </Wrap>
    </>
  )
}

export default Register;

const Wrap = styled.div`
  width: 610px;
  min-height: 100%;
  margin: 0 auto ;
  margin-top: 7rem;
  background-color: #2c3e50;
`;
const Container = styled.div`
  margin: 0 60px;
  padding: 1rem;
`;
const Title = styled.div`
  h1{
    font-size: 48px;
    font-weight: bold;
    color: white;
    text-align: center;
    padding: 24px 0;
  }
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

  :focus,:active{
    outline: none;
  }
`;
const ExitWrap = styled.div`
  margin: 2.5rem 0;
  display: flex;
  justify-content: space-between;
`;
const Button = styled.button<{btType:boolean}>`
  width: 42%;
  height: 3.2rem;
  border: 0.08rem solid rgba(123,122,142,0.8);
  border-radius: 5px;
  background-color: ${props => props.btType ? '#7c7c83' : 'transparent'};
  cursor: pointer;
  font-size: 22px;
`;

const ErrorMessage = styled.span`
  margin-left: 0.5rem;
  font-size: 12px;
  color:red;
`;
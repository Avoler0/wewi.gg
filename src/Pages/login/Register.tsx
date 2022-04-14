import { useNavigate } from "react-router-dom";
import styled from "styled-components";


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
  padding: 0.8rem;
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
function Register() {
  const history = useNavigate();
  const cancelClick = () => history('/')
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
        <Form>
          <InWrap>
            <Label htmlFor="id">이메일 주소</Label>
            <Input id="id" type="email"/>
          </InWrap>
          <InWrap>
            <Label htmlFor="pw">비밀번호</Label>
            <Input id="pw" type="password"/>
          </InWrap>
          <InWrap>
            <Label htmlFor="id">닉네임</Label>
            <Input id="id" type="email"/>
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
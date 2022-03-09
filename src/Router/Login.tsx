import { Link } from "react-router-dom";
import styled from "styled-components";

const Label = styled.label`
  
`;
const Input = styled.input`

`;
const Form = styled.form`
  display:flex ;
  flex-direction:column ;
  margin: auto ;
`;
const Container = styled.div`
  max-width: 560px ;
  min-width: 368px ;
  margin: 0 auto ;
  height: ;
`;
const Head = styled.div`
  width:100% ;
  height: 30vh ;
  padding-bottom: 48px;
`;

function Login() {
  return (
  <>
    <Head>
    
    </Head>
    <Container>
      <div>
        <Form>
          <Label htmlFor="loginId">아이디</Label>
          <Input id="loginId" type="text" />
          <Label htmlFor="loginPw">비밀번호</Label>
          <Input id="loginPw" type="password" />
          <Input type="checkbox" id="keepLogin" />
        </Form>
      </div>
      <div>
        <span>아이디/비밀번호 찾기</span>
        <span><Link to="/Register">회원가입</Link></span>
      </div>
    </Container>
  </>
  );
}

export default Login;
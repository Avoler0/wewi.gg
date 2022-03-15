import styled from "styled-components";


const Container = styled.div`
  margin: 0 auto ;
  max-width: 768px ;
  min-width: 460px ;
`;
const LabelTitle = styled.h3`
  margin: 19px 0 8px;
  font-weight:700;
  font-size: 18px;
`;
const Label = styled.label`
  
`;
const Input = styled.input`
  width: 100% ;
  height: 40px ;
`;
const Form = styled.form`
  width: 50% ;
  margin: 0 auto ;
`;
function Register() {
  
  return (
    <Container>
      <Form>
        <LabelTitle>
          <Label htmlFor="id">아이디(ID)</Label>
        </LabelTitle>
        <Input id="id" type="text"/>
        <LabelTitle>
          <Label htmlFor="pw">비밀번호</Label>
        </LabelTitle>
        <Input id="pw" type="password"/>
        <LabelTitle>
          <Label htmlFor="pw">비밀번호 재확인</Label>
        </LabelTitle>
        <Input id="pw" type="password"/>
        <LabelTitle>
          <Label htmlFor="id">닉네임</Label>
        </LabelTitle>
        <Input id="id" type="email"/>
        <LabelTitle>
          <Label htmlFor="id">본인 확인이메일</Label>
        </LabelTitle>
        <Input id="id" type="email"/>
        <span>라이엇 인증</span>
        <button>가입하기</button>
      </Form>
    </Container>
  )
}

export default Register;
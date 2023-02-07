import { useState } from "react";
import styled , {css} from "styled-components";
import { matesHook } from "../../../../hooks/server/mates/mates";

type Props = {
  hide: Function,
  id:number,
  pw:number
}

function DuoDelete({hide,id,pw}:any) { // 듀오 카드 삭제를 위한 컴포넌트, 기존 카드에 덮어씌움
  const [pwError,setPwError] = useState(false);
  console.log(id,pw)
  function deleteSubmit(event:any){
    event.preventDefault();
    console.log(pw)
    const pwInput = event.target[0].value
    console.log(pwInput)
    if(pwInput == pw){
      matesHook.delete(id);
      window.location.replace("/duo")
    }else{
      setPwError(true)
    }
    
  }
  console.log(pw)
  return (
    <Wrap>
      <Form onSubmit={deleteSubmit}>
        <Content>
          <Label>비밀번호 입력</Label>
          <Input type="text" maxLength={4} />
          <Notice>{pwError && '틀렷습니다'}</Notice>
          <Button>
            <button >삭제</button>
            <button onClick={() => hide(false)}>취소</button>
          </Button>
        </Content>
      </Form>
    </Wrap>
  );
}

export default DuoDelete;


const Wrap = styled.div`
  background-color: #2c3e50;
  margin: auto;
  border-radius: 15px ;
  padding: 10px;
`;
const Form = styled.form`
  padding: 2rem 1rem;

`;
const Content = styled.div`
  width: 80%;
  height: 100%;
  
  text-align: center;
  margin: 0 auto;
`;
const Label = styled.label`
  font-size: 16px;
  display: block;
  margin-bottom: 8px;
`;
const Input = styled.input`
  width: 100%;
  height: 1rem;
  font-size: 15px;
  text-align: center;
  background-color: #28283b;
  color: white;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 5px;
  padding: 0.8rem;
  :focus,:active{
    outline: none;
  }
`;
const Notice = styled.div`
  font-size: 13px;
  height: 1rem;
  margin: 0.2rem;
  color: red;
`;
const Button = styled.div`
  display: flex;
  justify-content: space-between;
  button{
    color: white;
    background-color: #3c5975;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;
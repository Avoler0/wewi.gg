import { useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";

function DuoDelete({setDeleteState,setMatchPw,deletePw} :any) {
  const [passWord,setPassWord] = useState(0);
  const [matchState , setMatchState] = useState("default");
  const overLayOut = () => {
    setDeleteState(false)
  }
  const postPassword = () => {
    if(deletePw === passWord){
      setMatchPw(passWord)
      setDeleteState(false)
    }else{
      setMatchState("don't Match");
    }
  }
  console.log(passWord);
  
  return (
    <>
      <Overlay onClick={overLayOut}></Overlay>
      <Wrap>
        <OkBt onClick={overLayOut}>X</OkBt>
        <Content>
          <MessageTitle>
            삭제 비밀번호
          </MessageTitle>
          <MessageContent>
            <InputWrap>
              <PwInput onChange={(e:any) => setPassWord(e.target.value)}/>
              <PwButton onClick={postPassword}>입력</PwButton>
            </InputWrap>
            <MatchMessage>{matchState === "don't Match"? "비밀번호가 다릅니다 ": null}</MatchMessage>
          </MessageContent>
        </Content>
      </Wrap>
    </>
  );
}

export default DuoDelete;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
`;
const Wrap = styled.div`
  position: absolute;
  background-color: #2c3e50;
  width: 300px;
  height: 150px;
  top: 0;
  bottom: 30vh;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 15px;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
`;
const OkBt = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin: 5px 5px 0 0 ;
  border: none;
  color: whitesmoke;
  background-color: transparent;
  font-size: 18px;
  cursor: pointer;
`;
const MessageTitle = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: 900;
  padding: 20px 0 20px 0;
  /* letter-spacing:8px */
`;
const MessageContent = styled.div`

  text-align: center;
  align-items: center;
  font-size: 18px;
    margin:0 auto;
`;
const InputWrap = styled.div`
  border: 1px solid #554747;
  position: relative;
  /* border: 1px solid #fff; */
  width: fit-content;
  height: 35px;
  margin: 0 auto;
  font-size: 18px;
`;
const PwInput = styled.input`
  height: 100%;
  border: none;
  text-align: center;
  background-color: #2d3e4e;
  color: #fff;
  box-sizing: border-box;
  :focus{
    outline: none;
  }
`;
const PwButton = styled.button`
  height: 100%;
  border: none;
  color: #fff;
  background-color: #2d3e4e;
  box-sizing: border-box;
  cursor: pointer;
  :active{
    background-color: #49627a;
  }
`;
const MatchMessage = styled.div`
  padding: 10px;
  font-size: 16px;
  color: red;
`;

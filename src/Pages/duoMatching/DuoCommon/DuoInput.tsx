import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function DuoInput() {
  const history = useNavigate();
  const cardOut = () => history("/duo");
  const [onOff,setOnOff] = useState(true);
  const [okBt,setOkBt] = useState(false);
  const {register ,watch ,handleSubmit} = useForm();
  const inputData = {
    name:watch("name"),
    memo:watch("memo"),
    password:watch("password"),
  }
  const onValid = () => {
      console.log(inputData.name.length);
  }
  const dataCheck = () => {
    if(inputData.name.length > 2 && inputData.memo.length > 5 && inputData.password.length === 4)
    {
      setOkBt(!okBt);
    }
  }
  
  const MicClick = () => {
    setOnOff(!onOff)
  }
  return (
    <>
    <Overlay onClick={cardOut} />
    <Wrap>
      <Head>
        <CardName>소환사 등록하기</CardName>
        <Xbutton onClick={cardOut}>X</Xbutton>
      </Head>
      <Form onSubmit={handleSubmit(onValid)}>
        <Label htmlFor="name" >소환사 명</Label>
        <Input id="name" {...register("name" , {required:true , minLength:{
                  value:1,
                  message: "두글자 이상의 소환사명을 입력하세요",
        }})}/>
        <ColumnMiddle>
          <LineWrap>
            <Label>주 포지션</Label>
            <LineBox>
              <LineItem>
                <img src={`../images/icon/line/Line-All-Ico.png`} />
              </LineItem>
              <LineItem>
                <img src={`../images/icon/line/Line-Top-Ico.png`} />
              </LineItem>
              <LineItem>
                <img src={`../images/icon/line/Line-Jungle-Ico.png`} />
              </LineItem>
              <LineItem>
                <img src={`../images/icon/line/Line-Mid-Ico.png`} />
              </LineItem>
              <LineItem>
                <img src={`../images/icon/line/Line-Bottom-Ico.png`} />
              </LineItem>
              <LineItem>
                <img src={`../images/icon/line/Line-Support-Ico.png`} />
              </LineItem>
            </LineBox>
          </LineWrap>
          <QueueType>
            <Label>큐 타입</Label>
            <TypeSelect>
              <TypeOption>일반게임</TypeOption>
              <TypeOption selected>솔로랭크</TypeOption>
              <TypeOption>자유랭크</TypeOption>
              <TypeOption>칼바람나락</TypeOption>
              <TypeOption>특별모드</TypeOption>
            </TypeSelect>
          </QueueType>
          <MicCheck>
            <Label>마이크</Label>
            <MicButton onClick={MicClick}>
              {onOff ? <MicCircle style={{left:0}} /> : <MicCircle style={{right:0}}/>}
              {/* <MicCircle/> */}
            </MicButton>
          </MicCheck>
        </ColumnMiddle>
        <Label>메모</Label>
        <Input placeholder="같이할 사람 구합니다 !" {...register("memo" , {required:true , minLength:{
                  value:5,
                  message: "5글자 이상의 메모를 작성 해 주세요",
        }})}/>
        <PassWord>
          <Label >삭제 비밀번호</Label>
          <Input placeholder="4자리 숫자로 입력 해 주세요" 
          {...register("password" , {required:true , minLength:{
                  value:4,
                  message: "4자리 숫자를 입력 해 주세요",
        }})}/>
        </PassWord>
        <ExitWrap>
          <CancelBt onClick={cardOut}>취소</CancelBt>
          <OkBt onClick={onValid}>등록</OkBt>
        </ExitWrap>
        
      </Form>
      
    </Wrap>
    </>
  );
}

export default DuoInput;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
`;
const Wrap = styled.div`
  position: absolute;
  width: 30rem;
  height: 28.4rem;
  background-color: #2c3e50;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;
const Head = styled.div`
  padding: 14px 14px 8px 14px;
  display: flex;
  justify-content: space-between;
`;
const CardName = styled.h3`
  font-weight: bold;
  color: white;
`;

const Xbutton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
  border-top: 1px solid black;
`;

const Label = styled.label`
  font-size: 12px;
  display: block;
  color: rgba(123,122,142,0.8);
  margin-bottom: 8px;
`;
const Input = styled.input`
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
const ColumnMiddle = styled.div`
  display: flex;
  padding: 8px 0 8px 0;
`;
const LineWrap = styled.div`
  padding: 0 15px 0 0;
`;
const LineBox = styled.ul`
  display: flex;
`;
const LineItem = styled.li`
  width: 2.2rem;
  height: 2.2rem;
  padding: 0.2rem;
  border: 1px solid rgba(66,66,84,0.8);
  color: white;
  cursor: pointer;
  :hover{
    background-color: #57575f;
  }
  :active{
    background-color: #7c7c83;
  }
  img{
    width: 100%;
  }
`;
const QueueType = styled.div`
  padding: 0 15px 0 15px;
`;
const TypeSelect = styled.select`
  width: 6.5rem;
  height: 2.5rem;
  background-color: #28283b;
  border: 1px solid rgba(0,0,0,0.2);
  color: white;
  font-size: 14px;
`;
const TypeOption = styled.option`
  
`;
const MicCheck = styled.div`
  padding: 0 15px 0 20px;
`;
const MicButton = styled.button`
  width: 4rem;
  height: 2rem;
  border-radius: 9999px;
  position: relative;
  background-color: #28283b;
  display: inline-flex;
  cursor: pointer;
  border: none;
  :hover{
    background-color: #7c7c83;
  }
`;
const MicCircle = styled.span`
  position: absolute;
  background-color: red;
  border-radius: 9999px;
  top: 0;
  /* left: 0; */
  /* translate: 0; */
  margin:0.17rem 0.15rem 0.1rem 0.15rem ;
  width: 1.75rem;
  height: 1.75rem;
  display: inline-block
`;

const PassWord = styled.div`
  padding: 12px 0 12px 0;
`;
const ExitWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  
`;
const CancelBt = styled.button`
  width: 48%;
  height: 3.2rem;
  border: 0.08rem solid rgba(123,122,142,0.8);
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;
`;
const OkBt = styled.button`
  width: 48%;
  height: 3.2rem;
  border: 0.08rem solid rgba(123,122,142,0.8);
  border-radius: 5px;
  background-color: #7c7c83;
  cursor: pointer;
`;
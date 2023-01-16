import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components"
import { CommunityMenuList, CommunityQueryName } from "../../../const/utils";


export default function CommuniryWrite(){
  const writeRef = useRef<HTMLDivElement | null>(null);
  const [writeData,setWriteData] = useState(null);
  function commuOptionList(){
    return CommunityMenuList.map((data:any) => {
      return data.division.map((name:string)=>{
        return <option key={name}>{name}</option>
      })
    })
  }

  function writeSubmit(event:React.FormEvent){
    event.preventDefault();
    const value = writeRef?.current?.innerHTML.split('</div><div>').join('<br>').split('<div>').join('<p>').split('</div>').join('</p>')
  }
  useEffect(()=>{
    // console.log(writeData)
    // console.log(writeRef?.current?.innerHTML)
    const vvv = writeRef?.current?.innerHTML.split('</div><div>').join('<br>')
    console.log(vvv)
  },[writeData])
  return (
    <Wrap>
      <WriteForm onSubmit={writeSubmit}>
        <Container>
          <Title>글쓰기</Title>
          <CategorySelect>
            <select>
              {commuOptionList()}
            </select>
          </CategorySelect>
          <WriteInput>
            <label>
              <span>제목</span>
              <input name="title" placeholder="제목" autoComplete="off" title="제목입력" />
            </label>
          </WriteInput>
          <WriteContent>
            <Content>
              <EditContain>
                <Edit contentEditable={true} suppressContentEditableWarning={true} ref={writeRef}>
                  <div><br /></div>
                </Edit>
              </EditContain>
            </Content>
          </WriteContent>
        </Container>
        <ButtonContain>
            <Button btType="cancel">취소</Button>
            <Button btType="submit">작성완료</Button>
        </ButtonContain>
      </WriteForm>
      <div>{writeData}</div>
    </Wrap>
  )
}

const Wrap = styled.div`
  position: relative;
`;
const WriteForm = styled.form`
  width: 728px;
  
`;

const Container = styled.div`
  padding: 16px;
  border: 1px solid #cecdca;
  background-color: white;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

const CategorySelect = styled.div`
  margin-top: 24px;
  select{
    position: relative;
    border: 1px solid #dddfe4;
    border-radius: 4px;
    padding: 10px 38px 9px 15px;
    line-height: 19px;
    font-size: 16px;
    color: #1e2022;
    appearance: none;
    background: url(/images/public-icons/arrow-down.png);
    background-size: 17px;
    background-position: top 12px right 8px;
    background-repeat: no-repeat;
  }
`;

const WriteInput = styled.div`
  margin-top: 8px;
  label{
    display: block;
    position: relative;
    span{
      position: absolute;
      left: 0;
      top: 0;
      width: 1px;
      height: 1px;
      visibility: hidden;
    }
    input{
      display: block;
      width: 100%;
      background-color: #fff;
      border: 1px solid #dddfe4;
      padding: 10px 16px 9px;
      line-height: 19px;
      font-size: 16px;
      color: #1e2022;
      box-sizing: border-box;
    }
  }
`;
const WriteContent = styled.div`
  font-size: 16px;
`;
const Content = styled.div`
  width: 100%;
  min-height: 500px;
  height: 500px;
  border: 1px solid #cecdca;
  margin-top: 16px;
`;
const EditContain = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px 25px 0;
  overflow: hidden;
`;
const Edit = styled.div`
  width: 100%;
  min-height: 0px;
  height: 100%;
  font-size: 14px;
  :focus{
    outline: 0px solid transparent;
  }
`;
const ButtonContain = styled.div`
  margin-top: 20px;
  width: 100%;
`;
const Button = styled.button<{btType:string}>`
  cursor: pointer;
  width: 154px;
  height: 48px;
  line-height: 19px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #dddfe4;
  width: 154px;
  height: 48px;
  ${props => props.btType === 'cancel' ? {
    "color": '#7b858e',
    "background-color": '#fff',
  }:{
    "color": '#fff',
    "background-color": '#46cfa7',
    "float" : "right",
    "position": 'static'
  }}
`;
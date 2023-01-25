import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components"
import Paser from 'html-react-parser'
import { dbHook } from "../../../hooks/dbHook";
import Image from "next/image";
import { CommunityWriteOptionList } from "../../../const/community";
export default function CommuniryWrite(){
  const titleRef = useRef<HTMLInputElement | null>(null);
  const writeRef = useRef<HTMLDivElement | null>(null);
  const fileRef = useRef<HTMLInputElement>();
  const [thumbnail,setThumbnail] = useState(null);
  const [communityOption,setCommunityOption] = useState<string>();
  const [writeData,setWriteData] = useState<string>('');


  function writeSubmit(event:React.FormEvent){
    event.preventDefault();
    console.log(communityOption)
    if(communityOption){
      const emptyUserName = 'Avoler'
      const writeValue = writeRef.current?.innerHTML ? writeRef?.current?.innerHTML.split('<div>').join('').split('</div>').join('<br>') : ''
      const query = {
        content:`<p>${writeValue}</p>`,
        community:communityOption,
        title:titleRef.current?.value ? titleRef.current?.value : '',
        userName:emptyUserName,
        thumbnail:thumbnail
      }

      dbHook.write.post(query)
    }else{
      alert('게시판을 선택해 주세요.')
    }

  }
  async function inputFilesChange(event:any){
    const emptyUserName = 'Avoler'
    const emptyUserNumber = ''+11;
    const formData = new FormData();
    const file = event.currentTarget.files[0];
    formData.append('userNumber',emptyUserNumber)
    formData.append('image',file)
    await Promise.all([dbHook.write.postImage(formData)])
    .then(([res])=>{
      console.log('파일 보내기 완료',res)
      if(!thumbnail) setThumbnail(res.data)
      dbHook.write.getImage(res.data)
      .then((ress)=>{
        const srcUrl = process.env.NEXT_PUBLIC_SERVER_API_IMAGES_URL+`?src=${res.data}`
        const original = writeRef.current?.innerHTML;
        const divC:HTMLDivElement = document.querySelector("#editDiv")
        divC.innerHTML = `${original}<img src=${srcUrl} alt='image'/><br>`
        
      })
    })
    .catch((err)=>{
      console.log('파일 보내기 실패',err)
    })
  }
  useEffect(()=>{
    console.log('옵션',communityOption)
  },[communityOption])

  function onInput(event){
    console.log(writeRef.current?.innerHTML)
    


  }
  return (
    <Wrap>
      <WriteForm onSubmit={writeSubmit}>
        <Container>
          <Title>글쓰기</Title>
          <CategorySelect>
            <select onChange={(event:React.ChangeEvent<HTMLSelectElement>) => {setCommunityOption(event.target.value)}}>
              <option hidden={true}>채널 선택</option>
              {CommunityWriteOptionList.map((name:any) => 
                <option key={name} value={name}>{name}</option>
              )}
            </select>
          </CategorySelect>
          <WriteInput>
            <label>
              <span>제목</span>
              <input name="title" placeholder="제목" autoComplete="off" title="제목입력" ref={titleRef}/>
            </label>
          </WriteInput>
          <WriteInput>
            <label>
              <span>제목</span>
              <input type="file" ref={fileRef} className="link" name="imageUpload" placeholder="empty파일 업로드" onChange={inputFilesChange}  accept="image/*"/>
            </label>
          </WriteInput>
          <WriteContent>
            <Content>
              <EditContain>
                <Edit id="editDiv" contentEditable={true} suppressContentEditableWarning={true} ref={writeRef} onInput={onInput}>
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
      <div>
        {Paser(writeData)}
      </div>
    </Wrap>
  )
}
const PostImageContainer = styled.div`
  height: 100%;
  span {
    position: unset !important;
  }
`;

const PostImage = styled(Image)`
  object-fit: scale-down;
  width: unset !important;
  position: relative !important;
  height: 100% !important;
`;
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
      :focus{
        outline: none;
      }
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
  overflow:auto;
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
  margin-top: 10px;
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
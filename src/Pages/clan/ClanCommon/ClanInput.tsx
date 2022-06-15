import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {ReactComponent as UpLoad} from "/MyApp/wewi.gg/src/images/icons/file-folder-svgrepo-com.svg"
  interface I_file{
    lastModified:number,
    lastModifiedDate:object,
    name:string,
    size:number,
    type:string,
    webkitRelativePath:string
  }
function ClanInput() {

  const history = useNavigate();
  const cardOut = () => history("/clan");
  const [file , setFile] = useState<I_file>({
    lastModified:0,
    lastModifiedDate:{},
    name:"파일 선택",
    size:0,
    type:"",
    webkitRelativePath:""
  });
  const onLoadFile = (e:any) => {
    setFile(e.target.files[0]);
  }
  const clanData = {
    Name:"",
    Banner:file,
    Intro:"",
    Password:0,
  }
  
  return (
    <>
      <Overlay onClick={cardOut}/>
      <Wrap>
        <Head>
          <CardName>클랜 등록</CardName>
          <Xbutton onClick={cardOut}>X</Xbutton>
        </Head>
        <Form onSubmit={(event) => event.preventDefault()}>
          <Column>
          
          
            <Left id="left" style={{marginRight:"35px"}}>
              <Label>클랜 이름</Label>
              <Input onChange={(e)=> clanData.Name = e.target.value} />
              <InWrap>
                <Label>배너 파일</Label>
                <FileWrap id="Wrap">
                  <span>{file.name}</span>
                  <FileLabel htmlFor="bannerImage"><UpLoad style={{width:"20px" , height:"20px" , fill:"gray"}}/></FileLabel>
                  <FileInput id="bannerImage" type="file" accept="image/jpg, image/png, image/jpeg" onChange={onLoadFile}></FileInput>
                </FileWrap>
                  
              </InWrap>
              <InWrap>
                  <Label>비밀번호</Label>
                  <Input onChange={(e)=> {clanData.Password = Number(e.target.value)}}  placeholder="4자리 이상 비밀번호를 입력해주세요" />
              </InWrap>
            </Left>
            <Right>
              <InWrap style={{padding:"0"}}>
                <Label>클랜 소개글</Label>
                <TextArea onChange={(e)=> clanData.Intro = e.target.value} style={{
                  height: '13rem',
                  
                }}/>
              </InWrap>
              
              

            </Right>
            
          </Column>
          <ExitWrap>
                <CancelBt>취소</CancelBt>
                <OkBt onClick={()=> console.log(clanData)}>등록</OkBt>
          </ExitWrap>
        </Form>
      </Wrap>
    </>
  );
}

export default ClanInput;

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
  height: 25.4rem;
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
  width: 12.5rem;
  height: 2.5rem;
  font-size: 0.875rem;
  background-color: #28283b;
  color: white;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 5px;
  padding: 0.8rem;
  word-wrap: break-word;
  white-space:pre;
  word-break:break-all;
  :focus,:active{
    outline: none;
  }
`;
const FileWrap = styled.div`
  width: 200px;
  height: 2.5rem;
  font-size: 0.875rem;
  position: relative;
  background-color: #28283b;
  color: white;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 5px;
  span{
    position:absolute;
    left: 5%;
    top: 30%;
    color: #6B6B6D;
  }
`;
const FileLabel =styled.label`
  position: absolute;
  right: 15px;
  top: 10px;
  cursor: pointer;
`;
const FileInput = styled.input`
  display: none;
`;
const TextArea = styled.textarea`
  width: 12.5rem;
  height: 2.5rem;
  font-size: 0.875rem;
  background-color: #28283b;
  color: white;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 5px;
  padding: 0.8rem;
  word-wrap: break-word;
  word-break:break-all;
  line-height: 20px;
  resize: none;
  :focus,:active{
    outline: none;
  }
`;
const Column = styled.div`
  display: flex;
  padding: 8px 0 0 0;
  
`;
const InWrap = styled.div`
  padding: 8px 0 0 0;
`;
const Left = styled.div`
  width: fit-content;
  height: fit-content;
`;
const Right = styled.div`

`;

const ExitWrap = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  
`;
const CancelBt = styled.button`
font-size: 22px;
  width: 48%;
  height: 3.2rem;
  border: 0.08rem solid rgba(123,122,142,0.8);
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;
`;
const OkBt = styled.button`
font-size: 22px;
  width: 48%;
  height: 3.2rem;
  border: 0.08rem solid rgba(123,122,142,0.8);
  border-radius: 5px;
  background-color: #7c7c83;
  cursor: pointer;
`;
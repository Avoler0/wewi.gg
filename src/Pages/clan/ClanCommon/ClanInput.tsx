import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function ClanInput() {
  const history = useNavigate();
  const cardOut = () => history("/clan");
  return (
    <>
      <Overlay onClick={cardOut}/>
      <Wrap>
        <Head>
          <CardName>클랜 등록</CardName>
          <Xbutton onClick={cardOut}>X</Xbutton>
        </Head>
        <Form>
          <Label>클랜 이름</Label>
          <Input/>
          <Column>
            <Left>
              <InWrap>
                <Label>배너 이미지</Label>
                <Input />
              </InWrap>
              <InWrap>
                <Label>클랜 소개글</Label>
                <Input style={{
                  height: '13rem'
                }}/>
              </InWrap>
            </Left>
            <Right>
              <InWrap>
                <Label>카테고리</Label>
                <CategoryWrap>
                  <Label>모집 나이</Label>
                  <CategoryBt>All</CategoryBt>
                  <CategoryBt>15+</CategoryBt>
                  <CategoryBt>19+</CategoryBt>
                  <Label>클랜 성향</Label>
                    <CategoryBt>친목</CategoryBt>
                    <CategoryBt>실력</CategoryBt>
                  <Label>게임 모드</Label>
                    <CategoryBt>모든게임</CategoryBt>
                    <CategoryBt>일반게임</CategoryBt>
                    <CategoryBt>랭크게임</CategoryBt>
                </CategoryWrap>
              </InWrap>
              <PassWord>
                  <Label>비밀번호</Label>
                  <Input style={{
                    width: '14.7rem'
                  }} placeholder="4자리 이상 비밀번호를 입력해주세요" />
                </PassWord>
              <ExitWrap>
                <CancelBt></CancelBt>
                <OkBt></OkBt>
              </ExitWrap>

            </Right>
            
          </Column>
          
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
const Column = styled.div`
  display: flex;
  padding: 8px 0 8px 0;
`;
const InWrap = styled.div`
  
  padding: 8px 15px 0 0;
`;
const Left = styled.div`

`;
const Right = styled.div`

`;
const CategoryWrap = styled.div`
  width: 14.7rem;
  height: 9.5rem;
  background-color: #262641;
  padding: 5px;
`;
const CategoryBt = styled.button`

`;
const PassWord = styled.div`
  
`;
const ExitWrap = styled.div`
  margin-top: 10px;
  width: 14.7rem;
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
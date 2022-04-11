import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function DuoInput() {
  const history = useNavigate();
  const overlayClick = () => history("/duo");
  return (
    <>
    <Overlay onClick={overlayClick} />
    <Wrap>
      <Head>
        <CardName>소환사 등록하기</CardName>
      </Head>
      <Form>
        <NameLabel htmlFor="name">소환사 명</NameLabel>
        <NameInput id="name"/>
        <ColumnMiddle>
          <LineWrap>
            <LineLabel>주 포지션</LineLabel>
            <LineBox>
              <LineItem>모두</LineItem>
              <LineItem>탑</LineItem>
              <LineItem>정글</LineItem>
              <LineItem>미드</LineItem>
              <LineItem>원딜</LineItem>
              <LineItem>서폿</LineItem>
            </LineBox>
          </LineWrap>
          <QueueType>
            <TypeLabel>큐 타입</TypeLabel>
            <TypeSelect>

            </TypeSelect>
          </QueueType>
          <MicCheck>
            <MicLabel>마이크</MicLabel>
            <MicButton>
              <MicCircle />
            </MicButton>
            
          </MicCheck>
        </ColumnMiddle>
        
        <MemoInput />
        <PassWord />
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
  width: 25vw;
  height: 50vh;
  background-color: red;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;
const Head = styled.div`
  padding: 14px 14px 8px 14px;
`;
const CardName = styled.h3`
  font-weight: bold;
`;
const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-top: 1px solid black;
`;
const NameLabel = styled.label`
  font-size: 14px;
  padding: 12px 0 8px 0;
  
`;
const NameInput = styled.input`
  height: 6vh;
  background-color: gray;
  border: 1px solid rgba(0,0,0,0.2);
`;
const ColumnMiddle = styled.div`
  display: flex;
  padding: 8px 0 8px 0;
`;
const LineWrap = styled.div`

`;
const LineLabel = styled.label`
  font-size: 14px;
`;
const LineBox = styled.ul`
  display: flex;
`;
const LineItem = styled.li`
  width: 2vw;
  height: 4vh;
`;
const QueueType = styled.div`
  
`;
const TypeLabel = styled.label`
  display: block;
`;
const TypeSelect = styled.select`
  width: 7vw;
  height: 6vh;
`;
const MicCheck = styled.div`

`;
const MicLabel = styled.label`
  display: block;
`;
const MicButton = styled.button`
  width: 4rem;
  height: 2rem;
  border-radius: 9999px;
  position: relative;
  display: inline-flex;
`;
const MicCircle = styled.span`
  position: absolute;
  background-color: red;
  border-radius: 9999px;
  top: 0;
  left: 0;
  width: 1.75rem;
  height: 1.75rem;
  display: inline-block
`;
const MemoInput = styled.input`

`;
const PassWord = styled.input`

`;
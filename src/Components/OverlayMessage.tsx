import { useMatch, useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";

function OverlayMessage({setPostState , postState , setData} :any) {
  const overLayOut = () => {
    setPostState({
      window:false
    });
    if(setData){
      
    }
  }
  console.log(postState);
  
  return (
    <>
      <Overlay onClick={overLayOut}></Overlay>
      <Wrap>
        <OkBt onClick={overLayOut}>X</OkBt>
        <Content>
          <MessageTitle>
            {postState.type === '200' ? "등록 성공" : "등록 실패"}
          </MessageTitle>
          <MessageContent>
            {postState.message}
          </MessageContent>
          
        </Content>
      </Wrap>
    </>
  );
}

export default OverlayMessage;

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
  bottom: 50vh;
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
  margin: 0 auto;
  border: none;
  color: whitesmoke;
  background-color: transparent;
  font-size: 18px;
  cursor: pointer;
`;
const MessageTitle = styled.div`
  text-align: center;
  height: 58px;
  padding-top: 1rem;
  font-size: 26px;
  font-weight: 900;
  letter-spacing:8px
`;
const MessageContent = styled.div`
  text-align: center;
  padding-top: 1rem;
  font-size: 18px;
`;

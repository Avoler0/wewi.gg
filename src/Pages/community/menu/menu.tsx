import { useState } from "react";
import styled from "styled-components";

function CommunityMenu({select}:any){
  const [login,setLogin] = useState(false);

  return (
    <Wrap>
      <Account>
        <DontLogin>
          <LoginBt>로그인</LoginBt>
        </DontLogin>
      </Account>
      <Content>
        <Menu>
          <MenuTitle>홈</MenuTitle>
          <MenuList>
            <MenuItem onClick={() => select("All")}>전체</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuTitle>정보</MenuTitle>
          <MenuList>
            <MenuItem onClick={() => select("Notice")}>공지사항</MenuItem>
            <MenuItem onClick={() => select("LoLInfo")}>롤 소식</MenuItem>
            <MenuItem onClick={() => select("Tip")}>팁과 노하우</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuTitle>커뮤니티</MenuTitle>
          <MenuList>
            <MenuItem onClick={() => select("Free")}>자유</MenuItem>
            <MenuItem onClick={() => select("Fun")}>유머</MenuItem>
            <MenuItem onClick={() => select("Video")}>영상</MenuItem>
            <MenuItem onClick={() => select("Event")}>사건사고</MenuItem>
            <MenuItem onClick={() => select("FanArt")}>팬아트</MenuItem>
          </MenuList>
        </Menu>
      </Content>
    </Wrap>
  );
}
const Wrap = styled.div`
  width: 250px;
  height: fit-content;
  background-color: #2c3e50;

`;
const Account = styled.div`
  height: 8rem;
  
  
`;
const DontLogin = styled.div`
  position: relative;
  margin: 0 auto;
`;
const LoginBt = styled.button`
  position: absolute;
  width: 8.5rem;
  height: 2.3rem;
  top: 2.6rem;
  left: 53px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;
const Content = styled.div`

 
`;
const Menu = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.35);
  padding: 15px;
`;
const MenuTitle = styled.div`
  padding-bottom: 8px;
  line-height: 15px;
  font-size: 12px;
  color: #dacece;
`;
const MenuList = styled.ul`
  
`;
const MenuItem = styled.li`
  height: 2.2rem;
  border-radius: 5px;
  padding: 8px;
  font-size: 15px;
  cursor: pointer;
  :hover{
    background-color: gray;
  }
`;
export default CommunityMenu;
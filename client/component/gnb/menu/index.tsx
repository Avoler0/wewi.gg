import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setLogout } from "../../../redux/login/user";

type props = {
  hide:Function
}
function UserMenu({hide}:props){
  const Items:string[] = ['내 정보 보기','쪽지함','새 알림','로그아웃']
  const dispatch = useDispatch();
  function logout(){
    dispatch(setLogout());
    hide();
  }
  return (
    <Wrap>
      <Content>
        {Items.map((item:string)=>{
          if(item === '로그아웃') return <MenuItems key={item} onClick={logout}>{item}</MenuItems>
          else return <MenuItems key={item}>{item}</MenuItems>
        })}
      </Content>
    </Wrap>
  )
}

export default UserMenu;

const Wrap = styled.div`
  position: absolute;
  top: 2.5rem;
  right: 0;
  background-color: #394f64;
  color: whitesmoke;
  z-index: 100;
`;
const Content = styled.ul`

`;
const MenuItems = styled.li`
  padding: 5px;
  cursor: pointer;
`;
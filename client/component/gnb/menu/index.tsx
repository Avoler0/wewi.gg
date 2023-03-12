import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setLogout } from "../../../redux/login/user";

type props = {
  showMenu:boolean,
  setShowMenu:Function
}
function UserMenu({showMenu,setShowMenu}:props){
  const Items:string[] = ['내 정보 보기','쪽지함','새 알림','로그아웃']
  const dispatch = useDispatch();
  function logout(){
    dispatch(setLogout());
  }
  return (
    <Wrap show={showMenu}>
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

const Wrap = styled.div<{show:boolean}>`
  display: ${props => props.show ? 'block' : 'none'};
  transition: all 0.3s ease;
  position: absolute;
  float: right;
  top: 42px;
  background-color: #fff;
  color: black;
`;
const Content = styled.ul`

`;
const MenuItems = styled.li`
  padding: 5px;
  cursor: pointer;
`;
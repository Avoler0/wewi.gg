import { useSelector } from "react-redux";
import styled from "styled-components"
import CommunityIsLogin from "./loginBox/isLogin";
import CommunityNonLogin from "./loginBox/nonLogin";


export default function CommunityLoginBox(){ // 왼쪽 메뉴 상단 부분 로그인 박스
  const user = useSelector((state:any)=> state.user)
  return(
    <LoginBox>
      {user.state ? <CommunityIsLogin user={user}/> : <CommunityNonLogin />}
    </LoginBox>
  )
}

const LoginBox = styled.div`
  display: table;
  width: 100%;
  table-layout: fixed;
`;

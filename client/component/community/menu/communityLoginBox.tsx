import { useSelector } from "react-redux";
import styled from "styled-components"
import CommunityIsLogin from "./loginBox/isLogin";
import CommunityNonLogin from "./loginBox/nonLogin";


export default function CommunityLoginBox(){
  const user = useSelector((state:any)=> state.user)
  console.log('로그인 박스 유저',user)
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

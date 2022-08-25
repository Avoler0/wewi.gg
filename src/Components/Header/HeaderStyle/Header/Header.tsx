import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getLoginState,  getUserData,  isLoggedIn,  isLoggedOut, isLoginState  } from "../../../../commons/loginState";
import { ReactComponent as UserMenu } from "../../../../images/icons/menu-svgrepo-com.svg"
import React from "react";

function Header({user,isLoggedIn,isLoggedOut,isLoginState}:any) {
  const history = useNavigate();
  const [useMenu,setUseMenu] = useState(false);
  const loginClick = () => history('/login')
  interface userData{
    login:string,
    user:{
      email: string
      exp: number
      iat: number
      iss: string
}
  }
  const userLocal = getLoginState();
  const userData = getUserData(userLocal.token)
  
  useEffect(()=>{
    if(userLocal.login !== null){
      isLoginState({login:userLocal.login , token:userLocal.token})
    }
  },[])

  function onLogout() {
    isLoggedOut("");
    // timeLimit(location.reload(),1000);
  }
  function userMenu(){
    setUseMenu(prev => !prev)
  }
   // 로그인 , 회원가입 창에서는 헤더를 띄우지 않음
  console.log("로컬스토리지",userLocal);
  console.log("유저데이터",userData);
  
  
  
  return (
    <Content onClick={() => useMenu && setUseMenu(false)}>
      <Head>
        <Logo onClick={() => history("/")}>
          WEWI.GG
        </Logo>
        <UserWrap>
        {userLocal.login === "login" && userData ?  (
            <>
              { <UserName>{userData.iss}</UserName> }
              <UserMenu onClick={userMenu} xmlns={`${UserMenu}`} style={{ width:"13px",
            fill:"#fff" , cursor:"pointer"}}/>
            </>
          ) : <Login onClick={loginClick}>로그인</Login>}
          {useMenu && <Menu>
            <div>{userData.email}</div>
            <LogOut onClick={onLogout}>로그아웃</LogOut>
            </Menu>}
        </UserWrap>
      </Head>
    </Content>
  );
}
const Content = styled.div`
  /* max-width: 1903px; */
  width: 100vw;
  position: relative;
  background-color:#1e2a35 ;
`;
const Head = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 1200px ;
`;

const Logo = styled.div`
  margin-right: 50px;
  width: 95px;
  height: 25px;

  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
`;

const UserWrap = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
  font-size: 14px;
  padding-top: 10px;
  height: fit-content;
  margin-left: 1.2rem;
  @media (min-width: 992px) and (max-width: 1199px) {
    font-size: 16px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 14px;
  }
  @media (max-width: 767px){
	  font-size: 12px;
  }
`;
const Login = styled.div`
  cursor: pointer;
  background-color: #3d556b;
  border-radius: 5px;
  padding: 5px 10px;
`;
const UserName = styled.span`
  font-size: 16px;
  padding-bottom: 5px;
`
const Menu = styled.div`
  position: absolute;
  background-color: #2d3e4e;
  width: 150px;
  height: 70px;
  padding: 10px;
  top:50px;
  right: 0;
  font-size: 16px;
`;
const LogOut = styled.button`
  margin: 0;
  margin-top: 5px;
  padding: 0;
  border: none;
  background-color: transparent;
  color: white;
  cursor: pointer;
  :hover{
    color: #af8989;
  }
`




function userStateProps(state:any){
  console.log("헤더스탯",state);
  return {user:state}
}

function userLoginState(dispatch:any){
return {
    isLoggedIn:(login:boolean) => dispatch(isLoggedIn(login)),
    isLoginState: (login:boolean) => dispatch(isLoginState(login)),
    isLoggedOut: (login:boolean) => dispatch(isLoggedOut(login)),
    
  }
}

export default connect(userStateProps , userLoginState) (Header);
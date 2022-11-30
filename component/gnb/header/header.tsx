import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import UserMenu from "../../../images/icons/menu-svgrepo-com.svg"
import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setLogout } from "../../../redux/login/user";
// import { accountReduxT } from "../../../Types/accountTypes";
// import AccountMenu from "./Menu";

export default function HeaderJSX() {
  const dispatch = useDispatch();
  const user = useSelector((state:any)=>{
    return state.user;
  })
  
  function logout(){
    dispatch(setLogout())
  }
  console.log("헤더 스테이트",user)
  return (
    <Header>
      <Content>
        <Logo>
          <Link href="/">
            WEWI.GG
          </Link>
        </Logo>
        <UserWrap>
        
            {user.state ? (
                <>
                  <UserName>{user.nickName}님</UserName>
                  <button onClick={logout}>로그아웃</button>
                </>
            )
          : (
            <Login>
              <Link href={'/login'}>
                로그인
              </Link>
            </Login>
          )}
            
        </UserWrap>
      </Content>
    </Header>
  );
}
const Header = styled.header`
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 0.5rem;
  background-color:#1e2a35 ;
`;
const Content = styled.div`
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
  color: white;
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
  color: white;
  font-size: 16px;
  font-weight: 500;
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
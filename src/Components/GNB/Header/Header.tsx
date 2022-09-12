import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ReactComponent as UserMenu } from "../../../images/icons/menu-svgrepo-com.svg"
import React from "react";
import { accountReduxT } from "../../../Types/accountTypes";
import AccountMenu from "./Menu";
interface props {
  account : accountReduxT
}
export default function Header({account}:props) {
  const navigate = useNavigate();
  const [useMenu,setUseMenu] = useState(false);
  const nowPath = window.location.hash;

   // 로그인 , 회원가입 창에서는 헤더를 띄우지 않음
  if(nowPath === "/login" && "/register"){
    return <Head />;
  }
  
  return (
    <Content onClick={() => useMenu && setUseMenu(false)}>
      <Head>
        <Logo onClick={() => navigate("/")}>
          WEWI.GG
        </Logo>
        <UserWrap>
        {account.login ?  (
            <>
              { <UserName>{account.nickName}</UserName> }
              <UserMenu onClick={() => setUseMenu(prev => !prev)} xmlns={`${UserMenu}`} style={{ width:"13px",
            fill:"#fff" , cursor:"pointer"}}/>
            </>
          ) : <Login onClick={() => navigate('/login')}>로그인</Login>}
          {useMenu && <Menu>
             <AccountMenu account={account} />
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
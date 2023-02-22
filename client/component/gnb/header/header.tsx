import styled from "styled-components";
import { useState } from "react";
import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import Image from "next/image";
import UserMenu from "../menu";


export default function HeaderJSX(){
  const [showMenu,setShowMenu] = useState(false);
  const user = useSelector((state:any)=>{
    return state.user;
  })
  console.log('헤더 유저',user)
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
                  <MenuIcon onClick={()=>setShowMenu(prev => !prev)}>
                    <Image src={'/images/public-icons/menu.svg'} alt='menu' layout="fill" objectFit="cover"/>
                  </MenuIcon>
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
        {showMenu && <UserMenu hide={setShowMenu} />}
      </Content>
      
    </Header>
  );
}

const Header = styled.header`
  width: 100%;
  height: 100%;
  padding: 0.4rem 0;
  border-bottom: 1px solid #9e9fa3;
`;
const Content = styled.div`
  position: relative;
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
const MenuIcon = styled.div`
  position: relative;
  width: 15px;
  height: 15px;
  cursor: pointer;
`;
const UserWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
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
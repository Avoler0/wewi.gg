import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { searchMovePath } from "../../../hooks/searchMovePath";

export default function Navigation() {
  const PAGE = {
    DUO: "duo",
    CLAN: "clan",
    COMMUNITY: "community",
  }
  const urlPath = "/"


  return (
    <Nav>
      <Content>
        <div>
          <NavItems>
            <NavItem>
              <Link href="/" style={{borderBottom: urlPath === "/" ? "2px solid white" : "none" }}>홈</Link>
            </NavItem>
            <NavItem>
              <Link href="/duo" style={{borderBottom: urlPath === `/${PAGE.DUO}` ? "2px solid white" : "none" }}>듀오</Link>
            </NavItem>
            <NavItem>
              <Link href="/community" style={{borderBottom: urlPath === `/${PAGE.CLAN}` ? "2px solid white" : "none" }}>커뮤니티</Link>
            </NavItem>
            <NavItem>
              <Link href="/leaderboards" style={{borderBottom: urlPath === `/${PAGE.COMMUNITY}` ? "2px solid white" : "none" }}>랭킹</Link>
            </NavItem>
          </NavItems>
        </div>
        <div>
          <Colum>
            <SearchWrap onSubmit={searchMovePath}>
              <SearchIco>GG</SearchIco>
              <SearchInput type="text" name="search" />
              {/* <SearchTest /> */}
              <SearchButton>검색</SearchButton>
            </SearchWrap>
          </Colum>
        </div>
    </Content>
  </Nav>
    )
}

const Nav = styled.nav`
  padding: 0.2rem 0;
  color: #bdc3c7;
  @media (min-width: 992px) and (max-width: 1199px) {
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 568px;
    justify-content: space-around;
  }
  @media (max-width: 767px){
    width: 567px;
    justify-content: space-around;
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px ;
  padding: 10px 0 ;
  margin: 0 auto ;
  font-size: 20px;
`;
const Colum = styled.div`
  display: flex;
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0;
  padding: 0;
`;
const NavItem = styled.li`
  margin-right: 3rem ;
  list-style: none;
  display: flex;
  justify-content: middle;
  cursor: pointer;

  @media (min-width: 992px) and (max-width: 1199px) {
    font-size: 22px;
    margin-right: 32px ;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 16px;
    margin-right: 22px ;
  }
  @media (max-width: 767px){
	  font-size: 16px;
    margin-right: 7px ;
  }
`;
const SearchWrap = styled.form`
  display: flex;
  position: relative;
  background-color: #2d3e4e;
  border: 1px solid #554747;
`;
const SearchIco = styled.div`
  padding-right: 4px;
  cursor: pointer;
  color: #a4b5c5;
  padding: 0 0.2rem;
  font-size: 24px;
  font-weight: bold;
  height: 35px;
`;
const SearchInput = styled.input`
  border: 0px;
  box-sizing: border-box;
  background-color: transparent;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  width: 200px;
  padding-left: 15px;
  :focus{
    outline: none;
  }
`;
const SearchButton = styled.button`
  border: none;
  background-color: transparent;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  height: 100%;
  cursor: pointer;
`;
const Register = styled.div`
  cursor: pointer;
`;
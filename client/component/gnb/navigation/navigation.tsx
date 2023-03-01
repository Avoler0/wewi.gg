import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { searchMovePath } from "../../../hooks/searchMovePath";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();
  const PAGE = {
    DUO: "duo",
    CLAN: "clan",
    COMMUNITY: "community",
  }
  const urlPath = router.pathname.split('/')[1]

  return (
    <Nav>
      <Content>
        <div>
          <NavItems>
            <NavItem style={{borderBottom: urlPath === "" ? "2px solid white" : "none" }} path={router.pathname === `/`}>
              <Link href="/">홈</Link>
            </NavItem>
            <NavItem path={urlPath === `${PAGE.DUO}`}>
              <Link href="/duo">듀오찾기</Link>
            </NavItem>
            <NavItem path={urlPath === `${PAGE.COMMUNITY}`}>
              <Link href="/community">커뮤니티</Link>
            </NavItem>
            {/* <NavItem>
              <Link href="/leaderboards" style={{borderBottom: urlPath === `/${PAGE.COMMUNITY}` ? "2px solid white" : "none" }}>랭킹</Link>
            </NavItem> */}
          </NavItems>
        </div>
        <div>
          <Colum>
            <SearchWrap onSubmit={searchMovePath}>
              {/* <SearchIco>GG</SearchIco> */}
              <SearchInput type="text" name="search" />
              {/* <SearchTest /> */}
              <SearchButton>.GG</SearchButton>
            </SearchWrap>
          </Colum>
        </div>
    </Content>
  </Nav>
    )
}

const Nav = styled.nav`
  padding: 0.1rem 0;
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
  font-weight: 700;
`;
const NavItem = styled.li<{path:any}>`
  margin-right: 3rem ;
  list-style: none;
  display: flex;
  justify-content: middle;
  cursor: pointer;
  color: ${props => props.path && '#fff'};
  border-bottom: ${props => props.path && '2px solid white'};
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
  padding: 0.2rem;
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
  &:-webkit-autofill {
    box-shadow: 0 0 0 1000px #2d3e4e inset !important;
    -webkit-text-fill-color: #fff;
  }
`;
const SearchButton = styled.button`
  border: none;
  background-color: transparent;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  height: 100%;
  cursor: pointer;
`;
const Register = styled.div`
  cursor: pointer;
`;
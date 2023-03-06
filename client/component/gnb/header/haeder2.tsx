import Image from "next/image";
import { useState } from "react";
import styled from "styled-components"
import SearchIcon from "../../../public/images/public-icons/search";
import SearchSvg from "../../../public/images/public-icons/search.svg";
import SearchToolBar from "../search/searchToolBar";


export default function Header2(){
  const [toolBar,setToolBar] = useState(false);

  function showToolBar(state:boolean){
    console.log('gg')
    setToolBar(prev => !prev)
  }
  
  return (
    <>
      <HeaderWrap>
        <Content>
          <Logo>
            <span>WEWI.GG</span>
          </Logo>
          <Nav>
            <Menu>
              <li>듀오찾기</li>
              <li>커뮤니티</li>
              <li>소환사 랭크</li>
            </Menu>
          </Nav>
          <Search>
            <span onClick={showToolBar} >
              검색
            </span>
          </Search>
          <User>
            <span>
              <button>
                로그인
              </button>
            </span>
          </User>
        </Content>
      </HeaderWrap>
      {toolBar && <SearchToolBar show={showToolBar} />}
    </>
  )
}

const HeaderWrap = styled.header`
  width: 100%;
  height: 4.5rem;
  background-color: RGB(21, 26, 34);
  color: #fff;
`
const Content = styled.nav`
  position: relative;
  height: 100%;
`;
const Logo = styled.div`
  position: absolute;
  left: 5rem;
  top: 50%;
  transform: translateY(-50%);
  font-weight: 700;
  font-size: 32px;
  color: white;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  height: 100%;
`;
const Menu = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
  li{
    justify-content: center;
    align-items: center;
    margin: 0 1.7rem;
    font-size: 1.2rem;
    font-weight: 400;
  }
`;
const Search = styled.div`
  position: absolute;
  right: 8rem;
  top: 50%;
  margin-right: 8rem;
  transform: translateY(-50%);
  font-size: 1rem;
  font-weight: 400;
  span{
    position: relative;
  }
`;
const User = styled.div`
  position: absolute;
  right: 9.5rem;
  top: 50%;
  transform: translateY(-50%);
  
  button{
    background-color: rgba(43, 31, 211, 0.678);
    color: #fff;
    border-radius: 5px;
    border: none;
    font-size: 1rem;
    font-weight: 400;
  }

  button span{
    padding: 0.5rem;
  }
`;
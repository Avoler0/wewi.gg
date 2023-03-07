import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components"
import SearchIcon from "../../../public/images/public-icons/search";
import SearchSvg from "../../../public/images/public-icons/search.svg";
import SearchToolBar from "../search/searchToolBar";


export default function Header2(){
  const router = useRouter();
  const [hoverHeader, setHoverHeader] = useState(false);
  const [toolBar,setToolBar] = useState(false);
  const showToolBar = () => {
    setToolBar(prev => !prev)
    setHoverHeader(prev => !prev)
  } ;
  const mouseOut = () => {
    if(toolBar){
      return
    }else{
      setToolBar(false)
      setHoverHeader(false)
    }
  }
  console.log('호버',hoverHeader, '액티브',toolBar)
  return (
    <>
      <HeaderWrap >
        <Content onMouseEnter={() => setHoverHeader(true)} onMouseLeave={mouseOut} mouse={hoverHeader}>
          <Logo>
            <span>
              <Link href="/">WEWI.GG</Link>
            </span>
          </Logo>
          <Nav>
            <Menu>
              <li>
                <Link href="/duo">듀오찾기</Link>
              </li>
              <li>
                <Link href="/community">커뮤니티</Link>
              </li>
              <li>
                <Link href="/champions">소환사 랭크</Link>
              </li>
            </Menu>
          </Nav>
          {
            toolBar ? null : router.pathname === '/' ? null :
            <Search>
              <span onClick={showToolBar} >
                검색
              </span>
            </Search>
          }
          <User>
            <span>
              <button>
                로그인
              </button>
            </span>
          </User>
          {toolBar && <SearchToolBar show={showToolBar} />}
        </Content>
      </HeaderWrap>
      {/* {hoverHeader ? toolBar &&  : null} */}
    </>
  )
}

const HeaderWrap = styled.header`
  position: fixed;
  width: 100%;
  color: #fff;
  /* background-color: RGB(21, 26, 34); */
  z-index: 100;
`
const Content = styled.nav<{mouse:any}>`
  position: relative;
  height: 4.5rem;
  color: ${props => props.mouse ? 'RGB(21, 26, 34)' : '#fff'};
  background-color: ${props => props.mouse ? '#fff' : null};
`;
const Logo = styled.div`
  position: absolute;
  left: 5rem;
  top: 50%;
  transform: translateY(-50%);
  font-weight: 700;
  font-size: 32px;
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
    font-weight: 600;
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
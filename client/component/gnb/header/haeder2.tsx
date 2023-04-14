/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components"
import UserMenu from "../menu";
import SearchToolBar from "../search/searchToolBar";
import { useDispatch } from "react-redux";
import { jwtTokenDecode } from "../../../hooks/jwtToken";
import { setLogin } from "../../../redux/login/user";
import { removeToken } from "../../../redux/login/token";


export default function Header2(){
  const router = useRouter();
  const token = useSelector((state:any)=> state.token)
  const dispatch = useDispatch();
  const [hoverHeader, setHoverHeader] = useState(false);
  const [toolBar,setToolBar] = useState(false);
  const [showMenu,setShowMenu] = useState(false);
  const user = useSelector((state:any)=>{
    return state.user;
  })


  function showToolBar(){
    setToolBar(prev => !prev)
  } ;
  function mouseOut(){
    if(!toolBar){
      setToolBar(false)
      setHoverHeader(false)
      setShowMenu(false)
    }
    return
  }
  function scrollHandler(){
    if(window.scrollY > 0) {
      setHoverHeader(true)
    }else{
      setHoverHeader(false)
    }
  }
  useEffect(()=>{
    const payload = jwtTokenDecode(token.token);

    console.log(payload)
    if(payload){
      dispatch(setLogin({
        id:payload.id,
        type:payload.type,
        email:payload.email,
        nickName:payload.name,
      }));
    }else{
      dispatch(removeToken())
    }
    
    window.addEventListener('scroll',scrollHandler);
    return(()=>{
      window.addEventListener('scroll',scrollHandler);
    })

    
  },[])
  


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
              <li>
                <Link href="/spectate/pro-gamer">프로 관전</Link>
              </li>
            </Menu>
          </Nav>
          <RightColumn>
            {
              toolBar ? null : router.pathname === '/' ? null :
              <Search>
                <span onClick={showToolBar} >
                  검색
                </span>
              </Search>
            }
            <User>
              {user.state ? (
                  <UserContent>
                    <span>{user.nickName}님</span>
                    <img src={'/images/public-icons/menu.svg'} alt='menu' width="15" height="15" onClick={()=>setShowMenu(prev => !prev)}/>
                  </UserContent>
                  )
                : (
                  <UserContent>
                    <span>
                      <button>
                        <Link href="/account/login">로그인</Link>
                      </button>
                    </span>
                  </UserContent>
                )}
                
                <UserMenu showMenu={showMenu} setShowMenu={setShowMenu} />
                {/* {hoverHeader ? showMenu ?   <UserMenu showMenu={setShowMenu} showHover={showMenu} /> : null : null} */}
            </User>
          </RightColumn>
          
          <SearchToolBar show={toolBar}  setShow={showToolBar}/>
        </Content>
      </HeaderWrap>
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
  transition: all 0.3s ease;
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
    font-size: 1.1rem;
    font-weight: 600;
  }
  
  li:hover{
    color: #000000a4;
    border-bottom: 2px solid #000000a4;
  }
`;

const RightColumn = styled.div`
  display: flex;
  position: absolute;
  right: 8rem;
  top: 50%;
  transform: translateY(-50%);
`;

const Search = styled.div`
  margin-right: 2rem;
  font-size: 1rem;
  font-weight: 400;
  span{
    position: relative;
  }
`;
const User = styled.div`
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

const UserContent = styled.div`
  display: flex;
  align-items: center;

  span{
    margin-right: .5rem;
  }
`;
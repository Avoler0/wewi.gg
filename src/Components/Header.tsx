import styled from "styled-components";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getLoginState,  getUserData,  isLoggedIn,  isLoggedOut, isLoginState  } from "../commons/loginState";
import { timeLimit } from "../commons/functionCollection";
import { ReactComponent as UserMenu } from "../images/icons/menu-svgrepo-com.svg"

function Header({user,isLoggedIn,isLoggedOut,isLoginState}:any) {
  
  const loginMatch = useMatch('/login');
  const registerMatch = useMatch('/register');
  const history = useNavigate();
  const urlPath = location.pathname;
  const {register , watch,handleSubmit,setValue} = useForm();
  const summonWatch = watch("SummonerSearch");
  const [UseMenu,setUseMenu] = useState(false);
  const onValid = (data:any , e:any) => {}
  const searchClick = () => {
    history("/duo/"+summonWatch)
  }
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
    timeLimit(location.reload(),1000);
  }
  function userMenu(){
    setUseMenu(prev => !prev)
  }
  if(loginMatch !== null || registerMatch !== null) return null; // 로그인 , 회원가입 창에서는 헤더를 띄우지 않음
  console.log("로컬스토리지",userLocal);
  console.log("유저데이터",userData);
  
  
  
  return (
    <Content onClick={() => UseMenu && setUseMenu(false)}>
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
          {UseMenu && <Menu>
            <div>{userData.email}</div>
            <LogOut onClick={onLogout}>로그아웃</LogOut>
            </Menu>}
        </UserWrap>
      </Head>
      <Nav>
        <Colum>
            <NavItems>
              <NavItem>
                <Link to="/" style={{borderBottom: urlPath === "/" ? "2px solid white" : "none" }}>홈</Link>
              </NavItem>
              <NavItem>
                <Link to="/duo" style={{borderBottom: urlPath === "/duo" ? "2px solid white" : "none" }}>듀오서치</Link>
              </NavItem>
              <NavItem>
                <Link to="/clan" style={{borderBottom: urlPath === "/clan" ? "2px solid white" : "none" }}>클랜</Link>
              </NavItem>
              <NavItem>
                <Link to="/comunity" style={{borderBottom: urlPath === "/comunity" ? "2px solid white" : "none" }}>커뮤니티</Link>
              </NavItem>
            </NavItems>
        </Colum>
        <Colum >
          {!UseMenu && <Colum style={{ display:"flex" }}>
            <SearchWrap onSubmit={handleSubmit(onValid)} >
              <SearchIco onClick={() => history("/")}>GG</SearchIco>
              <SearchInput {...register("SummonerSearch")} />
              <SearchButton onClick={searchClick}>검색</SearchButton>
            </SearchWrap>
          </Colum>}
        </Colum>
      </Nav>
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
const Nav = styled.nav`
    display: flex;
    justify-content: center;
    padding: 10px 0 ;
    font-size: 20px;
    background-color:#1e2a35 ;
    color: #bdc3c7;
    margin: 0 auto ;
    width: 1200px ;
    justify-content: space-between;
    @media (min-width: 992px) and (max-width: 1199px) {
    width: 792px;
    justify-content: space-around;
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
const Logo = styled.div`
  margin-right: 50px;
  width: 95px;
  height: 25px;

  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
`;
const Colum = styled.div`
  position: relative;
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
`;
const NavItem = styled.li`
  margin-right: 52px ;
  list-style: none;
  position: relative;
  display: flex;
  width: fit-content;
  justify-content: center;
  cursor: pointer;
  a{
    width: fit-content;
    height:36px;
  }
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
  background-color: transparent;
  padding: 3px;
  font-size: 24px;
  font-weight: bold;
  height: 35px;
  @media (min-width: 992px) and (max-width: 1199px) {
    display: none;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    display: none;
  }
  @media (max-width: 767px){
	  display: none;
  }
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

  @media (min-width: 992px) and (max-width: 1199px) {
    width: 150px;
    font-size: 14px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 100px;
    font-size: 14px;
  }
  @media (max-width: 767px){
	  width: 50px;
    font-size: 12px;
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
  @media (min-width: 992px) and (max-width: 1199px) {
    font-size: 14px;
    
  }
  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 14px;
  }
  @media (max-width: 767px){
	  font-size: 12px;
  }
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
const Register = styled.div`
  cursor: pointer;
`;



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
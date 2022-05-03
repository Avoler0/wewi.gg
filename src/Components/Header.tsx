import styled from "styled-components";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { AT_loginCheck } from "../commons/loginCheck";

const Head = styled.header`
  /* max-width: 1903px; */
  width: 100vw;
  position: relative;

`;
const HeadLayout = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0 ;
  font-size: 24px;
  background-color:#1e2a35 ;
  color: #bdc3c7;
  margin: 0 auto ;

`;
const Nav = styled.nav`
    display: flex ;
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
const Logo = styled.svg`
  margin-right: 50px;
  width: 95px;
  height: 25px;
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
  /* background-color: red; */
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
  font-weight: bold;
  height: 35px;
  /* border: 1px solid #554747; */
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
  -webkit-autofill{
    background-color: white;
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
const LoginWrap = styled.div`
  display: flex;
  gap: 10px;
  font-size: 16px;
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
`;
const Register = styled.div`
  cursor: pointer;
`;
function Header() {
  const loginMatch = useMatch('/login');
  const registerMatch = useMatch('/register');
  const history = useNavigate();
  const homeMatch = useMatch("/");
  const {register , watch,handleSubmit,setValue} = useForm();
  const summonWatch = watch("SummonerSearch");
  const loginCheck = useRecoilValue(AT_loginCheck);
  const onValid = (data:any , e:any) => {}
  const ggClick = () => {
  }
  const searchClick = () => {
    history("/duo/"+summonWatch)
  }
  const loginClick = () => history('/login')
  const registerClick = () => history('/register')
  console.log(loginCheck);
  
  if(loginMatch !== null || registerMatch !== null) return null;
  return (
    <Head>
      <HeadLayout>
          <Nav>
            <Colum>
                <NavItems>
                  <NavItem>
                    <Link to="/">홈</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/duo">듀오서치</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/clan">클랜</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/comunity">커뮤니티</Link>
                  </NavItem>
                </NavItems>
            </Colum>
            <Colum>
              {
              !homeMatch ? 
              <Colum style={{
                display:"flex"
              }}>
                <SearchWrap onSubmit={handleSubmit(onValid)}>
                  <SearchIco onClick={ggClick}>GG</SearchIco>
                  <SearchInput   {...register("SummonerSearch")} />
                    <SearchButton onClick={searchClick}>
                        검색
                    </SearchButton>
                </SearchWrap>
                <LoginWrap style={{
                  paddingTop:"15px"
                }}>
                  <Login onClick={loginClick}>로그인</Login>
                </LoginWrap>
              </Colum> 
              : 
              <LoginWrap>
                <Login onClick={loginClick}>로그인</Login>
              </LoginWrap>
              }
              {/* // (<LoginWrap>
              //   <Login onClick={loginClick}>로그인</Login> 
              // </LoginWrap>) :  */}

            </Colum>
          </Nav>
      </HeadLayout>
    </Head>
    
  );
}

export default Header;
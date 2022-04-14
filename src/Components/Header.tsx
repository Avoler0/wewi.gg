import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Head = styled.header`
  max-width: 1903px;
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
    min-width: 1200px ;
    justify-content: space-between;
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
`;
const NavItem = styled.li`
  margin-right: 52px ;
  list-style: none;
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
const SearchWrap = styled.form`
  /* background-color: red; */
  display: flex;
  position: relative;
  background-color: white;
`;
const SearchIco = styled.div`
  margin-right: 4px;
  cursor: pointer;
  color: #74b9ff;
  background-color: #dfe6e9;
  padding: 3px;
  font-weight: bold;
`;
const SearchInput = styled.input`
  border: 0px;
  box-sizing: border-box;
  /* color: rgb(114, 114, 114); */
  :focus{
    outline: none;
  }
`;
const SearchButton = styled.button`
  border: none;
  background-color: white;
  /* font-size: ; */
`;
const LoginWrap = styled.div`
    display: flex;
    gap: 10px;
    font-size: 16px;
    padding-top: 10px;
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
  const onValid = (data:any , e:any) => {}
  const ggClick = () => {
  }
  const loginClick = () => history('/login')
  const registerClick = () => history('/register')
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
              {!homeMatch ? <SearchWrap onSubmit={handleSubmit(onValid)}>
                <SearchIco onClick={ggClick}>GG</SearchIco>
                <SearchInput   {...register("SummonerSearch")} />
                <Link to={`/duo/${summonWatch}`} style={{cursor:"pointer"}}>
                  <SearchButton onClick={() => setValue("SummonerSearch","")}>
                      검색
                  </SearchButton>
                </Link>
                
              </SearchWrap> : 
              <LoginWrap>
                <Login onClick={loginClick}>로그인</Login> 
                <Register onClick={registerClick}>회원가입</Register>
              </LoginWrap>
              }
            </Colum>
          </Nav>
      </HeadLayout>
    </Head>
    
  );
}

export default Header;
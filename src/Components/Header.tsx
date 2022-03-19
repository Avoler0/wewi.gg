import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useMatch } from "react-router-dom";
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
  background-color:#34495e ;
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
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SearchIco = styled.div`

`;
const SearchInput = styled.input`
  border: 0px;
  box-sizing: border-box;
  color: rgb(114, 114, 114);
`;
const SearchButton = styled.button`
`;
function Header() {
  const homeMatch = useMatch("/");
  const {register , watch,handleSubmit,setValue} = useForm();
  const summonWatch = watch("SummonerSearch");
  const onValid = (data:any , e:any) => {}
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
                <SearchIco>검색</SearchIco>
                <SearchInput   {...register("SummonerSearch")} />
                <Link to={`/duo/${summonWatch}`}>
                  <SearchButton onClick={() => setValue("SummonerSearch","")}>
                      검색
                    </SearchButton>
                </Link>
                
              </SearchWrap> : null}
            </Colum>
          </Nav>
      </HeadLayout>
    </Head>
    
  );
}

export default Header;
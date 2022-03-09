import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Nav = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between ;
  align-items: center;
  width: 100%;
  top: 0;
  left:0;
  padding: 20px 0 ;
  font-size: 24px;
  background-color:#3498db ;
  color: black;
`;
const Logo = styled.svg`
  margin-right: 50px;
  width: 95px;
  height: 25px;
`;
const Colum = styled.div`
  display: flex;
  align-items: center;
  padding: 0 60px ;
`;
const UlItems = styled.ul`
  display: flex;
  align-items: center;
`;
const LiItem = styled.li`
  margin-right: 52px ;
  list-style: none;
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
const Search = styled.div`
  margin-right: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

function Header() {
  return (
    <Nav>
      <Colum>
          <UlItems>
            <LiItem>
              <Link to="/">홈</Link>
            </LiItem>
            <LiItem>
              <Link to="/matching">듀오서치</Link>
            </LiItem>
            <LiItem>
              <Link to="/clan">클랜</Link>
            </LiItem>
            <LiItem>
              <Link to="/comunity">커뮤니티</Link>
            </LiItem>
          </UlItems>
      </Colum>
      <Colum>
        <Search>Search</Search>
        <span>
          <Link to="/login">Login</Link>
        </span>
      </Colum>
    </Nav>
  );
}

export default Header;
import styled from "styled-components";


export const Nav = styled.nav`
  background-color:#1e2a35 ;
  color: #bdc3c7;
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
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px ;
  padding: 10px 0 ;
  margin: 0 auto ;
  font-size: 20px;
`;
export const Colum = styled.div`
`;

export const NavItems = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
`;
export const NavItem = styled.li`
  margin-right: 52px ;
  list-style: none;
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
export const SearchWrap = styled.form`
  display: flex;
  position: relative;
  background-color: #2d3e4e;
  border: 1px solid #554747;
`;
export const SearchIco = styled.div`
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
export const SearchInput = styled.input`
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
export const SearchButton = styled.button`
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
export const Register = styled.div`
  cursor: pointer;
`;
import { useSelector } from "react-redux";
import { useMatch } from "react-router-dom";
import styled from "styled-components";
import Header from "./Head/Header";
import Navigation from "./Navigation/Navigation";


export default function HeaderIndex(){
  const loginMatch = useMatch('/login');
  const registerMatch = useMatch('/register');
  const account = useSelector((state:any) => state.account)
  if(loginMatch !== null || registerMatch !== null) return null;
  console.log("회원 데이터",account)
  return(
    <Container>
      <Header account={account}/>
      <Navigation />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
`;
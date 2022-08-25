import { useMatch } from "react-router-dom";
import styled from "styled-components";
import Header from "./HeaderStyle/Header/Header";
import Navigation from "./HeaderStyle/Navigation/Navigation";


export default function HeaderIndex(){
  const loginMatch = useMatch('/login');
  const registerMatch = useMatch('/register');
  if(loginMatch !== null || registerMatch !== null) return null;
  return(
    <Container>
      <Header />
      <Navigation />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
`;
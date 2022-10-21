import { useRouter } from "next/router";
import styled from "styled-components";
import Header from "./header/header";
import Navigation from "./navigation/navigation";



export default function HeaderIndex(){
  const router = useRouter();
  // if(router === '') return null;

  return(
    <Container>
      <Header/>
      <Navigation />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
`;
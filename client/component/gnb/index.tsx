import { useRouter } from "next/router";
import styled from "styled-components";
import Header2 from "./header/haeder2";
import Header from "./header/header";
import Navigation from "./navigation/navigation";



export default function HeaderIndex(){
  const router = useRouter();
  // if(router === '') return null;

  return(
    // <Container>
      <Header2/>
      /* <Navigation /> */
    // </Container>
  )
}

const Container = styled.div`
  width: 100%;
  background-color: #363944;
`;
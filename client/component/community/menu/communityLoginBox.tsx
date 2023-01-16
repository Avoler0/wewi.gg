import styled from "styled-components"
import CommunityNonLogin from "./loginBox/nonLogin";


export default function CommunityLoginBox(){

  return(
    <LoginBox>
      <CommunityNonLogin />
    </LoginBox>
  )
}

const LoginBox = styled.div`
  display: table;
  width: 100%;
  table-layout: fixed;
`;

import styled from "styled-components"



export default function ProGamer(){

  return (
    <Spectate>프로게이머 관전하기</Spectate>
  )
}

const Spectate = styled.article`
  width: ${props => props.theme.windowSize.pc};
  margin: 0 auto;
  height: 50vh;

  background-color: rgb(3, 30, 65);
`;
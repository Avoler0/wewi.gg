import styled from "styled-components"
import ProCard from "./card/card";



export default function ProGamer(){
  const pro_gamer = ["hide on bush","쭌 베","T1 Roach","baut12"]
  return (
    <Spectate>
      <List>
        {pro_gamer.map((nick:string)=>{
          return <ProCard key={nick} nickName={nick} />
        })}
      </List>
      
    </Spectate>
  )
}

const Spectate = styled.article`
  width: ${props => props.theme.windowSize.pc};
  margin: 0 auto;
  height: 50vh;

  background-color: rgb(27, 52, 71);
`;

const List = styled.div`
`;